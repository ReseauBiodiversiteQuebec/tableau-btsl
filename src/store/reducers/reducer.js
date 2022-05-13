import { SETSEARCHSTATUS, SETENVELOPS, SETCOGURI } from "./types";
import { colors } from "../../styles";


let dmin=0.00001
let dmax=80
let legend_colors=colors.landcover
let legend_title='Catégorie'

const initialState = {
  features: [],
  fetching: false,
  cog_uri: "https://object-arbutus.cloud.computecanada.ca/bq-io/io/btsl-connectivity/NC_NC-LandCover-it22-ts2010.tif",
  current_layer: "LandCover",
  dmin: 0.001,
  dmax: 80,
  legend_colors: colors.landcover,
  legend_title:'Catégorie'
};



const mapReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SETSEARCHSTATUS:
      return {
        ...state,
        fetching: payload.fetching,
      };
    case SETENVELOPS:
      return {
        ...state,
        features: payload.features,
        fetching: payload.fetching,
        summary: payload.summary,
      };
    case SETCOGURI:
      return {
        ...state,
        cog_uri: payload.cog_uri, 
        current_layer: payload.current_layer,
        dmin: payload.dmin,
        dmax: payload.dmax,
        legend_colors: payload.legend_colors,
        legend_title: payload.legend_title,
      };
    default:
      return state;
  }
};

export default mapReducer;

/**
 *
 * @param {*} status
 * @returns
 */
export const updateFetchingStatus = (status) => async (dispatch) => {
  dispatch({ type: SETSEARCHSTATUS, payload: { fetching: status } });
};

/**
 *
 * @param {*} status
 * @returns
 */
export const updateCOGURI = (scenario_landuse,scenario_climate,layer,species,year) => async (dispatch) => {
  let uri=""
  if(layer==='curmap'){
    uri = "https://object-arbutus.cloud.computecanada.ca/bq-io/io/btsl-connectivity/"+scenario_landuse+"_"+scenario_climate+'-'+layer+'-'+species+'-it22-ts'+(parseInt(year)+2010)+".tif"
    dmin=0.000025
    dmax=0.001
    legend_colors=colors.connectivity
    legend_title='Connectivité'
  }else if(layer==='HabitatSuitability'){
    uri = "https://object-arbutus.cloud.computecanada.ca/bq-io/io/btsl-connectivity/"+scenario_landuse+"_"+scenario_climate+'-'+layer+'-'+species+'-it22-ts'+(parseInt(year)+2010)+".tif"
    dmin=0.00001
    dmax=80
    legend_colors=colors.suitability
    legend_title='Convenance'
  }else if(layer==='LandCover'){
    uri = "https://object-arbutus.cloud.computecanada.ca/bq-io/io/btsl-connectivity/"+scenario_landuse+"_"+scenario_climate+'-'+layer+'-it22-ts'+(parseInt(year)+2010)+".tif"
    dmin=0
    dmax=1
    legend_colors=colors.landcover
    legend_title='Catégorie'
  }else if(layer==='ConversionProbability'){
    uri = "https://object-arbutus.cloud.computecanada.ca/bq-io/io/btsl-connectivity/Probability_of_conversion_phase3.tif"
    dmin=0.00001
    dmax=1
    legend_colors=colors.conversion
    legend_title='Probabilité de conversion'
  }else if(layer==='Zonation2'){
    uri = "https://object-arbutus.cloud.computecanada.ca/bq-io/io/btsl-connectivity/Zonation_phase2.tif"
    dmin=0.00001
    dmax=1
    legend_colors=colors.connectivity
    legend_title='Priorité'
  }else if(layer==='Zonation3'){
    uri = "https://object-arbutus.cloud.computecanada.ca/bq-io/io/btsl-connectivity/Zonation_phase3.tif"
    dmin=0.00001
    dmax=1
    legend_colors=colors.connectivity
    legend_title='Priorité'
  }else if(layer==='Linkages'){
    uri = "https://object-arbutus.cloud.computecanada.ca/bq-io/io/btsl-connectivity/Linkages_phase2.tif"
    dmin=0.00001
    dmax=4.2
    legend_colors=colors.connectivity
    legend_title='Priorité'
  }else if(layer==='Linkages_buffer'){
    uri = "https://object-arbutus.cloud.computecanada.ca/bq-io/io/btsl-connectivity/Linkages_with_buffer.tif"
    dmin=0.00001
    dmax=4.2
    legend_colors=colors.connectivity
    legend_title='Priorité'
  }
  dispatch({ type: SETCOGURI, payload: { cog_uri: uri , current_layer: layer, dmin: dmin, dmax: dmax, legend_colors: legend_colors, legend_title:legend_title} });
};
