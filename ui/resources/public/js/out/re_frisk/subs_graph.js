// Compiled by ClojureScript 1.10.597 {}
goog.provide('re_frisk.subs_graph');
goog.require('cljs.core');
goog.require('re_frisk.ui.components.colors');
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.network !== 'undefined')){
} else {
re_frisk.subs_graph.network = cljs.core.atom.call(null,null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.vis !== 'undefined')){
} else {
re_frisk.subs_graph.vis = cljs.core.atom.call(null,null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.doc !== 'undefined')){
} else {
re_frisk.subs_graph.doc = cljs.core.atom.call(null,null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.nodes !== 'undefined')){
} else {
re_frisk.subs_graph.nodes = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.edges !== 'undefined')){
} else {
re_frisk.subs_graph.edges = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.options !== 'undefined')){
} else {
re_frisk.subs_graph.options = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"physics","physics",-1254209137),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"solver","solver",-744421825),"forceAtlas2Based",new cljs.core.Keyword(null,"maxVelocity","maxVelocity",1721643083),(30),new cljs.core.Keyword(null,"minVelocity","minVelocity",-32716928),(10),new cljs.core.Keyword(null,"stabilization","stabilization",-1209068026),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"iterations","iterations",-1402710890),(30)], null)], null)], null));
}
re_frisk.subs_graph.init = (function re_frisk$subs_graph$init(win,document){
cljs.core.reset_BANG_.call(null,re_frisk.subs_graph.vis,win.vis);

return cljs.core.reset_BANG_.call(null,re_frisk.subs_graph.doc,document);
});
re_frisk.subs_graph.set_root_node = (function re_frisk$subs_graph$set_root_node(reaction){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,re_frisk.subs_graph.nodes),reaction))){
return null;
} else {
var data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction,new cljs.core.Keyword(null,"label","label",1718410804),"app-db",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"yellow","yellow",-881035449)], null)], null);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.nodes,cljs.core.assoc,reaction,data);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js.call(null,data));
} else {
return null;
}
}
});
re_frisk.subs_graph.destroy = (function re_frisk$subs_graph$destroy(){
var temp__5735__auto__ = new cljs.core.Keyword(null,"network","network",2050004697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network));
if(cljs.core.truth_(temp__5735__auto__)){
var network_js = temp__5735__auto__;
network_js.destroy();

return cljs.core.reset_BANG_.call(null,re_frisk.subs_graph.network,null);
} else {
return null;
}
});
re_frisk.subs_graph.create = (function re_frisk$subs_graph$create(){
re_frisk.subs_graph.destroy.call(null);

if(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.deref.call(null,re_frisk.subs_graph.vis);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.deref.call(null,re_frisk.subs_graph.doc);
} else {
return and__4174__auto__;
}
})())){
var Network = cljs.core.deref.call(null,re_frisk.subs_graph.vis).Network;
var DataSet = cljs.core.deref.call(null,re_frisk.subs_graph.vis).DataSet;
var nodes_ds = (new DataSet(cljs.core.clj__GT_js.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,re_frisk.subs_graph.nodes)))));
var edges_ds = (new DataSet(cljs.core.clj__GT_js.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,re_frisk.subs_graph.edges)))));
var data = ({"nodes": nodes_ds, "edges": edges_ds});
var temp__5735__auto__ = cljs.core.deref.call(null,re_frisk.subs_graph.doc).getElementById("global-subs-graph-container");
if(cljs.core.truth_(temp__5735__auto__)){
var container = temp__5735__auto__;
return cljs.core.reset_BANG_.call(null,re_frisk.subs_graph.network,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"network","network",2050004697),(new Network(container,data,re_frisk.subs_graph.options))], null));
} else {
return null;
}
} else {
return null;
}
});
re_frisk.subs_graph.update_subs = (function re_frisk$subs_graph$update_subs(traces){
var temp__5735__auto___14215 = new cljs.core.Keyword(null,"app-db-reaction","app-db-reaction",-269835135).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,traces));
if(cljs.core.truth_(temp__5735__auto___14215)){
var app_db_reaction_14216 = temp__5735__auto___14215;
re_frisk.subs_graph.set_root_node.call(null,app_db_reaction_14216);
} else {
}

