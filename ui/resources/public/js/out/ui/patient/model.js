// Compiled by ClojureScript 1.10.597 {}
goog.provide('ui.patient.model');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('day8.re_frame.http_fx');
goog.require('ajax.core');
goog.require('clojure.string');
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("patient","index","patient/index",1971341580),(function (p__8145,p__8146){
var map__8147 = p__8145;
var map__8147__$1 = (((((!((map__8147 == null))))?(((((map__8147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8147):map__8147);
var db = cljs.core.get.call(null,map__8147__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__8148 = p__8146;
var _ = cljs.core.nth.call(null,vec__8148,(0),null);
var phase = cljs.core.nth.call(null,vec__8148,(1),null);
var params = cljs.core.nth.call(null,vec__8148,(2),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"deint","deint",972326715),phase)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"params","params",710516235),phase)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),phase)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("xhr","fetch","xhr/fetch",-1081850758),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8080/patient/search",new cljs.core.Keyword(null,"req-id","req-id",-471642231),new cljs.core.Keyword("ui.patient.model","patient-list","ui.patient.model/patient-list",145994352)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true)], null);
} else {
return null;
}
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("patient","index","patient/index",1971341580),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("xhr","response","xhr/response",-1068297090),new cljs.core.Keyword("ui.patient.model","patient-list","ui.patient.model/patient-list",145994352)], null),(function (p__8152){
var map__8153 = p__8152;
var map__8153__$1 = (((((!((map__8153 == null))))?(((((map__8153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8153):map__8153);
var data = cljs.core.get.call(null,map__8153__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.Keyword(null,"entry","entry",505168823).cljs$core$IFn$_invoke$arity$1(data);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("patient","show","patient/show",209452502),(function (p__8155,p__8156){
var map__8157 = p__8155;
var map__8157__$1 = (((((!((map__8157 == null))))?(((((map__8157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8157):map__8157);
var db = cljs.core.get.call(null,map__8157__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__8158 = p__8156;
var pid = cljs.core.nth.call(null,vec__8158,(0),null);
var phase = cljs.core.nth.call(null,vec__8158,(1),null);
var params = cljs.core.nth.call(null,vec__8158,(2),null);
return null;
}));

//# sourceMappingURL=model.js.map
