// Compiled by ClojureScript 1.10.597 {}
goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('goog.net.XhrIo');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__8059){
var vec__8060 = p__8059;
var success_QMARK_ = cljs.core.nth.call(null,vec__8060,(0),null);
var response = cljs.core.nth.call(null,vec__8060,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return on_success.call(null,response);
} else {
var details = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response);
return on_failure.call(null,details);
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__8065){
var map__8066 = p__8065;
var map__8066__$1 = (((((!((map__8066 == null))))?(((((map__8066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8066):map__8066);
var request = map__8066__$1;
var on_success = cljs.core.get.call(null,map__8066__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.call(null,map__8066__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"api","api",-899839580),api,new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.call(null,day8.re_frame.http_fx.ajax_xhrio_handler,(function (p1__8063_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_success,p1__8063_SHARP_));
}),(function (p1__8064_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_failure,p1__8064_SHARP_));
}),api)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_.call(null,request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__8068 = cljs.core.seq.call(null,seq_request_maps);
var chunk__8069 = null;
var count__8070 = (0);
var i__8071 = (0);
while(true){
if((i__8071 < count__8070)){
var request__$1 = cljs.core._nth.call(null,chunk__8069,i__8071);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));


var G__8072 = seq__8068;
var G__8073 = chunk__8069;
var G__8074 = count__8070;
var G__8075 = (i__8071 + (1));
seq__8068 = G__8072;
chunk__8069 = G__8073;
count__8070 = G__8074;
i__8071 = G__8075;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__8068);
if(temp__5735__auto__){
var seq__8068__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8068__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__8068__$1);
var G__8076 = cljs.core.chunk_rest.call(null,seq__8068__$1);
var G__8077 = c__4609__auto__;
var G__8078 = cljs.core.count.call(null,c__4609__auto__);
var G__8079 = (0);
seq__8068 = G__8076;
chunk__8069 = G__8077;
count__8070 = G__8078;
i__8071 = G__8079;
continue;
} else {
var request__$1 = cljs.core.first.call(null,seq__8068__$1);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));


var G__8080 = cljs.core.next.call(null,seq__8068__$1);
var G__8081 = null;
var G__8082 = (0);
var G__8083 = (0);
seq__8068 = G__8080;
chunk__8069 = G__8081;
count__8070 = G__8082;
i__8071 = G__8083;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),day8.re_frame.http_fx.http_effect);

//# sourceMappingURL=http_fx.js.map