var new_nodes = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var seq__14087_14217 = cljs.core.seq.call(null,traces);
var chunk__14088_14218 = null;
var count__14089_14219 = (0);
var i__14090_14220 = (0);
while(true){
if((i__14090_14220 < count__14089_14219)){
var map__14151_14221 = cljs.core._nth.call(null,chunk__14088_14218,i__14090_14220);
var map__14151_14222__$1 = (((((!((map__14151_14221 == null))))?(((((map__14151_14221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14151_14221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14151_14221):map__14151_14221);
var subs_14223 = cljs.core.get.call(null,map__14151_14222__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__14153_14224 = cljs.core.seq.call(null,subs_14223);
var chunk__14154_14225 = null;
var count__14155_14226 = (0);
var i__14156_14227 = (0);
while(true){
if((i__14156_14227 < count__14155_14226)){
var map__14169_14228 = cljs.core._nth.call(null,chunk__14154_14225,i__14156_14227);
var map__14169_14229__$1 = (((((!((map__14169_14228 == null))))?(((((map__14169_14228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14169_14228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14169_14228):map__14169_14228);
var op_type_14230 = cljs.core.get.call(null,map__14169_14229__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_14231 = cljs.core.get.call(null,map__14169_14229__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_14232 = cljs.core.get.call(null,map__14169_14229__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_14233 = cljs.core.get.call(null,map__14169_14229__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5733__auto___14234 = cljs.core.get.call(null,cljs.core.deref.call(null,re_frisk.subs_graph.nodes),reaction_14231);
if(cljs.core.truth_(temp__5733__auto___14234)){
var old_reaction_14235 = temp__5733__auto___14234;
if(cljs.core.not_EQ_.call(null,op_type_14230,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_14235))){
var updated_node_14236 = cljs.core.assoc.call(null,old_reaction_14235,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_14230,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.call(null,re_frisk.ui.components.colors.sub_colors,op_type_14230)], null));
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.nodes,cljs.core.assoc,reaction_14231,updated_node_14236);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_14236], null)));
} else {
}
} else {
}
} else {
var data_14237 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_14231,new cljs.core.Keyword(null,"label","label",1718410804),operation_14233,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.call(null,re_frisk.ui.components.colors.sub_colors,op_type_14230)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_14230], null);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.nodes,cljs.core.assoc,reaction_14231,data_14237);

cljs.core.swap_BANG_.call(null,new_nodes,cljs.core.conj,data_14237);
}

if(cljs.core.truth_(input_signals_14232)){
var seq__14171_14238 = cljs.core.seq.call(null,input_signals_14232);
var chunk__14172_14239 = null;
var count__14173_14240 = (0);
var i__14174_14241 = (0);
while(true){
if((i__14174_14241 < count__14173_14240)){
var input_reaction_14242 = cljs.core._nth.call(null,chunk__14172_14239,i__14174_14241);
var reaction_path_14243 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_14242),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_14231)].join('');
var temp__5733__auto___14244 = cljs.core.get.call(null,cljs.core.deref.call(null,re_frisk.subs_graph.edges),reaction_path_14243);
if(cljs.core.truth_(temp__5733__auto___14244)){
var old_edge_14245 = temp__5733__auto___14244;
var updated_edge_14246 = cljs.core.update.call(null,old_edge_14245,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_14243,updated_edge_14246);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_14246], null)));
} else {
}
} else {
var data_14247 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_14243,new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_14242,new cljs.core.Keyword(null,"to","to",192099007),reaction_14231,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_14243,data_14247);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js.call(null,data_14247));
} else {
}
}


var G__14248 = seq__14171_14238;
var G__14249 = chunk__14172_14239;
var G__14250 = count__14173_14240;
var G__14251 = (i__14174_14241 + (1));
seq__14171_14238 = G__14248;
chunk__14172_14239 = G__14249;
count__14173_14240 = G__14250;
i__14174_14241 = G__14251;
continue;
} else {
var temp__5735__auto___14252 = cljs.core.seq.call(null,seq__14171_14238);
if(temp__5735__auto___14252){
var seq__14171_14253__$1 = temp__5735__auto___14252;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14171_14253__$1)){
var c__4609__auto___14254 = cljs.core.chunk_first.call(null,seq__14171_14253__$1);
var G__14255 = cljs.core.chunk_rest.call(null,seq__14171_14253__$1);
var G__14256 = c__4609__auto___14254;
var G__14257 = cljs.core.count.call(null,c__4609__auto___14254);
var G__14258 = (0);
seq__14171_14238 = G__14255;
chunk__14172_14239 = G__14256;
count__14173_14240 = G__14257;
i__14174_14241 = G__14258;
continue;
} else {
var input_reaction_14259 = cljs.core.first.call(null,seq__14171_14253__$1);
var reaction_path_14260 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_14259),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_14231)].join('');
var temp__5733__auto___14261 = cljs.core.get.call(null,cljs.core.deref.call(null,re_frisk.subs_graph.edges),reaction_path_14260);
if(cljs.core.truth_(temp__5733__auto___14261)){
var old_edge_14262 = temp__5733__auto___14261;
var updated_edge_14263 = cljs.core.update.call(null,old_edge_14262,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_14260,updated_edge_14263);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_14263], null)));
} else {
}
} else {
var data_14264 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_14260,new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_14259,new cljs.core.Keyword(null,"to","to",192099007),reaction_14231,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_14260,data_14264);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js.call(null,data_14264));
} else {
}
}


