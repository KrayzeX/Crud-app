// Compiled by ClojureScript 1.10.597 {}
goog.provide('zframes.xf');
goog.require('cljs.core');
/**
 * Convert data to form value.
 *   `xf-def` is a map, whose keys will be keys for a result map,
 *   vector values are pathes to get value from `data`.
 *   Note that result map can be not flat, so `xf-def` map values
 *   can be maps too, which means that converting process will be
 *   called for them recursively.
 */
zframes.xf._GT__GT_ = (function zframes$xf$_GT__GT_(xf_def,data){
return cljs.core.reduce.call(null,(function (acc,p__10597){
var vec__10598 = p__10597;
var field = cljs.core.nth.call(null,vec__10598,(0),null);
var mapper = cljs.core.nth.call(null,vec__10598,(1),null);
var field_value = ((cljs.core.vector_QMARK_.call(null,mapper))?(function (){var G__10607 = cljs.core.get_in.call(null,data,zframes.xf.evaluate_path.call(null,data,mapper));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword("zframes.xf","type","zframes.xf/type",-645211240).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,mapper)))){
return new cljs.core.Keyword("zframes.xf",">>","zframes.xf/>>",-991910559).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,mapper)).call(null,G__10607);
} else {
return G__10607;
}
})():((cljs.core.map_QMARK_.call(null,mapper))?zframes.xf._GT__GT_.call(null,cljs.core.get.call(null,xf_def,field),data):null));
return cljs.core.assoc.call(null,acc,field,field_value);
}),cljs.core.PersistentArrayMap.EMPTY,xf_def);
});
/**
 * Convert form value to data. Mirrored `>>` in most cases.
 */
zframes.xf._LT__LT_ = (function zframes$xf$_LT__LT_(xf_def,value){
return cljs.core.reduce.call(null,(function (acc,p__10613){
var vec__10614 = p__10613;
var field = cljs.core.nth.call(null,vec__10614,(0),null);
var mapper = cljs.core.nth.call(null,vec__10614,(1),null);
if(cljs.core.vector_QMARK_.call(null,mapper)){
return zframes.xf.evaluate_back.call(null,acc,mapper,cljs.core.get.call(null,value,field));
} else {
if(cljs.core.map_QMARK_.call(null,mapper)){
return zframes.xf.deep_merge.call(null,acc,zframes.xf._LT__LT_.call(null,cljs.core.get.call(null,xf_def,field),cljs.core.get.call(null,value,field)));
} else {
return null;
}
}
}),cljs.core.PersistentArrayMap.EMPTY,xf_def);
});
/**
 * An xf operator to get one object from a vector on the path.
 *   `condition` is a map which is used to filter by key-value equality.
 */
zframes.xf.search = (function zframes$xf$search(condition){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("zframes.xf",">>","zframes.xf/>>",-991910559),(function (data){
return zframes.xf.index_search.call(null,condition,data);
}),new cljs.core.Keyword("zframes.xf","<<","zframes.xf/<<",-366128396),condition], null);
});
/**
 * An xf operator to apply custom function to extracted value or
 * before putting value on reverse xf
 */
zframes.xf.f = (function zframes$xf$f(from_fn,to_fn){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("zframes.xf","type","zframes.xf/type",-645211240),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword("zframes.xf",">>","zframes.xf/>>",-991910559),from_fn,new cljs.core.Keyword("zframes.xf","<<","zframes.xf/<<",-366128396),to_fn], null);
});
/**
 * An xf shortcut to apply this transforming engine on collection
 *   with provided xf-def
 */
zframes.xf.coll_xf = (function zframes$xf$coll_xf(xf_def){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("zframes.xf","type","zframes.xf/type",-645211240),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword("zframes.xf",">>","zframes.xf/>>",-991910559),(function (vals){
return cljs.core.mapv.call(null,(function (p1__10621_SHARP_){
return zframes.xf._GT__GT_.call(null,xf_def,p1__10621_SHARP_);
}),vals);
}),new cljs.core.Keyword("zframes.xf","<<","zframes.xf/<<",-366128396),(function (vals){
return cljs.core.mapv.call(null,(function (p1__10622_SHARP_){
return zframes.xf._LT__LT_.call(null,xf_def,p1__10622_SHARP_);
}),vals);
})], null);
});
/**
 * Check if `value` fields conform with `mp` fields.
 */
