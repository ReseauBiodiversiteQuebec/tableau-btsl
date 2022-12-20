import React, { useState, useEffect, useRef } from "react";
import _ from "underscore";
import { Marker, Tooltip, useMap } from "react-leaflet";
import L from "leaflet";
import chroma from "chroma-js";
//import * as pta from "./protected_areas_ll.json";

/**
 *
 * @param props
 */
function TileTimeSeries(props) {
  const {
    legend,
    setColormap,
    current_layer,
    colormap,
    colormapList,
    dmin,
    dmax,
    url,
    cols,
    opacity,
  } = props;

  const [tiles, setTiles] = useState(<></>);
  const [basemap, setBasemap] = useState("carto");
  const map = useMap();
  const layerContainer = map.getContainer();
  const layerRef = useRef(null);

  const basemaps = {
    osm: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    carto:
      "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png",
    cartoDark: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    thunderforest:
      "https://{s}.tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png",
    mapbox: `https://api.mapbox.com/styles/v1/glaroc/cl8eqr05i000416umaxkuc4sp/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`,
  };

  function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? [
          parseInt(result[1], 16),
          parseInt(result[2], 16),
          parseInt(result[3], 16),
          Math.round((255 * opacity) / 100),
        ]
      : null;
  }

  function createColorMap(cols) {
    if (cols.obj === undefined) {
      let cmap = {};
      /*let i = 1;
      
      cmap.push([
        [-99999, -10],
        [255, 255, 255, 0],
      ]);
      let l1 = 0;
      const colormap = _.mapObject(cols, (m) => {
        const l = 256 / Object.values(cols).length;
        const v = Math.round(i * l);
        cmap.push([[l1 + 1, v], hexToRgb(m)]);
        l1 = v;
        i++;
      });
      return cmap;*/
      let scale = chroma.scale(Object.values(cols)).domain([0, 255]);
      const colormap = Array(255)
        .fill()
        .map(
          (element, index) =>
            (cmap[index + 1] = hexToRgb(scale(index + 1).hex()))
        );
      return cmap;
    } else {
      let cmap = {};
      const colormap = cols.obj.map((m) => {
        m.values.map((v) => {
          cmap[v] = hexToRgb(m.color);
        });
      });
      return cmap;
    }
  }

  useEffect(() => {
    if (url !== "" && typeof url !== "undefined") {
      const tiler = `https://tiler.biodiversite-quebec.ca/cog/tiles/{z}/{x}/{y}@2x.png`;
      let rescale = "";
      let resampling = "";
      let nodata = "";
      if (current_layer !== "LandCover") {
        rescale = `&rescale=${dmin},${dmax}`;
        resampling = "&resampling=bilinear";
        nodata = "&nodata=0";
      } else {
        resampling = "&resampling=nearest";
      }
      if (
        current_layer === "Zonation2" ||
        current_layer === "Zonation3" ||
        current_layer === "ConversionProbability"
      ) {
        nodata = "";
      }
      const tile_ref = `${tiler}?url=${url}${rescale}${resampling}${nodata}&unscale=True&return_mask=True&colormap=${encodeURIComponent(
        JSON.stringify(createColorMap(cols))
      )}`;

      let layerId = Math.random();
      const layer = L.tileLayer(tile_ref, {
        attribution: "connect",
        zIndex: 499,
        layer_id: layerId,
      });
      const container = map;
      //layerRef.selected = layer;
      container.addLayer(layer);
      layer.on("load", (event) => {
        setTimeout(() => {
          map.eachLayer(function (layer) {
            if (
              layer.options.attribution === "connect" &&
              layer.options.layer_id !== layerId
            ) {
              map.removeLayer(layer);
            }
          });
        }, 200);
      });
      /*if (Object.keys(legend).length !== 0) {
        legend.addTo(map);
      }*/
    }

    return () => {
      if (legend && Object.keys(legend).length !== 0) legend.remove();
    };
  }, [url, opacity]);

  useEffect(() => {
    /*const layer = L.tileLayer(basemaps[basemap], {
      attribution: "Planet",
    });
    const container = map;
    container.addLayer(layer);*/
  }, []);

  return <></>;
}

export default TileTimeSeries;
