// Compiled by ClojureScript 1.10.597 {}
goog.provide('zframes.storage');
goog.require('cljs.core');
goog.require('re_frame.core');
zframes.storage.keywordize = (function zframes$storage$keywordize(x){
return cljs.core.js__GT_clj.call(null,x,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
zframes.storage.remove_item = (function zframes$storage$remove_item(key){
return window.localStorage.removeItem(key);
});
zframes.storage.set_item = (function zframes$storage$set_item(key,val){
return window.localStorage.setItem(cljs.core.name.call(null,key),encodeURIComponent(JSON.stringify(cljs.core.clj__GT_js.call(null,val))));
});
zframes.storage.get_item = (function zframes$storage$get_item(key){
try{return zframes.storage.keywordize.call(null,JSON.parse(decodeURIComponent(window.localStorage.getItem(cljs.core.name.call(null,key)))));
}catch (e9901){if((e9901 instanceof Object)){
var e = e9901;
zframes.storage.remove_item.call(null,key);

return null;
} else {
throw e9901;

}
}});
re_frame.core.reg_cofx.call(null,new cljs.core.Keyword("storage","get","storage/get",-729607478),(function (coeffects,keys){
return cljs.core.reduce.call(null,(function (coef,k){
return cljs.core.assoc_in.call(null,coef,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"storage","storage",1867247511),k], null),zframes.storage.get_item.call(null,k));
}),coeffects,keys);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("storage","set","storage/set",-2122866619),(function (items){
var seq__9902 = cljs.core.seq.call(null,items);
var chunk__9903 = null;
var count__9904 = (0);
var i__9905 = (0);
while(true){
if((i__9905 < count__9904)){
var vec__9912 = cljs.core._nth.call(null,chunk__9903,i__9905);
var k = cljs.core.nth.call(null,vec__9912,(0),null);
var v = cljs.core.nth.call(null,vec__9912,(1),null);
zframes.storage.set_item.call(null,k,v);


var G__9918 = seq__9902;
var G__9919 = chunk__9903;
var G__9920 = count__9904;
var G__9921 = (i__9905 + (1));
seq__9902 = G__9918;
chunk__9903 = G__9919;
count__9904 = G__9920;
i__9905 = G__9921;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__9902);
if(temp__5735__auto__){
var seq__9902__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9902__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__9902__$1);
var G__9922 = cljs.core.chunk_rest.call(null,seq__9902__$1);
var G__9923 = c__4609__auto__;
var G__9924 = cljs.core.count.call(null,c__4609__auto__);
var G__9925 = (0);
seq__9902 = G__9922;
chunk__9903 = G__9923;
count__9904 = G__9924;
i__9905 = G__9925;
continue;
} else {
var vec__9915 = cljs.core.first.call(null,seq__9902__$1);
var k = cljs.core.nth.call(null,vec__9915,(0),null);
var v = cljs.core.nth.call(null,vec__9915,(1),null);
zframes.storage.set_item.call(null,k,v);


var G__9926 = cljs.core.next.call(null,seq__9902__$1);
var G__9927 = null;
var G__9928 = (0);
var G__9929 = (0);
seq__9902 = G__9926;
chunk__9903 = G__9927;
count__9904 = G__9928;
i__9905 = G__9929;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("storage","remove","storage/remove",1735937899),(function (keys){
var seq__9930 = cljs.core.seq.call(null,keys);
var chunk__9931 = null;
var count__9932 = (0);
var i__9933 = (0);
while(true){
if((i__9933 < count__9932)){
var k = cljs.core._nth.call(null,chunk__9931,i__9933);
zframes.storage.remove_item.call(null,cljs.core.name.call(null,k));


var G__9934 = seq__9930;
var G__9935 = chunk__9931;
var G__9936 = count__9932;
var G__9937 = (i__9933 + (1));
seq__9930 = G__9934;
chunk__9931 = G__9935;
count__9932 = G__9936;
i__9933 = G__9937;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__9930);
if(temp__5735__auto__){
var seq__9930__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9930__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__9930__$1);
var G__9938 = cljs.core.chunk_rest.call(null,seq__9930__$1);
var G__9939 = c__4609__auto__;
var G__9940 = cljs.core.count.call(null,c__4609__auto__);
var G__9941 = (0);
seq__9930 = G__9938;
chunk__9931 = G__9939;
count__9932 = G__9940;
i__9933 = G__9941;
continue;
} else {
var k = cljs.core.first.call(null,seq__9930__$1);
zframes.storage.remove_item.call(null,cljs.core.name.call(null,k));


var G__9942 = cljs.core.next.call(null,seq__9930__$1);
var G__9943 = null;
var G__9944 = (0);
var G__9945 = (0);
seq__9930 = G__9942;
chunk__9931 = G__9943;
count__9932 = G__9944;
i__9933 = G__9945;
continue;
}
} else {
return null;
}
}
break;
}
}));

//# sourceMappingURL=storage.js.map
