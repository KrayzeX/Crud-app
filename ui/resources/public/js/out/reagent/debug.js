// Compiled by ClojureScript 1.10.597 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__7453__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__7453 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7454__i = 0, G__7454__a = new Array(arguments.length -  0);
while (G__7454__i < G__7454__a.length) {G__7454__a[G__7454__i] = arguments[G__7454__i + 0]; ++G__7454__i;}
  args = new cljs.core.IndexedSeq(G__7454__a,0,null);
} 
return G__7453__delegate.call(this,args);};
G__7453.cljs$lang$maxFixedArity = 0;
G__7453.cljs$lang$applyTo = (function (arglist__7455){
var args = cljs.core.seq(arglist__7455);
return G__7453__delegate(args);
});
G__7453.cljs$core$IFn$_invoke$arity$variadic = G__7453__delegate;
return G__7453;
})()
);

(o.error = (function() { 
var G__7456__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__7456 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7457__i = 0, G__7457__a = new Array(arguments.length -  0);
while (G__7457__i < G__7457__a.length) {G__7457__a[G__7457__i] = arguments[G__7457__i + 0]; ++G__7457__i;}
  args = new cljs.core.IndexedSeq(G__7457__a,0,null);
} 
return G__7456__delegate.call(this,args);};
G__7456.cljs$lang$maxFixedArity = 0;
G__7456.cljs$lang$applyTo = (function (arglist__7458){
var args = cljs.core.seq(arglist__7458);
return G__7456__delegate(args);
});
G__7456.cljs$core$IFn$_invoke$arity$variadic = G__7456__delegate;
return G__7456;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
