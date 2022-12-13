import { SETSEARCHSTATUS, SETENVELOPS, SETCOGURI } from "./types";
import { colors } from "../../styles";


let dmin=0.00001
let dmax=80
let legend_colors=colors.landcover
let legend_title='Catégorie'
let layer_description="Ces couches représentent la couverture du sol actuelle ou simulée dans les basse-terres du Saint-Laurent pour chacun des scénarios d'utilisation des terres et de changement climatique, et pour chaque année entre 2010 et 2110."

const initialState = {
  features: [],
  fetching: false,
  cog_uri: "https://object-arbutus.cloud.computecanada.ca/bq-io/io/btsl-connectivity/NC_NC-LandCover-it22-ts2010.tif",
  current_layer: "LandCover",
  dmin: 0.001,
  dmax: 80,
  legend_colors: colors.landcover,
  legend_title:'Catégorie', 
  layer_description: "Ces couches représentent l'occupation du sol actuelle ou future dans les basse-terres du Saint-Laurent pour chacun des scénarios de changements d'occupation du sol et de changements climatiques et ce, de 2010 à 2110."
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
        layer_description: payload.layer_description
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
    layer_description="Ces couches représentent la connectivité relative à longue distance de chaque pixel dans les basse-terres du Saint-Laurent pour chacune des 5 espèces cibles, pour chacun des scénarios d'utilisation des terres et de changement climatique, et pour chaque année entre 2010 et 2110."
  }else if(layer==='HabitatSuitability'){
    uri = "https://object-arbutus.cloud.computecanada.ca/bq-io/io/btsl-connectivity/"+scenario_landuse+"_"+scenario_climate+'-'+layer+'-'+species+'-it22-ts'+(parseInt(year)+2010)+".tif"
    dmin=0.00001
    dmax=80
    legend_colors=colors.suitability
    legend_title='Qualité de l\'habitat'
    layer_description="Ces couches représentent la qualité de l’habitat de chaque pixel dans les basse-terres du Saint-Laurent pour chacune des cinq espèces cibles, pour chacun des scénarios de changement d'occupation du sol et de changements climatiques, et pour chaque année entre 2010 et 2110."
  }else if(layer==='LandCover'){
    uri = "https://object-arbutus.cloud.computecanada.ca/bq-io/io/btsl-connectivity/"+scenario_landuse+"_"+scenario_climate+'-'+layer+'-it22-ts'+(parseInt(year)+2010)+".tif"
    dmin=0
    dmax=1
    legend_colors=colors.landcover
    legend_title='Catégorie'
    layer_description="Ces couches représentent l’occupation du sol actuelle ou future dans les basse-terres du Saint-Laurent pour chacun des scénarios de changements d’occupation du sol et de changements climatiques et ce, de 2010 à 2110."
  }else if(layer==='ConversionProbability'){
    uri = "https://object-arbutus.cloud.computecanada.ca/bq-io/io/btsl-connectivity/Probability_of_conversion_phase3.tif"
    dmin=0.00001
    dmax=1
    legend_colors=colors.conversion
    legend_title='Probabilité'
   layer_description="Cette couche représente la probabilité que chaque pixel de milieu naturel soit converti en milieu agricole ou urbain selon le scénario statu quo qui suppose que les tendances historiques vont continuer dans le futur au même rythme que par le passé."
  }else if(layer==='Zonation2'){
    uri = "https://object-arbutus.cloud.computecanada.ca/bq-io/io/btsl-connectivity/Zonation_phase2.tif"
    dmin=0.00001
    dmax=1
    legend_colors=colors.connectivity
    legend_title='Priorité'
    layer_description="Ces couches représentent la connectivité relative à longue distance de chaque pixel dans les basse-terres du Saint-Laurent pour chacune des 5 espèces cibles, pour chacun des scénarios des scénarios de changement d'occupation du sol et de changements climatiques, et pour chaque année entre 2010 et 2110."
  }else if(layer==='Zonation3'){
    uri = "https://object-arbutus.cloud.computecanada.ca/bq-io/io/btsl-connectivity/Zonation_phase3.tif"
    dmin=0.00001
    dmax=1
    legend_colors=colors.connectivity
    legend_title='Priorité'
    layer_description='Cette couche indique la priorité accordée à chaque pixel de milieu naturel dans les basses-terres du Saint-Laurent en fonction de la qualité de l’habitat dans le pixel pour chaque espèce, de la connectivité écologique à longue distance, du changement possible de convenance dans le futur en fonction des changements climatiques et de l’urbanisation, ainsi que du changement possible de connectivité. Une valeur près de 1 indique une très forte priorité alors qu’une valeur de 0 indique une priorité faible. Résolution: 90 mètres.'
  }else if(layer==='Linkages'){
    uri = "https://object-arbutus.cloud.computecanada.ca/bq-io/io/btsl-connectivity/Linkages_phase2.tif"
    dmin=0.0001
    dmax=4.28
    legend_colors=colors.connectivity
    legend_title='Priorité'
    layer_description="Cette couche présente un scénario de corridors jugés prioritaires entre milieux naturels protégés dans les basses-terres du Saint-Laurent pour les cinq espèces cibles. Une valeur près de 0 indique une faible priorité, alors qu'une valeur près de 5 indique un corridor prioritaire pour les cinq espèces cibles. Résolution: 30 mètres."
  }else if(layer==='Linkages_buffer'){
    uri = "https://object-arbutus.cloud.computecanada.ca/bq-io/io/btsl-connectivity/Linkages_with_buffer.tif"
    dmin=-0.0001
    dmax=4.28
    legend_colors=colors.connectivity
    legend_title='Priorité'
    layer_description="Cette couche présente un second scénario de corridors jugés prioritaires. Cette fois-ci, le scénario inclut les milieux naturels protégés situés dans les basses-terres du Saint-Laurent ainsi que ceux situés à proximité des basses-terres. Une valeur près de 0 indique une faible priorité, alors qu'une valeur près de 5 indique un corridor prioritaire pour les cinq espèces cibles. Résolution: 30 mètres."
  }
  dispatch({ type: SETCOGURI, payload: { cog_uri: uri , current_layer: layer, dmin: dmin, dmax: dmax, legend_colors: legend_colors, legend_title:legend_title, layer_description:layer_description} });
};
