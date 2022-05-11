import React, { useEffect, useState } from "react";
import {
  SidebarFormContainer,
  Spiner,
  SelectorTitle,
  WrapperContainer,
} from "./sidebarformstyles";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import LinearProgress from "@mui/material/LinearProgress";
import CustomSlider from "../../Slider";
import ImageFetcher from "../../SlideShow/ImageFetcher";

import { useSelector, useDispatch } from "react-redux";
import { updateCOGURI } from "../../../store/reducers/reducer";

import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import GroupedSelect from "../../CustomSelector/GroupingSelector";
import Selector from "../../CustomSelector/Selector";
import {
  createSelectorModel,
  createSliderList,
  groupingAndSortList,
} from "../../../utils/helper";

function SidebarForms(props) {
  const generalState = useSelector((state) => state.reducerState);
  const [showRPC, setShowRPC] = React.useState(true)
  const [showSpecies, setShowSpecies] = React.useState(true)
  const dispatch = useDispatch();

  let [state, setState] = React.useState({
    in_year: 0,
    in_species: "BLBR",
    in_scenario_climate: "NC",
    in_scenario_landuse: "NC",
    in_layer: "HabitatSuitability",
  });

  const [play, setPlay] = useState(false);
  const [intervalID, setIntervalID] = useState(0);

  const layers = [
    { option: "HabitatSuitability", value: "Convenance de l'habitat" },
    { option: "ConversionProbability", value: "Probabilité de conversion en zone urbaine" },
    { option: "curmap", value: "Connectivité" },
    { option: "Zonation2", value: "Priorisation pour la conservation aujourd'hui" },
    { option: "Zonation3", value: "Priorisation pour la conservation 2010-2110" },
    { option: "Linkages", value: "Liens prioritaires" },
    { option: "Linkages_buffer", value: "Liens prioritaires dans la zone étendue" },
  ];

  const scenarios_climate = [
    { option: "NC", value: "Historique" },
    { option: "85", value: "RCP85" },
  ];

  const scenarios_landuse = [
    { option: "NC", value: "Aucun changement" },
    { option: "BAU", value: "Laisser-aller" },
  ];

  const years = [
    { value: 0 },
    { value: 20 },
    { value: 40 },
    { value: 60 },
    { value: 80 },
    { value: 100 },
  ];

  const species = [
      {
        option: "BLBR",
        value: "Blarina brevicauda",
        vernacular_fr: "Grand musaraigne",
      },
      { option: "MAAM", 
        value: "Martes americana", 
        vernacular_fr: "Martre d'Amérique" },
      {
        option: "PLCI",
        value: "Plethodon cinereus",
        vernacular_fr: "Salamandre rayée",
      },
      {
        option: "RANA",
        value: "Lithobates sylvaticus",
        vernacular_fr: "Grenouille des bois",
      },
      {
        option: "URAM",
        value: "Ursus americanus",
        vernacular_fr: "Ours noir",
      }  
  ];

  /**
   *
   * @param {*} selectObj
   */
  const selectFormValuesChanged = (selectObj) => {
    let newState = { ...state };
    console.log(selectObj);
    if (selectObj.selectorId === "species") {
      newState.in_species = selectObj.value;
    } else if (selectObj.selectorId === "years") {
      newState.in_year = selectObj.value;
    } else if (selectObj.selectorId === "scenarios_climate") {
      newState.in_scenario_climate = selectObj.value;
    } else if (selectObj.selectorId === "scenarios_landuse") {
      newState.in_scenario_landuse = selectObj.value;
    } else if (selectObj.selectorId === "layers") {
      newState.in_layer = selectObj.value;
      if(selectObj.value === 'HabitatSuitability' | selectObj.value ==='curmap'){
        setShowSpecies(true)
        setShowRPC(true)
      }else{
        setShowSpecies(false)
        setShowRPC(false) 
      }

    } else if (selectObj.selectorId === "species") {
      newState.in_species = selectObj.value;
    }
    setState(newState);
    dispatch(
      updateCOGURI(
        newState.in_scenario_landuse,
        newState.in_scenario_climate,
        newState.in_layer,
        newState.in_species,
        newState.in_year
        )
      )
  };

  let playTimeSeries = () => {
    if (!play) {
      let newState = state;
      setIntervalID(
        setInterval(() => {
          let yr = newState.in_year;
          let new_yr = 0;
          if (yr === 100) {
            new_yr = 0;
          } else {
            new_yr = yr + 20;
          }
          newState = {
            ...state,
            in_year: new_yr,
          };
          setState(newState);
          dispatch(
            updateCOGURI(
              newState.in_scenario_landuse,
              newState.in_scenario_climate,
              newState.in_layer,
              newState.in_species,
              newState.in_year
            )
          );
        }, 1500)
      );
    } else {
      clearInterval(intervalID);
    }
    setPlay(!play);
    console.log(play);
  };

  return (
    <SidebarFormContainer>
      <WrapperContainer>
        <SelectorTitle>Couche</SelectorTitle>
        <Selector
          className="selector"
          selectorList={layers}
          selectorId={"layers"}
          onValueChange={selectFormValuesChanged}
          value={state.in_layer}
        />
      </WrapperContainer>
      { showSpecies ? 
      <WrapperContainer>
        <SelectorTitle>Espèce</SelectorTitle>
        <GroupedSelect
          className="selector"
          elementList={species}
          selectorId={"species"}
          onValueChange={selectFormValuesChanged}
          value={state.in_species}
        />
      </WrapperContainer>
      : null }
      { showRPC ? <WrapperContainer>
        <SelectorTitle>Scénario climatique</SelectorTitle>
        <Selector
          className="selector"
          selectorList={scenarios_climate}
          selectorId={"scenarios_climate"}
          onValueChange={selectFormValuesChanged}
          value={state.in_scenario_climate}
        />
      </WrapperContainer>
          : null }
      { showRPC ? 
       <WrapperContainer>
        <SelectorTitle>Changement d'utilisation des terres</SelectorTitle>
        <Selector
          className="selector"
          selectorList={scenarios_landuse}
          selectorId={"scenarios_landuse"}
          onValueChange={selectFormValuesChanged}
          value={state.in_scenario_landuse}
        />
      </WrapperContainer>
      : null }
       { showRPC ? 
      <Box
        sx={{
          width: "80%",
          "margin-top": "30px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <CustomSlider
              inline
              selectorId={"years"}
              notifyChange={selectFormValuesChanged}
              values={years}
              value={state.in_year}
            />
          </Grid>
          <Grid item xs={1}>
            <IconButton
              variant="contained"
              onClick={playTimeSeries}
              size="large"
              sx={{
                height: "30px",
              }}
            >
              {!play && <PlayCircleIcon size={"large"} />}
              {play && <StopCircleIcon size={"large"} />}
            </IconButton>
          </Grid>
        </Grid>
      </Box>
      : null }
    </SidebarFormContainer>
  );
}

export default SidebarForms;
