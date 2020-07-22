// Compiled by ClojureScript 1.10.597 {}
goog.provide('zframes.window_location');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('clojure.string');
zframes.window_location.url_decode = (function zframes$window_location$url_decode(x){
return decodeURIComponent(x);
});
zframes.window_location.url_encode = (function zframes$window_location$url_encode(x){
return encodeURIComponent(x);
});
zframes.window_location.parse_querystring = (function zframes$window_location$parse_querystring(s){
return cljs.core.reduce.call(null,(function (acc,kv){
var vec__10131 = clojure.string.split.call(null,kv,/=/,(2));
var k = cljs.core.nth.call(null,vec__10131,(0),null);
var v = cljs.core.nth.call(null,vec__10131,(1),null);
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k),((clojure.string.ends_with_QMARK_.call(null,k,"*"))?cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,clojure.string.split.call(null,v,/,/)):zframes.window_location.url_decode.call(null,v)
));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,clojure.string.replace.call(null,s,/^\?/,""),/&/));
});
zframes.window_location.gen_query_string = (function zframes$window_location$gen_query_string(params){
return ["?",clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__10138){
var vec__10139 = p__10138;
var k = cljs.core.nth.call(null,vec__10139,(0),null);
var v = cljs.core.nth.call(null,vec__10139,(1),null);
if(cljs.core.set_QMARK_.call(null,v)){
return [cljs.core.name.call(null,k),"=",clojure.string.join.call(null,",",v)].join('');
} else {
return [cljs.core.name.call(null,k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zframes.window_location.url_encode.call(null,v))].join('');

}
}),params))].join('');
});
zframes.window_location.get_location = (function zframes$window_location$get_location(){
var loc = window.location;
var href = loc.href;
var hash = clojure.string.replace.call(null,(function (){var or__4185__auto__ = loc.hash;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})(),/^#/,"");
var hash_params = (function (){try{return zframes.window_location.parse_querystring.call(null,hash);
}catch (e10142){if((e10142 instanceof Error)){
var e = e10142;
return console.log(e);
} else {
throw e10142;

}
}})();
var search = loc.search;
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"hash","hash",-13781596),new cljs.core.Keyword(null,"protocol","protocol",652470118),new cljs.core.Keyword(null,"hash-params","hash-params",-6787222),new cljs.core.Keyword(null,"hostname","hostname",2105669933),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),new cljs.core.Keyword(null,"href","href",-793805698)],[hash,loc.protocol,hash_params,loc.hostname,search,loc.host,cljs.core.first.call(null,clojure.string.split.call(null,href,/#/)),loc.origin,zframes.window_location.parse_querystring.call(null,search),href]);
});
zframes.window_location.window_location = (function zframes$window_location$window_location(var_args){
var args__4795__auto__ = [];
var len__4789__auto___10145 = arguments.length;
var i__4790__auto___10146 = (0);
while(true){
if((i__4790__auto___10146 < len__4789__auto___10145)){
args__4795__auto__.push((arguments[i__4790__auto___10146]));

var G__10147 = (i__4790__auto___10146 + (1));
i__4790__auto___10146 = G__10147;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return zframes.window_location.window_location.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(zframes.window_location.window_location.cljs$core$IFn$_invoke$arity$variadic = (function (coef,opts){
return cljs.core.assoc.call(null,coef,new cljs.core.Keyword(null,"location","location",1815599388),zframes.window_location.get_location.call(null));
}));

(zframes.window_location.window_location.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(zframes.window_location.window_location.cljs$lang$applyTo = (function (seq10143){
var G__10144 = cljs.core.first.call(null,seq10143);
var seq10143__$1 = cljs.core.next.call(null,seq10143);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10144,seq10143__$1);
}));

re_frame.core.reg_cofx.call(null,new cljs.core.Keyword(null,"window-location","window-location",-1918888571),zframes.window_location.window_location);

//# sourceMappingURL=window_location.js.map
