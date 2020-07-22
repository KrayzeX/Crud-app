// Compiled by ClojureScript 1.10.597 {}
goog.provide('re_frisk.trace');
goog.require('cljs.core');
goog.require('re_frisk.diff.diff');
goog.require('re_frisk.utils');
goog.require('re_frame.trace');
goog.require('reagent.ratom');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.util');
goog.require('re_frame.interop');
goog.require('clojure.string');
goog.require('goog.object');
goog.require('re_frame.db');
re_frisk.trace.component_name = (function re_frisk$trace$component_name(c){
var G__9057 = c;
var G__9057__$1 = (((G__9057 == null))?null:G__9057.constructor);
if((G__9057__$1 == null)){
return null;
} else {
return G__9057__$1.displayName;
}
});
re_frisk.trace.operation_name = cljs.core.memoize.call(null,(function (c){
return cljs.core.last.call(null,clojure.string.split.call(null,re_frisk.trace.component_name.call(null,c),/ > /));
}));
re_frisk.trace.static_fns = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function re_frisk$trace$mp_render(){
var c = this;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__9058 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__9059 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frisk.trace.operation_name.call(null,c)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__9059);

try{try{if(reagent.impl.util._STAR_non_reactive_STAR_){
return reagent.impl.component.do_render.call(null,c);
} else {
var rat = goog.object.get(c,"cljsRatom");
var _ = reagent.impl.batching.mark_rendered.call(null,c);
var res = (((rat == null))?reagent.ratom.run_in_reaction.call(null,(function (){
return reagent.impl.component.do_render.call(null,c);
}),c,"cljsRatom",reagent.impl.batching.queue_render,reagent.impl.component.rat_opts):rat._run(false));
var cljs_ratom = goog.object.get(c,"cljsRatom");
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__7982__auto___9060 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cljs_ratom),new cljs.core.Keyword(null,"input-signals","input-signals",563633497),(cljs.core.truth_(cljs_ratom)?cljs.core.map.call(null,re_frame.interop.reagent_id,goog.object.get(cljs_ratom,"watching",new cljs.core.Keyword(null,"none","none",1333468478))):null)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cljs_ratom),new cljs.core.Keyword(null,"input-signals","input-signals",563633497),(cljs.core.truth_(cljs_ratom)?cljs.core.map.call(null,re_frame.interop.reagent_id,goog.object.get(cljs_ratom,"watching",new cljs.core.Keyword(null,"none","none",1333468478))):null)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__7982__auto___9060);

} else {
}

return res;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__7980__auto___9061 = re_frame.interop.now.call(null);
var duration__7981__auto___9062 = (end__7980__auto___9061 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__7981__auto___9062,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__7980__auto___9061);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__9058);
}} else {
if(reagent.impl.util._STAR_non_reactive_STAR_){
return reagent.impl.component.do_render.call(null,c);
} else {
var rat = goog.object.get(c,"cljsRatom");
var _ = reagent.impl.batching.mark_rendered.call(null,c);
var res = (((rat == null))?reagent.ratom.run_in_reaction.call(null,(function (){
return reagent.impl.component.do_render.call(null,c);
}),c,"cljsRatom",reagent.impl.batching.queue_render,reagent.impl.component.rat_opts):rat._run(false));
var cljs_ratom = goog.object.get(c,"cljsRatom");
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__7982__auto___9063 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cljs_ratom),new cljs.core.Keyword(null,"input-signals","input-signals",563633497),(cljs.core.truth_(cljs_ratom)?cljs.core.map.call(null,re_frame.interop.reagent_id,goog.object.get(cljs_ratom,"watching",new cljs.core.Keyword(null,"none","none",1333468478))):null)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cljs_ratom),new cljs.core.Keyword(null,"input-signals","input-signals",563633497),(cljs.core.truth_(cljs_ratom)?cljs.core.map.call(null,re_frame.interop.reagent_id,goog.object.get(cljs_ratom,"watching",new cljs.core.Keyword(null,"none","none",1333468478))):null)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__7982__auto___9063);

} else {
}

