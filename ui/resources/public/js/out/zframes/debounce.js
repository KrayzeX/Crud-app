// Compiled by ClojureScript 1.10.597 {}
goog.provide('zframes.debounce');
goog.require('cljs.core');
goog.require('re_frame.core');
if((typeof zframes !== 'undefined') && (typeof zframes.debounce !== 'undefined') && (typeof zframes.debounce.debounce_events !== 'undefined')){
} else {
zframes.debounce.debounce_events = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
zframes.debounce.debounce = (function zframes$debounce$debounce(var_args){
var args__4795__auto__ = [];
var len__4789__auto___10032 = arguments.length;
var i__4790__auto___10033 = (0);
while(true){
if((i__4790__auto___10033 < len__4789__auto___10032)){
args__4795__auto__.push((arguments[i__4790__auto___10033]));

var G__10034 = (i__4790__auto___10033 + (1));
i__4790__auto___10033 = G__10034;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return zframes.debounce.debounce.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(zframes.debounce.debounce.cljs$core$IFn$_invoke$arity$variadic = (function (p__10028,ms){
var vec__10029 = p__10028;
var nm = cljs.core.nth.call(null,vec__10029,(0),null);
var ev = vec__10029;
var temp__5735__auto___10035 = cljs.core.get.call(null,cljs.core.deref.call(null,zframes.debounce.debounce_events),nm);
if(cljs.core.truth_(temp__5735__auto___10035)){
var h_10036 = temp__5735__auto___10035;
clearTimeout(h_10036);
} else {
}

return cljs.core.swap_BANG_.call(null,zframes.debounce.debounce_events,cljs.core.assoc,nm,setTimeout((function (){
return re_frame.core.dispatch.call(null,ev);
}),(function (){var or__4185__auto__ = ms;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (400);
}
})()));
}));

(zframes.debounce.debounce.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(zframes.debounce.debounce.cljs$lang$applyTo = (function (seq10026){
var G__10027 = cljs.core.first.call(null,seq10026);
var seq10026__$1 = cljs.core.next.call(null,seq10026);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10027,seq10026__$1);
}));


//# sourceMappingURL=debounce.js.map