var G__14265 = cljs.core.next.call(null,seq__14171_14253__$1);
var G__14266 = null;
var G__14267 = (0);
var G__14268 = (0);
seq__14171_14238 = G__14265;
chunk__14172_14239 = G__14266;
count__14173_14240 = G__14267;
i__14174_14241 = G__14268;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__14269 = seq__14153_14224;
var G__14270 = chunk__14154_14225;
var G__14271 = count__14155_14226;
var G__14272 = (i__14156_14227 + (1));
seq__14153_14224 = G__14269;
chunk__14154_14225 = G__14270;
count__14155_14226 = G__14271;
i__14156_14227 = G__14272;
continue;
} else {
var temp__5735__auto___14273 = cljs.core.seq.call(null,seq__14153_14224);
if(temp__5735__auto___14273){
var seq__14153_14274__$1 = temp__5735__auto___14273;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14153_14274__$1)){
var c__4609__auto___14275 = cljs.core.chunk_first.call(null,seq__14153_14274__$1);
var G__14276 = cljs.core.chunk_rest.call(null,seq__14153_14274__$1);
var G__14277 = c__4609__auto___14275;
var G__14278 = cljs.core.count.call(null,c__4609__auto___14275);
var G__14279 = (0);
seq__14153_14224 = G__14276;
chunk__14154_14225 = G__14277;
count__14155_14226 = G__14278;
i__14156_14227 = G__14279;
continue;
} else {
var map__14175_14280 = cljs.core.first.call(null,seq__14153_14274__$1);
var map__14175_14281__$1 = (((((!((map__14175_14280 == null))))?(((((map__14175_14280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14175_14280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14175_14280):map__14175_14280);
var op_type_14282 = cljs.core.get.call(null,map__14175_14281__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_14283 = cljs.core.get.call(null,map__14175_14281__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_14284 = cljs.core.get.call(null,map__14175_14281__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_14285 = cljs.core.get.call(null,map__14175_14281__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5733__auto___14286 = cljs.core.get.call(null,cljs.core.deref.call(null,re_frisk.subs_graph.nodes),reaction_14283);
if(cljs.core.truth_(temp__5733__auto___14286)){
var old_reaction_14287 = temp__5733__auto___14286;
if(cljs.core.not_EQ_.call(null,op_type_14282,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_14287))){
var updated_node_14288 = cljs.core.assoc.call(null,old_reaction_14287,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_14282,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.call(null,re_frisk.ui.components.colors.sub_colors,op_type_14282)], null));
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.nodes,cljs.core.assoc,reaction_14283,updated_node_14288);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_14288], null)));
} else {
}
} else {
}
} else {
var data_14289 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_14283,new cljs.core.Keyword(null,"label","label",1718410804),operation_14285,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.call(null,re_frisk.ui.components.colors.sub_colors,op_type_14282)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_14282], null);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.nodes,cljs.core.assoc,reaction_14283,data_14289);

cljs.core.swap_BANG_.call(null,new_nodes,cljs.core.conj,data_14289);
}

if(cljs.core.truth_(input_signals_14284)){
var seq__14177_14290 = cljs.core.seq.call(null,input_signals_14284);
var chunk__14178_14291 = null;
var count__14179_14292 = (0);
var i__14180_14293 = (0);
while(true){
if((i__14180_14293 < count__14179_14292)){
var input_reaction_14294 = cljs.core._nth.call(null,chunk__14178_14291,i__14180_14293);
var reaction_path_14295 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_14294),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_14283)].join('');
var temp__5733__auto___14296 = cljs.core.get.call(null,cljs.core.deref.call(null,re_frisk.subs_graph.edges),reaction_path_14295);
if(cljs.core.truth_(temp__5733__auto___14296)){
var old_edge_14297 = temp__5733__auto___14296;
var updated_edge_14298 = cljs.core.update.call(null,old_edge_14297,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_14295,updated_edge_14298);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_14298], null)));
} else {
}
} else {
var data_14299 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_14295,new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_14294,new cljs.core.Keyword(null,"to","to",192099007),reaction_14283,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_14295,data_14299);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js.call(null,data_14299));
} else {
}
}


var G__14300 = seq__14177_14290;
var G__14301 = chunk__14178_14291;
var G__14302 = count__14179_14292;
var G__14303 = (i__14180_14293 + (1));
seq__14177_14290 = G__14300;
chunk__14178_14291 = G__14301;
count__14179_14292 = G__14302;
i__14180_14293 = G__14303;
continue;
} else {
var temp__5735__auto___14304__$1 = cljs.core.seq.call(null,seq__14177_14290);
if(temp__5735__auto___14304__$1){
var seq__14177_14305__$1 = temp__5735__auto___14304__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14177_14305__$1)){
var c__4609__auto___14306 = cljs.core.chunk_first.call(null,seq__14177_14305__$1);
var G__14307 = cljs.core.chunk_rest.call(null,seq__14177_14305__$1);
var G__14308 = c__4609__auto___14306;
var G__14309 = cljs.core.count.call(null,c__4609__auto___14306);
var G__14310 = (0);
seq__14177_14290 = G__14307;
chunk__14178_14291 = G__14308;
count__14179_14292 = G__14309;
i__14180_14293 = G__14310;
continue;
} else {
var input_reaction_14311 = cljs.core.first.call(null,seq__14177_14305__$1);
var reaction_path_14312 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_14311),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_14283)].join('');
var temp__5733__auto___14313 = cljs.core.get.call(null,cljs.core.deref.call(null,re_frisk.subs_graph.edges),reaction_path_14312);
if(cljs.core.truth_(temp__5733__auto___14313)){
var old_edge_14314 = temp__5733__auto___14313;
var updated_edge_14315 = cljs.core.update.call(null,old_edge_14314,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_14312,updated_edge_14315);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_14315], null)));
} else {
}
} else {
var data_14316 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_14312,new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_14311,new cljs.core.Keyword(null,"to","to",192099007),reaction_14283,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_14312,data_14316);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js.call(null,data_14316));
} else {
}
}


var G__14317 = cljs.core.next.call(null,seq__14177_14305__$1);
var G__14318 = null;
var G__14319 = (0);
var G__14320 = (0);
seq__14177_14290 = G__14317;
chunk__14178_14291 = G__14318;
count__14179_14292 = G__14319;
i__14180_14293 = G__14320;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__14321 = cljs.core.next.call(null,seq__14153_14274__$1);
var G__14322 = null;
var G__14323 = (0);
var G__14324 = (0);
seq__14153_14224 = G__14321;
chunk__14154_14225 = G__14322;
count__14155_14226 = G__14323;
i__14156_14227 = G__14324;
continue;
}
} else {
}
}
break;
}


