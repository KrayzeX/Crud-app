// Compiled by ClojureScript 1.10.597 {}
goog.provide('re_frisk.core');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_frame.db');
goog.require('re_frame.subs');
goog.require('re_frisk.db');
goog.require('re_frisk.ui');
goog.require('re_frisk.diff.diff');
goog.require('reagent.core');
goog.require('re_frisk.utils');
goog.require('re_frame.trace');
goog.require('re_frisk.trace');
goog.require('re_frisk.subs_graph');
goog.require('re_frame.interop');
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.core !== 'undefined') && (typeof re_frisk.core.initialized !== 'undefined')){
} else {
re_frisk.core.initialized = cljs.core.atom.call(null,false);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.core !== 'undefined') && (typeof re_frisk.core.prev_event !== 'undefined')){
} else {
re_frisk.core.prev_event = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.core !== 'undefined') && (typeof re_frisk.core.re_frame_data !== 'undefined')){
} else {
re_frisk.core.re_frame_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app-db","app-db",865606302),reagent.core.atom.call(null,"not connected"),new cljs.core.Keyword(null,"events","events",1792552201),reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"subs","subs",-186681991),reagent.core.atom.call(null,"not connected")], null);
}
re_frisk.core.get_subs = (function re_frisk$core$get_subs(){
return cljs.core.reduce_kv.call(null,(function (p1__15050_SHARP_,p2__15051_SHARP_,p3__15052_SHARP_){
return cljs.core.assoc.call(null,p1__15050_SHARP_,p2__15051_SHARP_,cljs.core.deref.call(null,p3__15052_SHARP_));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction));
});
re_frisk.core.update_db_and_subs = (function re_frisk$core$update_db_and_subs(){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"subs","subs",-186681991).cljs$core$IFn$_invoke$arity$1(re_frisk.core.re_frame_data),re_frisk.core.get_subs.call(null));

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(re_frisk.core.re_frame_data),cljs.core.deref.call(null,re_frame.db.app_db));
});
re_frisk.core.trace_cb = (function re_frisk$core$trace_cb(traces){
if(cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.db.tool_state)))){
return null;
} else {
var normalized = re_frisk.trace.normalize_traces.call(null,traces);
var first_event = cljs.core.first.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(re_frisk.core.re_frame_data)));
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(re_frisk.core.re_frame_data),cljs.core.concat,cljs.core.map.call(null,re_frisk.trace.normalize_durations.call(null,(function (){var or__4185__auto__ = first_event;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.first.call(null,normalized);
}
})()),normalized));

re_frisk.subs_graph.update_subs.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"subs?","subs?",-2085240020),normalized));

return re_frisk.utils.call_and_chill.call(null,re_frisk.core.update_db_and_subs,(500));
}
});
re_frisk.core.post_event_callback = (function re_frisk$core$post_event_callback(value,queue){
if(cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.db.tool_state)))){
return null;
} else {
var app_db = cljs.core.deref.call(null,re_frame.db.app_db);
var indx = cljs.core.count.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(re_frisk.core.re_frame_data)));
var diff = re_frisk.diff.diff.diff.call(null,new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.core.prev_event)),app_db);
cljs.core.reset_BANG_.call(null,re_frisk.core.prev_event,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-db","app-db",865606302),app_db], null));

cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(re_frisk.core.re_frame_data),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"event","event",301435442),value,new cljs.core.Keyword(null,"app-db-diff","app-db-diff",709588713),diff,new cljs.core.Keyword(null,"indx","indx",1571035590),indx,new cljs.core.Keyword(null,"queue","queue",1455835879),queue,new cljs.core.Keyword(null,"truncated-name","truncated-name",1771353320),re_frisk.utils.truncate_name.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,value)))], null));

return re_frisk.utils.call_and_chill.call(null,re_frisk.core.update_db_and_subs,(500));
}
});
re_frisk.core.find_error_trace = (function re_frisk$core$find_error_trace(){
return null;
});
re_frisk.core.register_exception_handler = (function re_frisk$core$register_exception_handler(){
var gOldOnError = window.onerror;
return (window.onerror = (function (error_msg,url,line_number){
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(re_frisk.core.re_frame_data),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exception","exception",-335277064)], null),new cljs.core.Keyword(null,"truncated-name","truncated-name",1771353320),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"error?","error?",-460689159),true,new cljs.core.Keyword(null,"indx","indx",1571035590),cljs.core.count.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(re_frisk.core.re_frame_data))),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.merge.call(null,re_frisk.core.find_error_trace.call(null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"msg","msg",-1386103444),error_msg,new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"line","line",212345235),line_number], null))], null)], null));

if(cljs.core.truth_(gOldOnError)){
return gOldOnError.call(null,error_msg,url,line_number);
} else {
return false;
}
}));
});
re_frisk.core.enable_re_frisk_BANG_ = (function re_frisk$core$enable_re_frisk_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___15058 = arguments.length;
var i__4790__auto___15059 = (0);
while(true){
if((i__4790__auto___15059 < len__4789__auto___15058)){
args__4795__auto__.push((arguments[i__4790__auto___15059]));

var G__15060 = (i__4790__auto___15059 + (1));
i__4790__auto___15059 = G__15060;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__15054){
var vec__15055 = p__15054;
var opts = cljs.core.nth.call(null,vec__15055,(0),null);
if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.core.initialized))){
return null;
} else {
cljs.core.reset_BANG_.call(null,re_frisk.core.initialized,true);

cljs.core.swap_BANG_.call(null,re_frisk.db.tool_state,cljs.core.assoc,new cljs.core.Keyword(null,"opts","opts",155075701),opts);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
re_frame.trace.register_trace_cb.call(null,new cljs.core.Keyword(null,"re-frisk-trace","re-frisk-trace",912949928),re_frisk.core.trace_cb);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"events?","events?",-780512682).cljs$core$IFn$_invoke$arity$1(opts),false)){
} else {
cljs.core.reset_BANG_.call(null,re_frisk.core.prev_event,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-db","app-db",865606302),cljs.core.deref.call(null,re_frame.db.app_db)], null));

re_frame.core.add_post_event_callback.call(null,re_frisk.core.post_event_callback);
}
}

re_frisk.subs_graph.set_root_node.call(null,re_frame.interop.reagent_id.call(null,re_frame.db.app_db));

return setTimeout(re_frisk.ui.mount_internal,(100),re_frisk.core.re_frame_data);
}
}));

(re_frisk.core.enable_re_frisk_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frisk.core.enable_re_frisk_BANG_.cljs$lang$applyTo = (function (seq15053){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15053));
}));

re_frisk.core.enable = (function re_frisk$core$enable(var_args){
var args__4795__auto__ = [];
var len__4789__auto___15066 = arguments.length;
var i__4790__auto___15067 = (0);
while(true){
if((i__4790__auto___15067 < len__4789__auto___15066)){
args__4795__auto__.push((arguments[i__4790__auto___15067]));

var G__15068 = (i__4790__auto___15067 + (1));
i__4790__auto___15067 = G__15068;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return re_frisk.core.enable.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(re_frisk.core.enable.cljs$core$IFn$_invoke$arity$variadic = (function (p__15062){
var vec__15063 = p__15062;
var opts = cljs.core.nth.call(null,vec__15063,(0),null);
return re_frisk.core.enable_re_frisk_BANG_.call(null,opts);
}));

(re_frisk.core.enable.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frisk.core.enable.cljs$lang$applyTo = (function (seq15061){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15061));
}));


//# sourceMappingURL=core.js.map
