// Compiled by ClojureScript 1.10.597 {}
goog.provide('zframes.effects');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("effects","set-title","effects/set-title",-1037072258),(function (value){
return (document.title = (function (){var or__4185__auto__ = cljs.core.not_empty.call(null,value);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Cleo EMR";
}
})());
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"focus-by-id","focus-by-id",1037899070),(function (id){
return document.getElementById(id).focus();
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"copy-to-clipboard","copy-to-clipboard",-1375474147),(function (p__10715){
var vec__10716 = p__10715;
var text_to_copy = cljs.core.nth.call(null,vec__10716,(0),null);
var element_to_highlight = cljs.core.nth.call(null,vec__10716,(1),null);
if(cljs.core.not.call(null,element_to_highlight)){
return navigator.clipboard.writeText(text_to_copy).catch((function (e){
throw (new Error("copy to clipboard failed"));
}));
} else {
return navigator.clipboard.writeText(text_to_copy).then((new Promise((function (){
return element_to_highlight.classList.add("highlighted");
})))).then(setTimeout((function (){
return element_to_highlight.classList.remove("highlighted");
}),(200))).catch((function (e){
throw (new Error("copy to clipboard failed"));
}));
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"copy-to-clipboard","copy-to-clipboard",-1375474147),(function (p__10719,p__10720){
var map__10721 = p__10719;
var map__10721__$1 = (((((!((map__10721 == null))))?(((((map__10721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10721):map__10721);
var db = cljs.core.get.call(null,map__10721__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__10722 = p__10720;
var _ = cljs.core.nth.call(null,vec__10722,(0),null);
var x = cljs.core.nth.call(null,vec__10722,(1),null);
var y = cljs.core.nth.call(null,vec__10722,(2),null);
var vec__10726 = (cljs.core.truth_(y)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null):((typeof x === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,null], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x.text,x], null)
));
var text_to_copy = cljs.core.nth.call(null,vec__10726,(0),null);
var element_to_highlight = cljs.core.nth.call(null,vec__10726,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"copy-to-clipboard","copy-to-clipboard",-1375474147),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text_to_copy,element_to_highlight], null)], null);
}));

//# sourceMappingURL=effects.js.map
