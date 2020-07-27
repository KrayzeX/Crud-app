// Compiled by ClojureScript 1.10.597 {}
goog.provide('ui.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('zframes.xhr');
goog.require('zframes.redirect');
goog.require('zframes.routing');
goog.require('ui.layout');
goog.require('ui.pages');
goog.require('ui.routes');
goog.require('ui.patient.core');
goog.require('ui.patient.edit.view');
goog.require('ui.patient.create.view');
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("ui.core","initialize","ui.core/initialize",67390912),(function (p__10823,_){
var map__10824 = p__10823;
var map__10824__$1 = (((((!((map__10824 == null))))?(((((map__10824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10824):map__10824);
var db = cljs.core.get.call(null,map__10824__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("route-map","routes","route-map/routes",-450527158),ui.routes.routes),new cljs.core.Keyword("route-map","start","route-map/start",-726109997),cljs.core.PersistentArrayMap.EMPTY], null);
}));
ui.core.not_found_page = (function ui$core$not_found_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Page not found!"], null);
});
ui.core.not_found_component = (function ui$core$not_found_component(page){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.not-found","div.not-found",398696209),["Component not found: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(page)].join('')], null);
});
ui.core.current_page = (function ui$core$current_page(){
var map__10826 = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("route-map","current-route","route-map/current-route",-917537088)], null)));
var map__10826__$1 = (((((!((map__10826 == null))))?(((((map__10826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10826):map__10826);
var page = cljs.core.get.call(null,map__10826__$1,new cljs.core.Keyword(null,"match","match",1220059550));
var params = cljs.core.get.call(null,map__10826__$1,new cljs.core.Keyword(null,"params","params",710516235));
var href = cljs.core.get.call(null,map__10826__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var cmp = cljs.core.get.call(null,cljs.core.deref.call(null,ui.pages.pages),page);
var params__$1 = cljs.core.assoc.call(null,params,new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"context","context",-830191113),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"route","route",329891309),page);
if(cljs.core.truth_((function (){var and__4174__auto__ = page;
if(cljs.core.truth_(and__4174__auto__)){
return cmp;
} else {
return and__4174__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.layout.layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cmp,params__$1], null)], null);
} else {
if(cljs.core.truth_((function (){var and__4174__auto__ = page;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not.call(null,cmp);
} else {
return and__4174__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.core.not_found_component,page], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.core.not_found_page], null);

}
}
});
ui.core.mount_root = (function ui$core$mount_root(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.core.current_page], null),document.getElementById("ui"));
});
ui.core.init_BANG_ = (function ui$core$init_BANG_(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.core","initialize","ui.core/initialize",67390912)], null));

return ui.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map
