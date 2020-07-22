// Compiled by ClojureScript 1.10.597 {}
goog.provide('ui.pages');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
if((typeof ui !== 'undefined') && (typeof ui.pages !== 'undefined') && (typeof ui.pages.pages !== 'undefined')){
} else {
ui.pages.pages = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
ui.pages.reg_page = (function ui$pages$reg_page(key,page){
return cljs.core.swap_BANG_.call(null,ui.pages.pages,cljs.core.assoc,key,page);
});

//# sourceMappingURL=pages.js.map
