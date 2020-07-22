// Compiled by ClojureScript 1.10.597 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__8488){
var map__8489 = p__8488;
var map__8489__$1 = (((((!((map__8489 == null))))?(((((map__8489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8489):map__8489);
var operation = cljs.core.get.call(null,map__8489__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__8489__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__8489__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__8489__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4185__auto__ = child_of;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__8491_8511 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__8492_8512 = null;
var count__8493_8513 = (0);
var i__8494_8514 = (0);
while(true){
if((i__8494_8514 < count__8493_8513)){
var vec__8503_8515 = cljs.core._nth.call(null,chunk__8492_8512,i__8494_8514);
var k_8516 = cljs.core.nth.call(null,vec__8503_8515,(0),null);
var cb_8517 = cljs.core.nth.call(null,vec__8503_8515,(1),null);
try{cb_8517.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e8506){var e_8518 = e8506;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_8516,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_8518);
}

var G__8519 = seq__8491_8511;
var G__8520 = chunk__8492_8512;
var G__8521 = count__8493_8513;
var G__8522 = (i__8494_8514 + (1));
seq__8491_8511 = G__8519;
chunk__8492_8512 = G__8520;
count__8493_8513 = G__8521;
i__8494_8514 = G__8522;
continue;
} else {
var temp__5735__auto___8523 = cljs.core.seq.call(null,seq__8491_8511);
if(temp__5735__auto___8523){
var seq__8491_8524__$1 = temp__5735__auto___8523;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8491_8524__$1)){
var c__4609__auto___8525 = cljs.core.chunk_first.call(null,seq__8491_8524__$1);
var G__8526 = cljs.core.chunk_rest.call(null,seq__8491_8524__$1);
var G__8527 = c__4609__auto___8525;
var G__8528 = cljs.core.count.call(null,c__4609__auto___8525);
var G__8529 = (0);
seq__8491_8511 = G__8526;
chunk__8492_8512 = G__8527;
count__8493_8513 = G__8528;
i__8494_8514 = G__8529;
continue;
} else {
var vec__8507_8530 = cljs.core.first.call(null,seq__8491_8524__$1);
var k_8531 = cljs.core.nth.call(null,vec__8507_8530,(0),null);
var cb_8532 = cljs.core.nth.call(null,vec__8507_8530,(1),null);
try{cb_8532.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e8510){var e_8533 = e8510;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_8531,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_8533);
}

var G__8534 = cljs.core.next.call(null,seq__8491_8524__$1);
var G__8535 = null;
var G__8536 = (0);
var G__8537 = (0);
seq__8491_8511 = G__8534;
chunk__8492_8512 = G__8535;
count__8493_8513 = G__8536;
i__8494_8514 = G__8537;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map