var G__14325 = seq__14087_14217;
var G__14326 = chunk__14088_14218;
var G__14327 = count__14089_14219;
var G__14328 = (i__14090_14220 + (1));
seq__14087_14217 = G__14325;
chunk__14088_14218 = G__14326;
count__14089_14219 = G__14327;
i__14090_14220 = G__14328;
continue;
} else {
var temp__5735__auto___14329 = cljs.core.seq.call(null,seq__14087_14217);
if(temp__5735__auto___14329){
var seq__14087_14330__$1 = temp__5735__auto___14329;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14087_14330__$1)){
var c__4609__auto___14331 = cljs.core.chunk_first.call(null,seq__14087_14330__$1);
var G__14332 = cljs.core.chunk_rest.call(null,seq__14087_14330__$1);
var G__14333 = c__4609__auto___14331;
var G__14334 = cljs.core.count.call(null,c__4609__auto___14331);
var G__14335 = (0);
seq__14087_14217 = G__14332;
chunk__14088_14218 = G__14333;
count__14089_14219 = G__14334;
i__14090_14220 = G__14335;
continue;
} else {
var map__14181_14336 = cljs.core.first.call(null,seq__14087_14330__$1);
var map__14181_14337__$1 = (((((!((map__14181_14336 == null))))?(((((map__14181_14336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14181_14336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14181_14336):map__14181_14336);
var subs_14338 = cljs.core.get.call(null,map__14181_14337__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__14183_14339 = cljs.core.seq.call(null,subs_14338);
var chunk__14184_14340 = null;
var count__14185_14341 = (0);
var i__14186_14342 = (0);
while(true){
if((i__14186_14342 < count__14185_14341)){
var map__14199_14343 = cljs.core._nth.call(null,chunk__14184_14340,i__14186_14342);
var map__14199_14344__$1 = (((((!((map__14199_14343 == null))))?(((((map__14199_14343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14199_14343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14199_14343):map__14199_14343);
var op_type_14345 = cljs.core.get.call(null,map__14199_14344__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_14346 = cljs.core.get.call(null,map__14199_14344__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_14347 = cljs.core.get.call(null,map__14199_14344__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_14348 = cljs.core.get.call(null,map__14199_14344__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5733__auto___14349 = cljs.core.get.call(null,cljs.core.deref.call(null,re_frisk.subs_graph.nodes),reaction_14346);
if(cljs.core.truth_(temp__5733__auto___14349)){
var old_reaction_14350 = temp__5733__auto___14349;
if(cljs.core.not_EQ_.call(null,op_type_14345,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_14350))){
var updated_node_14351 = cljs.core.assoc.call(null,old_reaction_14350,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_14345,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.call(null,re_frisk.ui.components.colors.sub_colors,op_type_14345)], null));
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.nodes,cljs.core.assoc,reaction_14346,updated_node_14351);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_14351], null)));
} else {
}
} else {
}
} else {
var data_14352 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_14346,new cljs.core.Keyword(null,"label","label",1718410804),operation_14348,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.call(null,re_frisk.ui.components.colors.sub_colors,op_type_14345)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_14345], null);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.nodes,cljs.core.assoc,reaction_14346,data_14352);

cljs.core.swap_BANG_.call(null,new_nodes,cljs.core.conj,data_14352);
}

if(cljs.core.truth_(input_signals_14347)){
var seq__14201_14353 = cljs.core.seq.call(null,input_signals_14347);
var chunk__14202_14354 = null;
var count__14203_14355 = (0);
var i__14204_14356 = (0);
while(true){
if((i__14204_14356 < count__14203_14355)){
var input_reaction_14357 = cljs.core._nth.call(null,chunk__14202_14354,i__14204_14356);
var reaction_path_14358 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_14357),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_14346)].join('');
var temp__5733__auto___14359 = cljs.core.get.call(null,cljs.core.deref.call(null,re_frisk.subs_graph.edges),reaction_path_14358);
if(cljs.core.truth_(temp__5733__auto___14359)){
var old_edge_14360 = temp__5733__auto___14359;
var updated_edge_14361 = cljs.core.update.call(null,old_edge_14360,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_14358,updated_edge_14361);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_14361], null)));
} else {
}
} else {
var data_14362 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_14358,new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_14357,new cljs.core.Keyword(null,"to","to",192099007),reaction_14346,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_14358,data_14362);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js.call(null,data_14362));
} else {
}
}


