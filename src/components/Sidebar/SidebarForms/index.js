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
import { updateCOGURI, updatePA } from "../../../store/reducers/reducer";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import GroupedSelect from "../../CustomSelector/GroupingSelector";
import Selector from "../../CustomSelector/Selector";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Switch, { SwitchProps } from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import {
  createSelectorModel,
  createSliderList,
  groupingAndSortList,
} from "../../../utils/helper";
import { colors } from "../../../styles";

function SidebarForms(props) {
  const generalState = useSelector((state) => state.reducerState);
  const [showRPC, setShowRPC] = React.useState(true);
  const [showSpecies, setShowSpecies] = React.useState(false);
  const [PA, setPA] = React.useState(false);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  let [state, setState] = React.useState({
    in_year: 0,
    in_species: "BLBR",
    in_scenario_climate: "NC",
    in_scenario_landuse: "NC",
    in_layer: "LandCover",
    PA: false,
  });

  const [play, setPlay] = useState(false);
  const [intervalID, setIntervalID] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const layers = [
    { option: "LandCover", value: "Couverture du sol" },
    { option: "HabitatSuitability", value: "Convenance de l'habitat" },
    {
      option: "ConversionProbability",
      value: "Probabilité de conversion en zone urbaine",
    },
    { option: "curmap", value: "Connectivité" },
    {
      option: "Zonation2",
      value: "Priorisation pour la conservation aujourd'hui",
    },
    {
      option: "Zonation3",
      value: "Priorisation pour la conservation 2010-2110",
    },
    { option: "Linkages", value: "Liens prioritaires" },
    {
      option: "Linkages_buffer",
      value: "Liens prioritaires issus de l'analyse étendue",
    },
  ];

  const scenarios_climate = [
    { option: "NC", value: "Historique" },
    {
      option: "85",
      value: "Fortes émissions et changements climatiques importants (RCP85)",
    },
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
    {
      option: "MAAM",
      value: "Martes americana",
      vernacular_fr: "Martre d'Amérique",
    },
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
    },
  ];

  const PASwitch = styled(Switch)(({ theme }) => ({
    padding: 8,
    "& .MuiSwitch-track": {
      backgroundColor: colors.base.darkgreen + " !important",
      borderRadius: 22 / 2,
      "&:before, &:after": {
        content: '""',
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        width: 16,
        height: 16,
      },
      "&:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path  fill="white" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
        left: 12,
        color: colors.base.darkgreen,
      },
      "&:after": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="#ececec" d="M19,13H5V11H19V13Z" /></svg>')`,
        right: 12,
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "none",
      width: 16,
      height: 16,
      margin: 2,
      color: colors.base.darkgreen,
    },
  }));

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
      if (play) {
        playTimeSeries();
      }
      newState.in_layer = selectObj.value;
      if (
        (selectObj.value === "HabitatSuitability") |
        (selectObj.value === "curmap")
      ) {
        setShowSpecies(true);
        setShowRPC(true);
      } else if (selectObj.value === "LandCover") {
        setShowSpecies(false);
        setShowRPC(true);
      } else {
        setShowSpecies(false);
        setShowRPC(false);
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
    );
  };

  /**
   *
   * @param {*} event
   */
  const PAChange = (event) => {
    event.persist();
    setPA(event.target.checked);
    dispatch(updatePA(event.target.checked));
  };

  let playTimeSeries = (f) => {
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
      setPlay(true);
    } else {
      clearInterval(intervalID);
      setPlay(false);
    }
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
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{
          color: colors.base.darkgreen,
          border: "1px solid " + colors.base.darkgreen,
        }}
      >
        Description
      </Button>
      <Dialog fullWidth={true} maxWidth="md" open={open} onClose={handleClose}>
        <DialogContentText sx={{ padding: "40px" }}>
          {generalState.layer_description}
        </DialogContentText>
        <DialogActions>
          <Button onClick={handleClose}>Fermer</Button>
        </DialogActions>
      </Dialog>
      {showSpecies ? (
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
      ) : null}
      {showRPC ? (
        <WrapperContainer>
          <SelectorTitle>Scénario climatique</SelectorTitle>
          <Selector
            className="selector"
            selectorList={scenarios_climate}
            selectorId={"scenarios_climate"}
            onValueChange={selectFormValuesChanged}
            value={state.in_scenario_climate}
          />
        </WrapperContainer>
      ) : null}
      {showRPC ? (
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
      ) : null}
      {showRPC ? (
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
                  color: colors.base.darkgreen,
                  paddingLeft: "0px",
                }}
              >
                {!play && <PlayCircleIcon size={"large"} />}
                {play && <StopCircleIcon size={"large"} />}
              </IconButton>
            </Grid>
          </Grid>
          <Grid>
            <Grid item xs={1} style={{ marginTop: "30px" }}>
              <FormControlLabel
                label={
                  <Typography style={{ fontSize: "0.9em" }}>
                    Afficher les aires protégées
                  </Typography>
                }
                labelPlacement="start"
                onChange={PAChange}
                control={<PASwitch />}
                sx={{
                  color: colors.base.darkgreen,
                  fontSize: "0.8rem !important",
                }}
                checked={PA}
              />
            </Grid>
          </Grid>
        </Box>
      ) : null}
    </SidebarFormContainer>
  );
}

export default SidebarForms;
