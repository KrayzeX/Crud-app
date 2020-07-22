// Compiled by ClojureScript 1.10.597 {}
goog.provide('zframes.redirect');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('zframes.window_location');
goog.require('zframes.routing');
goog.require('clojure.string');
zframes.redirect.window_open = (function zframes$redirect$window_open(url){
return window.open(url,"_blank").focus;
});
zframes.redirect.page_redirect = (function zframes$redirect$page_redirect(url){
return (window.location.href = url);
});
zframes.redirect.redirect = (function zframes$redirect$redirect(url){
return (window.location.hash = url);
});
zframes.redirect.redirect_with_refresh = (function zframes$redirect$redirect_with_refresh(url){
(window.location.hash = url);

return location.reload();
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("zframes.redirect","redirect","zframes.redirect/redirect",150444856),(function (opts){
return zframes.redirect.redirect.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(opts)),(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5735__auto__)){
var params = temp__5735__auto__;
return zframes.window_location.gen_query_string.call(null,params);
} else {
return null;
}
})()].join(''));
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("zframes.redirect","redirect-with-refresh","zframes.redirect/redirect-with-refresh",279964936),(function (opts){
return zframes.redirect.redirect_with_refresh.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(opts)),(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5735__auto__)){
var params = temp__5735__auto__;
return zframes.window_location.gen_query_string.call(null,params);
} else {
return null;
}
})()].join(''));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("zframes.redirect","redirect","zframes.redirect/redirect",150444856),(function (fx,p__10198){
var vec__10199 = p__10198;
var _ = cljs.core.nth.call(null,vec__10199,(0),null);
var opts = cljs.core.nth.call(null,vec__10199,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("zframes.redirect","redirect","zframes.redirect/redirect",150444856),opts], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("zframes.redirect","page-redirect","zframes.redirect/page-redirect",1327408852),(function (opts){
if(cljs.core.truth_(new cljs.core.Keyword(null,"_target","_target",-820699148).cljs$core$IFn$_invoke$arity$1(opts))){
return zframes.redirect.window_open.call(null,new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(opts));
} else {
return zframes.redirect.page_redirect.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(opts)),(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5735__auto__)){
var params = temp__5735__auto__;
return ["?",clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__10214){
var vec__10215 = p__10214;
var k = cljs.core.nth.call(null,vec__10215,(0),null);
var v = cljs.core.nth.call(null,vec__10215,(1),null);
return [cljs.core.name.call(null,k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(v))].join('');
}),params))].join('');
} else {
return null;
}
})()].join(''));
}
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("zframes.redirect","set-query-string","zframes.redirect/set-query-string",-1121382268),(function (params){
var loc = window.location;
history.pushState(({}),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(params),[zframes.window_location.gen_query_string.call(null,cljs.core.dissoc.call(null,params,new cljs.core.Keyword(null,"title","title",636505583))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.hash)].join(''));

zframes.routing.dispatch_context.call(null,null);

return zframes.routing.dispatch_routes.call(null,null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("zframes.redirect","merge-params","zframes.redirect/merge-params",-173023378),(function (p__10218,p__10219){
var map__10220 = p__10218;
var map__10220__$1 = (((((!((map__10220 == null))))?(((((map__10220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10220):map__10220);
var db = cljs.core.get.call(null,map__10220__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__10221 = p__10219;
var _ = cljs.core.nth.call(null,vec__10221,(0),null);
var params = cljs.core.nth.call(null,vec__10221,(1),null);
var pth = cljs.core.get.call(null,db,new cljs.core.Keyword(null,"fragment-path","fragment-path",-1756101988));
var nil_keys = cljs.core.reduce.call(null,(function (acc,p__10225){
var vec__10226 = p__10225;
var k = cljs.core.nth.call(null,vec__10226,(0),null);
var v = cljs.core.nth.call(null,vec__10226,(1),null);
if((v == null)){
return cljs.core.conj.call(null,acc,k);
} else {
return acc;
}
}),cljs.core.PersistentVector.EMPTY,params);
var old_params = (function (){var or__4185__auto__ = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fragment-params","fragment-params",-332661138),new cljs.core.Keyword(null,"params","params",710516235)], null));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("zframes.redirect","redirect","zframes.redirect/redirect",150444856),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uri","uri",-774711847),pth,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.apply.call(null,cljs.core.dissoc,cljs.core.merge.call(null,old_params,params),nil_keys)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("zframes.redirect","set-params","zframes.redirect/set-params",1891379987),(function (p__10229,p__10230){
var map__10231 = p__10229;
var map__10231__$1 = (((((!((map__10231 == null))))?(((((map__10231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10231):map__10231);
var db = cljs.core.get.call(null,map__10231__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__10232 = p__10230;
var _ = cljs.core.nth.call(null,vec__10232,(0),null);
var params = cljs.core.nth.call(null,vec__10232,(1),null);
var pth = cljs.core.get.call(null,db,new cljs.core.Keyword(null,"fragment-path","fragment-path",-1756101988));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("zframes.redirect","redirect","zframes.redirect/redirect",150444856),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uri","uri",-774711847),pth,new cljs.core.Keyword(null,"params","params",710516235),params], null)], null);
}));

//# sourceMappingURL=redirect.js.map
