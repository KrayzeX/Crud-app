// Compiled by ClojureScript 1.10.597 {}
goog.provide('ui.patient.core');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('clojure.string');
goog.require('zframes.redirect');
goog.require('zframes.debounce');
goog.require('ui.patient.model');
goog.require('ui.pages');
goog.require('ui.styles');
goog.require('reagent.core');
ui.patient.core.style = ui.styles.style.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".tittle",".tittle",841596155),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"24px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"20px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".page-tittle",".page-tittle",-921843509),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"22px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"40px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".actions",".actions",-1936286303),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"15px",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"2px solid #AEADB2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".search",".search",-1559053770),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".search-form",".search-form",1327632465),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"450px",new cljs.core.Keyword(null,"height","height",1025178622),"30px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"5px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"15px"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".create",".create",-430135003),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 0 5px rgba(0,0,0,0.5)",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#7BE85E",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"24px",new cljs.core.Keyword(null,"padding","padding",1660304693),"3px 7px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #70AE60"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#B4F3A4"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:active","&:active",-1687810105),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#7ACB7A"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".table",".table",-667706186),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"30px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".line-info",".line-info",-1841326850),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"2px",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid grey",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"10px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".icon",".icon",1539505086),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"15px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".ic",".ic",-1672155964),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"45px",new cljs.core.Keyword(null,"height","height",1025178622),"45px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"4px",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"15px"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".patient-info",".patient-info",-6980647),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"190px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".main-info",".main-info",1415660826),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".second-info",".second-info",-1028185912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"color","color",1011675173),"#666666"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".birth",".birth",1188289742),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"15px"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".policy-number",".policy-number",425323351)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".delete",".delete",1676401784),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".delete-icon",".delete-icon",1791508559),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"30px",new cljs.core.Keyword(null,"height","height",1025178622),"30px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"12px"], null)], null)], null)], null)], null)], null));
ui.patient.core.tittle = (function ui$patient$core$tittle(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tittle","div.tittle",-2088566926),ui.patient.core.style,"Test CRUD application"], null);
});
ui.patient.core.page_line = (function ui$patient$core$page_line(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-tittle","div.page-tittle",464687434),"Patients list"], null);
});
ui.patient.core.actions = (function ui$patient$core$actions(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.actions","div.actions",1521484722),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search","div.search",445557581),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.search-form","input.search-form",1713725326),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search..."], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.create","div.create",1048497027),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zframes.redirect","redirect","zframes.redirect/redirect",150444856),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),"/patient/create"], null)], null));
})], null),"Create +"], null)], null);
});
ui.patient.core.part = (function ui$patient$core$part(p__10149){
var map__10150 = p__10149;
var map__10150__$1 = (((((!((map__10150 == null))))?(((((map__10150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10150):map__10150);
var args = map__10150__$1;
var map__10151 = cljs.core.get.call(null,map__10150__$1,new cljs.core.Keyword(null,"resource","resource",251898836));
var map__10151__$1 = (((((!((map__10151 == null))))?(((((map__10151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10151):map__10151);
var resource = cljs.core.get.call(null,map__10151__$1,new cljs.core.Keyword(null,"resource","resource",251898836));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.line-info","div.line-info",-415843995),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(resource),"male"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.icon","div.icon",1302290135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.ic","img.ic",-2067090341),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"person.svg"], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.icon","div.icon",1302290135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.ic","img.ic",-2067090341),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"woman.svg"], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.patient-info","div.patient-info",450063994),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main-info","div.main-info",-1666114245),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zframes.redirect","redirect","zframes.redirect/redirect",150444856),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),["/patient/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(args))].join('')], null)], null));
})], null),(function (){var firstname = cljs.core.get_in.call(null,resource,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"first-name","first-name",-1559982131)], null));
var family = cljs.core.get_in.call(null,resource,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"surname","surname",1407918027)], null));
var middlename = cljs.core.get_in.call(null,resource,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"middle-name","middle-name",-931857342)], null));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(family)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(firstname)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(middlename)].join('');
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.second-info","div.second-info",-1525650505),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.birth","div.birth",110906830),["Birth date: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"birth-date","birth-date",-749581010).cljs$core$IFn$_invoke$arity$1(resource))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.policy-number","div.policy-number",301613860),["Policy number: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"policy-number","policy-number",-857696512).cljs$core$IFn$_invoke$arity$1(resource))].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.delete","div.delete",-1162125653),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.patient.model","delete-patient","ui.patient.model/delete-patient",-149246419),new cljs.core.Keyword("zframes.redirect","redirect","zframes.redirect/redirect",150444856)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.delete-icon","img.delete-icon",-1701355903),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"trash.svg"], null)], null)], null)], null);
});
ui.patient.core.patient_list = (function ui$patient$core$patient_list(data){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table","div.table",-33744051),cljs.core.map.call(null,ui.patient.core.part,data)], null);
});
ui.patient.core.patients = (function ui$patient$core$patients(data){
var m = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("patient","index","patient/index",1971341580)], null));
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page","div.page",1917984906),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.patient.core.tittle], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.patient.core.page_line], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main","div.main",-117780813),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.patient.core.actions], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.patient.core.patient_list,cljs.core.deref.call(null,m)], null)], null)], null);
});
});
ui.patient.core.patient_show = (function ui$patient$core$patient_show(data){
var m = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("patient","show","patient/show",209452502)], null));
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page","div.page",1917984906)], null);
});
});
ui.pages.reg_page.call(null,new cljs.core.Keyword("patient","index","patient/index",1971341580),ui.patient.core.patients);
ui.pages.reg_page.call(null,new cljs.core.Keyword("patient","show","patient/show",209452502),ui.patient.core.patient_show);

//# sourceMappingURL=core.js.map
