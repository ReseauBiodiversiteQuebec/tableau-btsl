import React from "react";
import { RightContent } from "../../appStyles.js";
import MSMaps from "../MSMaps";
import { useSelector } from "react-redux";
import Legend from "../Legend";
import { colors } from "../../styles";

function RightContentGroup(props) {
  const { width, height } = props;
  const realWith = width > 768 ? width - 350 : width;
  const generalState = useSelector((state) => state.reducerState);
  let legend_items=[]
  for (const [key, value] of Object.entries(generalState.legend_colors)){
    legend_items.push({text:key, color: value})
  }

  return (
    <RightContent style={{ width: `${realWith}px` }}>
      {width !== 0 && height !== 0 && <MSMaps />}
      <Legend
        absolute={true}
        location={"bottom-right"}
        bottom={20}
        right={10}
        items={legend_items}
        colorClass={"white-background"}
        title={generalState.legend_title}
      />
    </RightContent>
  );
}

export default RightContentGroup;
