// Compiled by ClojureScript 1.10.597 {}
goog.provide('ui.patient.model');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('day8.re_frame.http_fx');
goog.require('ajax.core');
goog.require('clojure.string');
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("patient","index","patient/index",1971341580),(function (p__10451,p__10452){
var map__10453 = p__10451;
var map__10453__$1 = (((((!((map__10453 == null))))?(((((map__10453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10453):map__10453);
var db = cljs.core.get.call(null,map__10453__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__10454 = p__10452;
var _ = cljs.core.nth.call(null,vec__10454,(0),null);
var phase = cljs.core.nth.call(null,vec__10454,(1),null);
var params = cljs.core.nth.call(null,vec__10454,(2),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"deint","deint",972326715),phase)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"params","params",710516235),phase)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),phase)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("xhr","fetch","xhr/fetch",-1081850758),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uri","uri",-774711847),"/patient/search",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-query","search-query",-1077556709),(cljs.core.truth_(cljs.core.get_in.call(null,params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"q","q",689001697)], null)))?clojure.string.replace.call(null,cljs.core.get_in.call(null,params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"q","q",689001697)], null)),/ /,"%20"):"%20")], null),new cljs.core.Keyword(null,"req-id","req-id",-471642231),new cljs.core.Keyword("ui.patient.model","patient-list","ui.patient.model/patient-list",145994352)], null)], null);
} else {
return null;
}
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("patient","index","patient/index",1971341580),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("xhr","response","xhr/response",-1068297090),new cljs.core.Keyword("ui.patient.model","patients-search","ui.patient.model/patients-search",-280989039)], null),(function (p__10458){
var map__10459 = p__10458;
var map__10459__$1 = (((((!((map__10459 == null))))?(((((map__10459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10459):map__10459);
var data = cljs.core.get.call(null,map__10459__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return null;
}));

//# sourceMappingURL=model.js.map
