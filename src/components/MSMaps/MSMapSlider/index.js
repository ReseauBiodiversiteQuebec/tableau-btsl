import React from "react";
import Slider from "@mui/material/Slider";
import OpacityIcon from "@mui/icons-material/Opacity";
import { buildLocation } from "utils/helper";
import { SliderContainer } from "components/Slider/sliderstyle";

export default function MSMapSlider(props) {
  const {
    absolute,
    location = "",
    top = 0,
    bottom = 0,
    left = 0,
    right = 0,
    width = 200,
    value,
    notifyChange = (newValue) => newValue,
  } = props;

  const opacityChange = (event, newValue) => {
    notifyChange(newValue);
  };

  let style = buildLocation(location, top, right, left, bottom);
  style = absolute
    ? {
        ...style,
        position: "absolute",
        zIndex: 1000,
        width: `${width}px`,
      }
    : style;
  return (
    <div style={style}>
      <SliderContainer>
        <OpacityIcon />
        <Slider
          aria-label="Opacity"
          value={value ?? 100}
          valueLabelDisplay="auto"
          onChangeCommitted={opacityChange}
          sx={{ color: "#333333" }}
        />
      </SliderContainer>
    </div>
  );
}
