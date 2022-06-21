const colors={}
colors.base = {
  green: "#538887",
  darkgreen: "#538887",
  white: "#fff",
  legend1:"#E5E5E5",
  legend2:"#36648B",
  legend3:"#5CACEE",
  legend4:"#63B8FF",
  legend5:"#FFD700",
  legend6:"#FF0000",
  legend7:"#8B0000",
  current:"#FFA500",
};

colors.connectivity = {
  'Très faible':"#440154",
  'Faible':"#3a528b",
  'Moyenne':"#20908d",
  'Forte':"#5dc962",
  'Très forte':"#fde725",
};


colors.suitability = {
  'Très faible':"#f6eff7",
  'Faible':"#dff0de",
  'Moyenne':"#bdd5d3",
  'Forte':"#679d9a",
  'Très forte':"#2e483e",
};


colors.conversion = {
  'Très faible':"#333333",
  'Faible':"#555555",
  'Moyenne':"#885555",
  'Forte':"#aa5555",
  'Très forte':"#ff0000",
};


colors.landcover = {"obj":[
  {
    values: [100],
    name:'Agriculture',
    color:"#FEED86"
  },
  {
    values: [400],
    name:'Zone urbaine',
    color:"#7030A0"
  },
  {
    values: [410],
    name:'Route',
    color:"#000000"
  },
  {
    values: [511,512,513],
    name:'Forêts caduques',
    color:"#7AD151"
  },
  {
    values: [521,522,523],
    name:'Forêts mixtes',
    color:"#BAC42C"
  },
  {
    values: [531,532,533],
    name:'Forêts de conifères',
    color:"#217B2D"
  },
  {
    values: [700],
    name:'Eau',
    color:"#B7DEE8"
  },
  {
    values: [800],
    name:'Zone humide ouverte',
    color:"#574115"
  },
  {
    values: [810],
    name:'Zone humide boisée',
    color:"#CC9933"
  },
]};




export default colors;