zframes.xf.check_with_map = (function zframes$xf$check_with_map(mp,value){
return cljs.core.reduce.call(null,(function (_,p__10623){
var vec__10624 = p__10623;
var k = cljs.core.nth.call(null,vec__10624,(0),null);
var v = cljs.core.nth.call(null,vec__10624,(1),null);
if(cljs.core._EQ_.call(null,cljs.core.get.call(null,value,k),v)){
return true;
} else {
return cljs.core.reduced.call(null,false);
}
}),true,mp);
});
/**
 * Get the index of the map, which conforms with `mp` fields.
 */
zframes.xf.index_search = (function zframes$xf$index_search(mp,data){
if(cljs.core.vector_QMARK_.call(null,data)){
} else {
throw (new Error("Assert failed: (vector? data)"));
}

var _PERCENT_ = cljs.core.ffirst.call(null,cljs.core.filter.call(null,(function (p1__10630_SHARP_){
return zframes.xf.check_with_map.call(null,mp,cljs.core.second.call(null,p1__10630_SHARP_));
}),cljs.core.map_indexed.call(null,cljs.core.vector,data)));
if((((_PERCENT_ == null)) || ((_PERCENT_ >= (0))))){
} else {
throw (new Error("Assert failed: (or (nil? %) (>= % 0))"));
}

return _PERCENT_;
});
/**
 * Because `merge` is not cool enough.
 *   Also concats vectors.
 */
zframes.xf.deep_merge = (function zframes$xf$deep_merge(var_args){
var args__4795__auto__ = [];
var len__4789__auto___10665 = arguments.length;
var i__4790__auto___10666 = (0);
while(true){
if((i__4790__auto___10666 < len__4789__auto___10665)){
args__4795__auto__.push((arguments[i__4790__auto___10666]));

var G__10667 = (i__4790__auto___10666 + (1));
i__4790__auto___10666 = G__10667;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return zframes.xf.deep_merge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(zframes.xf.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (v,vs){
var rec_merge = (function zframes$xf$rec_merge(v1,v2){
if(((cljs.core.map_QMARK_.call(null,v1)) && (cljs.core.map_QMARK_.call(null,v2)))){
return cljs.core.merge_with.call(null,zframes.xf.deep_merge,v1,v2);
} else {
if(((cljs.core.vector_QMARK_.call(null,v1)) && (cljs.core.vector_QMARK_.call(null,v2)))){
return cljs.core.vec.call(null,cljs.core.concat.call(null,v1,v2));
} else {
return v2;

}
}
});
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,vs))){
return cljs.core.reduce.call(null,(function (p1__10650_SHARP_,p2__10651_SHARP_){
return rec_merge.call(null,p1__10650_SHARP_,p2__10651_SHARP_);
}),v,vs);
} else {
return null;
}
}));

(zframes.xf.deep_merge.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(zframes.xf.deep_merge.cljs$lang$applyTo = (function (seq10652){
var G__10653 = cljs.core.first.call(null,seq10652);
var seq10652__$1 = cljs.core.next.call(null,seq10652);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10653,seq10652__$1);
}));

/**
 * Prepare `path` vector to be used for `get-in`, evaluating
 *   inner fns if necessary.
 */
zframes.xf.evaluate_path = (function zframes$xf$evaluate_path(data,path){
if(cljs.core.vector_QMARK_.call(null,path)){
} else {
throw (new Error("Assert failed: (vector? path)"));
}

var _PERCENT_ = cljs.core.reduce.call(null,(function (acc,p){
if((p instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,acc,p);
} else {
if(cljs.core.map_QMARK_.call(null,p)){
var G__10673 = new cljs.core.Keyword("zframes.xf","type","zframes.xf/type",-645211240).cljs$core$IFn$_invoke$arity$1(p);
var G__10673__$1 = (((G__10673 instanceof cljs.core.Keyword))?G__10673.fqn:null);
switch (G__10673__$1) {
case "fn":
return acc;

break;
default:
var f = new cljs.core.Keyword("zframes.xf",">>","zframes.xf/>>",-991910559).cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core.fn_QMARK_.call(null,f)){
return cljs.core.conj.call(null,acc,f.call(null,cljs.core.get_in.call(null,data,acc)));
} else {
return null;
}

}
} else {
return null;
}
}
}),cljs.core.PersistentVector.EMPTY,path);
if(cljs.core.vector_QMARK_.call(null,_PERCENT_)){
} else {
throw (new Error("Assert failed: (vector? %)"));
}

return _PERCENT_;
});
/**
 * Puts associated data used for search back in structure.
 */
