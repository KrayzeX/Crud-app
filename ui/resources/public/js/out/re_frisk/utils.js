// Compiled by ClojureScript 1.10.597 {}
goog.provide('re_frisk.utils');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');
re_frisk.utils.sort_map = (function re_frisk$utils$sort_map(value,checkbox_val,checkbox){
if(cljs.core.truth_((function (){var and__4174__auto__ = checkbox_val;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.map_QMARK_.call(null,value);
} else {
return and__4174__auto__;
}
})())){
try{return cljs.core.into.call(null,cljs.core.sorted_map.call(null),value);
}catch (e8737){var e = e8737;
cljs.core.reset_BANG_.call(null,checkbox,false);

return value;
}} else {
return value;
}
});
re_frisk.utils.on_change_sort = (function re_frisk$utils$on_change_sort(value,checkbox_val,key){
return (function (val){
cljs.core.reset_BANG_.call(null,checkbox_val,val);

cljs.core.swap_BANG_.call(null,value,cljs.core.assoc,key,true);

return setTimeout((function (){
return cljs.core.swap_BANG_.call(null,value,cljs.core.dissoc,key);
}),(100));
});
});
re_frisk.utils.filter_event = (function re_frisk$utils$filter_event(text){
return (function (item){
var or__4185__auto__ = new cljs.core.Keyword(null,"trace?","trace?",1730690679).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var name = clojure.string.lower_case.call(null,cljs.core.name.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(item))));
var text__$1 = clojure.string.lower_case.call(null,text);
return cljs.core.not_EQ_.call(null,clojure.string.index_of.call(null,name,text__$1),null);
}
});
});
re_frisk.utils.truncate_name = (function re_frisk$utils$truncate_name(event){
var namespace = clojure.string.split.call(null,clojure.string.replace.call(null,event,/:/,""),/\//);
if((cljs.core.count.call(null,namespace) > (1))){
return [":",clojure.string.join.call(null,".",cljs.core.mapv.call(null,cljs.core.first,clojure.string.split.call(null,cljs.core.first.call(null,namespace),/\./))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,namespace))].join('');
} else {
return event;
}
});
re_frisk.utils.normalize_draggable = (function re_frisk$utils$normalize_draggable(x){
if(cljs.core.truth_(x)){
if((x < (80))){
return (80);
} else {
if((x > (window.innerWidth - (30)))){
return (window.innerWidth - (30));
} else {
return x;

}
}
} else {
return null;
}
});
re_frisk.utils.closed_QMARK_ = (function re_frisk$utils$closed_QMARK_(left){
return cljs.core._EQ_.call(null,left,(window.innerWidth - (30)));
});
re_frisk.utils.str_ms = (function re_frisk$utils$str_ms(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.format("%.2f",value))," ms"].join('');
});
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.utils !== 'undefined') && (typeof re_frisk.utils.call_state !== 'undefined')){
} else {
re_frisk.utils.call_state = cljs.core.atom.call(null,null);
}
re_frisk.utils.call_and_chill = (function re_frisk$utils$call_and_chill(handler,time){
if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.utils.call_state))){
return cljs.core.reset_BANG_.call(null,re_frisk.utils.call_state,new cljs.core.Keyword(null,"call","call",-519999866));
} else {
cljs.core.reset_BANG_.call(null,re_frisk.utils.call_state,new cljs.core.Keyword(null,"chill","chill",-2000479862));

setTimeout(re_frisk.utils.call_timeout,time,handler,time);

return handler.call(null);
}
});
re_frisk.utils.call_timeout = (function re_frisk$utils$call_timeout(handler,time){
var state = cljs.core.deref.call(null,re_frisk.utils.call_state);
cljs.core.reset_BANG_.call(null,re_frisk.utils.call_state,null);

if(cljs.core._EQ_.call(null,state,new cljs.core.Keyword(null,"call","call",-519999866))){
return re_frisk.utils.call_and_chill.call(null,handler,time);
} else {
return null;
}
});
re_frisk.utils.scroll_timeline_event_item = (function re_frisk$utils$scroll_timeline_event_item(doc,indx){
var temp__5735__auto__ = doc.getElementById(["timeline-event-item",cljs.core.str.cljs$core$IFn$_invoke$arity$1(indx)].join(''));
if(cljs.core.truth_(temp__5735__auto__)){
var elem = temp__5735__auto__;
return elem.scrollIntoView(({"inline": "center"}));
} else {
return null;
}
});
re_frisk.utils.scroll_event_list_item = (function re_frisk$utils$scroll_event_list_item(doc,indx){
var temp__5735__auto__ = doc.getElementById(["events-list-item",cljs.core.str.cljs$core$IFn$_invoke$arity$1(indx)].join(''));
if(cljs.core.truth_(temp__5735__auto__)){
var elem = temp__5735__auto__;
return elem.scrollIntoView(({"block": "center"}));
} else {
return null;
}
});

//# sourceMappingURL=utils.js.map
