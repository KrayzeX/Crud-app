// Compiled by ClojureScript 1.10.597 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.call(null,(function (headers,header_line){
if(goog.string.isEmptyOrWhitespace(header_line)){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.call(null,headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():XMLHttpRequest);
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__12258,handler){
var map__12259 = p__12258;
var map__12259__$1 = (((((!((map__12259 == null))))?(((((map__12259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12259):map__12259);
var uri = cljs.core.get.call(null,map__12259__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__12259__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__12259__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__12259__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__12259__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__12259__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__12259__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__12257_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__12257_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___12277 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___12277)){
var response_type_12278 = temp__5735__auto___12277;
(this$__$1.responseType = cljs.core.name.call(null,response_type_12278));
} else {
}

var seq__12261_12279 = cljs.core.seq.call(null,headers);
var chunk__12262_12280 = null;
var count__12263_12281 = (0);
var i__12264_12282 = (0);
while(true){
if((i__12264_12282 < count__12263_12281)){
var vec__12271_12283 = cljs.core._nth.call(null,chunk__12262_12280,i__12264_12282);
var k_12284 = cljs.core.nth.call(null,vec__12271_12283,(0),null);
var v_12285 = cljs.core.nth.call(null,vec__12271_12283,(1),null);
this$__$1.setRequestHeader(k_12284,v_12285);


var G__12286 = seq__12261_12279;
var G__12287 = chunk__12262_12280;
var G__12288 = count__12263_12281;
var G__12289 = (i__12264_12282 + (1));
seq__12261_12279 = G__12286;
chunk__12262_12280 = G__12287;
count__12263_12281 = G__12288;
i__12264_12282 = G__12289;
continue;
} else {
var temp__5735__auto___12290 = cljs.core.seq.call(null,seq__12261_12279);
if(temp__5735__auto___12290){
var seq__12261_12291__$1 = temp__5735__auto___12290;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12261_12291__$1)){
var c__4609__auto___12292 = cljs.core.chunk_first.call(null,seq__12261_12291__$1);
var G__12293 = cljs.core.chunk_rest.call(null,seq__12261_12291__$1);
var G__12294 = c__4609__auto___12292;
var G__12295 = cljs.core.count.call(null,c__4609__auto___12292);
var G__12296 = (0);
seq__12261_12279 = G__12293;
chunk__12262_12280 = G__12294;
count__12263_12281 = G__12295;
i__12264_12282 = G__12296;
continue;
} else {
var vec__12274_12297 = cljs.core.first.call(null,seq__12261_12291__$1);
var k_12298 = cljs.core.nth.call(null,vec__12274_12297,(0),null);
var v_12299 = cljs.core.nth.call(null,vec__12274_12297,(1),null);
this$__$1.setRequestHeader(k_12298,v_12299);


var G__12300 = cljs.core.next.call(null,seq__12261_12291__$1);
var G__12301 = null;
var G__12302 = (0);
var G__12303 = (0);
seq__12261_12279 = G__12300;
chunk__12262_12280 = G__12301;
count__12263_12281 = G__12302;
i__12264_12282 = G__12303;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4185__auto__ = body;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers.call(null,this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
}));

//# sourceMappingURL=xml_http_request.js.map