zframes.xf.evaluate_back = (function zframes$xf$evaluate_back(out_data,path,value){
var v = out_data;
var prev = cljs.core.PersistentVector.EMPTY;
var G__10686 = path;
var vec__10687 = G__10686;
var seq__10688 = cljs.core.seq.call(null,vec__10687);
var first__10689 = cljs.core.first.call(null,seq__10688);
var seq__10688__$1 = cljs.core.next.call(null,seq__10688);
var p = first__10689;
var ps = seq__10688__$1;
var v__$1 = v;
var prev__$1 = prev;
var G__10686__$1 = G__10686;
while(true){
var v__$2 = v__$1;
var prev__$2 = prev__$1;
var vec__10695 = G__10686__$1;
var seq__10696 = cljs.core.seq.call(null,vec__10695);
var first__10697 = cljs.core.first.call(null,seq__10696);
var seq__10696__$1 = cljs.core.next.call(null,seq__10696);
var p__$1 = first__10697;
var ps__$1 = seq__10696__$1;
if((!((p__$1 == null)))){
if((p__$1 instanceof cljs.core.Keyword)){
var G__10700 = v__$2;
var G__10701 = cljs.core.conj.call(null,prev__$2,p__$1);
var G__10702 = ps__$1;
v__$1 = G__10700;
prev__$1 = G__10701;
G__10686__$1 = G__10702;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,p__$1)){
var G__10698 = new cljs.core.Keyword("zframes.xf","type","zframes.xf/type",-645211240).cljs$core$IFn$_invoke$arity$1(p__$1);
var G__10698__$1 = (((G__10698 instanceof cljs.core.Keyword))?G__10698.fqn:null);
switch (G__10698__$1) {
case "fn":
return cljs.core.assoc_in.call(null,v__$2,prev__$2,new cljs.core.Keyword("zframes.xf","<<","zframes.xf/<<",-366128396).cljs$core$IFn$_invoke$arity$1(p__$1).call(null,value));

break;
default:
var ass_data = new cljs.core.Keyword("zframes.xf","<<","zframes.xf/<<",-366128396).cljs$core$IFn$_invoke$arity$1(p__$1);
var temp__5733__auto__ = (function (){var G__10699 = cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.get_in.call(null,v__$2,prev__$2));
var G__10699__$1 = (((G__10699 == null))?null:cljs.core.filter.call(null,((function (v__$1,prev__$1,G__10686__$1,G__10699,ass_data,G__10698,G__10698__$1,v__$2,prev__$2,vec__10695,seq__10696,first__10697,seq__10696__$1,p__$1,ps__$1,v,prev,G__10686,vec__10687,seq__10688,first__10689,seq__10688__$1,p,ps){
return (function (p1__10682_SHARP_){
return zframes.xf.check_with_map.call(null,ass_data,cljs.core.second.call(null,p1__10682_SHARP_));
});})(v__$1,prev__$1,G__10686__$1,G__10699,ass_data,G__10698,G__10698__$1,v__$2,prev__$2,vec__10695,seq__10696,first__10697,seq__10696__$1,p__$1,ps__$1,v,prev,G__10686,vec__10687,seq__10688,first__10689,seq__10688__$1,p,ps))
,G__10699));
if((G__10699__$1 == null)){
return null;
} else {
return cljs.core.ffirst.call(null,G__10699__$1);
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var i = temp__5733__auto__;
var G__10709 = v__$2;
var G__10710 = cljs.core.conj.call(null,prev__$2,i);
var G__10711 = ps__$1;
v__$1 = G__10709;
prev__$1 = G__10710;
G__10686__$1 = G__10711;
continue;
} else {
var G__10712 = cljs.core.update_in.call(null,v__$2,prev__$2,cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),ass_data);
var G__10713 = cljs.core.conj.call(null,prev__$2,cljs.core.count.call(null,cljs.core.get_in.call(null,v__$2,prev__$2)));
var G__10714 = ps__$1;
v__$1 = G__10712;
prev__$1 = G__10713;
G__10686__$1 = G__10714;
continue;
}

}
} else {
return null;
}
}
} else {
return cljs.core.assoc_in.call(null,v__$2,prev__$2,value);
}
break;
}
});

//# sourceMappingURL=xf.js.map
