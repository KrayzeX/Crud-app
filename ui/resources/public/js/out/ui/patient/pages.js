// Compiled by ClojureScript 1.10.597 {}
goog.provide('ui.patient.pages');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
if((typeof ui !== 'undefined') && (typeof ui.patient !== 'undefined') && (typeof ui.patient.pages !== 'undefined') && (typeof ui.patient.pages.pages !== 'undefined')){
} else {
ui.patient.pages.pages = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
ui.patient.pages.reg_page = (function ui$patient$pages$reg_page(key,page){
return cljs.core.swap_BANG_.call(null,ui.patient.pages.pages,cljs.core.assoc,key,page);
});

//# sourceMappingURL=pages.js.map