return res;
}
}
})], null);
re_frisk.trace.normalize_traces = (function re_frisk$trace$normalize_traces(traces){
return cljs.core.reduce.call(null,(function (items,p__9064){
var map__9065 = p__9064;
var map__9065__$1 = (((((!((map__9065 == null))))?(((((map__9065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9065):map__9065);
var trace = map__9065__$1;
var op_type = cljs.core.get.call(null,map__9065__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__9065__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var duration = cljs.core.get.call(null,map__9065__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var id = cljs.core.get.call(null,map__9065__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var start = cljs.core.get.call(null,map__9065__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var op_type__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,op_type),"sub"))?new cljs.core.Keyword(null,"sub","sub",-2093760025):op_type);
var item = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indx","indx",1571035590),id,new cljs.core.Keyword(null,"trace?","trace?",1730690679),true], null);
var G__9067 = op_type__$1;
var G__9067__$1 = (((G__9067 instanceof cljs.core.Keyword))?G__9067.fqn:null);
switch (G__9067__$1) {
case "event":
return cljs.core.conj.call(null,items,cljs.core.merge.call(null,cljs.core.dissoc.call(null,item,new cljs.core.Keyword(null,"trace?","trace?",1730690679)),cljs.core.assoc.call(null,cljs.core.select_keys.call(null,trace,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"end","end",-268185958)], null)),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(tags),new cljs.core.Keyword(null,"truncated-name","truncated-name",1771353320),re_frisk.utils.truncate_name.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(tags)))),new cljs.core.Keyword(null,"app-db-diff","app-db-diff",709588713),re_frisk.diff.diff.diff.call(null,new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645).cljs$core$IFn$_invoke$arity$1(tags),new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964).cljs$core$IFn$_invoke$arity$1(tags)))));

break;
case "event/handler":
var prev = cljs.core.peek.call(null,items);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$2(prev,new cljs.core.Keyword(null,"event","event",301435442)))){
return cljs.core.conj.call(null,cljs.core.pop.call(null,items),cljs.core.assoc.call(null,prev,new cljs.core.Keyword(null,"handler-duration","handler-duration",262132324),duration));
} else {
return cljs.core.conj.call(null,items,cljs.core.merge.call(null,item,cljs.core.select_keys.call(null,trace,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.Keyword(null,"duration","duration",1444101068)], null))));
}

break;
case "event/do-fx":
var prev = cljs.core.peek.call(null,items);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$2(prev,new cljs.core.Keyword(null,"event","event",301435442)))){
return cljs.core.conj.call(null,cljs.core.pop.call(null,items),cljs.core.assoc.call(null,prev,new cljs.core.Keyword(null,"fx-duration","fx-duration",1796312432),duration));
} else {
return cljs.core.conj.call(null,items,cljs.core.merge.call(null,item,cljs.core.select_keys.call(null,trace,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"duration","duration",1444101068)], null))));
}

break;
case "sub":
case "render":
var prev = cljs.core.peek.call(null,items);
var trace__$1 = cljs.core.select_keys.call(null,trace,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"end","end",-268185958)], null));
var trace__$2 = cljs.core.assoc.call(null,trace__$1,new cljs.core.Keyword(null,"duration-ms","duration-ms",1993555055),re_frisk.utils.str_ms.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(trace__$1)),new cljs.core.Keyword(null,"reaction","reaction",490869788),new cljs.core.Keyword(null,"reaction","reaction",490869788).cljs$core$IFn$_invoke$arity$1(tags),new cljs.core.Keyword(null,"cached?","cached?",86081880),new cljs.core.Keyword(null,"cached?","cached?",86081880).cljs$core$IFn$_invoke$arity$1(tags),new cljs.core.Keyword(null,"input-signals","input-signals",563633497),new cljs.core.Keyword(null,"input-signals","input-signals",563633497).cljs$core$IFn$_invoke$arity$1(tags));
if(cljs.core.truth_(new cljs.core.Keyword(null,"subs?","subs?",-2085240020).cljs$core$IFn$_invoke$arity$1(prev))){
return cljs.core.conj.call(null,cljs.core.pop.call(null,items),cljs.core.update.call(null,prev,new cljs.core.Keyword(null,"subs","subs",-186681991),cljs.core.conj,trace__$2));
} else {
return cljs.core.conj.call(null,items,cljs.core.merge.call(null,item,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"subs","subs",-186681991),new cljs.core.Keyword(null,"subs?","subs?",-2085240020),true,new cljs.core.Keyword(null,"subs","subs",-186681991),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [trace__$2], null),new cljs.core.Keyword(null,"app-db-reaction","app-db-reaction",-269835135),re_frame.interop.reagent_id.call(null,re_frame.db.app_db),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(trace__$2)], null)));
}