var G__14363 = seq__14201_14353;
var G__14364 = chunk__14202_14354;
var G__14365 = count__14203_14355;
var G__14366 = (i__14204_14356 + (1));
seq__14201_14353 = G__14363;
chunk__14202_14354 = G__14364;
count__14203_14355 = G__14365;
i__14204_14356 = G__14366;
continue;
} else {
var temp__5735__auto___14367__$1 = cljs.core.seq.call(null,seq__14201_14353);
if(temp__5735__auto___14367__$1){
var seq__14201_14368__$1 = temp__5735__auto___14367__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14201_14368__$1)){
var c__4609__auto___14369 = cljs.core.chunk_first.call(null,seq__14201_14368__$1);
var G__14370 = cljs.core.chunk_rest.call(null,seq__14201_14368__$1);
var G__14371 = c__4609__auto___14369;
var G__14372 = cljs.core.count.call(null,c__4609__auto___14369);
var G__14373 = (0);
seq__14201_14353 = G__14370;
chunk__14202_14354 = G__14371;
count__14203_14355 = G__14372;
i__14204_14356 = G__14373;
continue;
} else {
var input_reaction_14374 = cljs.core.first.call(null,seq__14201_14368__$1);
var reaction_path_14375 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_14374),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_14346)].join('');
var temp__5733__auto___14376 = cljs.core.get.call(null,cljs.core.deref.call(null,re_frisk.subs_graph.edges),reaction_path_14375);
if(cljs.core.truth_(temp__5733__auto___14376)){
var old_edge_14377 = temp__5733__auto___14376;
var updated_edge_14378 = cljs.core.update.call(null,old_edge_14377,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_14375,updated_edge_14378);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_14378], null)));
} else {
}
} else {
var data_14379 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_14375,new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_14374,new cljs.core.Keyword(null,"to","to",192099007),reaction_14346,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_14375,data_14379);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js.call(null,data_14379));
} else {
}
}


var G__14380 = cljs.core.next.call(null,seq__14201_14368__$1);
var G__14381 = null;
var G__14382 = (0);
var G__14383 = (0);
seq__14201_14353 = G__14380;
chunk__14202_14354 = G__14381;
count__14203_14355 = G__14382;
i__14204_14356 = G__14383;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__14384 = seq__14183_14339;
var G__14385 = chunk__14184_14340;
var G__14386 = count__14185_14341;
var G__14387 = (i__14186_14342 + (1));
seq__14183_14339 = G__14384;
chunk__14184_14340 = G__14385;
count__14185_14341 = G__14386;
i__14186_14342 = G__14387;
continue;
} else {
var temp__5735__auto___14388__$1 = cljs.core.seq.call(null,seq__14183_14339);
if(temp__5735__auto___14388__$1){
var seq__14183_14389__$1 = temp__5735__auto___14388__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14183_14389__$1)){
var c__4609__auto___14390 = cljs.core.chunk_first.call(null,seq__14183_14389__$1);
var G__14391 = cljs.core.chunk_rest.call(null,seq__14183_14389__$1);
var G__14392 = c__4609__auto___14390;
var G__14393 = cljs.core.count.call(null,c__4609__auto___14390);
var G__14394 = (0);
seq__14183_14339 = G__14391;
chunk__14184_14340 = G__14392;
count__14185_14341 = G__14393;
i__14186_14342 = G__14394;
continue;
} else {
var map__14205_14395 = cljs.core.first.call(null,seq__14183_14389__$1);
var map__14205_14396__$1 = (((((!((map__14205_14395 == null))))?(((((map__14205_14395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14205_14395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14205_14395):map__14205_14395);
var op_type_14397 = cljs.core.get.call(null,map__14205_14396__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_14398 = cljs.core.get.call(null,map__14205_14396__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_14399 = cljs.core.get.call(null,map__14205_14396__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_14400 = cljs.core.get.call(null,map__14205_14396__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5733__auto___14401 = cljs.core.get.call(null,cljs.core.deref.call(null,re_frisk.subs_graph.nodes),reaction_14398);
if(cljs.core.truth_(temp__5733__auto___14401)){
var old_reaction_14402 = temp__5733__auto___14401;
if(cljs.core.not_EQ_.call(null,op_type_14397,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_14402))){
var updated_node_14403 = cljs.core.assoc.call(null,old_reaction_14402,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_14397,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.call(null,re_frisk.ui.components.colors.sub_colors,op_type_14397)], null));
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.nodes,cljs.core.assoc,reaction_14398,updated_node_14403);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_14403], null)));
} else {
}
} else {
}
} else {
var data_14404 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_14398,new cljs.core.Keyword(null,"label","label",1718410804),operation_14400,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.call(null,re_frisk.ui.components.colors.sub_colors,op_type_14397)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_14397], null);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.nodes,cljs.core.assoc,reaction_14398,data_14404);

cljs.core.swap_BANG_.call(null,new_nodes,cljs.core.conj,data_14404);
}

if(cljs.core.truth_(input_signals_14399)){
var seq__14207_14405 = cljs.core.seq.call(null,input_signals_14399);
var chunk__14208_14406 = null;
var count__14209_14407 = (0);
var i__14210_14408 = (0);
while(true){
if((i__14210_14408 < count__14209_14407)){
var input_reaction_14409 = cljs.core._nth.call(null,chunk__14208_14406,i__14210_14408);
var reaction_path_14410 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_14409),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_14398)].join('');
var temp__5733__auto___14411 = cljs.core.get.call(null,cljs.core.deref.call(null,re_frisk.subs_graph.edges),reaction_path_14410);
if(cljs.core.truth_(temp__5733__auto___14411)){
var old_edge_14412 = temp__5733__auto___14411;
var updated_edge_14413 = cljs.core.update.call(null,old_edge_14412,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_14410,updated_edge_14413);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_14413], null)));
} else {
}
} else {
var data_14414 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_14410,new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_14409,new cljs.core.Keyword(null,"to","to",192099007),reaction_14398,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_14410,data_14414);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js.call(null,data_14414));
} else {
}
}


