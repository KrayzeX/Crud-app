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
return clojure.string.join.call(null,"&",cljs.core.mapcat.call(null,(function (p__8007){
var vec__8008 = p__8007;
var k = cljs.core.nth.call(null,vec__8008,(0),null);
var v = cljs.core.nth.call(null,vec__8008,(1),null);
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
cljs.core.doall.call(null,(function (){var iter__4582__auto__ = (function zframes$xhr$make_form_data_$_iter__8011(s__8012){
return (new cljs.core.LazySeq(null,(function (){
var s__8012__$1 = s__8012;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__8012__$1);
if(temp__5735__auto__){
var s__8012__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8012__$2)){
var c__4580__auto__ = cljs.core.chunk_first.call(null,s__8012__$2);
var size__4581__auto__ = cljs.core.count.call(null,c__4580__auto__);
var b__8014 = cljs.core.chunk_buffer.call(null,size__4581__auto__);
if((function (){var i__8013 = (0);
while(true){
if((i__8013 < size__4581__auto__)){
var vec__8015 = cljs.core._nth.call(null,c__4580__auto__,i__8013);
var i = cljs.core.nth.call(null,vec__8015,(0),null);
var file = cljs.core.nth.call(null,vec__8015,(1),null);
cljs.core.chunk_append.call(null,b__8014,form_data.append(["file",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),file,["file",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')));

var G__8021 = (i__8013 + (1));
i__8013 = G__8021;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8014),zframes$xhr$make_form_data_$_iter__8011.call(null,cljs.core.chunk_rest.call(null,s__8012__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8014),null);
}
} else {
var vec__8018 = cljs.core.first.call(null,s__8012__$2);
var i = cljs.core.nth.call(null,vec__8018,(0),null);
var file = cljs.core.nth.call(null,vec__8018,(1),null);
return cljs.core.cons.call(null,form_data.append(["file",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),file,["file",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')),zframes$xhr$make_form_data_$_iter__8011.call(null,cljs.core.rest.call(null,s__8012__$2)));
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
var temp__5735__auto___8022 = cljs.core.get.call(null,cljs.core.deref.call(null,zframes.xhr.abort_controller_cache),req_id);
if(cljs.core.truth_(temp__5735__auto___8022)){
var ctrl_8023 = temp__5735__auto___8022;
ctrl_8023.abort();
} else {
}

cljs.core.swap_BANG_.call(null,zframes.xhr.abort_controller_cache,cljs.core.assoc,req_id,(new AbortController()));

return cljs.core.get.call(null,cljs.core.deref.call(null,zframes.xhr.abort_controller_cache),req_id);
});
zframes.xhr._STAR_json_fetch = (function zframes$xhr$_STAR_json_fetch(p__8025){
var map__8026 = p__8025;
var map__8026__$1 = (((((!((map__8026 == null))))?(((((map__8026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8026):map__8026);
var opts = map__8026__$1;
var uri = cljs.core.get.call(null,map__8026__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var is_fetching_path = cljs.core.get.call(null,map__8026__$1,new cljs.core.Keyword(null,"is-fetching-path","is-fetching-path",1190163610));
var format = cljs.core.get.call(null,map__8026__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var req_id = cljs.core.get.call(null,map__8026__$1,new cljs.core.Keyword(null,"req-id","req-id",-471642231));
var cookies = cljs.core.get.call(null,map__8026__$1,new cljs.core.Keyword(null,"cookies","cookies",1839416329));
var params = cljs.core.get.call(null,map__8026__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__8026__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var success = cljs.core.get.call(null,map__8026__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var error = cljs.core.get.call(null,map__8026__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var map__8028 = cljs.core.get_in.call(null,cljs.core.deref.call(null,re_frame.db.app_db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhr","xhr",-177710851),new cljs.core.Keyword(null,"config","config",994861415)], null));
var map__8028__$1 = (((((!((map__8028 == null))))?(((((map__8028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8028):map__8028);
var token = cljs.core.get.call(null,map__8028__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var base_url = cljs.core.get.call(null,map__8028__$1,new cljs.core.Keyword(null,"base-url","base-url",9540398));
var x_correlation_id = cljs.core.get.call(null,map__8028__$1,new cljs.core.Keyword(null,"x-correlation-id","x-correlation-id",-1017048031));
var screen = cljs.core.get_in.call(null,cljs.core.deref.call(null,re_frame.db.app_db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("route-map","current-route","route-map/current-route",-917537088),new cljs.core.Keyword(null,"match","match",1220059550)], null));
var abort_controller = (cljs.core.truth_(req_id)?zframes.xhr.get_abort_controller.call(null,req_id):null);
var fmt = (function (){var or__4185__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 2, ["json","application/json","yaml","text/yaml"], null),format);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "application/json";
}
})();
var x_audit = (function (){var G__8030 = cljs.core.get_in.call(null,cljs.core.deref.call(null,re_frame.db.app_db),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.global-context","organization","app.global-context/organization",-1499177253),new cljs.core.Keyword(null,"main-organization","main-organization",-228002480),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
var G__8030__$1 = (((G__8030 == null))?null:cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"morg-id","morg-id",-515030705)],[G__8030]));
var G__8030__$2 = (((G__8030__$1 == null))?null:cljs.core.clj__GT_js.call(null,G__8030__$1));
var G__8030__$3 = (((G__8030__$2 == null))?null:JSON.stringify(G__8030__$2));
if((G__8030__$3 == null)){
return null;
} else {
return btoa(G__8030__$3);
}
})();
var headers__$1 = (function (){var G__8031 = new cljs.core.PersistentArrayMap(null, 3, ["accept",fmt,"x-correlation-id",x_correlation_id,"authorization",["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('')], null);
var G__8031__$1 = (cljs.core.truth_(x_audit)?cljs.core.assoc.call(null,G__8031,"x-audit",x_audit):G__8031);
var G__8031__$2 = (((((token == null)) || (clojure.string.blank_QMARK_.call(null,token))))?cljs.core.dissoc.call(null,G__8031__$1,"authorization"):G__8031__$1);
var G__8031__$3 = (((new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(opts) == null))?cljs.core.assoc.call(null,G__8031__$2,"Content-Type","application/json"):G__8031__$2);
return cljs.core.merge.call(null,G__8031__$3,(function (){var or__4185__auto__ = headers;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

})();
var fetch_opts = cljs.core.assoc.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"get",new cljs.core.Keyword(null,"mode","mode",654403691),"cors",new cljs.core.Keyword(null,"credentials","credentials",1373178854),"same-origin"], null),(cljs.core.truth_(abort_controller)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"signal","signal",-1984951589),abort_controller.signal], null):null),opts),new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"files","files",-472457450)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1);
var fetch_opts__$1 = (function (){var G__8032 = fetch_opts;
var G__8032__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.call(null,G__8032,new cljs.core.Keyword(null,"body","body",-2049205669),((typeof new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(opts) === 'string')?new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(opts):JSON.stringify(cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(opts))))):G__8032);
if(cljs.core.truth_(new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__8032__$1,new cljs.core.Keyword(null,"body","body",-2049205669),zframes.xhr.make_form_data.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(opts)));
} else {
return G__8032__$1;
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
return cljs.core.mapv.call(null,(function (p1__8024_SHARP_){
if(cljs.core.truth_(p1__8024_SHARP_)){
return re_frame.core.dispatch.call(null,p1__8024_SHARP_);
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
var G__8033 = resp.status;
switch (G__8033) {
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
})(),(((((!(cljs.core.empty_QMARK_.call(null,errors)))) && (cljs.core._EQ_.call(null,(422),resp.status))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function zframes$xhr$_STAR_json_fetch_$_iter__8034(s__8035){
return (new cljs.core.LazySeq(null,(function (){
var s__8035__$1 = s__8035;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__8035__$1);
if(temp__5735__auto__){
var s__8035__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8035__$2)){
var c__4580__auto__ = cljs.core.chunk_first.call(null,s__8035__$2);
var size__4581__auto__ = cljs.core.count.call(null,c__4580__auto__);
var b__8037 = cljs.core.chunk_buffer.call(null,size__4581__auto__);
if((function (){var i__8036 = (0);
while(true){
if((i__8036 < size__4581__auto__)){
var e = cljs.core._nth.call(null,c__4580__auto__,i__8036);
cljs.core.chunk_append.call(null,b__8037,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),e], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),e], null)));

var G__8040 = (i__8036 + (1));
i__8036 = G__8040;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8037),zframes$xhr$_STAR_json_fetch_$_iter__8034.call(null,cljs.core.chunk_rest.call(null,s__8035__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8037),null);
}
} else {
var e = cljs.core.first.call(null,s__8035__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),e], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),e], null)),zframes$xhr$_STAR_json_fetch_$_iter__8034.call(null,cljs.core.rest.call(null,s__8035__$2)));
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
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("flash","danger","flash/danger",-654742654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u041E\u0448\u0438\u0431\u043A\u0430: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),err.status], null)," ",err.statusText], null),(function (){var G__8038 = err.status;
switch (G__8038) {
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
var seq__8042 = cljs.core.seq.call(null,opts);
var chunk__8043 = null;
var count__8044 = (0);
var i__8045 = (0);
while(true){
if((i__8045 < count__8044)){
var o = cljs.core._nth.call(null,chunk__8043,i__8045);
zframes.xhr._STAR_json_fetch.call(null,o);


var G__8046 = seq__8042;
var G__8047 = chunk__8043;
var G__8048 = count__8044;
var G__8049 = (i__8045 + (1));
seq__8042 = G__8046;
chunk__8043 = G__8047;
count__8044 = G__8048;
i__8045 = G__8049;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__8042);
if(temp__5735__auto__){
var seq__8042__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8042__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__8042__$1);
var G__8050 = cljs.core.chunk_rest.call(null,seq__8042__$1);
var G__8051 = c__4609__auto__;
var G__8052 = cljs.core.count.call(null,c__4609__auto__);
var G__8053 = (0);
seq__8042 = G__8050;
chunk__8043 = G__8051;
count__8044 = G__8052;
i__8045 = G__8053;
continue;
} else {
var o = cljs.core.first.call(null,seq__8042__$1);
zframes.xhr._STAR_json_fetch.call(null,o);


var G__8054 = cljs.core.next.call(null,seq__8042__$1);
var G__8055 = null;
var G__8056 = (0);
var G__8057 = (0);
seq__8042 = G__8054;
chunk__8043 = G__8055;
count__8044 = G__8056;
i__8045 = G__8057;
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
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("xhr","fetch","xhr/fetch",-1081850758),(function (p1__8058_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("xhr","fetch","xhr/fetch",-1081850758),p1__8058_SHARP_], null));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("xhr","fetch","xhr/fetch",-1081850758),(function (p__8059,p__8060){
var map__8061 = p__8059;
var map__8061__$1 = (((((!((map__8061 == null))))?(((((map__8061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8061):map__8061);
var db = cljs.core.get.call(null,map__8061__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__8062 = p__8060;
var _ = cljs.core.nth.call(null,vec__8062,(0),null);
var opts = cljs.core.nth.call(null,vec__8062,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.reduce.call(null,(function (acc,opt){
return cljs.core.assoc_in.call(null,acc,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhr","xhr",-177710851),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-id","req-id",-471642231).cljs$core$IFn$_invoke$arity$1(opt),new cljs.core.Keyword(null,"loading","loading",-737050189)], null),true);
}),db,((cljs.core.vector_QMARK_.call(null,opts))?opts:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts], null))),new cljs.core.Keyword("json","fetch","json/fetch",-1093390044),opts], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("xhr","done","xhr/done",-893895006),(function (p__8066,p__8067){
var map__8068 = p__8066;
var map__8068__$1 = (((((!((map__8068 == null))))?(((((map__8068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8068):map__8068);
var db = cljs.core.get.call(null,map__8068__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__8069 = p__8067;
var _ = cljs.core.nth.call(null,vec__8069,(0),null);
var map__8072 = cljs.core.nth.call(null,vec__8069,(1),null);
var map__8072__$1 = (((((!((map__8072 == null))))?(((((map__8072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8072):map__8072);
var resp = map__8072__$1;
var map__8073 = cljs.core.get.call(null,map__8072__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__8073__$1 = (((((!((map__8073 == null))))?(((((map__8073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8073):map__8073);
var req = map__8073__$1;
var req_id = cljs.core.get.call(null,map__8073__$1,new cljs.core.Keyword(null,"req-id","req-id",-471642231));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhr","xhr",-177710851),new cljs.core.Keyword(null,"req","req",-326448303),req_id], null),resp)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("xhr","remove-response","xhr/remove-response",903761172),(function (p__8077,p__8078){
var map__8079 = p__8077;
var map__8079__$1 = (((((!((map__8079 == null))))?(((((map__8079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8079):map__8079);
var db = cljs.core.get.call(null,map__8079__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__8080 = p__8078;
var _ = cljs.core.nth.call(null,vec__8080,(0),null);
var req_id = cljs.core.nth.call(null,vec__8080,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhr","xhr",-177710851),new cljs.core.Keyword(null,"req","req",-326448303)], null),cljs.core.dissoc,req_id)], null);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("xhr","response","xhr/response",-1068297090),(function (db,p__8084){
var vec__8085 = p__8084;
var _ = cljs.core.nth.call(null,vec__8085,(0),null);
var req_id = cljs.core.nth.call(null,vec__8085,(1),null);
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhr","xhr",-177710851),new cljs.core.Keyword(null,"req","req",-326448303),req_id], null));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("xhr","redirect","xhr/redirect",-1975751232),(function (_,p__8088){
var vec__8089 = p__8088;
var ___$1 = cljs.core.nth.call(null,vec__8089,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__8089,(1),null);
var opts = cljs.core.nth.call(null,vec__8089,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zframes.redirect","redirect","zframes.redirect/redirect",150444856),opts], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("zframes.xhr","fetch-start","zframes.xhr/fetch-start",-520265940),(function (db,p__8092){
var vec__8093 = p__8092;
var _ = cljs.core.nth.call(null,vec__8093,(0),null);
var path = cljs.core.nth.call(null,vec__8093,(1),null);
return cljs.core.assoc.call(null,db,path,true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("zframes.xhr","fetch-end","zframes.xhr/fetch-end",1683243462),(function (db,p__8096){
var vec__8097 = p__8096;
var _ = cljs.core.nth.call(null,vec__8097,(0),null);
var path = cljs.core.nth.call(null,vec__8097,(1),null);
return cljs.core.assoc.call(null,db,path,false);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("xhr","config","xhr/config",994717665),(function (db,_){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhr","xhr",-177710851),new cljs.core.Keyword(null,"config","config",994861415)], null));
}));

//# sourceMappingURL=xhr.js.map