break;
default:
return items;

}
}),cljs.core.PersistentVector.EMPTY,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),traces));
});
re_frisk.trace.normalize_durations = (function re_frisk$trace$normalize_durations(first_event){
return (function (p__9069){
var map__9070 = p__9069;
var map__9070__$1 = (((((!((map__9070 == null))))?(((((map__9070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9070):map__9070);
var trace = map__9070__$1;
var subs_QMARK_ = cljs.core.get.call(null,map__9070__$1,new cljs.core.Keyword(null,"subs?","subs?",-2085240020));
var subs = cljs.core.get.call(null,map__9070__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var op_type = cljs.core.get.call(null,map__9070__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var handler_duration = cljs.core.get.call(null,map__9070__$1,new cljs.core.Keyword(null,"handler-duration","handler-duration",262132324));
var fx_duration = cljs.core.get.call(null,map__9070__$1,new cljs.core.Keyword(null,"fx-duration","fx-duration",1796312432));
var start = cljs.core.get.call(null,map__9070__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var map__9072 = (cljs.core.truth_(subs_QMARK_)?cljs.core.merge.call(null,trace,cljs.core.reduce.call(null,(function (acc,p__9073){
var map__9074 = p__9073;
var map__9074__$1 = (((((!((map__9074 == null))))?(((((map__9074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9074):map__9074);
var duration = cljs.core.get.call(null,map__9074__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var op_type__$1 = cljs.core.get.call(null,map__9074__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var end = cljs.core.get.call(null,map__9074__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var cached_QMARK_ = cljs.core.get.call(null,map__9074__$1,new cljs.core.Keyword(null,"cached?","cached?",86081880));
var G__9076 = cljs.core.update.call(null,acc,new cljs.core.Keyword(null,"duration","duration",1444101068),cljs.core._PLUS_,duration);
var G__9076__$1 = cljs.core.assoc.call(null,G__9076,new cljs.core.Keyword(null,"end","end",-268185958),end)
;
var G__9076__$2 = ((cljs.core._EQ_.call(null,op_type__$1,new cljs.core.Keyword("sub","run","sub/run",-1821315581)))?cljs.core.update.call(null,cljs.core.update.call(null,G__9076__$1,new cljs.core.Keyword(null,"run-count","run-count",-924546145),cljs.core.inc),new cljs.core.Keyword(null,"run-duration","run-duration",1321930251),cljs.core._PLUS_,duration):G__9076__$1);
var G__9076__$3 = ((((cljs.core._EQ_.call(null,op_type__$1,new cljs.core.Keyword("sub","create","sub/create",-1301317560))) && (cljs.core.not.call(null,cached_QMARK_))))?cljs.core.update.call(null,cljs.core.update.call(null,G__9076__$2,new cljs.core.Keyword(null,"created-count","created-count",-1708534686),cljs.core.inc),new cljs.core.Keyword(null,"created-duration","created-duration",-1526658187),cljs.core._PLUS_,duration):G__9076__$2);
var G__9076__$4 = (cljs.core.truth_(((cljs.core._EQ_.call(null,op_type__$1,new cljs.core.Keyword("sub","create","sub/create",-1301317560)))?cached_QMARK_:false))?cljs.core.update.call(null,cljs.core.update.call(null,G__9076__$3,new cljs.core.Keyword(null,"created-count-cached","created-count-cached",1601348000),cljs.core.inc),new cljs.core.Keyword(null,"created-duration-cached","created-duration-cached",1269460585),cljs.core._PLUS_,duration):G__9076__$3);
var G__9076__$5 = ((cljs.core._EQ_.call(null,op_type__$1,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536)))?cljs.core.update.call(null,cljs.core.update.call(null,G__9076__$4,new cljs.core.Keyword(null,"disposed-count","disposed-count",-457935431),cljs.core.inc),new cljs.core.Keyword(null,"disposed-duration","disposed-duration",-1737482274),cljs.core._PLUS_,duration):G__9076__$4);
if(cljs.core._EQ_.call(null,op_type__$1,new cljs.core.Keyword(null,"render","render",-1408033454))){
return cljs.core.update.call(null,cljs.core.update.call(null,G__9076__$5,new cljs.core.Keyword(null,"render-count","render-count",-875399191),cljs.core.inc),new cljs.core.Keyword(null,"render-duration","render-duration",1704092121),cljs.core._PLUS_,duration);
} else {
return G__9076__$5;
}
}),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"created-count-cached","created-count-cached",1601348000),new cljs.core.Keyword(null,"created-count","created-count",-1708534686),new cljs.core.Keyword(null,"created-duration-cached","created-duration-cached",1269460585),new cljs.core.Keyword(null,"render-count","render-count",-875399191),new cljs.core.Keyword(null,"run-duration","run-duration",1321930251),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"created-duration","created-duration",-1526658187),new cljs.core.Keyword(null,"disposed-count","disposed-count",-457935431),new cljs.core.Keyword(null,"render-duration","render-duration",1704092121),new cljs.core.Keyword(null,"disposed-duration","disposed-duration",-1737482274),new cljs.core.Keyword(null,"run-count","run-count",-924546145)],[(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)]),subs)):((cljs.core._EQ_.call(null,op_type,new cljs.core.Keyword(null,"event","event",301435442)))?(function (){var handler_fx_duration = (handler_duration + fx_duration);
return cljs.core.assoc.call(null,trace,new cljs.core.Keyword(null,"handler-fx-duration","handler-fx-duration",1974562002),handler_fx_duration,new cljs.core.Keyword(null,"handler-fx-duration-ms","handler-fx-duration-ms",-118285662),re_frisk.utils.str_ms.call(null,handler_fx_duration));
})():trace
));
var map__9072__$1 = (((((!((map__9072 == null))))?(((((map__9072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9072):map__9072);
var trace__$1 = map__9072__$1;
var render_duration = cljs.core.get.call(null,map__9072__$1,new cljs.core.Keyword(null,"render-duration","render-duration",1704092121));
var disposed_duration = cljs.core.get.call(null,map__9072__$1,new cljs.core.Keyword(null,"disposed-duration","disposed-duration",-1737482274));
var handler_duration__$1 = cljs.core.get.call(null,map__9072__$1,new cljs.core.Keyword(null,"handler-duration","handler-duration",262132324));
var created_duration_cached = cljs.core.get.call(null,map__9072__$1,new cljs.core.Keyword(null,"created-duration-cached","created-duration-cached",1269460585));
var run_duration = cljs.core.get.call(null,map__9072__$1,new cljs.core.Keyword(null,"run-duration","run-duration",1321930251));
var start__$1 = cljs.core.get.call(null,map__9072__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var duration = cljs.core.get.call(null,map__9072__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var fx_duration__$1 = cljs.core.get.call(null,map__9072__$1,new cljs.core.Keyword(null,"fx-duration","fx-duration",1796312432));
var created_duration = cljs.core.get.call(null,map__9072__$1,new cljs.core.Keyword(null,"created-duration","created-duration",-1526658187));
var G__9078 = trace__$1;
var G__9078__$1 = (cljs.core.truth_(duration)?cljs.core.assoc.call(null,G__9078,new cljs.core.Keyword(null,"duration-ms","duration-ms",1993555055),re_frisk.utils.str_ms.call(null,duration)):G__9078);
var G__9078__$2 = (cljs.core.truth_(handler_duration__$1)?cljs.core.assoc.call(null,G__9078__$1,new cljs.core.Keyword(null,"handler-duration-ms","handler-duration-ms",-491924416),re_frisk.utils.str_ms.call(null,handler_duration__$1)):G__9078__$1);
var G__9078__$3 = (cljs.core.truth_(fx_duration__$1)?cljs.core.assoc.call(null,G__9078__$2,new cljs.core.Keyword(null,"fx-duration-ms","fx-duration-ms",-1014211328),re_frisk.utils.str_ms.call(null,fx_duration__$1)):G__9078__$2);
var G__9078__$4 = (cljs.core.truth_(run_duration)?cljs.core.assoc.call(null,G__9078__$3,new cljs.core.Keyword(null,"run-duration-ms","run-duration-ms",-1510786585),re_frisk.utils.str_ms.call(null,run_duration)):G__9078__$3);
var G__9078__$5 = (cljs.core.truth_(created_duration)?cljs.core.assoc.call(null,G__9078__$4,new cljs.core.Keyword(null,"created-duration-ms","created-duration-ms",1987553257),re_frisk.utils.str_ms.call(null,created_duration)):G__9078__$4);
var G__9078__$6 = (cljs.core.truth_(created_duration_cached)?cljs.core.assoc.call(null,G__9078__$5,new cljs.core.Keyword(null,"created-duration-cached-ms","created-duration-cached-ms",1699705669),re_frisk.utils.str_ms.call(null,created_duration_cached)):G__9078__$5);
var G__9078__$7 = (cljs.core.truth_(disposed_duration)?cljs.core.assoc.call(null,G__9078__$6,new cljs.core.Keyword(null,"disposed-duration-ms","disposed-duration-ms",-1456969189),re_frisk.utils.str_ms.call(null,disposed_duration)):G__9078__$6);
var G__9078__$8 = (cljs.core.truth_(render_duration)?cljs.core.assoc.call(null,G__9078__$7,new cljs.core.Keyword(null,"render-duration-ms","render-duration-ms",-757772115),re_frisk.utils.str_ms.call(null,render_duration)):G__9078__$7);
return cljs.core.assoc.call(null,G__9078__$8,new cljs.core.Keyword(null,"position","position",-2011731912),(start__$1 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(first_event)));

});
});

//# sourceMappingURL=trace.js.map
