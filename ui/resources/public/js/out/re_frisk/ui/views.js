// Compiled by ClojureScript 1.10.597 {}
goog.provide('re_frisk.ui.views');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_com.core');
goog.require('re_frisk.ui.events');
goog.require('re_frisk.ui.components.splits');
goog.require('re_frisk.ui.components.frisk');
goog.require('re_frisk.utils');
goog.require('re_frisk.ui.timeline');
goog.require('re_frisk.ui.components.components');
goog.require('re_frisk.ui.subs');
goog.require('re_frisk.ui.components.github');
re_frisk.ui.views.subs_view = (function re_frisk$ui$views$subs_view(subs,checkbox_sorted_val){
var state_atom = reagent.core.atom.call(null,re_frisk.ui.components.frisk.expand_by_default);
return (function (_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.Root,re_frisk.utils.sort_map.call(null,cljs.core.deref.call(null,subs),cljs.core.deref.call(null,checkbox_sorted_val),checkbox_sorted_val),(0),state_atom], null);
});
});
re_frisk.ui.views.app_db_view = (function re_frisk$ui$views$app_db_view(app_db,tool_state){
var state_atom = reagent.core.atom.call(null,re_frisk.ui.components.frisk.expand_by_default);
var checkbox_sorted_val = reagent.core.atom.call(null,true);
return (function (_){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"app-db"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"20px"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,new cljs.core.Keyword(null,"model","model",331153215),checkbox_sorted_val,new cljs.core.Keyword(null,"on-change","on-change",-732046149),re_frisk.utils.on_change_sort.call(null,app_db,checkbox_sorted_val,new cljs.core.Keyword(null,"re-frisk-sorted","re-frisk-sorted",-1702831647)),new cljs.core.Keyword(null,"label","label",1718410804),"sort"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"app-db-delta-error","app-db-delta-error",1501760555).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tool_state)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"update error",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"4px",new cljs.core.Keyword(null,"color","color",1011675173),"#df691a"], null)], null):null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.Root,re_frisk.utils.sort_map.call(null,cljs.core.deref.call(null,app_db),cljs.core.deref.call(null,checkbox_sorted_val),checkbox_sorted_val),(0),state_atom], null)], null)], null);
});
});
re_frisk.ui.views.frisks_view = (function re_frisk$ui$views$frisks_view(re_frame_data,tool_state,doc){
var subs_checkbox_sorted_val = reagent.core.atom.call(null,true);
var open_event_split_QMARK_ = reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.boolean$.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,tool_state),new cljs.core.Keyword(null,"selected-event","selected-event",898030638)));
}));
return (function (_,___$1,___$2){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#4e5d6c"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Active subscriptions"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"20px"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,new cljs.core.Keyword(null,"model","model",331153215),subs_checkbox_sorted_val,new cljs.core.Keyword(null,"on-change","on-change",-732046149),re_frisk.utils.on_change_sort.call(null,new cljs.core.Keyword(null,"subs","subs",-186681991).cljs$core$IFn$_invoke$arity$1(re_frame_data),subs_checkbox_sorted_val,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"re-frisk-sorted","re-frisk-sorted",-1702831647)], null),cljs.core.PersistentVector.EMPTY], null)),new cljs.core.Keyword(null,"label","label",1718410804),"sort"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"subs-delta-error","subs-delta-error",-356773612).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tool_state)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"update error",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"4px",new cljs.core.Keyword(null,"color","color",1011675173),"#df691a"], null)], null):null)], null)], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.splits.v_split,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"initial-split","initial-split",2072601727),"0",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null),new cljs.core.Keyword(null,"document","document",-1329188687),doc,new cljs.core.Keyword(null,"panel-1","panel-1",998274139),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.views.subs_view,new cljs.core.Keyword(null,"subs","subs",-186681991).cljs$core$IFn$_invoke$arity$1(re_frame_data),subs_checkbox_sorted_val], null),new cljs.core.Keyword(null,"panel-2","panel-2",244198907),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.splits.v_split,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"initial-split","initial-split",2072601727),"100",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null),new cljs.core.Keyword(null,"document","document",-1329188687),doc,new cljs.core.Keyword(null,"open-bottom-split?","open-bottom-split?",953160965),cljs.core.deref.call(null,open_event_split_QMARK_),new cljs.core.Keyword(null,"panel-1","panel-1",998274139),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#4e5d6c"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.views.app_db_view,new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(re_frame_data),tool_state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.events.event_bar,tool_state], null)], null)], null),new cljs.core.Keyword(null,"panel-2","panel-2",244198907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.events.frisk_view,tool_state], null)], null)], null)], null)], null);
});
});
re_frisk.ui.views.controls = (function re_frisk$ui$views$controls(re_frame_data,tool_state){
var map__15011 = cljs.core.deref.call(null,tool_state);
var map__15011__$1 = (((((!((map__15011 == null))))?(((((map__15011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15011):map__15011);
var timeline_opened_QMARK_ = cljs.core.get.call(null,map__15011__$1,new cljs.core.Keyword(null,"timeline-opened?","timeline-opened?",1560712236));
var paused_QMARK_ = cljs.core.get.call(null,map__15011__$1,new cljs.core.Keyword(null,"paused?","paused?",-135058553));
var graph_opened_QMARK_ = cljs.core.get.call(null,map__15011__$1,new cljs.core.Keyword(null,"graph-opened?","graph-opened?",153449318));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#4e5d6c"], null),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.components.label_button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,tool_state,cljs.core.update,new cljs.core.Keyword(null,"paused?","paused?",-135058553),cljs.core.not);
}),new cljs.core.Keyword(null,"active?","active?",459499776),paused_QMARK_], null),(cljs.core.truth_(paused_QMARK_)?"Resume":"Pause")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"5px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.components.label_button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.PersistentVector.EMPTY);

return cljs.core.swap_BANG_.call(null,tool_state,cljs.core.dissoc,new cljs.core.Keyword(null,"selected-event","selected-event",898030638));
}),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),"Clear"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.components.label_button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.call(null,tool_state,cljs.core.assoc,new cljs.core.Keyword(null,"graph-opened?","graph-opened?",153449318),false);

return cljs.core.swap_BANG_.call(null,tool_state,cljs.core.update,new cljs.core.Keyword(null,"timeline-opened?","timeline-opened?",1560712236),cljs.core.not);
}),new cljs.core.Keyword(null,"active?","active?",459499776),timeline_opened_QMARK_], null),"Timeline"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"5px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.components.label_button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.call(null,tool_state,cljs.core.assoc,new cljs.core.Keyword(null,"timeline-opened?","timeline-opened?",1560712236),false);

