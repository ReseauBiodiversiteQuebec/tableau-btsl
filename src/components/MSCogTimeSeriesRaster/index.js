import React, { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import { isNaN } from "lodash";
import parseGeoraster from "georaster";
import GeoRasterLayer from "georaster-layer-for-leaflet";
import chroma from "chroma-js";

//.domain([0.00004, 0.001]);

export default function GeoRaster({
  url,
  current_layer,
  dmin,
  dmax,
  cols,
  opacity,
}) {
  const map = useMap();
  //const { map, layerContainer } = useLeaflet();
  const layerContainer = map.getContainer();
  const layerRef = React.useRef(null);
  const [raster, setRaster] = useState();
  let scale=[]
  let color_palette={}

  useEffect(() => {
    parseGeoraster(url).then((georaster) => {
      setRaster(georaster);
    });
    return () => {};
  }, [url, map]);

  if(current_layer=='LandCover'){
    cols.obj.forEach(c=>{
      c.values.forEach(v=>{
        color_palette[v]=c.color
      })      
    })
  }
  useEffect(() => {
    if (raster) {
      if(current_layer!=='LandCover'){
        scale = chroma.scale(Object.values(cols)).domain([dmin, dmax]);
      }
      let layerId = Math.random();
      let layer = new GeoRasterLayer({
        attribution: "Planet",
        type: "coglayer",
        layer_id: layerId,
        georaster: raster,
        zIndex: 499,
        opacity: 0.9,
        debugLevel: 0,
        resampleMethod: "nearest",
        interleave: true,
        resolution: 128,
        pixelValuesToColorFn: (values) =>{
          if(current_layer==='LandCover'){
            if(values[0]>0){
              return color_palette[values[0]]
            }
          }else{
            if((values[0] === 0) | isNaN(values[0]) | (values[0] === Infinity) | (values[0] < -9999) |(values[0] < 0)) {
              return "#ffffff00"
            }else{
              return scale(values[0]).hex()
            }
          }
        }
      });
      layer.on("load", (event) => {
        setTimeout(() => {
          map.eachLayer(function (layer) {
            if (
              layer.options.type === "coglayer" &&
              layer.options.layer_id !== layerId
            ) {
              map.removeLayer(layer);
            }
          });
        }, 200);
      });
      const container = map;
      layerRef.current = layer;
      container.addLayer(layer);
    }
    return () => {};
  }, [raster, map, opacity]);

  return null;
}
