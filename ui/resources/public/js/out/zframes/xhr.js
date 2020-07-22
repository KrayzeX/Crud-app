// Compiled by ClojureScript 1.10.597 {}
goog.provide('zframes.xhr');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('re_frame.db');
goog.require('zframes.redirect');
goog.require('re_frame.core');
zframes.xhr.sub_query_by_spaces = (function zframes$xhr$sub_query_by_spaces(k,s){
return clojure.string.join.call(null,"&",cljs.core.mapv.call(null,(function (v){
return [cljs.core.name.call(null,k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
}),clojure.string.split.call(null,s,/\s+/)));
});
zframes.xhr.to_query = (function zframes$xhr$to_query(params){
return clojure.string.join.call(null,"&",cljs.core.mapcat.call(null,(function (p__10266){
var vec__10267 = p__10266;
var k = cljs.core.nth.call(null,vec__10267,(0),null);
var v = cljs.core.nth.call(null,vec__10267,(1),null);
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.mapv.call(null,(function (vv){
return [cljs.core.name.call(null,k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(vv)].join('');
}),v);
} else {
if(cljs.core.set_QMARK_.call(null,v)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.name.call(null,k),"=",clojure.string.join.call(null,",",v)].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.name.call(null,k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')], null);

}
}
}),params));
});
zframes.xhr.base_url = (function zframes$xhr$base_url(db,url){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"base-url","base-url",9540398)], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
});
zframes.xhr.make_form_data = (function zframes$xhr$make_form_data(files){
var form_data = (new FormData());
cljs.core.doall.call(null,(function (){var iter__4582__auto__ = (function zframes$xhr$make_form_data_$_iter__10270(s__10271){
return (new cljs.core.LazySeq(null,(function (){
var s__10271__$1 = s__10271;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__10271__$1);
if(temp__5735__auto__){
var s__10271__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10271__$2)){
var c__4580__auto__ = cljs.core.chunk_first.call(null,s__10271__$2);
var size__4581__auto__ = cljs.core.count.call(null,c__4580__auto__);
var b__10273 = cljs.core.chunk_buffer.call(null,size__4581__auto__);
if((function (){var i__10272 = (0);
while(true){
if((i__10272 < size__4581__auto__)){
var vec__10274 = cljs.core._nth.call(null,c__4580__auto__,i__10272);
var i = cljs.core.nth.call(null,vec__10274,(0),null);
var file = cljs.core.nth.call(null,vec__10274,(1),null);
cljs.core.chunk_append.call(null,b__10273,form_data.append(["file",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),file,["file",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')));

var G__10280 = (i__10272 + (1));
i__10272 = G__10280;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10273),zframes$xhr$make_form_data_$_iter__10270.call(null,cljs.core.chunk_rest.call(null,s__10271__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10273),null);
}
} else {
var vec__10277 = cljs.core.first.call(null,s__10271__$2);
var i = cljs.core.nth.call(null,vec__10277,(0),null);
var file = cljs.core.nth.call(null,vec__10277,(1),null);
return cljs.core.cons.call(null,form_data.append(["file",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),file,["file",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')),zframes$xhr$make_form_data_$_iter__10270.call(null,cljs.core.rest.call(null,s__10271__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,files));
})());

return form_data;
});
if((typeof zframes !== 'undefined') && (typeof zframes.xhr !== 'undefined') && (typeof zframes.xhr.abort_controller_cache !== 'undefined')){
} else {
zframes.xhr.abort_controller_cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
zframes.xhr.get_abort_controller = (function zframes$xhr$get_abort_controller(req_id){
var temp__5735__auto___10281 = cljs.core.get.call(null,cljs.core.deref.call(null,zframes.xhr.abort_controller_cache),req_id);
if(cljs.core.truth_(temp__5735__auto___10281)){
var ctrl_10282 = temp__5735__auto___10281;
ctrl_10282.abort();
} else {
}

cljs.core.swap_BANG_.call(null,zframes.xhr.abort_controller_cache,cljs.core.assoc,req_id,(new AbortController()));

return cljs.core.get.call(null,cljs.core.deref.call(null,zframes.xhr.abort_controller_cache),req_id);
});
zframes.xhr._STAR_json_fetch = (function zframes$xhr$_STAR_json_fetch(p__10284){
var map__10285 = p__10284;
var map__10285__$1 = (((((!((map__10285 == null))))?(((((map__10285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10285):map__10285);
var opts = map__10285__$1;
var uri = cljs.core.get.call(null,map__10285__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var is_fetching_path = cljs.core.get.call(null,map__10285__$1,new cljs.core.Keyword(null,"is-fetching-path","is-fetching-path",1190163610));
var format = cljs.core.get.call(null,map__10285__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var req_id = cljs.core.get.call(null,map__10285__$1,new cljs.core.Keyword(null,"req-id","req-id",-471642231));
var cookies = cljs.core.get.call(null,map__10285__$1,new cljs.core.Keyword(null,"cookies","cookies",1839416329));
var params = cljs.core.get.call(null,map__10285__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__10285__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var success = cljs.core.get.call(null,map__10285__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var error = cljs.core.get.call(null,map__10285__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var map__10287 = cljs.core.get_in.call(null,cljs.core.deref.call(null,re_frame.db.app_db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhr","xhr",-177710851),new cljs.core.Keyword(null,"config","config",994861415)], null));
var map__10287__$1 = (((((!((map__10287 == null))))?(((((map__10287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10287):map__10287);
var token = cljs.core.get.call(null,map__10287__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var base_url = cljs.core.get.call(null,map__10287__$1,new cljs.core.Keyword(null,"base-url","base-url",9540398));
var x_correlation_id = cljs.core.get.call(null,map__10287__$1,new cljs.core.Keyword(null,"x-correlation-id","x-correlation-id",-1017048031));
var screen = cljs.core.get_in.call(null,cljs.core.deref.call(null,re_frame.db.app_db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("route-map","current-route","route-map/current-route",-917537088),new cljs.core.Keyword(null,"match","match",1220059550)], null));
var abort_controller = (cljs.core.truth_(req_id)?zframes.xhr.get_abort_controller.call(null,req_id):null);
var fmt = (function (){var or__4185__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 2, ["json","application/json","yaml","text/yaml"], null),format);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "application/json";
}
})();
var x_audit = (function (){var G__10289 = cljs.core.get_in.call(null,cljs.core.deref.call(null,re_frame.db.app_db),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.global-context","organization","app.global-context/organization",-1499177253),new cljs.core.Keyword(null,"main-organization","main-organization",-228002480),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
var G__10289__$1 = (((G__10289 == null))?null:cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"morg-id","morg-id",-515030705)],[G__10289]));
var G__10289__$2 = (((G__10289__$1 == null))?null:cljs.core.clj__GT_js.call(null,G__10289__$1));
var G__10289__$3 = (((G__10289__$2 == null))?null:JSON.stringify(G__10289__$2));
if((G__10289__$3 == null)){
return null;
} else {
return btoa(G__10289__$3);
}
})();
var headers__$1 = (function (){var G__10290 = new cljs.core.PersistentArrayMap(null, 3, ["accept",fmt,"x-correlation-id",x_correlation_id,"authorization",["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('')], null);
var G__10290__$1 = (cljs.core.truth_(x_audit)?cljs.core.assoc.call(null,G__10290,"x-audit",x_audit):G__10290);
var G__10290__$2 = (((((token == null)) || (clojure.string.blank_QMARK_.call(null,token))))?cljs.core.dissoc.call(null,G__10290__$1,"authorization"):G__10290__$1);
var G__10290__$3 = (((new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(opts) == null))?cljs.core.assoc.call(null,G__10290__$2,"Content-Type","application/json"):G__10290__$2);
return cljs.core.merge.call(null,G__10290__$3,(function (){var or__4185__auto__ = headers;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

})();
var fetch_opts = cljs.core.assoc.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"get",new cljs.core.Keyword(null,"mode","mode",654403691),"cors",new cljs.core.Keyword(null,"credentials","credentials",1373178854),"same-origin"], null),(cljs.core.truth_(abort_controller)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"signal","signal",-1984951589),abort_controller.signal], null):null),opts),new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"files","files",-472457450)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1);
var fetch_opts__$1 = (function (){var G__10291 = fetch_opts;
var G__10291__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.call(null,G__10291,new cljs.core.Keyword(null,"body","body",-2049205669),((typeof new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(opts) === 'string')?new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(opts):JSON.stringify(cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(opts))))):G__10291);
if(cljs.core.truth_(new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__10291__$1,new cljs.core.Keyword(null,"body","body",-2049205669),zframes.xhr.make_form_data.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(opts)));
} else {
return G__10291__$1;
}
})();
var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)].join('');
if(cljs.core.truth_(is_fetching_path)){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zframes.xhr","fetch-start","zframes.xhr/fetch-start",-520265940),is_fetching_path], null));
} else {
}

return fetch([url,(cljs.core.truth_(params)?["?",zframes.xhr.to_query.call(null,params)].join(''):null)].join(''),cljs.core.clj__GT_js.call(null,fetch_opts__$1)).then((function (resp){
if(cljs.core.truth_(is_fetching_path)){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zframes.xhr","fetch-end","zframes.xhr/fetch-end",1683243462),is_fetching_path], null));
} else {
}

if(cljs.core._EQ_.call(null,(500),resp.status)){
throw resp;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"dont-parse","dont-parse",651669270).cljs$core$IFn$_invoke$arity$1(opts))){
return resp.text().then((function (doc){
var e = (((resp.status <= (299)))?success:error);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(e),cljs.core.merge.call(null,e,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),opts,new cljs.core.Keyword(null,"data","data",-232669377),doc], null))], null));
}),(function (doc){
cljs.core.println.call(null,"Error:",doc);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(success),cljs.core.merge.call(null,success,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),opts,new cljs.core.Keyword(null,"data","data",-232669377),doc], null))], null));
}));
} else {
return resp.json().then((function (doc){
var data = cljs.core.js__GT_clj.call(null,doc,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
return cljs.core.mapv.call(null,(function (p1__10283_SHARP_){
if(cljs.core.truth_(p1__10283_SHARP_)){
return re_frame.core.dispatch.call(null,p1__10283_SHARP_);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(req_id)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("xhr","done","xhr/done",-893895006),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"request","request",1772954723),opts,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"status","status",-1997798413),resp.status], null)], null):null),(function (){var temp__5735__auto__ = (((resp.status < (299)))?success:error);
if(cljs.core.truth_(temp__5735__auto__)){
var e = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"request","request",1772954723),opts,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"status","status",-1997798413),resp.status], null),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(e)], null);
} else {
return null;
}
})(),(((resp.status > (299)))?(function (){var errors = cljs.core.map.call(null,(function (e){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"expression","expression",202311876).cljs$core$IFn$_invoke$arity$1(e))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"diagnostics","diagnostics",359783524).cljs$core$IFn$_invoke$arity$1(e))].join('');
}),new cljs.core.Keyword(null,"issue","issue",1725456421).cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"flash-disabled","flash-disabled",-213601818).cljs$core$IFn$_invoke$arity$1(opts))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("flash","danger","flash/danger",-654742654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u041E\u0448\u0438\u0431\u043A\u0430: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),resp.status], null)," ",resp.statusText], null),(function (){var temp__5733__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__5733__auto__)){
var msg = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),msg], null);
} else {
var G__10292 = resp.status;
switch (G__10292) {
case (404):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u041D\u0435 \u0432\u0435\u0440\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441 \u0437\u0430\u043F\u0440\u043E\u0441\u0430 ",url], null);

break;
case (409):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u041A\u043E\u043D\u0444\u043B\u0438\u043A\u0442 \u0441 \u0442\u0435\u043A\u0443\u0449\u0438\u043C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435\u043C \u0441\u0435\u0440\u0432\u0435\u0440\u0430"], null);

break;
case (422):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u041D\u0435 \u0432\u0430\u043B\u0438\u0434\u043D\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441"], null);

break;
default:
return null;

}
}
})(),(((((!(cljs.core.empty_QMARK_.call(null,errors)))) && (cljs.core._EQ_.call(null,(422),resp.status))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function zframes$xhr$_STAR_json_fetch_$_iter__10293(s__10294){
return (new cljs.core.LazySeq(null,(function (){
var s__10294__$1 = s__10294;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__10294__$1);
if(temp__5735__auto__){
var s__10294__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10294__$2)){
var c__4580__auto__ = cljs.core.chunk_first.call(null,s__10294__$2);
var size__4581__auto__ = cljs.core.count.call(null,c__4580__auto__);
var b__10296 = cljs.core.chunk_buffer.call(null,size__4581__auto__);
if((function (){var i__10295 = (0);
while(true){
if((i__10295 < size__4581__auto__)){
var e = cljs.core._nth.call(null,c__4580__auto__,i__10295);
cljs.core.chunk_append.call(null,b__10296,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),e], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),e], null)));

var G__10299 = (i__10295 + (1));
i__10295 = G__10299;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10296),zframes$xhr$_STAR_json_fetch_$_iter__10293.call(null,cljs.core.chunk_rest.call(null,s__10294__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10296),null);
}
} else {
var e = cljs.core.first.call(null,s__10294__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),e], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),e], null)),zframes$xhr$_STAR_json_fetch_$_iter__10293.call(null,cljs.core.rest.call(null,s__10294__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__.call(null,errors);
})()], null):null)], null)], null)], null);
}
})():null)], null));
}),(function (doc){
cljs.core.println.call(null,"Error:",doc);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(success),cljs.core.merge.call(null,success,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),opts,new cljs.core.Keyword(null,"data","data",-232669377),doc], null))], null));
}));
}
}
})).catch((function (err){
if(cljs.core._EQ_.call(null,err.name,"AbortError")){
return null;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"flash-disabled","flash-disabled",-213601818).cljs$core$IFn$_invoke$arity$1(opts))){
} else {
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("flash","danger","flash/danger",-654742654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u041E\u0448\u0438\u0431\u043A\u0430: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),err.status], null)," ",err.statusText], null),(function (){var G__10297 = err.status;
switch (G__10297) {
case (500):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u0412\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u044F\u044F \u043E\u0448\u0438\u0431\u043A\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"], null);

break;
case (404):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u041D\u0435 \u0432\u0435\u0440\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441 \u0437\u0430\u043F\u0440\u043E\u0441\u0430"], null);

break;
case (422):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u041D\u0435 \u0432\u0430\u043B\u0438\u0434\u043D\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441"], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u041D\u0435\u043E\u043F\u043E\u0437\u043D\u0430\u043D\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430"], null);

}
})()], null)], null)], null));
}

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(error),cljs.core.merge.call(null,error,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),opts,new cljs.core.Keyword(null,"error","error",-978969032),err], null))], null));
}
}));
});
zframes.xhr.json_fetch = (function zframes$xhr$json_fetch(opts){
if(cljs.core.vector_QMARK_.call(null,opts)){
var seq__10301 = cljs.core.seq.call(null,opts);
var chunk__10302 = null;
var count__10303 = (0);
var i__10304 = (0);
while(true){
if((i__10304 < count__10303)){
var o = cljs.core._nth.call(null,chunk__10302,i__10304);
zframes.xhr._STAR_json_fetch.call(null,o);


var G__10305 = seq__10301;
var G__10306 = chunk__10302;
var G__10307 = count__10303;
var G__10308 = (i__10304 + (1));
seq__10301 = G__10305;
chunk__10302 = G__10306;
count__10303 = G__10307;
i__10304 = G__10308;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__10301);
if(temp__5735__auto__){
var seq__10301__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10301__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__10301__$1);
var G__10309 = cljs.core.chunk_rest.call(null,seq__10301__$1);
var G__10310 = c__4609__auto__;
var G__10311 = cljs.core.count.call(null,c__4609__auto__);
var G__10312 = (0);
seq__10301 = G__10309;
chunk__10302 = G__10310;
count__10303 = G__10311;
i__10304 = G__10312;
continue;
} else {
var o = cljs.core.first.call(null,seq__10301__$1);
zframes.xhr._STAR_json_fetch.call(null,o);


var G__10313 = cljs.core.next.call(null,seq__10301__$1);
var G__10314 = null;
var G__10315 = (0);
var G__10316 = (0);
seq__10301 = G__10313;
chunk__10302 = G__10314;
count__10303 = G__10315;
i__10304 = G__10316;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return zframes.xhr._STAR_json_fetch.call(null,opts);
}
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("zframes.xhr","json-fetch","zframes.xhr/json-fetch",53155453),zframes.xhr.json_fetch);
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("json","fetch","json/fetch",-1093390044),zframes.xhr.json_fetch);
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("xhr","fetch","xhr/fetch",-1081850758),(function (p1__10317_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("xhr","fetch","xhr/fetch",-1081850758),p1__10317_SHARP_], null));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("xhr","fetch","xhr/fetch",-1081850758),(function (p__10318,p__10319){
var map__10320 = p__10318;
var map__10320__$1 = (((((!((map__10320 == null))))?(((((map__10320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10320):map__10320);
var db = cljs.core.get.call(null,map__10320__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__10321 = p__10319;
var _ = cljs.core.nth.call(null,vec__10321,(0),null);
var opts = cljs.core.nth.call(null,vec__10321,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.reduce.call(null,(function (acc,opt){
return cljs.core.assoc_in.call(null,acc,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhr","xhr",-177710851),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-id","req-id",-471642231).cljs$core$IFn$_invoke$arity$1(opt),new cljs.core.Keyword(null,"loading","loading",-737050189)], null),true);
}),db,((cljs.core.vector_QMARK_.call(null,opts))?opts:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts], null))),new cljs.core.Keyword("json","fetch","json/fetch",-1093390044),opts], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("xhr","done","xhr/done",-893895006),(function (p__10325,p__10326){
var map__10327 = p__10325;
var map__10327__$1 = (((((!((map__10327 == null))))?(((((map__10327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10327):map__10327);
var db = cljs.core.get.call(null,map__10327__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__10328 = p__10326;
var _ = cljs.core.nth.call(null,vec__10328,(0),null);
var map__10331 = cljs.core.nth.call(null,vec__10328,(1),null);
var map__10331__$1 = (((((!((map__10331 == null))))?(((((map__10331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10331):map__10331);
var resp = map__10331__$1;
var map__10332 = cljs.core.get.call(null,map__10331__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__10332__$1 = (((((!((map__10332 == null))))?(((((map__10332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10332):map__10332);
var req = map__10332__$1;
var req_id = cljs.core.get.call(null,map__10332__$1,new cljs.core.Keyword(null,"req-id","req-id",-471642231));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhr","xhr",-177710851),new cljs.core.Keyword(null,"req","req",-326448303),req_id], null),resp)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("xhr","remove-response","xhr/remove-response",903761172),(function (p__10336,p__10337){
var map__10338 = p__10336;
var map__10338__$1 = (((((!((map__10338 == null))))?(((((map__10338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10338):map__10338);
var db = cljs.core.get.call(null,map__10338__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__10339 = p__10337;
var _ = cljs.core.nth.call(null,vec__10339,(0),null);
var req_id = cljs.core.nth.call(null,vec__10339,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhr","xhr",-177710851),new cljs.core.Keyword(null,"req","req",-326448303)], null),cljs.core.dissoc,req_id)], null);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("xhr","response","xhr/response",-1068297090),(function (db,p__10343){
var vec__10344 = p__10343;
var _ = cljs.core.nth.call(null,vec__10344,(0),null);
var req_id = cljs.core.nth.call(null,vec__10344,(1),null);
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhr","xhr",-177710851),new cljs.core.Keyword(null,"req","req",-326448303),req_id], null));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("xhr","redirect","xhr/redirect",-1975751232),(function (_,p__10347){
var vec__10348 = p__10347;
var ___$1 = cljs.core.nth.call(null,vec__10348,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__10348,(1),null);
var opts = cljs.core.nth.call(null,vec__10348,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zframes.redirect","redirect","zframes.redirect/redirect",150444856),opts], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("zframes.xhr","fetch-start","zframes.xhr/fetch-start",-520265940),(function (db,p__10351){
var vec__10352 = p__10351;
var _ = cljs.core.nth.call(null,vec__10352,(0),null);
var path = cljs.core.nth.call(null,vec__10352,(1),null);
return cljs.core.assoc.call(null,db,path,true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("zframes.xhr","fetch-end","zframes.xhr/fetch-end",1683243462),(function (db,p__10355){
var vec__10356 = p__10355;
var _ = cljs.core.nth.call(null,vec__10356,(0),null);
var path = cljs.core.nth.call(null,vec__10356,(1),null);
return cljs.core.assoc.call(null,db,path,false);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("xhr","config","xhr/config",994717665),(function (db,_){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhr","xhr",-177710851),new cljs.core.Keyword(null,"config","config",994861415)], null));
}));

//# sourceMappingURL=xhr.js.map