var G__14415 = seq__14207_14405;
var G__14416 = chunk__14208_14406;
var G__14417 = count__14209_14407;
var G__14418 = (i__14210_14408 + (1));
seq__14207_14405 = G__14415;
chunk__14208_14406 = G__14416;
count__14209_14407 = G__14417;
i__14210_14408 = G__14418;
continue;
} else {
var temp__5735__auto___14419__$2 = cljs.core.seq.call(null,seq__14207_14405);
if(temp__5735__auto___14419__$2){
var seq__14207_14420__$1 = temp__5735__auto___14419__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14207_14420__$1)){
var c__4609__auto___14421 = cljs.core.chunk_first.call(null,seq__14207_14420__$1);
var G__14422 = cljs.core.chunk_rest.call(null,seq__14207_14420__$1);
var G__14423 = c__4609__auto___14421;
var G__14424 = cljs.core.count.call(null,c__4609__auto___14421);
var G__14425 = (0);
seq__14207_14405 = G__14422;
chunk__14208_14406 = G__14423;
count__14209_14407 = G__14424;
i__14210_14408 = G__14425;
continue;
} else {
var input_reaction_14426 = cljs.core.first.call(null,seq__14207_14420__$1);
var reaction_path_14427 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_14426),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_14398)].join('');
var temp__5733__auto___14428 = cljs.core.get.call(null,cljs.core.deref.call(null,re_frisk.subs_graph.edges),reaction_path_14427);
if(cljs.core.truth_(temp__5733__auto___14428)){
var old_edge_14429 = temp__5733__auto___14428;
var updated_edge_14430 = cljs.core.update.call(null,old_edge_14429,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_14427,updated_edge_14430);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_14430], null)));
} else {
}
} else {
var data_14431 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_14427,new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_14426,new cljs.core.Keyword(null,"to","to",192099007),reaction_14398,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_14427,data_14431);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js.call(null,data_14431));
} else {
}
}


var G__14432 = cljs.core.next.call(null,seq__14207_14420__$1);
var G__14433 = null;
var G__14434 = (0);
var G__14435 = (0);
seq__14207_14405 = G__14432;
chunk__14208_14406 = G__14433;
count__14209_14407 = G__14434;
i__14210_14408 = G__14435;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__14436 = cljs.core.next.call(null,seq__14183_14389__$1);
var G__14437 = null;
var G__14438 = (0);
var G__14439 = (0);
seq__14183_14339 = G__14436;
chunk__14184_14340 = G__14437;
count__14185_14341 = G__14438;
i__14186_14342 = G__14439;
continue;
}
} else {
}
}
break;
}


var G__14440 = cljs.core.next.call(null,seq__14087_14330__$1);
var G__14441 = null;
var G__14442 = (0);
var G__14443 = (0);
seq__14087_14217 = G__14440;
chunk__14088_14218 = G__14441;
count__14089_14219 = G__14442;
i__14090_14220 = G__14443;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
if((cljs.core.count.call(null,cljs.core.deref.call(null,new_nodes)) > (20))){
return re_frisk.subs_graph.create.call(null);
} else {
var seq__14211 = cljs.core.seq.call(null,cljs.core.deref.call(null,new_nodes));
var chunk__14212 = null;
var count__14213 = (0);
var i__14214 = (0);
while(true){
if((i__14214 < count__14213)){
var data = cljs.core._nth.call(null,chunk__14212,i__14214);
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js.call(null,data));


var G__14444 = seq__14211;
var G__14445 = chunk__14212;
var G__14446 = count__14213;
var G__14447 = (i__14214 + (1));
seq__14211 = G__14444;
chunk__14212 = G__14445;
count__14213 = G__14446;
i__14214 = G__14447;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__14211);
if(temp__5735__auto__){
var seq__14211__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14211__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__14211__$1);
var G__14448 = cljs.core.chunk_rest.call(null,seq__14211__$1);
var G__14449 = c__4609__auto__;
var G__14450 = cljs.core.count.call(null,c__4609__auto__);
var G__14451 = (0);
seq__14211 = G__14448;
chunk__14212 = G__14449;
count__14213 = G__14450;
i__14214 = G__14451;
continue;
} else {
var data = cljs.core.first.call(null,seq__14211__$1);
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js.call(null,data));


