import React, { useState, useEffect, useRef } from "react";
import _ from "underscore";
import { Marker, Tooltip, useMap } from "react-leaflet";
import L from "leaflet";

/**
 *
 * @param props
 */
function TileTimeSeries(props) {
  const {
    legend,
    setColormap,
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
          255,
        ]
      : null;
  }

  function createColorMap(cols) {
    if (cols.obj === undefined) {
      let i = 1;
      let cmap = [];
      cmap.push([
        [-99999, 0.999],
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
      return cmap;
    } else {
      return {};
    }
  }

  useEffect(() => {
    if (url !== "" && typeof url !== "undefined") {
      const tiler = `https://tiler.biodiversite-quebec.ca/cog/tiles/{z}/{x}/{y}`;
      const obj = {
        colormap_name: JSON.stringify(cols),
        //expression
      };
      const rescale = `${dmin},${dmax}`;
      const params = new URLSearchParams(obj).toString();
      //const colormap = {};
      const dd = dmax - dmin;

      const tile_ref = `${tiler}?url=${url}&unscale=True&rescale=${rescale}&return_mask=True&colormap=${encodeURIComponent(
        JSON.stringify(createColorMap(cols))
      )}`;

      let layerId = Math.random();
      const layer = L.tileLayer(tile_ref, {
        attribution: "connect",
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
  }, [url]);

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
