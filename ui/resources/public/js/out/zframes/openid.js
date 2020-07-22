// Compiled by ClojureScript 1.10.597 {}
goog.provide('zframes.openid');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('re_frame.core');
goog.require('clojure.string');
goog.require('goog.crypt.base64');
zframes.openid.decode = (function zframes$openid$decode(token){
var segments = cljs.spec.alpha.conform.call(null,cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.Keyword(null,"signature","signature",1463754794)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.string_QMARK_,cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)], null)),clojure.string.split.call(null,token,"."));
if((!(cljs.core.map_QMARK_.call(null,segments)))){
throw (new Error("invalid token"));
} else {
var header = JSON.parse(atob(new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(segments)));
var payload = JSON.parse(atob(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(segments)));
return payload;
}
});
goog.exportSymbol('zframes.openid.decode', zframes.openid.decode);
zframes.openid.check_token = (function zframes$openid$check_token(){
var hash = (function (){var temp__5735__auto__ = window.location.hash;
if(cljs.core.truth_(temp__5735__auto__)){
var h = temp__5735__auto__;
return clojure.string.replace.call(null,h,/^#/,"");
} else {
return null;
}
})();
if(cljs.core.truth_(clojure.string.index_of.call(null,hash,"id_token"))){
var token = cljs.core.first.call(null,cljs.core.map.call(null,(function (x){
return clojure.string.replace.call(null,x,/^id_token=/,"");
}),cljs.core.filter.call(null,(function (p1__10186_SHARP_){
return clojure.string.starts_with_QMARK_.call(null,p1__10186_SHARP_,"id_token=");
}),clojure.string.split.call(null,hash,"&"))));
var jwt = cljs.core.js__GT_clj.call(null,zframes.openid.decode.call(null,token),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
(window.location.hash = (function (){var or__4185__auto__ = cljs.core.first.call(null,clojure.string.split.call(null,hash,"#"));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());

return cljs.core.assoc.call(null,jwt,new cljs.core.Keyword(null,"id_token","id_token",148712273),token);
} else {
return null;
}
});
re_frame.core.reg_cofx.call(null,new cljs.core.Keyword("zframes.openid","jwt","zframes.openid/jwt",1256316228),(function (coeffects){
return cljs.core.assoc_in.call(null,coeffects,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jwt","jwt",1504015441)], null),zframes.openid.check_token.call(null));
}));

//# sourceMappingURL=openid.js.map