var G__14452 = cljs.core.next.call(null,seq__14211__$1);
var G__14453 = null;
var G__14454 = (0);
var G__14455 = (0);
seq__14211 = G__14452;
chunk__14212 = G__14453;
count__14213 = G__14454;
i__14214 = G__14455;
continue;
}
} else {
return null;
}
}
break;
}
}
} else {
return null;
}
});
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.event_network !== 'undefined')){
} else {
re_frisk.subs_graph.event_network = cljs.core.atom.call(null,null);
}
re_frisk.subs_graph.create_event_subs = (function re_frisk$subs_graph$create_event_subs(p__14456){
var map__14457 = p__14456;
var map__14457__$1 = (((((!((map__14457 == null))))?(((((map__14457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14457):map__14457);
var app_db_reaction = cljs.core.get.call(null,map__14457__$1,new cljs.core.Keyword(null,"app-db-reaction","app-db-reaction",-269835135));
var subs = cljs.core.get.call(null,map__14457__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.event_network))){
cljs.core.deref.call(null,re_frisk.subs_graph.event_network).destroy();

cljs.core.reset_BANG_.call(null,re_frisk.subs_graph.event_network,null);
} else {
}

if(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.deref.call(null,re_frisk.subs_graph.vis);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.deref.call(null,re_frisk.subs_graph.doc);
} else {
return and__4174__auto__;
}
})())){
var temp__5735__auto__ = cljs.core.deref.call(null,re_frisk.subs_graph.doc).getElementById("event-subs-graph-container");
if(cljs.core.truth_(temp__5735__auto__)){
var container = temp__5735__auto__;
var Network = cljs.core.deref.call(null,re_frisk.subs_graph.vis).Network;
var DataSet = cljs.core.deref.call(null,re_frisk.subs_graph.vis).DataSet;
var nodes = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([app_db_reaction,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),app_db_reaction,new cljs.core.Keyword(null,"label","label",1718410804),"app-db",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"yellow","yellow",-881035449)], null)], null)]));
var edges = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__14459_14487 = cljs.core.seq.call(null,subs);
var chunk__14460_14488 = null;
var count__14461_14489 = (0);
var i__14462_14490 = (0);
while(true){
if((i__14462_14490 < count__14461_14489)){
var map__14475_14491 = cljs.core._nth.call(null,chunk__14460_14488,i__14462_14490);
var map__14475_14492__$1 = (((((!((map__14475_14491 == null))))?(((((map__14475_14491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14475_14491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14475_14491):map__14475_14491);
var op_type_14493 = cljs.core.get.call(null,map__14475_14492__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_14494 = cljs.core.get.call(null,map__14475_14492__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_14495 = cljs.core.get.call(null,map__14475_14492__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_14496 = cljs.core.get.call(null,map__14475_14492__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5733__auto___14497 = cljs.core.get.call(null,cljs.core.deref.call(null,nodes),reaction_14494);
if(cljs.core.truth_(temp__5733__auto___14497)){
var old_reaction_14498 = temp__5733__auto___14497;
if(cljs.core.not_EQ_.call(null,op_type_14493,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_14498))){
var updated_node_14499 = cljs.core.assoc.call(null,old_reaction_14498,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_14493,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.call(null,re_frisk.ui.components.colors.sub_colors,op_type_14493)], null));
cljs.core.swap_BANG_.call(null,nodes,cljs.core.assoc,reaction_14494,updated_node_14499);
} else {
}
} else {
var data_14500 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_14494,new cljs.core.Keyword(null,"label","label",1718410804),operation_14496,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.call(null,re_frisk.ui.components.colors.sub_colors,op_type_14493)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_14493], null);
cljs.core.swap_BANG_.call(null,nodes,cljs.core.assoc,reaction_14494,data_14500);
}

if(cljs.core.truth_(input_signals_14495)){
var seq__14477_14501 = cljs.core.seq.call(null,input_signals_14495);
var chunk__14478_14502 = null;
var count__14479_14503 = (0);
var i__14480_14504 = (0);
while(true){
if((i__14480_14504 < count__14479_14503)){
var input_reaction_14505 = cljs.core._nth.call(null,chunk__14478_14502,i__14480_14504);
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_14505),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_14494)].join('')))){
} else {
cljs.core.swap_BANG_.call(null,edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_14505),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_14494)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_14505,new cljs.core.Keyword(null,"to","to",192099007),reaction_14494], null));
}


var G__14506 = seq__14477_14501;
var G__14507 = chunk__14478_14502;
var G__14508 = count__14479_14503;
var G__14509 = (i__14480_14504 + (1));
seq__14477_14501 = G__14506;
chunk__14478_14502 = G__14507;
count__14479_14503 = G__14508;
i__14480_14504 = G__14509;
continue;
} else {
var temp__5735__auto___14510__$1 = cljs.core.seq.call(null,seq__14477_14501);
if(temp__5735__auto___14510__$1){
var seq__14477_14511__$1 = temp__5735__auto___14510__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14477_14511__$1)){
var c__4609__auto___14512 = cljs.core.chunk_first.call(null,seq__14477_14511__$1);
var G__14513 = cljs.core.chunk_rest.call(null,seq__14477_14511__$1);
var G__14514 = c__4609__auto___14512;
var G__14515 = cljs.core.count.call(null,c__4609__auto___14512);
var G__14516 = (0);
seq__14477_14501 = G__14513;
chunk__14478_14502 = G__14514;
count__14479_14503 = G__14515;
i__14480_14504 = G__14516;
continue;
} else {
var input_reaction_14517 = cljs.core.first.call(null,seq__14477_14511__$1);
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_14517),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_14494)].join('')))){
} else {
cljs.core.swap_BANG_.call(null,edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_14517),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_14494)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_14517,new cljs.core.Keyword(null,"to","to",192099007),reaction_14494], null));
}


