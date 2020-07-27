// Compiled by ClojureScript 1.10.597 {}
goog.provide('ui.patient.model');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('day8.re_frame.http_fx');
goog.require('ajax.core');
goog.require('clojure.string');
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("patient","index","patient/index",1971341580),(function (p__10113,p__10114){
var map__10115 = p__10113;
var map__10115__$1 = (((((!((map__10115 == null))))?(((((map__10115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10115):map__10115);
var db = cljs.core.get.call(null,map__10115__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__10116 = p__10114;
var _ = cljs.core.nth.call(null,vec__10116,(0),null);
var phase = cljs.core.nth.call(null,vec__10116,(1),null);
var params = cljs.core.nth.call(null,vec__10116,(2),null);
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
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("patient","index","patient/index",1971341580),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("xhr","response","xhr/response",-1068297090),new cljs.core.Keyword("ui.patient.model","patient-list","ui.patient.model/patient-list",145994352)], null),(function (p__10120){
var map__10121 = p__10120;
var map__10121__$1 = (((((!((map__10121 == null))))?(((((map__10121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10121):map__10121);
var data = cljs.core.get.call(null,map__10121__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.Keyword(null,"entry","entry",505168823).cljs$core$IFn$_invoke$arity$1(data);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("patient","show","patient/show",209452502),(function (p__10123,p__10124){
var map__10125 = p__10123;
var map__10125__$1 = (((((!((map__10125 == null))))?(((((map__10125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10125):map__10125);
var db = cljs.core.get.call(null,map__10125__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__10126 = p__10124;
var pid = cljs.core.nth.call(null,vec__10126,(0),null);
var phase = cljs.core.nth.call(null,vec__10126,(1),null);
var params = cljs.core.nth.call(null,vec__10126,(2),null);
var id = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("route-map","current-route","route-map/current-route",-917537088),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"pid","pid",1018387698)], null));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"deint","deint",972326715),phase)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"params","params",710516235),phase)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),phase)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("xhr","fetch","xhr/fetch",-1081850758),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uri","uri",-774711847),["http://localhost:8080/patient/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"req-id","req-id",-471642231),new cljs.core.Keyword("ui.patient.model","patient-show","ui.patient.model/patient-show",-456777477)], null)], null)], null);
} else {
return null;
}
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("patient","show","patient/show",209452502),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("xhr","response","xhr/response",-1068297090),new cljs.core.Keyword("ui.patient.model","patient-show","ui.patient.model/patient-show",-456777477)], null),(function (p__10130){
var map__10131 = p__10130;
var map__10131__$1 = (((((!((map__10131 == null))))?(((((map__10131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10131):map__10131);
var data = cljs.core.get.call(null,map__10131__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.Keyword(null,"entry","entry",505168823).cljs$core$IFn$_invoke$arity$1(data);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("ui.patient.model","success-delete","ui.patient.model/success-delete",-1231064509),(function (p__10133,p__10134){
var map__10135 = p__10133;
var map__10135__$1 = (((((!((map__10135 == null))))?(((((map__10135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10135):map__10135);
var db = cljs.core.get.call(null,map__10135__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__10136 = p__10134;
var _ = cljs.core.nth.call(null,vec__10136,(0),null);
return null;
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("ui.patient.model","delete-patient","ui.patient.model/delete-patient",-149246419),(function (p__10140,p__10141){
var map__10142 = p__10140;
var map__10142__$1 = (((((!((map__10142 == null))))?(((((map__10142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10142):map__10142);
var db = cljs.core.get.call(null,map__10142__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__10143 = p__10141;
var _ = cljs.core.nth.call(null,vec__10143,(0),null);
var efx = cljs.core.nth.call(null,vec__10143,(1),null);
var id = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("route-map","current-route","route-map/current-route",-917537088),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"pid","pid",1018387698)], null));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("xhr","fetch","xhr/fetch",-1081850758),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uri","uri",-774711847),["http://localhost:8080/patient/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"method","method",55703592),"DELETE",new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("ui.patient.model","success-delete","ui.patient.model/success-delete",-1231064509),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"efx","efx",-530918729),efx], null)], null)], null)], null);
}));

//# sourceMappingURL=model.js.map
