// Compiled by ClojureScript 1.10.597 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__8062 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__8063 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__8063);

try{try{var seq__8064 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__8065 = null;
var count__8066 = (0);
var i__8067 = (0);
while(true){
if((i__8067 < count__8066)){
var vec__8074 = cljs.core._nth.call(null,chunk__8065,i__8067);
var effect_key = cljs.core.nth.call(null,vec__8074,(0),null);
var effect_value = cljs.core.nth.call(null,vec__8074,(1),null);
var temp__5733__auto___8096 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___8096)){
var effect_fn_8097 = temp__5733__auto___8096;
effect_fn_8097.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__8098 = seq__8064;
var G__8099 = chunk__8065;
var G__8100 = count__8066;
var G__8101 = (i__8067 + (1));
seq__8064 = G__8098;
chunk__8065 = G__8099;
count__8066 = G__8100;
i__8067 = G__8101;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__8064);
if(temp__5735__auto__){
var seq__8064__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8064__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__8064__$1);
var G__8102 = cljs.core.chunk_rest.call(null,seq__8064__$1);
var G__8103 = c__4609__auto__;
var G__8104 = cljs.core.count.call(null,c__4609__auto__);
var G__8105 = (0);
seq__8064 = G__8102;
chunk__8065 = G__8103;
count__8066 = G__8104;
i__8067 = G__8105;
continue;
} else {
var vec__8077 = cljs.core.first.call(null,seq__8064__$1);
var effect_key = cljs.core.nth.call(null,vec__8077,(0),null);
var effect_value = cljs.core.nth.call(null,vec__8077,(1),null);
var temp__5733__auto___8106 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___8106)){
var effect_fn_8107 = temp__5733__auto___8106;
effect_fn_8107.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__8108 = cljs.core.next.call(null,seq__8064__$1);
var G__8109 = null;
var G__8110 = (0);
var G__8111 = (0);
seq__8064 = G__8108;
chunk__8065 = G__8109;
count__8066 = G__8110;
i__8067 = G__8111;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__7991__auto___8112 = re_frame.interop.now.call(null);
var duration__7992__auto___8113 = (end__7991__auto___8112 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__7992__auto___8113,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__7991__auto___8112);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__8062);
}} else {
var seq__8080 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__8081 = null;
var count__8082 = (0);
var i__8083 = (0);
while(true){
if((i__8083 < count__8082)){
var vec__8090 = cljs.core._nth.call(null,chunk__8081,i__8083);
var effect_key = cljs.core.nth.call(null,vec__8090,(0),null);
var effect_value = cljs.core.nth.call(null,vec__8090,(1),null);
var temp__5733__auto___8114 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___8114)){
var effect_fn_8115 = temp__5733__auto___8114;
effect_fn_8115.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__8116 = seq__8080;
var G__8117 = chunk__8081;
var G__8118 = count__8082;
var G__8119 = (i__8083 + (1));
seq__8080 = G__8116;
chunk__8081 = G__8117;
count__8082 = G__8118;
i__8083 = G__8119;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__8080);
if(temp__5735__auto__){
var seq__8080__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8080__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__8080__$1);
var G__8120 = cljs.core.chunk_rest.call(null,seq__8080__$1);
var G__8121 = c__4609__auto__;
var G__8122 = cljs.core.count.call(null,c__4609__auto__);
var G__8123 = (0);
seq__8080 = G__8120;
chunk__8081 = G__8121;
count__8082 = G__8122;
i__8083 = G__8123;
continue;
} else {
var vec__8093 = cljs.core.first.call(null,seq__8080__$1);
var effect_key = cljs.core.nth.call(null,vec__8093,(0),null);
var effect_value = cljs.core.nth.call(null,vec__8093,(1),null);
var temp__5733__auto___8124 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___8124)){
var effect_fn_8125 = temp__5733__auto___8124;
effect_fn_8125.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__8126 = cljs.core.next.call(null,seq__8080__$1);
var G__8127 = null;
var G__8128 = (0);
var G__8129 = (0);
seq__8080 = G__8126;
chunk__8081 = G__8127;
count__8082 = G__8128;
i__8083 = G__8129;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__8130 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__8131 = null;
var count__8132 = (0);
var i__8133 = (0);
while(true){
if((i__8133 < count__8132)){
var map__8138 = cljs.core._nth.call(null,chunk__8131,i__8133);
var map__8138__$1 = (((((!((map__8138 == null))))?(((((map__8138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8138):map__8138);
var effect = map__8138__$1;
var ms = cljs.core.get.call(null,map__8138__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__8138__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__8130,chunk__8131,count__8132,i__8133,map__8138,map__8138__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__8130,chunk__8131,count__8132,i__8133,map__8138,map__8138__$1,effect,ms,dispatch))
,ms);
}


var G__8142 = seq__8130;
var G__8143 = chunk__8131;
var G__8144 = count__8132;
var G__8145 = (i__8133 + (1));
seq__8130 = G__8142;
chunk__8131 = G__8143;
count__8132 = G__8144;
i__8133 = G__8145;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__8130);
if(temp__5735__auto__){
var seq__8130__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8130__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__8130__$1);
var G__8146 = cljs.core.chunk_rest.call(null,seq__8130__$1);
var G__8147 = c__4609__auto__;
var G__8148 = cljs.core.count.call(null,c__4609__auto__);
var G__8149 = (0);
seq__8130 = G__8146;
chunk__8131 = G__8147;
count__8132 = G__8148;
i__8133 = G__8149;
continue;
} else {
var map__8140 = cljs.core.first.call(null,seq__8130__$1);
var map__8140__$1 = (((((!((map__8140 == null))))?(((((map__8140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8140):map__8140);
var effect = map__8140__$1;
var ms = cljs.core.get.call(null,map__8140__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__8140__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__8130,chunk__8131,count__8132,i__8133,map__8140,map__8140__$1,effect,ms,dispatch,seq__8130__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__8130,chunk__8131,count__8132,i__8133,map__8140,map__8140__$1,effect,ms,dispatch,seq__8130__$1,temp__5735__auto__))
,ms);
}


var G__8150 = cljs.core.next.call(null,seq__8130__$1);
var G__8151 = null;
var G__8152 = (0);
var G__8153 = (0);
seq__8130 = G__8150;
chunk__8131 = G__8151;
count__8132 = G__8152;
i__8133 = G__8153;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__8154 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__8155 = null;
var count__8156 = (0);
var i__8157 = (0);
while(true){
if((i__8157 < count__8156)){
var event = cljs.core._nth.call(null,chunk__8155,i__8157);
re_frame.router.dispatch.call(null,event);


var G__8158 = seq__8154;
var G__8159 = chunk__8155;
var G__8160 = count__8156;
var G__8161 = (i__8157 + (1));
seq__8154 = G__8158;
chunk__8155 = G__8159;
count__8156 = G__8160;
i__8157 = G__8161;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__8154);
if(temp__5735__auto__){
var seq__8154__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8154__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__8154__$1);
var G__8162 = cljs.core.chunk_rest.call(null,seq__8154__$1);
var G__8163 = c__4609__auto__;
var G__8164 = cljs.core.count.call(null,c__4609__auto__);
var G__8165 = (0);
seq__8154 = G__8162;
chunk__8155 = G__8163;
count__8156 = G__8164;
i__8157 = G__8165;
continue;
} else {
var event = cljs.core.first.call(null,seq__8154__$1);
re_frame.router.dispatch.call(null,event);


var G__8166 = cljs.core.next.call(null,seq__8154__$1);
var G__8167 = null;
var G__8168 = (0);
var G__8169 = (0);
seq__8154 = G__8166;
chunk__8155 = G__8167;
count__8156 = G__8168;
i__8157 = G__8169;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__8170 = cljs.core.seq.call(null,value);
var chunk__8171 = null;
var count__8172 = (0);
var i__8173 = (0);
while(true){
if((i__8173 < count__8172)){
var event = cljs.core._nth.call(null,chunk__8171,i__8173);
clear_event.call(null,event);


var G__8174 = seq__8170;
var G__8175 = chunk__8171;
var G__8176 = count__8172;
var G__8177 = (i__8173 + (1));
seq__8170 = G__8174;
chunk__8171 = G__8175;
count__8172 = G__8176;
i__8173 = G__8177;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__8170);
if(temp__5735__auto__){
var seq__8170__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8170__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__8170__$1);
var G__8178 = cljs.core.chunk_rest.call(null,seq__8170__$1);
var G__8179 = c__4609__auto__;
var G__8180 = cljs.core.count.call(null,c__4609__auto__);
var G__8181 = (0);
seq__8170 = G__8178;
chunk__8171 = G__8179;
count__8172 = G__8180;
i__8173 = G__8181;
continue;
} else {
var event = cljs.core.first.call(null,seq__8170__$1);
clear_event.call(null,event);


var G__8182 = cljs.core.next.call(null,seq__8170__$1);
var G__8183 = null;
var G__8184 = (0);
var G__8185 = (0);
seq__8170 = G__8182;
chunk__8171 = G__8183;
count__8172 = G__8184;
i__8173 = G__8185;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
