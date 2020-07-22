// Compiled by ClojureScript 1.10.597 {}
goog.provide('zframes.zquery_string');
goog.require('cljs.core');
goog.require('zframes.browser');
goog.require('zframes.window_location');
goog.require('re_frame.core');
goog.require('clojure.string');
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("uri","set-qs","uri/set-qs",-1592212693),(function (params){
var loc = window.location;
var url = [zframes.window_location.gen_query_string.call(null,cljs.core.dissoc.call(null,params,new cljs.core.Keyword(null,"title","title",636505583))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.hash)].join('');
history.pushState(({}),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(params),url);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zframes.zquery-string","qs-changed","zframes.zquery-string/qs-changed",-1218304365),loc.search], null));
}));
zframes.zquery_string.parse_params = (function zframes$zquery_string$parse_params(s){
if(clojure.string.blank_QMARK_.call(null,s)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__10251 = clojure.string.split.call(null,pair,/=/,(2));
var k = cljs.core.nth.call(null,vec__10251,(0),null);
var v = cljs.core.nth.call(null,vec__10251,(1),null);
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k),decodeURIComponent(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,clojure.string.replace.call(null,s,/^\?/,""),"&"));
}
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("zframes.zquery-string","qs-changed","zframes.zquery-string/qs-changed",-1218304365),(function (p__10254,p__10255){
var map__10256 = p__10254;
var map__10256__$1 = (((((!((map__10256 == null))))?(((((map__10256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10256):map__10256);
var db = cljs.core.get.call(null,map__10256__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__10257 = p__10255;
var _ = cljs.core.nth.call(null,vec__10257,(0),null);
var raw = cljs.core.nth.call(null,vec__10257,(1),null);
var new$ = zframes.window_location.parse_querystring.call(null,raw);
var old = new cljs.core.Keyword("uri","qs","uri/qs",-1900805375).cljs$core$IFn$_invoke$arity$1(db);
var ev = (cljs.core.truth_(((cljs.core.empty_QMARK_.call(null,old))?cljs.core.not_empty.call(null,new$):false))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("uri","query-string","uri/query-string",-1018962065),new cljs.core.Keyword(null,"init","init",-1875481434),new$], null):(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.not_empty.call(null,new$);
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = cljs.core.not_empty.call(null,old);
if(cljs.core.truth_(and__4174__auto____$1)){
return cljs.core.not_EQ_.call(null,old,new$);
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("uri","query-string","uri/query-string",-1018962065),new cljs.core.Keyword(null,"update","update",1045576396),new$], null):(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.not_empty.call(null,old);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.empty_QMARK_.call(null,new$);
} else {
return and__4174__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("uri","query-string","uri/query-string",-1018962065),new cljs.core.Keyword(null,"deinit","deinit",-385511679),new$], null):null)));
if(cljs.core.truth_(ev)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("uri","qs","uri/qs",-1900805375),new$),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),ev], null);
} else {
return null;
}
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("zframes.zquery-string","init-qs","zframes.zquery-string/init-qs",695609995),(function (_){
var f = (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zframes.zquery-string","qs-changed","zframes.zquery-string/qs-changed",-1218304365),window.location.search], null));
});
(window["onpopstate"] = f);

return f.call(null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("zframes.zquery-string","init-qs","zframes.zquery-string/init-qs",695609995),(function() { 
var G__10261__delegate = function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("zframes.zquery-string","init-qs","zframes.zquery-string/init-qs",695609995),cljs.core.PersistentArrayMap.EMPTY], null);
};
var G__10261 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__10262__i = 0, G__10262__a = new Array(arguments.length -  0);
while (G__10262__i < G__10262__a.length) {G__10262__a[G__10262__i] = arguments[G__10262__i + 0]; ++G__10262__i;}
  _ = new cljs.core.IndexedSeq(G__10262__a,0,null);
} 
return G__10261__delegate.call(this,_);};
G__10261.cljs$lang$maxFixedArity = 0;
G__10261.cljs$lang$applyTo = (function (arglist__10263){
var _ = cljs.core.seq(arglist__10263);
return G__10261__delegate(_);
});
G__10261.cljs$core$IFn$_invoke$arity$variadic = G__10261__delegate;
return G__10261;
})()
);

//# sourceMappingURL=zquery_string.js.map
