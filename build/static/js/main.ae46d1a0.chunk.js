(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,n,t){},113:function(e,n,t){},155:function(e){e.exports={"Groupes d'esp\xe8ces":"Species groups","Explorateur Atlas":"Atlas Explorer","Description app":"Atlas Explorer for Qu\xe9bec biodiversity's data ","Cadre \xe9cologique":"Ecologic zone",Taxon:"Taxon","\xc9chelle":"Scale","Afficher sur la carte":"Show in the map","Jeux de donn\xe9es":"Datasets",Carte:"Map","Nombre d'observations":"Number of Observations","Nombre d'esp\xe8ces":"Number of Species","Premi\xe8re Ann\xe9e":"First Year","Derni\xe8re Ann\xe9e":"Last Year","Groupe(s) d'esp\xe8ces":"Group(s) of Species",Language:"Language",Hexagones:"Hexagones",Regions:"Regions",Observations:"Observations","Esp\xe8ces":"Species",Toutes:"All","Tableau Atlas":"Atlas Dashboard","Esp\xe8ces en vedette":"Species on spotlight"}},156:function(e){e.exports={"Groupes d'esp\xe8ces":" Groupes d'esp\xe8ces","Explorateur Atlas":"Explorateur Atlas","Description app":"Explorateur de l'Atlas des donn\xe9es sur la biodiversit\xe9 du Qu\xe9bec","Cadre \xe9cologique":"Cadre \xe9cologique",Taxon:"Taxon","\xc9chelle":"\xc9chelle","Afficher sur la carte":"Afficher sur la carte","Jeux de donn\xe9es":"Jeux de donn\xe9es",Carte:"Carte","Nombre d'observations":"Nombre d'observations","Nombre d'esp\xe8ces":"Nombre d'esp\xe8ces","Premi\xe8re Ann\xe9e":"Premi\xe8re Ann\xe9e","Derni\xe8re Ann\xe9e":"Derni\xe8re Ann\xe9e","Groupe(s) d'esp\xe8ces":"Groupe(s) d'esp\xe8ces",Language:"Language",Hexagones:"Hexagones",Regions:"R\xe9gions",Observations:"Observations","Esp\xe8ces":"Esp\xe8ces",Toutes:"Toutes","Tableau Atlas":"Tableau Atlas","Esp\xe8ces en vedette":"Esp\xe8ces en vedette"}},180:function(e,n,t){e.exports=t(260)},185:function(e,n,t){},187:function(e,n,t){},189:function(e,n,t){},233:function(e,n){},239:function(e,n){},241:function(e,n){},253:function(e,n,t){},254:function(e,n,t){},260:function(e,n,t){"use strict";t.r(n);var a,r,i,o,l,c,s,u,d,p,b,f,m,g,v=t(0),h=t.n(v),x=t(32),y=t.n(x),E=t(8),O=(t(185),t(16)),j=t(17),w={base:{green:"#538887",darkgreen:"#2e483e",white:"#fff",legend1:"#E5E5E5",legend2:"#36648B",legend3:"#5CACEE",legend4:"#63B8FF",legend5:"#FFD700",legend6:"#FF0000",legend7:"#8B0000",current:"#FFA500"},connectivity:{"Tr\xe8s faible":"#440154",Faible:"#3a528b",Moyenne:"#20908d",Forte:"#5dc962","Tr\xe8s forte":"#fde725"},suitability:{"Tr\xe8s faible":"#f6eff7",Faible:"#dff0de",Moyenne:"#bdd5d3",Forte:"#679d9a","Tr\xe8s forte":"#538887"}},_=w,C=j.b.div(a||(a=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),k=_,M=Object(j.a)(r||(r=Object(O.a)(['\n  body { \n    & [class*="MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper"]::-webkit-scrollbar{\n     /*  display: none; */\n     overflow: scroll;\n     width: 5px\n    \n    }\n\n    & [class*="MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper"]::-webkit-scrollbar-thumb{\n     \n      background-color: darkgrey;\n      border-radius: 5px;\n    }\n\n    & [class*="MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper"]{\n      //-ms-overflow-style: none; /* for Internet Explorer, Edge */\n      //scrollbar-width: none; /* for Firefox */\n      //overflow-y: scroll; \n      & [class*="MuiButtonBase-root-MuiMenuItem-root"] {\n        padding: 2px 16px\n      }\n    } \n\n  }\n  \n  [class*="selector"] {\n    width: 100%;\n    [class*="MuiOutlinedInput-input"] {\n    padding: 8px 16px;\n  }\n  }\n\n  ']))),A=Object(j.b)(C)(i||(i=Object(O.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 100vh;\n  padding: 0;\n  overflow: hidden;\n  ::-webkit-scrollbar {\n    width: 0; /* Remove scrollbar space */\n    background: transparent; /* Optional: just make scrollbar invisible */\n  }\n"]))),S=Object(j.b)(C)(o||(o=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  background-color: transparent;\n  overflow-y: hidden;\n"]))),I=Object(j.b)(S)(l||(l=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n\n  @media (max-width: 768px) {\n    width: 100%;\n\n    & .leaflet-container {\n      width: 100%;\n      height: 100vh;\n    }\n  }\n"]))),N=(t(111),Object(j.b)(C)(c||(c=Object(O.a)(["\n  color: ",";\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  background-color: ",";\n"])),k.base.white,k.base.white)),L=Object(j.b)(C)(s||(s=Object(O.a)(["\n  color: white;\n  width: 100%;\n"]))),z=j.b.div(u||(u=Object(O.a)(["\n  width: 100%;\n  display: table;\n  padding: 0.5em 0;\n  background-color: ",";\n  color: ",";\n  align-items: center;\n"])),k.base.green,k.base.white),q=j.b.div(d||(d=Object(O.a)(["\n  background-color: #7bb5b1;\n  width: 100%;\n  color: #fff;\n  padding: 12px;\n  border-radius: 0;\n  margin: 0 0 20px;\n  align-items: center;\n"]))),F=(t(187),t(20)),P=Object(j.b)(N)(p||(p=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 0 30px;\n  max-height: 80vh;\n\n  @media (max-height: 960px) {\n    overflow-y: scroll;\n  }\n"]))),T=Object(j.b)(N)(b||(b=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0 1.8em;\n  height: fit-content;\n"]))),B=(j.b.div(f||(f=Object(O.a)(["\n  width: 100%;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),j.b.div(m||(m=Object(O.a)(["\n  font-weight: bold;\n  color: ",";\n  font-size: 12pt;\n  padding: 0.5em 0;\n"])),k.base.darkgreen)),R=t(320),H=t(309),D=Object(j.b)(C)(g||(g=Object(O.a)(["\n  color: ",";\n  padding: 0px;\n  width: 100%;\n"])),k.white);function G(e){return"".concat(e)}var V=function(e){var n=e.values,t=e.notifyChange,a=e.selectorId,r=e.value;return h.a.createElement(D,null,h.a.createElement(H.a,{"aria-label":"Restricted values",getAriaValueText:G,step:null,marks:n,track:!1,sx:{color:k.green,track:{display:"none"}},value:r,valueLabelFormat:function(e){return h.a.createElement("div",null,2010+e)},valueLabelDisplay:"on",onChangeCommitted:function(e,r){n.filter(function(e,n){return e.value===r}),t({selectorId:a,value:r})}}))},J=(t(113),t(142),t(143),t(319),t(318));t(189),t(310),t(300),t(323);var Q,U,W,Y,Z,K,X=t(42),$=t(18),ee=t.n($),ne=t(23),te=1e-5,ae=85,re=k.suitability,ie="Convenance",oe={features:[],fetching:!1,cog_uri:"https://object-arbutus.cloud.computecanada.ca/bq-io/io/btsl-connectivity/NC_NC-HabitatSuitability-BLBR-it22-ts2010.tif",current_layer:{},dmin:.001,dmax:85,legend_colors:k.suitability,legend_title:"Convenance"},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.payload;switch(t){case"@search/setstatus":return Object(F.a)(Object(F.a)({},e),{},{fetching:a.fetching});case"@search/setenvelops":return Object(F.a)(Object(F.a)({},e),{},{features:a.features,fetching:a.fetching,summary:a.summary});case"@search/setcoguri":return Object(F.a)(Object(F.a)({},e),{},{cog_uri:a.cog_uri,current_layer:a.current_layer,dmin:a.dmin,dmax:a.dmax,legend_colors:a.legend_colors,legend_title:a.legend_title});default:return e}},ce=function(e,n,t,a,r){return function(){var i=Object(ne.a)(ee.a.mark(function i(o){var l;return ee.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:l="https://object-arbutus.cloud.computecanada.ca/bq-io/io/btsl-connectivity/"+e+"_"+n+"-"+t+"-"+a+"-it22-ts"+(parseInt(r)+2010)+".tif","curmap"==t?(te=25e-6,ae=.001,re=k.connectivity,ie="Connectivit\xe9"):"HabitatSuitability"==t&&(te=1e-5,ae=85,re=k.suitability,ie="Convenance"),o({type:"@search/setcoguri",payload:{cog_uri:l,current_layer:t,dmin:te,dmax:ae,legend_colors:re,legend_title:ie}});case 3:case"end":return i.stop()}},i)}));return function(e){return i.apply(this,arguments)}}()},se=(t(15),t(89),t(315)),ue=t(145),de=t.n(ue),pe=t(146),be=t.n(pe),fe=t(48),me=t(313),ge=t(321),ve=t(311),he=t(307),xe=t(326),ye=(Object(j.b)(ve.a)(Q||(Q=Object(O.a)(["\n  & .MuiOutlinedInput-input {\n    padding: 10px 14px;\n  }\n  & legend {\n    display: none;\n  }\n"]))),Object(j.b)(he.a)(U||(U=Object(O.a)(['\n  & .MuiOutlinedInput-root,\n  [class*="MuiInputBase-input-MuiOutlinedInput-input"] {\n    padding: 8px 14px;\n  }\n  & legend {\n    display: none;\n  }\n'])))),Ee=(Object(j.b)(xe.a)(W||(W=Object(O.a)(['\n  &&& {\n    box-sizing: border-box;\n    line-height: 48px;\n    list-style: none;\n    color: rgba(0, 0, 0, 1);\n    font-family: "Roboto", "Helvetica", "Arial", sans-serif;\n    font-weight: 500;\n    font-size: 0.875rem;\n    padding-left: 16px;\n    padding-right: 16px;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1;\n    background-color: #fff;\n  }\n']))),Object(j.b)(C)(Y||(Y=Object(O.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n"])))),Oe=Object(j.b)(C)(Z||(Z=Object(O.a)(["\n  width: 100%;\n  color: ",";\n  font-size: 8pt;\n  align-items: flex-start;\n"])),k.darkgreen),je=Object(j.b)(Oe)(K||(K=Object(O.a)(["\n  width: 100%;\n  font-weight: bold;\n  color: ",";\n  font-size: 12px;\n"])),k.darkgreen);var we=function(e){var n=e.value,t=e.vernacular_fr;return h.a.createElement(Ee,null,h.a.createElement(je,null,"".concat(t||"none")),h.a.createElement(Oe,null,n))};function _e(e){var n=e.elementList,t=void 0===n?[]:n,a=e.onValueChange,r=e.selectorId,i=e.value;return h.a.createElement("div",{className:"selector",style:{width:"100%"},onClick:function(e){return e.stopPropagation()}},h.a.createElement(ge.a,{sx:{width:"100%",p:1,m:0}},h.a.createElement(ye,{displayEmpty:!0,value:i,onChange:function(e){a({selectorId:r,value:e.target.value})}},t.map(function(e){return h.a.createElement(me.a,{key:fe.a.uniqueId(JSON.stringify(e)),value:e.option},h.a.createElement(we,e))}))))}function Ce(e){var n=e.onValueChange,t=e.selectorId,a=e.selectorList,r=e.value,i=void 0===r?[]:r;return h.a.createElement("div",{className:"selector",style:{width:"100%"},onClick:function(e){return e.stopPropagation()}},h.a.createElement(ge.a,{sx:{width:"100%",p:1,m:0}},h.a.createElement(ye,{displayEmpty:!0,value:i,onChange:function(e){n({selectorId:t,value:e.target.value})}},a.map(function(e){return h.a.createElement(me.a,{key:fe.a.uniqueId(JSON.stringify(e)),value:e.option},e.value)}))))}var ke=function(e){Object(X.c)(function(e){return e.reducerState});var n=Object(X.b)(),t=h.a.useState({in_year:0,in_species:"BLBR",in_scenario_climate:"NC",in_scenario_landuse:"NC",in_layer:"HabitatSuitability"}),a=Object(E.a)(t,2),r=a[0],i=a[1],o=Object(v.useState)(!1),l=Object(E.a)(o,2),c=l[0],s=l[1],u=Object(v.useState)(0),d=Object(E.a)(u,2),p=d[0],b=d[1],f=function(e){var t=Object(F.a)({},r);console.log(e),"species"===e.selectorId?t.in_species=e.value:"years"===e.selectorId?t.in_year=e.value:"scenarios_climate"===e.selectorId?t.in_scenario_climate=e.value:"scenarios_landuse"===e.selectorId?t.in_scenario_landuse=e.value:"layers"===e.selectorId?t.in_layer=e.value:"species"===e.selectorId&&(t.in_species=e.value),i(t),n(ce(t.in_scenario_landuse,t.in_scenario_climate,t.in_layer,t.in_species,t.in_year))};return h.a.createElement(P,null,h.a.createElement(T,null,h.a.createElement(B,null,"Couche"),h.a.createElement(Ce,{className:"selector",selectorList:[{option:"HabitatSuitability",value:"Convenance de l'habitat"},{option:"curmap",value:"Connectivit\xe9"}],selectorId:"layers",onValueChange:f,value:r.in_layer})),h.a.createElement(T,null,h.a.createElement(B,null,"Esp\xe8ce"),h.a.createElement(_e,{className:"selector",elementList:[{option:"BLBR",value:"Blarina brevicauda",vernacular_fr:"Grand musaraigne"},{option:"MAAM",value:"Martes americana",vernacular_fr:"Martre d'Am\xe9rique"},{option:"PLCI",value:"Plethodon cinereus",vernacular_fr:"Salamandre ray\xe9e"},{option:"RANA",value:"Lithobates sylvaticus",vernacular_fr:"Grenouille des bois"},{option:"URAM",value:"Ursus americanus",vernacular_fr:"Ours noir"}],selectorId:"species",onValueChange:f,value:r.in_species})),h.a.createElement(T,null,h.a.createElement(B,null,"Sc\xe9nario climatique"),h.a.createElement(Ce,{className:"selector",selectorList:[{option:"NC",value:"Historique"},{option:"85",value:"RCP85"}],selectorId:"scenarios_climate",onValueChange:f,value:r.in_scenario_climate})),h.a.createElement(T,null,h.a.createElement(B,null,"Changement d'utilisation des terres"),h.a.createElement(Ce,{className:"selector",selectorList:[{option:"NC",value:"Aucun changement"},{option:"BAU",value:"Laisser-aller"}],selectorId:"scenarios_landuse",onValueChange:f,value:r.in_scenario_landuse})),h.a.createElement(R.a,{sx:{width:"80%","margin-top":"30px"}},h.a.createElement(se.a,{container:!0,spacing:2},h.a.createElement(se.a,{item:!0,xs:10},h.a.createElement(V,{inline:!0,selectorId:"years",notifyChange:f,values:[{value:0},{value:20},{value:40},{value:60},{value:80},{value:100}],value:r.in_year})),h.a.createElement(se.a,{item:!0,xs:1},h.a.createElement(J.a,{variant:"contained",onClick:function(){if(c)clearInterval(p);else{var e=r;b(setInterval(function(){var t=e.in_year,a=0;a=100===t?0:t+20,e=Object(F.a)(Object(F.a)({},r),{},{in_year:a}),i(e),n(ce(e.in_scenario_landuse,e.in_scenario_climate,e.in_layer,e.in_species,e.in_year))},1500))}s(!c),console.log(c)},size:"large",sx:{height:"30px"}},!c&&h.a.createElement(de.a,{size:"large"}),c&&h.a.createElement(be.a,{size:"large"}))))))};var Me=function(e){return h.a.createElement(N,null,h.a.createElement(L,null,h.a.createElement(z,null,h.a.createElement("div",{className:"dash-icon icon-bq_icons_tree"}),h.a.createElement("div",{className:"dash-title"},"Connectivit\xe9 \xe9cologique dans les Basses-terres du Saint-Laurent")),h.a.createElement(q,null,"Mod\xe9lisation de la connectivit\xe9 \xe9cologique en fonction de diff\xe9rents sc\xe9narios de changement d'utlisation des terres et de changements climatiques . ",h.a.createElement("br",null)," ",h.a.createElement("a",{target:"_blank",style:{color:"#ffffff",fontWeight:"bold"},href:"https://quebio.ca/fr/rapport_connectivite"},"Acc\xe9der aux rapports d\xe9crivant l'analyse."," "))),h.a.createElement(ke,null))},Ae=t(69),Se=t(147),Ie=t(148),Ne=Object(Ae.combineReducers)({reducerState:le}),Le=Object(Ae.createStore)(Ne,Object(Se.composeWithDevTools)(Object(Ae.applyMiddleware)(Ie.a))),ze=(t(208),t(306)),qe=t(308),Fe=t(305),Pe=t(149),Te=t(150),Be=t.n(Te),Re=t(151),He=t.n(Re),De=t(152),Ge=t.n(De);function Ve(e){var n=e.url,t=(e.current_layer,e.dmin),a=e.dmax,r=e.cols,i=Object(Fe.a)(),o=(i.getContainer(),h.a.useRef(null)),l=Object(v.useState)(),c=Object(E.a)(l,2),s=c[0],u=c[1];return Object(v.useEffect)(function(){return Be()(n).then(function(e){u(e)}),function(){}},[n,i]),Object(v.useEffect)(function(){if(s){var e=Ge.a.scale(Object.values(r)).domain([t,a]),n=Math.random(),l=new He.a({attribution:"Planet",type:"coglayer",layer_id:n,georaster:s,debugLevel:0,resolution:128,pixelValuesToColorFn:function(n){return 0===n[0]|Object(Pe.isNaN)(n[0])|n[0]===1/0?"#ffffff00":e(n[0]).hex()}});l.on("load",function(e){setTimeout(function(){i.eachLayer(function(e){"coglayer"===e.options.type&&e.options.layer_id!==n&&i.removeLayer(e)})},200)});var c=i;o.current=l,c.addLayer(l)}return function(){}},[s,i]),null}var Je,Qe,Ue,We,Ye={position:"relative",width:"100%",height:"100vh",padding:"0"};function Ze(){var e=Object(X.c)(function(e){return e.reducerState});return h.a.createElement(h.a.Fragment,null,h.a.createElement(ze.a,{style:Ye,center:[46.4,-72.7],zoom:8,maxZoom:25},h.a.createElement(qe.a,{url:"https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}{r}.png",attribution:'\xa9 <a href="http://osm.org/copyright">Stamen</a> contributors'}),h.a.createElement(Ve,{key:fe.a.uniqueId(JSON.stringify({n:Math.random(),m:Date.now()})),url:e.cog_uri,current_layer:e.current_layer,dmin:e.dmin,dmax:e.dmax,cols:e.legend_colors})))}var Ke=j.b.div(Je||(Je=Object(O.a)(["\n  display: flex;\n  justify-content: left;\n  background: transparent;\n  gap: 0.5em;\n  color: ",";\n"])),k.darkgreen),Xe=j.b.div(Qe||(Qe=Object(O.a)(["\n  min-width: 20px;\n  min-height: 20px;\n  background-color: ",";\n"])),function(e){return e.color}),$e=j.b.div(Ue||(Ue=Object(O.a)(["\n  flex-grow: 1;\n  text-align: center;\n  white-space: nowrap;\n  font-size: 1em;\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n  & span {\n    font-size: 12px;\n  }\n"]))),en=j.b.div(We||(We=Object(O.a)(["\n  display: inline-block;\n  margin: 2.5em 2em;\n  padding: 1.5em;\n  border-radius: 10px;\n  justify-content: left;\n  line-height: 18px;\n  color: #555;\n  z-index: 1000;\n  font: 12px/1.5 Helvetica Neue, Arial, Helvetica, sans-serif;\n  font-size: 12px;\n  background-color: hsla(0, 0%, 100%, 0.6);\n"]))),nn=(t(253),function(e){var n=e.color,t=void 0===n?"red":n,a=e.text,r=void 0===a?"":a;return h.a.createElement(Ke,null,h.a.createElement(Xe,{color:t}),h.a.createElement($e,null,h.a.createElement("span",null,r)))}),tn=function(e){var n=e.id,t=void 0===n?0:n,a=e.items,r=void 0===a?[]:a,i=e.absolute,o=e.location,l=void 0===o?"":o,c=e.top,s=void 0===c?0:c,u=e.bottom,d=void 0===u?0:u,p=e.left,b=void 0===p?0:p,f=e.right,m=void 0===f?0:f,g=e.colorClass,x=void 0===g?"":g,y=e.title;Object(v.useEffect)(function(){},[]);var E="";E+=(i?"absolute ":"")+" ",E+=l+" legend-amin ";var O=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return"bottom-left"===e?{bottom:"".concat(r,"px"),left:"".concat(a,"px")}:"bottom-right"===e?{right:"".concat(t,"px"),bottom:"".concat(r,"px")}:"top-right"===e?{right:"".concat(t,"px"),top:"".concat(n,"px")}:"top-left"===e?{left:"".concat(a,"px"),top:"".concat(n,"px")}:{}}(l,s,m,b,d);return h.a.createElement(en,{className:"".concat(E," ").concat(x),style:O},r.map(function(e){return h.a.createElement(nn,{id:t,key:fe.a.uniqueId({n:Math.random(),m:Date.now()}),color:e.color,text:e.text})}),y)};var an=function(e){for(var n=e.width,t=e.height,a=n>768?n-350:n,r=Object(X.c)(function(e){return e.reducerState}),i=[],o=0,l=Object.entries(r.legend_colors);o<l.length;o++){var c=Object(E.a)(l[o],2),s=c[0],u=c[1];i.push({text:s,color:u})}return h.a.createElement(I,{style:{width:"".concat(a,"px")}},0!==n&&0!==t&&h.a.createElement(Ze,null),h.a.createElement(tn,{absolute:!0,location:"bottom-right",bottom:20,right:10,items:i,colorClass:"white-background",title:r.legend_title}))};function rn(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}t(254);var on,ln=function(e){var n=e.children,t=e.animate,a=void 0!==t&&t,r=e.showMenuFn,i=void 0===r?function(){return""}:r,o=e.visibility,l=void 0===o||o,c=e.enableAnimation,s=void 0!==c&&c;return h.a.createElement("div",{className:"sidebar-container-dashboard ".concat(l?"":"display-none"),onClick:function(e){s&&i()}},h.a.createElement("div",{className:"sidebar-container-w ".concat(a?"animate-sidebar":"close-menu")},n))},cn=j.b.div(on||(on=Object(O.a)(["\n  background-color: ",";\n  position: absolute;\n  z-index: 1000;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  left: 50px;\n  bottom: 50px;\n"])),k.green),sn=t(153),un=t.n(sn),dn=function(e){return h.a.createElement(cn,{onClick:e.onClick},h.a.createElement(J.a,{"aria-label":"delete",size:"large"},h.a.createElement(un.a,{fontSize:"inherit"})))};function pn(){var e=function(){var e=Object(v.useState)(rn()),n=Object(E.a)(e,2),t=n[0],a=n[1];return Object(v.useEffect)(function(){function e(){a(rn())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}},[]),t}(),n=e.height,t=e.width,a=Object(v.useState)({animate:!0,visibility:!0}),r=Object(E.a)(a,2),i=r[0],o=r[1],l=function(){o(function(e){return{visibility:e.visibility,animate:!e.animate}})},c={showMenuFn:l,animate:i.animate,visibility:t>768||i.visibility&&i.animate,enableAnimation:t<768};return h.a.createElement(X.a,{store:Le},h.a.createElement(A,null,h.a.createElement(ln,Object.assign({onClick:function(){return l()}},c),h.a.createElement(S,null,h.a.createElement(Me,null))),h.a.createElement(an,{width:t,height:n}),t<768&&h.a.createElement(dn,{onClick:function(){return l()}})),h.a.createElement(M,null))}var bn=t(103),fn=t(71),mn=t(154),gn={en:{translation:t(155)},fr:{translation:t(156)}};bn.a.use(fn.e).use(mn.a).init({react:{useSuspense:!1},ns:["translation"],defaultNS:"translation",resources:gn,fallbackLng:"fr",interpolation:{escapeValue:!1},detection:{order:["querystring","path","navigator"],lookupQuerystring:"lang"}});var vn=bn.a,hn=t(317),xn=Object(v.createContext)({}),yn=function(e){var n=Object(hn.a)().t,t=e.i18n,a=Object(v.useState)("fr"),r=Object(E.a)(a,2),i=r[0],o=r[1];return Object(v.useEffect)(function(){o("apps"===t.language?"fr":"en")},[]),document.title=n("For\xeats qu\xe9b\xe9coises et changements climatiques"),h.a.createElement(xn.Provider,{value:{language:i,changeLanguage:function(e){t.changeLanguage(e&&2===e.length?e:"fr"),o(e)},t:n.bind(void 0)}},e.children)},En=document.getElementById("root");y.a.render(h.a.createElement(h.a.StrictMode,null,h.a.createElement(yn,{i18n:vn},h.a.createElement(pn,null))),En)}},[[180,1,2]]]);
//# sourceMappingURL=main.ae46d1a0.chunk.js.map