return cljs.core.swap_BANG_.call(null,tool_state,cljs.core.update,new cljs.core.Keyword(null,"graph-opened?","graph-opened?",153449318),cljs.core.not);
}),new cljs.core.Keyword(null,"active?","active?",459499776),graph_opened_QMARK_], null),"Subs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"15px"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.github.link], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"5px"], null)], null)], null);
});
re_frisk.ui.views.main_view = (function re_frisk$ui$views$main_view(var_args){
var args__4795__auto__ = [];
var len__4789__auto___15020 = arguments.length;
var i__4790__auto___15021 = (0);
while(true){
if((i__4790__auto___15021 < len__4789__auto___15020)){
args__4795__auto__.push((arguments[i__4790__auto___15021]));

var G__15022 = (i__4790__auto___15021 + (1));
i__4790__auto___15021 = G__15022;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return re_frisk.ui.views.main_view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(re_frisk.ui.views.main_view.cljs$core$IFn$_invoke$arity$variadic = (function (re_frame_data,tool_state,p__15016){
var vec__15017 = p__15016;
var doc = cljs.core.nth.call(null,vec__15017,(0),null);
var open_graph_split_QMARK_ = reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,tool_state),new cljs.core.Keyword(null,"graph-opened?","graph-opened?",153449318));
}));
return (function (){
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.splits.v_split,new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"initial-split","initial-split",2072601727),"0",new cljs.core.Keyword(null,"document","document",-1329188687),doc,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null),new cljs.core.Keyword(null,"open-bottom-split?","open-bottom-split?",953160965),cljs.core.deref.call(null,open_graph_split_QMARK_),new cljs.core.Keyword(null,"close-bottom-split?","close-bottom-split?",1606756910),cljs.core.not.call(null,cljs.core.deref.call(null,open_graph_split_QMARK_)),new cljs.core.Keyword(null,"panel-1","panel-1",998274139),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.subs.subs_visibility,re_frame_data,tool_state], null),new cljs.core.Keyword(null,"panel-2","panel-2",244198907),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.timeline.timeline_visibility,re_frame_data,tool_state], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.views.controls,re_frame_data,tool_state], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.splits.h_split,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"initial-split","initial-split",2072601727),"25",new cljs.core.Keyword(null,"document","document",-1329188687),doc,new cljs.core.Keyword(null,"panel-1","panel-1",998274139),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.events.events_list_view,re_frame_data,tool_state], null),new cljs.core.Keyword(null,"panel-2","panel-2",244198907),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.views.frisks_view,re_frame_data,tool_state,doc], null)], null)], null)], null)], null);
});
}));

(re_frisk.ui.views.main_view.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_frisk.ui.views.main_view.cljs$lang$applyTo = (function (seq15013){
var G__15014 = cljs.core.first.call(null,seq15013);
var seq15013__$1 = cljs.core.next.call(null,seq15013);
var G__15015 = cljs.core.first.call(null,seq15013__$1);
var seq15013__$2 = cljs.core.next.call(null,seq15013__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15014,G__15015,seq15013__$2);
}));


//# sourceMappingURL=views.js.map
