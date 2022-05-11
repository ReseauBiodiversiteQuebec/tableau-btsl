import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, LayersControl } from "react-leaflet";
import MSCogTimeSeriesRaster from "../MSCogTimeSeriesRaster";
import { useSelector } from "react-redux";
import Slider from "@mui/material/Slider";
import OpacityIcon from "@mui/icons-material/Opacity";
import CustomSlider from "../Slider";
import { SliderContainer } from "../Slider/sliderstyle";
import MSMapSlider from "./MSMapSlider";

const MAP_STYLES = {
  position: "relative",
  width: "100%",
  height: "100vh",
  padding: "0",
};

export default function App() {
  const generalState = useSelector((state) => state.reducerState);
  const [opacity, setOpacity] = React.useState(100);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        background: "red",
      }}
    >
      <MapContainer
        style={MAP_STYLES}
        center={[46.4, -72.7]}
        zoom={8}
        maxZoom={25}
      >
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Carte noir et blanc">
            <TileLayer
              zIndex={4}
              style={{ zIndex: 4 }}
              url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="http://osm.org/copyright">Stamen</a> contributors'
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Carte satellite">
            <TileLayer
              zIndex={4}
              style={{ zIndex: 4 }}
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Carte OSM">
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
            opacity={opacity}
          />
        </LayersControl.Overlay>
      </MapContainer>
      <MSMapSlider
        absolute={true}
        location={"bottom-left"}
        bottom={40}
        left={10}
        width={200}
        notifyChange={(newValue) => setOpacity(newValue)}
        value={opacity}
      />
    </div>
  );
}