var G__14518 = cljs.core.next.call(null,seq__14477_14511__$1);
var G__14519 = null;
var G__14520 = (0);
var G__14521 = (0);
seq__14477_14501 = G__14518;
chunk__14478_14502 = G__14519;
count__14479_14503 = G__14520;
i__14480_14504 = G__14521;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__14522 = seq__14459_14487;
var G__14523 = chunk__14460_14488;
var G__14524 = count__14461_14489;
var G__14525 = (i__14462_14490 + (1));
seq__14459_14487 = G__14522;
chunk__14460_14488 = G__14523;
count__14461_14489 = G__14524;
i__14462_14490 = G__14525;
continue;
} else {
var temp__5735__auto___14526__$1 = cljs.core.seq.call(null,seq__14459_14487);
if(temp__5735__auto___14526__$1){
var seq__14459_14527__$1 = temp__5735__auto___14526__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14459_14527__$1)){
var c__4609__auto___14528 = cljs.core.chunk_first.call(null,seq__14459_14527__$1);
var G__14529 = cljs.core.chunk_rest.call(null,seq__14459_14527__$1);
var G__14530 = c__4609__auto___14528;
var G__14531 = cljs.core.count.call(null,c__4609__auto___14528);
var G__14532 = (0);
seq__14459_14487 = G__14529;
chunk__14460_14488 = G__14530;
count__14461_14489 = G__14531;
i__14462_14490 = G__14532;
continue;
} else {
var map__14481_14533 = cljs.core.first.call(null,seq__14459_14527__$1);
var map__14481_14534__$1 = (((((!((map__14481_14533 == null))))?(((((map__14481_14533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14481_14533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14481_14533):map__14481_14533);
var op_type_14535 = cljs.core.get.call(null,map__14481_14534__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_14536 = cljs.core.get.call(null,map__14481_14534__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_14537 = cljs.core.get.call(null,map__14481_14534__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_14538 = cljs.core.get.call(null,map__14481_14534__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5733__auto___14539 = cljs.core.get.call(null,cljs.core.deref.call(null,nodes),reaction_14536);
if(cljs.core.truth_(temp__5733__auto___14539)){
var old_reaction_14540 = temp__5733__auto___14539;
if(cljs.core.not_EQ_.call(null,op_type_14535,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_14540))){
var updated_node_14541 = cljs.core.assoc.call(null,old_reaction_14540,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_14535,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.call(null,re_frisk.ui.components.colors.sub_colors,op_type_14535)], null));
cljs.core.swap_BANG_.call(null,nodes,cljs.core.assoc,reaction_14536,updated_node_14541);
} else {
}
} else {
var data_14542 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_14536,new cljs.core.Keyword(null,"label","label",1718410804),operation_14538,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.call(null,re_frisk.ui.components.colors.sub_colors,op_type_14535)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_14535], null);
cljs.core.swap_BANG_.call(null,nodes,cljs.core.assoc,reaction_14536,data_14542);
}

if(cljs.core.truth_(input_signals_14537)){
var seq__14483_14543 = cljs.core.seq.call(null,input_signals_14537);
var chunk__14484_14544 = null;
var count__14485_14545 = (0);
var i__14486_14546 = (0);
while(true){
if((i__14486_14546 < count__14485_14545)){
var input_reaction_14547 = cljs.core._nth.call(null,chunk__14484_14544,i__14486_14546);
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_14547),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_14536)].join('')))){
} else {
cljs.core.swap_BANG_.call(null,edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_14547),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_14536)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_14547,new cljs.core.Keyword(null,"to","to",192099007),reaction_14536], null));
}


var G__14548 = seq__14483_14543;
var G__14549 = chunk__14484_14544;
var G__14550 = count__14485_14545;
var G__14551 = (i__14486_14546 + (1));
seq__14483_14543 = G__14548;
chunk__14484_14544 = G__14549;
count__14485_14545 = G__14550;
i__14486_14546 = G__14551;
continue;
} else {
var temp__5735__auto___14552__$2 = cljs.core.seq.call(null,seq__14483_14543);
if(temp__5735__auto___14552__$2){
var seq__14483_14553__$1 = temp__5735__auto___14552__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14483_14553__$1)){
var c__4609__auto___14554 = cljs.core.chunk_first.call(null,seq__14483_14553__$1);
var G__14555 = cljs.core.chunk_rest.call(null,seq__14483_14553__$1);
var G__14556 = c__4609__auto___14554;
var G__14557 = cljs.core.count.call(null,c__4609__auto___14554);
var G__14558 = (0);
seq__14483_14543 = G__14555;
chunk__14484_14544 = G__14556;
count__14485_14545 = G__14557;
i__14486_14546 = G__14558;
continue;
} else {
var input_reaction_14559 = cljs.core.first.call(null,seq__14483_14553__$1);
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_14559),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_14536)].join('')))){
} else {
cljs.core.swap_BANG_.call(null,edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_14559),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_14536)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_14559,new cljs.core.Keyword(null,"to","to",192099007),reaction_14536], null));
}


var G__14560 = cljs.core.next.call(null,seq__14483_14553__$1);
var G__14561 = null;
var G__14562 = (0);
var G__14563 = (0);
seq__14483_14543 = G__14560;
chunk__14484_14544 = G__14561;
count__14485_14545 = G__14562;
i__14486_14546 = G__14563;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__14564 = cljs.core.next.call(null,seq__14459_14527__$1);
var G__14565 = null;
var G__14566 = (0);
var G__14567 = (0);
seq__14459_14487 = G__14564;
chunk__14460_14488 = G__14565;
count__14461_14489 = G__14566;
i__14462_14490 = G__14567;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frisk.subs_graph.event_network,(new Network(container,({"nodes": (new DataSet(cljs.core.clj__GT_js.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,nodes))))), "edges": (new DataSet(cljs.core.clj__GT_js.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,edges)))))}),re_frisk.subs_graph.options)));
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=subs_graph.js.map
