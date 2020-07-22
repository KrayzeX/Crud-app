// Compiled by ClojureScript 1.10.597 {}
goog.provide('re_frisk.ui.events');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('clojure.string');
goog.require('re_com.core');
goog.require('re_frisk.ui.components.frisk');
goog.require('re_frisk.ui.components.components');
goog.require('re_frisk.ui.trace');
goog.require('re_frisk.utils');
goog.require('re_frisk.ui.subs');
re_frisk.ui.events.event_item = (function re_frisk$ui$events$event_item(_,tool_state){
return (function (p__14962,___$1){
var map__14963 = p__14962;
var map__14963__$1 = (((((!((map__14963 == null))))?(((((map__14963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14963):map__14963);
var item = map__14963__$1;
var color = cljs.core.get.call(null,map__14963__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var name = cljs.core.get.call(null,map__14963__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var app_db_diff = cljs.core.get.call(null,map__14963__$1,new cljs.core.Keyword(null,"app-db-diff","app-db-diff",709588713));
var selected_QMARK_ = cljs.core.get.call(null,map__14963__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var op_type = cljs.core.get.call(null,map__14963__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var indx = cljs.core.get.call(null,map__14963__$1,new cljs.core.Keyword(null,"indx","indx",1571035590));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"id","id",-1388402092),["events-list-item",cljs.core.str.cljs$core$IFn$_invoke$arity$1(indx)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),["list-group-item",(cljs.core.truth_(selected_QMARK_)?" active":null)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"padding","padding",1660304693),(5),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(13),new cljs.core.Keyword(null,"border-left-width","border-left-width",2037218085),(2),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),(((((app_db_diff == null)) && (cljs.core.not.call(null,selected_QMARK_))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"0.7"], null):null),((clojure.string.blank_QMARK_.call(null,color))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-left-color","border-left-color",-1166146583),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)].join('')], null))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
cljs.core.swap_BANG_.call(null,tool_state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-event","selected-event",898030638),item);

re_frisk.utils.scroll_timeline_event_item.call(null,new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tool_state)),indx);

return event.preventDefault();
})], null),(cljs.core.truth_(op_type)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.trace.trace_event_item,item], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),name], null))], null);
});
});
re_frisk.ui.events.event_list_item = (function re_frisk$ui$events$event_list_item(_,tool_state){
return (function (p__14965,___$1){
var map__14966 = p__14965;
var map__14966__$1 = (((((!((map__14966 == null))))?(((((map__14966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14966):map__14966);
var item = map__14966__$1;
var trace_QMARK_ = cljs.core.get.call(null,map__14966__$1,new cljs.core.Keyword(null,"trace?","trace?",1730690679));
var op_type = cljs.core.get.call(null,map__14966__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
if(cljs.core.truth_((function (){var and__4174__auto__ = trace_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"event","event",301435442),op_type);
} else {
return and__4174__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.trace.trace_item,item,tool_state], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.events.event_item,item,tool_state], null);
}
});
});
re_frisk.ui.events.events_scroller = (function re_frisk$ui$events$events_scroller(filtered_events,tool_state){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"debugger-messages",new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$){
var n = reagent.dom.dom_node.call(null,this$);
if(cljs.core.truth_(new cljs.core.Keyword(null,"scroll-bottom?","scroll-bottom?",-1686598134).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tool_state)))){
return (n.scrollTop = n.scrollHeight);
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.components.scroller,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-scroll","on-scroll",1590848677),(function (p1__14968_SHARP_){
var t = p1__14968_SHARP_.target;
return cljs.core.swap_BANG_.call(null,tool_state,cljs.core.assoc,new cljs.core.Keyword(null,"scroll-bottom?","scroll-bottom?",-1686598134),cljs.core._EQ_.call(null,(t.scrollHeight - t.offsetHeight),t.scrollTop));
})], null),(function (){var iter__4582__auto__ = (function re_frisk$ui$events$events_scroller_$_iter__14969(s__14970){
return (new cljs.core.LazySeq(null,(function (){
var s__14970__$1 = s__14970;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__14970__$1);
if(temp__5735__auto__){
var s__14970__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14970__$2)){
var c__4580__auto__ = cljs.core.chunk_first.call(null,s__14970__$2);
var size__4581__auto__ = cljs.core.count.call(null,c__4580__auto__);
var b__14972 = cljs.core.chunk_buffer.call(null,size__4581__auto__);
if((function (){var i__14971 = (0);
while(true){
if((i__14971 < size__4581__auto__)){
var item = cljs.core._nth.call(null,c__4580__auto__,i__14971);
cljs.core.chunk_append.call(null,b__14972,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.events.event_list_item,item,tool_state], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["item",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"indx","indx",1571035590).cljs$core$IFn$_invoke$arity$1(item))].join('')], null)));

var G__14973 = (i__14971 + (1));
i__14971 = G__14973;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14972),re_frisk$ui$events$events_scroller_$_iter__14969.call(null,cljs.core.chunk_rest.call(null,s__14970__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14972),null);
}
} else {
var item = cljs.core.first.call(null,s__14970__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.events.event_list_item,item,tool_state], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["item",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"indx","indx",1571035590).cljs$core$IFn$_invoke$arity$1(item))].join('')], null)),re_frisk$ui$events$events_scroller_$_iter__14969.call(null,cljs.core.rest.call(null,s__14970__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__.call(null,cljs.core.deref.call(null,filtered_events));
})()], null);
})], null));
});
re_frisk.ui.events.events_list_view = (function re_frisk$ui$events$events_list_view(re_frame_data,tool_state){
var truncate_checkbox_val = reagent.core.atom.call(null,true);
var checkbox_trace_val = reagent.core.atom.call(null,false);
var text_val = reagent.core.atom.call(null,"");
var re_frame_events = new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(re_frame_data);
var colored_and_selected = reagent.ratom.make_reaction.call(null,(function (){
var clrs = new cljs.core.Keyword(null,"events-colors","events-colors",-428819032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tool_state));
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__14974_SHARP_){
return cljs.core.assoc.call(null,p1__14974_SHARP_,new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core._EQ_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,tool_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-event","selected-event",898030638),new cljs.core.Keyword(null,"indx","indx",1571035590)], null)),new cljs.core.Keyword(null,"indx","indx",1571035590).cljs$core$IFn$_invoke$arity$1(p1__14974_SHARP_)),new cljs.core.Keyword(null,"name","name",1843675177),(cljs.core.truth_(cljs.core.deref.call(null,truncate_checkbox_val))?new cljs.core.Keyword(null,"truncated-name","truncated-name",1771353320).cljs$core$IFn$_invoke$arity$1(p1__14974_SHARP_):cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(p1__14974_SHARP_)))),new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.get.call(null,clrs,cljs.core.first.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(p1__14974_SHARP_))));
}),cljs.core.deref.call(null,re_frame_events)));
}));
var traces_filtered_events = reagent.ratom.make_reaction.call(null,(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,checkbox_trace_val))){
return cljs.core.deref.call(null,colored_and_selected);
} else {
return cljs.core.remove.call(null,new cljs.core.Keyword(null,"trace?","trace?",1730690679),cljs.core.deref.call(null,colored_and_selected));
}
}));
var filtered_events = reagent.ratom.make_reaction.call(null,(function (){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,text_val),"")){
return cljs.core.deref.call(null,traces_filtered_events);
} else {
return cljs.core.filter.call(null,re_frisk.utils.filter_event.call(null,cljs.core.deref.call(null,text_val)),cljs.core.deref.call(null,traces_filtered_events));
}
}));
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"padding","padding",1660304693),"0"], null),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"model","model",331153215),text_val,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Filter events",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__14975_SHARP_){
return cljs.core.reset_BANG_.call(null,text_val,p1__14975_SHARP_);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.components.small_button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,text_val,"");
})], null),"X"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,new cljs.core.Keyword(null,"model","model",331153215),truncate_checkbox_val,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__14976_SHARP_){
return cljs.core.reset_BANG_.call(null,truncate_checkbox_val,p1__14976_SHARP_);
}),new cljs.core.Keyword(null,"label","label",1718410804),"truncate"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,new cljs.core.Keyword(null,"model","model",331153215),checkbox_trace_val,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__14977_SHARP_){
return cljs.core.reset_BANG_.call(null,checkbox_trace_val,p1__14977_SHARP_);
}),new cljs.core.Keyword(null,"label","label",1718410804),"traces"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.events.events_scroller,filtered_events,tool_state], null)], null)], null);
});
});
re_frisk.ui.events.event_bar = (function re_frisk$ui$events$event_bar(tool_state){
var evnt_key = reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,tool_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-event","selected-event",898030638),new cljs.core.Keyword(null,"event","event",301435442)], null)));
}));
var subs_QMARK_ = reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,tool_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-event","selected-event",898030638),new cljs.core.Keyword(null,"subs?","subs?",-2085240020)], null));
}));
var subs_graph_opened_QMARK_ = reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,tool_state),new cljs.core.Keyword(null,"subs-graph-opened?","subs-graph-opened?",2059765056));
}));
var color = reagent.ratom.make_reaction.call(null,(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,evnt_key))){
return cljs.core.deref.call(null,evnt_key).call(null,new cljs.core.Keyword(null,"events-colors","events-colors",-428819032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tool_state)));
} else {
return "";
}
}));
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#4e5d6c"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"4px"], null),new cljs.core.Keyword(null,"label","label",1718410804),(cljs.core.truth_(cljs.core.deref.call(null,evnt_key))?"Event":(cljs.core.truth_(cljs.core.deref.call(null,subs_QMARK_))?"Subscriptions":"Event / Trace"
))], null),(cljs.core.truth_(cljs.core.deref.call(null,subs_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.components.label_button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,tool_state,cljs.core.update,new cljs.core.Keyword(null,"subs-graph-opened?","subs-graph-opened?",2059765056),cljs.core.not);
}),new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core.deref.call(null,subs_graph_opened_QMARK_)], null),"Graph"], null):null),(cljs.core.truth_(cljs.core.deref.call(null,evnt_key))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.deref.call(null,evnt_key),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"4px",new cljs.core.Keyword(null,"color","color",1011675173),"#df691a"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"#",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"4px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"60px"], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"000000",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"max-length","max-length",-254826109),"6",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,color),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__14978_SHARP_){
return cljs.core.swap_BANG_.call(null,tool_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"events-colors","events-colors",-428819032),cljs.core.deref.call(null,evnt_key)], null),p1__14978_SHARP_.target.value);
})], null)], null)], null)], null):null)], null)], null);
});
});
re_frisk.ui.events.frisk_view = (function re_frisk$ui$events$frisk_view(tool_state){
var state_atom = reagent.core.atom.call(null,re_frisk.ui.components.frisk.expand_by_default);
return (function (_){
var subs_graph_opened_QMARK_ = new cljs.core.Keyword(null,"subs-graph-opened?","subs-graph-opened?",2059765056).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tool_state));
var map__14979 = new cljs.core.Keyword(null,"selected-event","selected-event",898030638).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tool_state));
var map__14979__$1 = (((((!((map__14979 == null))))?(((((map__14979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14979):map__14979);
var item = map__14979__$1;
var event = cljs.core.get.call(null,map__14979__$1,new cljs.core.Keyword(null,"event","event",301435442));
var app_db_diff = cljs.core.get.call(null,map__14979__$1,new cljs.core.Keyword(null,"app-db-diff","app-db-diff",709588713));
var trace_QMARK_ = cljs.core.get.call(null,map__14979__$1,new cljs.core.Keyword(null,"trace?","trace?",1730690679));
var duration_ms = cljs.core.get.call(null,map__14979__$1,new cljs.core.Keyword(null,"duration-ms","duration-ms",1993555055));
var handler_duration_ms = cljs.core.get.call(null,map__14979__$1,new cljs.core.Keyword(null,"handler-duration-ms","handler-duration-ms",-491924416));
var fx_duration_ms = cljs.core.get.call(null,map__14979__$1,new cljs.core.Keyword(null,"fx-duration-ms","fx-duration-ms",-1014211328));
var subs_QMARK_ = cljs.core.get.call(null,map__14979__$1,new cljs.core.Keyword(null,"subs?","subs?",-2085240020));
if(cljs.core.truth_(item)){
if(cljs.core.truth_(subs_QMARK_)){
if(cljs.core.truth_(subs_graph_opened_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.subs.event_subs_graph_container,item], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.trace.subs_details,item], null);
}
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.Root,(cljs.core.truth_(trace_QMARK_)?item:cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"app-db-diff","app-db-diff",709588713),app_db_diff], null),(cljs.core.truth_(duration_ms)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"duration","duration",1444101068),duration_ms,new cljs.core.Keyword(null,"handler-duration","handler-duration",262132324),handler_duration_ms,new cljs.core.Keyword(null,"fx-duration","fx-duration",1796312432),fx_duration_ms], null)], null):null))),(0),state_atom], null);
}
} else {
return null;
}
});
});

//# sourceMappingURL=events.js.map
