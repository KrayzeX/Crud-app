// Compiled by ClojureScript 1.10.597 {}
goog.provide('ui.patient.model');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('day8.re_frame.http_fx');
goog.require('ajax.core');
goog.require('clojure.string');
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("patient","index","patient/index",1971341580),(function (p__10626,p__10627){
var map__10628 = p__10626;
var map__10628__$1 = (((((!((map__10628 == null))))?(((((map__10628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10628):map__10628);
var db = cljs.core.get.call(null,map__10628__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__10629 = p__10627;
var _ = cljs.core.nth.call(null,vec__10629,(0),null);
var phase = cljs.core.nth.call(null,vec__10629,(1),null);
var params = cljs.core.nth.call(null,vec__10629,(2),null);
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
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("patient","index","patient/index",1971341580),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("xhr","response","xhr/response",-1068297090),new cljs.core.Keyword("ui.patient.model","patient-list","ui.patient.model/patient-list",145994352)], null),(function (p__10633){
var map__10634 = p__10633;
var map__10634__$1 = (((((!((map__10634 == null))))?(((((map__10634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10634):map__10634);
var data = cljs.core.get.call(null,map__10634__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.Keyword(null,"entry","entry",505168823).cljs$core$IFn$_invoke$arity$1(data);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("patient","show","patient/show",209452502),(function (p__10636,p__10637){
var map__10638 = p__10636;
var map__10638__$1 = (((((!((map__10638 == null))))?(((((map__10638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10638):map__10638);
var db = cljs.core.get.call(null,map__10638__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__10639 = p__10637;
var pid = cljs.core.nth.call(null,vec__10639,(0),null);
var phase = cljs.core.nth.call(null,vec__10639,(1),null);
var params = cljs.core.nth.call(null,vec__10639,(2),null);
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
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("patient","show","patient/show",209452502),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("xhr","response","xhr/response",-1068297090),new cljs.core.Keyword("ui.patient.model","patient-show","ui.patient.model/patient-show",-456777477)], null),(function (p__10643){
var map__10644 = p__10643;
var map__10644__$1 = (((((!((map__10644 == null))))?(((((map__10644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10644):map__10644);
var data = cljs.core.get.call(null,map__10644__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.Keyword(null,"entry","entry",505168823).cljs$core$IFn$_invoke$arity$1(data);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("ui.patient.model","success-delete","ui.patient.model/success-delete",-1231064509),(function (p__10646,p__10647){
var map__10648 = p__10646;
var map__10648__$1 = (((((!((map__10648 == null))))?(((((map__10648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10648):map__10648);
var db = cljs.core.get.call(null,map__10648__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__10649 = p__10647;
var _ = cljs.core.nth.call(null,vec__10649,(0),null);
return null;
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("ui.patient.model","delete-patient","ui.patient.model/delete-patient",-149246419),(function (p__10653,p__10654){
var map__10655 = p__10653;
var map__10655__$1 = (((((!((map__10655 == null))))?(((((map__10655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10655):map__10655);
var db = cljs.core.get.call(null,map__10655__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__10656 = p__10654;
var _ = cljs.core.nth.call(null,vec__10656,(0),null);
var id = cljs.core.nth.call(null,vec__10656,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("xhr","fetch","xhr/fetch",-1081850758),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uri","uri",-774711847),["http://localhost:8080/patient/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"method","method",55703592),"DELETE",new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("ui.patient.model","success-delete","ui.patient.model/success-delete",-1231064509)], null)], null)], null);
}));

//# sourceMappingURL=model.js.map
