// Compiled by ClojureScript 1.10.597 {}
goog.provide('zframes.routing');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('zframes.window_location');
goog.require('route_map.core');
zframes.routing.dispatch_routes = (function zframes$routing$dispatch_routes(_){
var fragment = window.location.hash;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fragment-changed","fragment-changed",297638814),fragment], null));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("route-map","fragment-params","route-map/fragment-params",-179339738),(function (db,_){
return new cljs.core.Keyword(null,"fragment-params","fragment-params",-332661138).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("route-map","fragment","route-map/fragment",121903200),(function (db,_){
return new cljs.core.Keyword(null,"fragment","fragment",826775688).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("route-map","current-route","route-map/current-route",-917537088),(function (db,_){
return new cljs.core.Keyword("route-map","current-route","route-map/current-route",-917537088).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("route-map","fragment-path","route-map/fragment-path",1834975860),(function (db,_){
return new cljs.core.Keyword(null,"fragment-path","fragment-path",-1756101988).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("route-map","location-search","route-map/location-search",426212859),(function (db,_){
return new cljs.core.Keyword("location","search","location/search",-873007497).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"html-title","html-title",1353481924),(function (title){
return (document.title = ["Web Project",(cljs.core.truth_(title)?[" - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join(''):null)].join(''));
}));
zframes.routing.normalize_params = (function zframes$routing$normalize_params(p__10150){
var map__10151 = p__10150;
var map__10151__$1 = (((((!((map__10151 == null))))?(((((map__10151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10151):map__10151);
var o_params = cljs.core.get.call(null,map__10151__$1,new cljs.core.Keyword(null,"o-params","o-params",627613325));
var n_params = cljs.core.get.call(null,map__10151__$1,new cljs.core.Keyword(null,"n-params","n-params",-1815287110));
var op = cljs.core.dissoc.call(null,o_params,new cljs.core.Keyword(null,".",".",335144435),new cljs.core.Keyword(null,"params","params",710516235));
var np = cljs.core.select_keys.call(null,cljs.core.dissoc.call(null,n_params,new cljs.core.Keyword(null,".",".",335144435),new cljs.core.Keyword(null,"params","params",710516235)),cljs.core.keys.call(null,op));
var op__$1 = cljs.core.select_keys.call(null,op,cljs.core.keys.call(null,np));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"o-params","o-params",627613325),op__$1,new cljs.core.Keyword(null,"n-params","n-params",-1815287110),np], null);
});
zframes.routing.params_changed_QMARK_ = (function zframes$routing$params_changed_QMARK_(params){
var map__10153 = zframes.routing.normalize_params.call(null,params);
var map__10153__$1 = (((((!((map__10153 == null))))?(((((map__10153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10153):map__10153);
var op = cljs.core.get.call(null,map__10153__$1,new cljs.core.Keyword(null,"o-params","o-params",627613325));
var np = cljs.core.get.call(null,map__10153__$1,new cljs.core.Keyword(null,"n-params","n-params",-1815287110));
return ((cljs.core.not_EQ_.call(null,np,op)) || (cljs.core.empty_QMARK_.call(null,op)));
});
zframes.routing.contexts_diff = (function zframes$routing$contexts_diff(route,old_contexts,new_contexts,params,old_params){
var to_dispose = cljs.core.reduce.call(null,(function (acc,p__10155){
var vec__10156 = p__10155;
var k = cljs.core.nth.call(null,vec__10156,(0),null);
var o_params = cljs.core.nth.call(null,vec__10156,(1),null);
var G__10159 = acc;
if(zframes.routing.params_changed_QMARK_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"o-params","o-params",627613325),o_params,new cljs.core.Keyword(null,"n-params","n-params",-1815287110),cljs.core.get.call(null,new_contexts,k)], null))){
return cljs.core.conj.call(null,G__10159,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"deinit","deinit",-385511679),o_params], null));
} else {
return G__10159;
}
}),cljs.core.PersistentVector.EMPTY,old_contexts);
return cljs.core.reduce.call(null,(function (acc,p__10160){
var vec__10161 = p__10160;
var k = cljs.core.nth.call(null,vec__10161,(0),null);
var n_params = cljs.core.nth.call(null,vec__10161,(1),null);
var G__10164 = acc;
if(zframes.routing.params_changed_QMARK_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"o-params","o-params",627613325),cljs.core.get.call(null,old_contexts,k),new cljs.core.Keyword(null,"n-params","n-params",-1815287110),n_params], null))){
return cljs.core.conj.call(null,G__10164,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"init","init",-1875481434),n_params], null));
} else {
return G__10164;
}
}),to_dispose,new_contexts);
});
zframes.routing.parse_params = (function zframes$routing$parse_params(s){
if(clojure.string.blank_QMARK_.call(null,s)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__10165 = clojure.string.split.call(null,pair,/=/,(2));
var k = cljs.core.nth.call(null,vec__10165,(0),null);
var v = cljs.core.nth.call(null,vec__10165,(1),null);
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k),decodeURIComponent(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,clojure.string.replace.call(null,s,/^\?/,""),"&"));
}
});
zframes.routing.dispatch_context = (function zframes$routing$dispatch_context(_){
var query = window.location.search;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-changed","search-changed",74213786),zframes.routing.parse_params.call(null,query)], null));
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"search-changed","search-changed",74213786),(function (p__10168,p__10169){
var map__10170 = p__10168;
var map__10170__$1 = (((((!((map__10170 == null))))?(((((map__10170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10170):map__10170);
var db = cljs.core.get.call(null,map__10170__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__10171 = p__10169;
var k = cljs.core.nth.call(null,vec__10171,(0),null);
var search = cljs.core.nth.call(null,vec__10171,(1),null);
var old = new cljs.core.Keyword("location","search","location/search",-873007497).cljs$core$IFn$_invoke$arity$1(db);
var ctx_rs = new cljs.core.Keyword("context","routes","context/routes",-740538761).cljs$core$IFn$_invoke$arity$1(db);
var prev_h = cljs.core.get.call(null,ctx_rs,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(old));
if((!(cljs.core._EQ_.call(null,old,search)))){
if(cljs.core.truth_(prev_h)){
new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev_h,new cljs.core.Keyword(null,"deinit","deinit",-385511679),old], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"navigation","navigation",369417))], null);
} else {
}

var temp__5733__auto__ = cljs.core.get.call(null,ctx_rs,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(search));
if(cljs.core.truth_(temp__5733__auto__)){
var handler = temp__5733__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [handler,new cljs.core.Keyword(null,"init","init",-1875481434),search], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("location","search","location/search",-873007497),search)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("location","search","location/search",-873007497),search)], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("location","search","location/search",-873007497),search)], null);
}
}));
zframes.routing.parse_fragment = (function zframes$routing$parse_fragment(fragment){
var vec__10175 = clojure.string.split.call(null,clojure.string.replace.call(null,fragment,/^#/,""),/\?/);
var path = cljs.core.nth.call(null,vec__10175,(0),null);
var params_str = cljs.core.nth.call(null,vec__10175,(1),null);
var params = ((clojure.string.blank_QMARK_.call(null,params_str))?cljs.core.PersistentArrayMap.EMPTY:zframes.window_location.parse_querystring.call(null,(function (){var or__4185__auto__ = params_str;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})()));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"query-string","query-string",-1018845061),params_str,new cljs.core.Keyword(null,"params","params",710516235),params], null);
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"fragment-changed","fragment-changed",297638814),(function (p__10178,p__10179){
var map__10180 = p__10178;
var map__10180__$1 = (((((!((map__10180 == null))))?(((((map__10180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10180):map__10180);
var db = cljs.core.get.call(null,map__10180__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__10181 = p__10179;
var k = cljs.core.nth.call(null,vec__10181,(0),null);
var fragment = cljs.core.nth.call(null,vec__10181,(1),null);
var map__10185 = zframes.routing.parse_fragment.call(null,fragment);
var map__10185__$1 = (((((!((map__10185 == null))))?(((((map__10185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10185):map__10185);
var path = cljs.core.get.call(null,map__10185__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var q_params = cljs.core.get.call(null,map__10185__$1,new cljs.core.Keyword(null,"params","params",710516235));
var qs = cljs.core.get.call(null,map__10185__$1,new cljs.core.Keyword(null,"query-string","query-string",-1018845061));
var temp__5733__auto__ = route_map.core.match.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".",".",335144435),path], null),new cljs.core.Keyword("route-map","routes","route-map/routes",-450527158).cljs$core$IFn$_invoke$arity$1(db));
if(cljs.core.truth_(temp__5733__auto__)){
var route = temp__5733__auto__;
var params = cljs.core.assoc.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(route),new cljs.core.Keyword(null,"params","params",710516235),q_params);
var params__$1 = cljs.core.assoc.call(null,params,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword("location","search","location/search",-873007497).cljs$core$IFn$_invoke$arity$1(db));
var route_match = new cljs.core.Keyword(null,"match","match",1220059550).cljs$core$IFn$_invoke$arity$1(route);
var route__$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"match","match",1220059550),route_match,new cljs.core.Keyword(null,"params","params",710516235),params__$1,new cljs.core.Keyword(null,"parents","parents",-2027538891),new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(route)], null);
var contexts = cljs.core.reduce.call(null,(function (acc,p__10187){
var map__10188 = p__10187;
var map__10188__$1 = (((((!((map__10188 == null))))?(((((map__10188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10188):map__10188);
var ctx = cljs.core.get.call(null,map__10188__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var r = cljs.core.get.call(null,map__10188__$1,new cljs.core.Keyword(null,".",".",335144435));
if(cljs.core.truth_(ctx)){
return cljs.core.assoc.call(null,acc,ctx,cljs.core.assoc.call(null,params__$1,new cljs.core.Keyword(null,"..","..",-1941038947),r,new cljs.core.Keyword(null,".",".",335144435),route_match));
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(route__$1));
var current_page = new cljs.core.Keyword(null,"match","match",1220059550).cljs$core$IFn$_invoke$arity$1(route__$1);
var old_page = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("route-map","current-route","route-map/current-route",-917537088),new cljs.core.Keyword(null,"match","match",1220059550)], null));
var old_params = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("route-map","current-route","route-map/current-route",-917537088),new cljs.core.Keyword(null,"params","params",710516235)], null));
var page_ctx_events = (((old_page == null))?(function (){var G__10190 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_page,new cljs.core.Keyword(null,"init","init",-1875481434),params__$1], null)], null);
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.core.conj.call(null,G__10190,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_page,new cljs.core.Keyword(null,"params","params",710516235),params__$1], null));
} else {
return G__10190;
}
})():((cljs.core.not_EQ_.call(null,current_page,old_page))?cljs.core.conj.call(null,(function (){var G__10191 = cljs.core.PersistentVector.EMPTY;
if(cljs.core.truth_(old_page)){
return cljs.core.conj.call(null,G__10191,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_page,new cljs.core.Keyword(null,"deinit","deinit",-385511679),old_params], null));
} else {
return G__10191;
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_page,new cljs.core.Keyword(null,"init","init",-1875481434),params__$1], null)):((cljs.core._EQ_.call(null,old_params,params__$1))?cljs.core.PersistentVector.EMPTY:((cljs.core._EQ_.call(null,cljs.core.dissoc.call(null,old_params,new cljs.core.Keyword(null,"params","params",710516235)),cljs.core.dissoc.call(null,params__$1,new cljs.core.Keyword(null,"params","params",710516235))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_page,new cljs.core.Keyword(null,"params","params",710516235),params__$1,old_params], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_page,new cljs.core.Keyword(null,"deinit","deinit",-385511679),old_params], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_page,new cljs.core.Keyword(null,"init","init",-1875481434),params__$1], null)], null)
))));
var old_contexts = new cljs.core.Keyword("route","context","route/context",1761679424).cljs$core$IFn$_invoke$arity$1(db);
var context_evs = zframes.routing.contexts_diff.call(null,new cljs.core.Keyword(null,"match","match",1220059550).cljs$core$IFn$_invoke$arity$1(route__$1),old_contexts,contexts,params__$1,old_params);
var evs = cljs.core.vec.call(null,cljs.core.concat.call(null,context_evs,page_ctx_events));
var db__$1 = ((cljs.core.not_EQ_.call(null,old_page,current_page))?cljs.core.dissoc.call(null,db,old_page,new cljs.core.Keyword(null,"form","form",-1624062471)):db);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db__$1,new cljs.core.Keyword("route","history","route/history",130439859),cljs.core.conj.call(null,cljs.core.take.call(null,(4),new cljs.core.Keyword("route","history","route/history",130439859).cljs$core$IFn$_invoke$arity$1(db__$1)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"match","match",1220059550).cljs$core$IFn$_invoke$arity$1(route__$1),new cljs.core.Keyword(null,"uri","uri",-774711847),fragment], null)),new cljs.core.Keyword(null,"fragment","fragment",826775688),fragment,new cljs.core.Keyword(null,"fragment-params","fragment-params",-332661138),params__$1,new cljs.core.Keyword(null,"fragment-path","fragment-path",-1756101988),path,new cljs.core.Keyword(null,"fragment-query-string","fragment-query-string",-1816155866),qs,new cljs.core.Keyword("route","context","route/context",1761679424),contexts,new cljs.core.Keyword("route-map","current-route","route-map/current-route",-917537088),route__$1),new cljs.core.Keyword(null,"html-title","html-title",1353481924),null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),evs], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"fragment","fragment",826775688),fragment,new cljs.core.Keyword("route-map","current-route","route-map/current-route",-917537088),null,new cljs.core.Keyword("route-map","current-route","route-map/current-route",-917537088),null,new cljs.core.Keyword("route-map","error","route-map/error",-1349476848),new cljs.core.Keyword(null,"not-found","not-found",-629079980))], null);
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"pop-route","pop-route",879915484),(function (db){
return cljs.core.peek.call(null,new cljs.core.Keyword(null,"route-stack","route-stack",1462429141).cljs$core$IFn$_invoke$arity$1(db));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"clear-route-stack","clear-route-stack",-1944977699),(function (db,_){
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"route-stack","route-stack",1462429141));
}));
zframes.routing.history_fx = (function zframes$routing$history_fx(_){
(window["onhashchange"] = zframes.routing.dispatch_routes);

return zframes.routing.dispatch_routes.call(null,null);
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"history","history",-247395220),zframes.routing.history_fx);
zframes.routing.search_history_fx = (function zframes$routing$search_history_fx(_){
(window["onpopstate"] = zframes.routing.dispatch_context);

return zframes.routing.dispatch_context.call(null,null);
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"search-history","search-history",1315830717),zframes.routing.search_history_fx);
zframes.routing.start_fx = (function zframes$routing$start_fx(_){
zframes.routing.search_history_fx.call(null,null);

return zframes.routing.history_fx.call(null,null);
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("route-map","start","route-map/start",-726109997),zframes.routing.start_fx);
zframes.routing.redirect = (function zframes$routing$redirect(href){
return (window.location["hash"] = href);
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("route-map","redirect","route-map/redirect",-1196745054),zframes.routing.redirect);
zframes.routing.to_query_params = (function zframes$routing$to_query_params(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__10192){
var vec__10193 = p__10192;
var k = cljs.core.nth.call(null,vec__10193,(0),null);
var v = cljs.core.nth.call(null,vec__10193,(1),null);
return [cljs.core.name.call(null,k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
}),params));
});
zframes.routing.to_hash = (function zframes$routing$to_hash(opts){
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts)),"?",zframes.routing.to_query_params.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(opts))].join('');
});
zframes.routing.make_fragment = (function zframes$routing$make_fragment(params){
var opts = zframes.routing.parse_fragment.call(null,window.location.hash);
return zframes.routing.to_hash.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"params","params",710516235),params));
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("route-map","set-params","route-map/set-params",36286381),(function (params){
var opts = zframes.routing.parse_fragment.call(null,window.location.hash);
var value = zframes.routing.to_hash.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"params","params",710516235),params));
return (window.location["hash"] = value);
}));

//# sourceMappingURL=routing.js.map
