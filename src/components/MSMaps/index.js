import React from "react";
import "leaflet/dist/leaflet.css";
import Control from 'react-leaflet-custom-control'
import { MapContainer, TileLayer, LayersControl} from "react-leaflet";
import MSCogTimeSeriesRaster from "../MSCogTimeSeriesRaster";
import { useSelector } from "react-redux";
import Slider from "@mui/material/Slider";
import OpacityIcon from '@mui/icons-material/Opacity';
import CustomSlider from "../Slider";
import { SliderContainer } from "../Slider/sliderstyle";

const MAP_STYLES = {
  position: "relative",
  width: "100%",
  height: "100vh",
  padding: "0",
};



export default function App() {
  const generalState = useSelector((state) => state.reducerState);
  const [opacity, setOpacity] = React.useState(100);

  const opacityChange = (event, newValue) => {
    setOpacity(newValue);
  }
  return (
    <>
      <MapContainer style={MAP_STYLES} center={[46.4, -72.7]} zoom={8} maxZoom={25}>
      <Control position="bottomleft" style={{width:'150px',border:'0px'}}>
      <SliderContainer>
        <OpacityIcon />
        <Slider aria-label="Opacity" step={null} track={false} value={opacity} valueLabelDisplay="auto" selectorId={"opacity"} onChange={opacityChange} sx={{color:'#538887'}} />
      </SliderContainer>
      </Control>
      <LayersControl position="topright" style={{width:'250px'}}>
      <LayersControl.BaseLayer checked name="Noir et blanc">
        <TileLayer
         zIndex={4}
         style={{ zIndex: 4 }}
         url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}{r}.png"
         attribution='&copy; <a href="http://osm.org/copyright">Stamen</a> contributors'
        />
        </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="Satellite">
        <TileLayer
          zIndex={4}
          style={{ zIndex: 4 }}
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        />
        </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="OpenStreetMap">
        <TileLayer
          zIndex={4}
          style={{ zIndex: 4 }}
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        </LayersControl.BaseLayer>
        </LayersControl>
        <LayersControl.Overlay name="Couche d'analyse">
          <MSCogTimeSeriesRaster
                      url={generalState.cog_uri}
                      current_layer={generalState.current_layer}
                      dmin={generalState.dmin}
                      dmax={generalState.dmax}
                      cols={generalState.legend_colors}
                    />
        </LayersControl.Overlay>
      </MapContainer>
    </>
  );
}
