// Compiled by ClojureScript 1.10.597 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__11386 = arguments.length;
switch (G__11386) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11387 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11387 = (function (f,blockable,meta11388){
this.f = f;
this.blockable = blockable;
this.meta11388 = meta11388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11389,meta11388__$1){
var self__ = this;
var _11389__$1 = this;
return (new cljs.core.async.t_cljs$core$async11387(self__.f,self__.blockable,meta11388__$1));
}));

(cljs.core.async.t_cljs$core$async11387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11389){
var self__ = this;
var _11389__$1 = this;
return self__.meta11388;
}));

(cljs.core.async.t_cljs$core$async11387.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11387.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11387.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async11387.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async11387.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta11388","meta11388",-1086518860,null)], null);
}));

(cljs.core.async.t_cljs$core$async11387.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11387");

(cljs.core.async.t_cljs$core$async11387.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async11387");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11387.
 */
cljs.core.async.__GT_t_cljs$core$async11387 = (function cljs$core$async$__GT_t_cljs$core$async11387(f__$1,blockable__$1,meta11388){
return (new cljs.core.async.t_cljs$core$async11387(f__$1,blockable__$1,meta11388));
});

}

return (new cljs.core.async.t_cljs$core$async11387(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__11393 = arguments.length;
switch (G__11393) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__11396 = arguments.length;
switch (G__11396) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__11399 = arguments.length;
switch (G__11399) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_11401 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_11401);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_11401);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__11403 = arguments.length;
switch (G__11403) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___11405 = n;
var x_11406 = (0);
while(true){
if((x_11406 < n__4666__auto___11405)){
(a[x_11406] = x_11406);

var G__11407 = (x_11406 + (1));
x_11406 = G__11407;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11408 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11408 = (function (flag,meta11409){
this.flag = flag;
this.meta11409 = meta11409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11410,meta11409__$1){
var self__ = this;
var _11410__$1 = this;
return (new cljs.core.async.t_cljs$core$async11408(self__.flag,meta11409__$1));
}));

(cljs.core.async.t_cljs$core$async11408.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11410){
var self__ = this;
var _11410__$1 = this;
return self__.meta11409;
}));

(cljs.core.async.t_cljs$core$async11408.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11408.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async11408.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11408.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async11408.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11409","meta11409",-651651777,null)], null);
}));

(cljs.core.async.t_cljs$core$async11408.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11408.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11408");

(cljs.core.async.t_cljs$core$async11408.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async11408");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11408.
 */
cljs.core.async.__GT_t_cljs$core$async11408 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11408(flag__$1,meta11409){
return (new cljs.core.async.t_cljs$core$async11408(flag__$1,meta11409));
});

}

return (new cljs.core.async.t_cljs$core$async11408(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11411 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11411 = (function (flag,cb,meta11412){
this.flag = flag;
this.cb = cb;
this.meta11412 = meta11412;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11413,meta11412__$1){
var self__ = this;
var _11413__$1 = this;
return (new cljs.core.async.t_cljs$core$async11411(self__.flag,self__.cb,meta11412__$1));
}));

(cljs.core.async.t_cljs$core$async11411.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11413){
var self__ = this;
var _11413__$1 = this;
return self__.meta11412;
}));

(cljs.core.async.t_cljs$core$async11411.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11411.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async11411.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11411.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async11411.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11412","meta11412",1918855739,null)], null);
}));

(cljs.core.async.t_cljs$core$async11411.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11411.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11411");

(cljs.core.async.t_cljs$core$async11411.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async11411");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11411.
 */
cljs.core.async.__GT_t_cljs$core$async11411 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11411(flag__$1,cb__$1,meta11412){
return (new cljs.core.async.t_cljs$core$async11411(flag__$1,cb__$1,meta11412));
});

}

return (new cljs.core.async.t_cljs$core$async11411(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11414_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11414_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11415_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11415_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__11416 = (i + (1));
i = G__11416;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___11422 = arguments.length;
var i__4790__auto___11423 = (0);
while(true){
if((i__4790__auto___11423 < len__4789__auto___11422)){
args__4795__auto__.push((arguments[i__4790__auto___11423]));

var G__11424 = (i__4790__auto___11423 + (1));
i__4790__auto___11423 = G__11424;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11419){
var map__11420 = p__11419;
var map__11420__$1 = (((((!((map__11420 == null))))?(((((map__11420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11420):map__11420);
var opts = map__11420__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11417){
var G__11418 = cljs.core.first.call(null,seq11417);
var seq11417__$1 = cljs.core.next.call(null,seq11417);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11418,seq11417__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__11426 = arguments.length;
switch (G__11426) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__11326__auto___11472 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11327__auto__ = (function (){var switch__11231__auto__ = (function (state_11450){
var state_val_11451 = (state_11450[(1)]);
if((state_val_11451 === (7))){
var inst_11446 = (state_11450[(2)]);
var state_11450__$1 = state_11450;
var statearr_11452_11473 = state_11450__$1;
(statearr_11452_11473[(2)] = inst_11446);

(statearr_11452_11473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11451 === (1))){
var state_11450__$1 = state_11450;
var statearr_11453_11474 = state_11450__$1;
(statearr_11453_11474[(2)] = null);

(statearr_11453_11474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11451 === (4))){
var inst_11429 = (state_11450[(7)]);
var inst_11429__$1 = (state_11450[(2)]);
var inst_11430 = (inst_11429__$1 == null);
var state_11450__$1 = (function (){var statearr_11454 = state_11450;
(statearr_11454[(7)] = inst_11429__$1);

return statearr_11454;
})();
if(cljs.core.truth_(inst_11430)){
var statearr_11455_11475 = state_11450__$1;
(statearr_11455_11475[(1)] = (5));

} else {
var statearr_11456_11476 = state_11450__$1;
(statearr_11456_11476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11451 === (13))){
var state_11450__$1 = state_11450;
var statearr_11457_11477 = state_11450__$1;
(statearr_11457_11477[(2)] = null);

(statearr_11457_11477[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11451 === (6))){
var inst_11429 = (state_11450[(7)]);
var state_11450__$1 = state_11450;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11450__$1,(11),to,inst_11429);
} else {
if((state_val_11451 === (3))){
var inst_11448 = (state_11450[(2)]);
var state_11450__$1 = state_11450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11450__$1,inst_11448);
} else {
if((state_val_11451 === (12))){
var state_11450__$1 = state_11450;
var statearr_11458_11478 = state_11450__$1;
(statearr_11458_11478[(2)] = null);

(statearr_11458_11478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11451 === (2))){
var state_11450__$1 = state_11450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11450__$1,(4),from);
} else {
if((state_val_11451 === (11))){
var inst_11439 = (state_11450[(2)]);
var state_11450__$1 = state_11450;
if(cljs.core.truth_(inst_11439)){
var statearr_11459_11479 = state_11450__$1;
(statearr_11459_11479[(1)] = (12));

} else {
var statearr_11460_11480 = state_11450__$1;
(statearr_11460_11480[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11451 === (9))){
var state_11450__$1 = state_11450;
var statearr_11461_11481 = state_11450__$1;
(statearr_11461_11481[(2)] = null);

(statearr_11461_11481[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11451 === (5))){
var state_11450__$1 = state_11450;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11462_11482 = state_11450__$1;
(statearr_11462_11482[(1)] = (8));

} else {
var statearr_11463_11483 = state_11450__$1;
(statearr_11463_11483[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11451 === (14))){
var inst_11444 = (state_11450[(2)]);
var state_11450__$1 = state_11450;
var statearr_11464_11484 = state_11450__$1;
(statearr_11464_11484[(2)] = inst_11444);

(statearr_11464_11484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11451 === (10))){
var inst_11436 = (state_11450[(2)]);
var state_11450__$1 = state_11450;
var statearr_11465_11485 = state_11450__$1;
(statearr_11465_11485[(2)] = inst_11436);

(statearr_11465_11485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11451 === (8))){
var inst_11433 = cljs.core.async.close_BANG_.call(null,to);
var state_11450__$1 = state_11450;
var statearr_11466_11486 = state_11450__$1;
(statearr_11466_11486[(2)] = inst_11433);

(statearr_11466_11486[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11232__auto__ = null;
var cljs$core$async$state_machine__11232__auto____0 = (function (){
var statearr_11467 = [null,null,null,null,null,null,null,null];
(statearr_11467[(0)] = cljs$core$async$state_machine__11232__auto__);

(statearr_11467[(1)] = (1));

return statearr_11467;
});
var cljs$core$async$state_machine__11232__auto____1 = (function (state_11450){
while(true){
var ret_value__11233__auto__ = (function (){try{while(true){
var result__11234__auto__ = switch__11231__auto__.call(null,state_11450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11234__auto__;
}
break;
}
}catch (e11468){if((e11468 instanceof Object)){
var ex__11235__auto__ = e11468;
var statearr_11469_11487 = state_11450;
(statearr_11469_11487[(5)] = ex__11235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11488 = state_11450;
state_11450 = G__11488;
continue;
} else {
return ret_value__11233__auto__;
}
break;
}
});
cljs$core$async$state_machine__11232__auto__ = function(state_11450){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11232__auto____1.call(this,state_11450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11232__auto____0;
cljs$core$async$state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11232__auto____1;
return cljs$core$async$state_machine__11232__auto__;
})()
})();
var state__11328__auto__ = (function (){var statearr_11470 = f__11327__auto__.call(null);
(statearr_11470[(6)] = c__11326__auto___11472);

return statearr_11470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11328__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__11489){
var vec__11490 = p__11489;
var v = cljs.core.nth.call(null,vec__11490,(0),null);
var p = cljs.core.nth.call(null,vec__11490,(1),null);
var job = vec__11490;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__11326__auto___11661 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11327__auto__ = (function (){var switch__11231__auto__ = (function (state_11497){
var state_val_11498 = (state_11497[(1)]);
if((state_val_11498 === (1))){
var state_11497__$1 = state_11497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11497__$1,(2),res,v);
} else {
if((state_val_11498 === (2))){
var inst_11494 = (state_11497[(2)]);
var inst_11495 = cljs.core.async.close_BANG_.call(null,res);
var state_11497__$1 = (function (){var statearr_11499 = state_11497;
(statearr_11499[(7)] = inst_11494);

return statearr_11499;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11497__$1,inst_11495);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11232__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11232__auto____0 = (function (){
var statearr_11500 = [null,null,null,null,null,null,null,null];
(statearr_11500[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11232__auto__);

(statearr_11500[(1)] = (1));

return statearr_11500;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11232__auto____1 = (function (state_11497){
while(true){
var ret_value__11233__auto__ = (function (){try{while(true){
var result__11234__auto__ = switch__11231__auto__.call(null,state_11497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11234__auto__;
}
break;
}
}catch (e11501){if((e11501 instanceof Object)){
var ex__11235__auto__ = e11501;
var statearr_11502_11662 = state_11497;
(statearr_11502_11662[(5)] = ex__11235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11663 = state_11497;
state_11497 = G__11663;
continue;
} else {
return ret_value__11233__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11232__auto__ = function(state_11497){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11232__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11232__auto____1.call(this,state_11497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11232__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11232__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11232__auto__;
})()
})();
var state__11328__auto__ = (function (){var statearr_11503 = f__11327__auto__.call(null);
(statearr_11503[(6)] = c__11326__auto___11661);

return statearr_11503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11328__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__11504){
var vec__11505 = p__11504;
var v = cljs.core.nth.call(null,vec__11505,(0),null);
var p = cljs.core.nth.call(null,vec__11505,(1),null);
var job = vec__11505;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4666__auto___11664 = n;
var __11665 = (0);
while(true){
if((__11665 < n__4666__auto___11664)){
var G__11508_11666 = type;
var G__11508_11667__$1 = (((G__11508_11666 instanceof cljs.core.Keyword))?G__11508_11666.fqn:null);
switch (G__11508_11667__$1) {
case "compute":
var c__11326__auto___11669 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11665,c__11326__auto___11669,G__11508_11666,G__11508_11667__$1,n__4666__auto___11664,jobs,results,process,async){
return (function (){
var f__11327__auto__ = (function (){var switch__11231__auto__ = ((function (__11665,c__11326__auto___11669,G__11508_11666,G__11508_11667__$1,n__4666__auto___11664,jobs,results,process,async){
return (function (state_11521){
var state_val_11522 = (state_11521[(1)]);
if((state_val_11522 === (1))){
var state_11521__$1 = state_11521;
var statearr_11523_11670 = state_11521__$1;
(statearr_11523_11670[(2)] = null);

(statearr_11523_11670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11522 === (2))){
var state_11521__$1 = state_11521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11521__$1,(4),jobs);
} else {
if((state_val_11522 === (3))){
var inst_11519 = (state_11521[(2)]);
var state_11521__$1 = state_11521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11521__$1,inst_11519);
} else {
if((state_val_11522 === (4))){
var inst_11511 = (state_11521[(2)]);
var inst_11512 = process.call(null,inst_11511);
var state_11521__$1 = state_11521;
if(cljs.core.truth_(inst_11512)){
var statearr_11524_11671 = state_11521__$1;
(statearr_11524_11671[(1)] = (5));

} else {
var statearr_11525_11672 = state_11521__$1;
(statearr_11525_11672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11522 === (5))){
var state_11521__$1 = state_11521;
var statearr_11526_11673 = state_11521__$1;
(statearr_11526_11673[(2)] = null);

(statearr_11526_11673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11522 === (6))){
var state_11521__$1 = state_11521;
var statearr_11527_11674 = state_11521__$1;
(statearr_11527_11674[(2)] = null);

(statearr_11527_11674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11522 === (7))){
var inst_11517 = (state_11521[(2)]);
var state_11521__$1 = state_11521;
var statearr_11528_11675 = state_11521__$1;
(statearr_11528_11675[(2)] = inst_11517);

(statearr_11528_11675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__11665,c__11326__auto___11669,G__11508_11666,G__11508_11667__$1,n__4666__auto___11664,jobs,results,process,async))
;
return ((function (__11665,switch__11231__auto__,c__11326__auto___11669,G__11508_11666,G__11508_11667__$1,n__4666__auto___11664,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11232__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11232__auto____0 = (function (){
var statearr_11529 = [null,null,null,null,null,null,null];
(statearr_11529[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11232__auto__);

(statearr_11529[(1)] = (1));

return statearr_11529;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11232__auto____1 = (function (state_11521){
while(true){
var ret_value__11233__auto__ = (function (){try{while(true){
var result__11234__auto__ = switch__11231__auto__.call(null,state_11521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11234__auto__;
}
break;
}
}catch (e11530){if((e11530 instanceof Object)){
var ex__11235__auto__ = e11530;
var statearr_11531_11676 = state_11521;
(statearr_11531_11676[(5)] = ex__11235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11677 = state_11521;
state_11521 = G__11677;
continue;
} else {
return ret_value__11233__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11232__auto__ = function(state_11521){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11232__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11232__auto____1.call(this,state_11521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11232__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11232__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11232__auto__;
})()
;})(__11665,switch__11231__auto__,c__11326__auto___11669,G__11508_11666,G__11508_11667__$1,n__4666__auto___11664,jobs,results,process,async))
})();
var state__11328__auto__ = (function (){var statearr_11532 = f__11327__auto__.call(null);
(statearr_11532[(6)] = c__11326__auto___11669);

return statearr_11532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11328__auto__);
});})(__11665,c__11326__auto___11669,G__11508_11666,G__11508_11667__$1,n__4666__auto___11664,jobs,results,process,async))
);


break;
case "async":
var c__11326__auto___11678 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11665,c__11326__auto___11678,G__11508_11666,G__11508_11667__$1,n__4666__auto___11664,jobs,results,process,async){
return (function (){
var f__11327__auto__ = (function (){var switch__11231__auto__ = ((function (__11665,c__11326__auto___11678,G__11508_11666,G__11508_11667__$1,n__4666__auto___11664,jobs,results,process,async){
return (function (state_11545){
var state_val_11546 = (state_11545[(1)]);
if((state_val_11546 === (1))){
var state_11545__$1 = state_11545;
var statearr_11547_11679 = state_11545__$1;
(statearr_11547_11679[(2)] = null);

(statearr_11547_11679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11546 === (2))){
var state_11545__$1 = state_11545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11545__$1,(4),jobs);
} else {
if((state_val_11546 === (3))){
var inst_11543 = (state_11545[(2)]);
var state_11545__$1 = state_11545;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11545__$1,inst_11543);
} else {
if((state_val_11546 === (4))){
var inst_11535 = (state_11545[(2)]);
var inst_11536 = async.call(null,inst_11535);
var state_11545__$1 = state_11545;
if(cljs.core.truth_(inst_11536)){
var statearr_11548_11680 = state_11545__$1;
(statearr_11548_11680[(1)] = (5));

} else {
var statearr_11549_11681 = state_11545__$1;
(statearr_11549_11681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11546 === (5))){
var state_11545__$1 = state_11545;
var statearr_11550_11682 = state_11545__$1;
(statearr_11550_11682[(2)] = null);

(statearr_11550_11682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11546 === (6))){
var state_11545__$1 = state_11545;
var statearr_11551_11683 = state_11545__$1;
(statearr_11551_11683[(2)] = null);

(statearr_11551_11683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11546 === (7))){
var inst_11541 = (state_11545[(2)]);
var state_11545__$1 = state_11545;
var statearr_11552_11684 = state_11545__$1;
(statearr_11552_11684[(2)] = inst_11541);

(statearr_11552_11684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__11665,c__11326__auto___11678,G__11508_11666,G__11508_11667__$1,n__4666__auto___11664,jobs,results,process,async))
;
return ((function (__11665,switch__11231__auto__,c__11326__auto___11678,G__11508_11666,G__11508_11667__$1,n__4666__auto___11664,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11232__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11232__auto____0 = (function (){
var statearr_11553 = [null,null,null,null,null,null,null];
(statearr_11553[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11232__auto__);

(statearr_11553[(1)] = (1));

return statearr_11553;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11232__auto____1 = (function (state_11545){
while(true){
var ret_value__11233__auto__ = (function (){try{while(true){
var result__11234__auto__ = switch__11231__auto__.call(null,state_11545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11234__auto__;
}
break;
}
}catch (e11554){if((e11554 instanceof Object)){
var ex__11235__auto__ = e11554;
var statearr_11555_11685 = state_11545;
(statearr_11555_11685[(5)] = ex__11235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11686 = state_11545;
state_11545 = G__11686;
continue;
} else {
return ret_value__11233__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11232__auto__ = function(state_11545){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11232__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11232__auto____1.call(this,state_11545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11232__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11232__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11232__auto__;
})()
;})(__11665,switch__11231__auto__,c__11326__auto___11678,G__11508_11666,G__11508_11667__$1,n__4666__auto___11664,jobs,results,process,async))
})();
var state__11328__auto__ = (function (){var statearr_11556 = f__11327__auto__.call(null);
(statearr_11556[(6)] = c__11326__auto___11678);

return statearr_11556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11328__auto__);
});})(__11665,c__11326__auto___11678,G__11508_11666,G__11508_11667__$1,n__4666__auto___11664,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11508_11667__$1)].join('')));

}

var G__11687 = (__11665 + (1));
__11665 = G__11687;
continue;
} else {
}
break;
}

var c__11326__auto___11688 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11327__auto__ = (function (){var switch__11231__auto__ = (function (state_11578){
var state_val_11579 = (state_11578[(1)]);
if((state_val_11579 === (7))){
var inst_11574 = (state_11578[(2)]);
var state_11578__$1 = state_11578;
var statearr_11580_11689 = state_11578__$1;
(statearr_11580_11689[(2)] = inst_11574);

(statearr_11580_11689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11579 === (1))){
var state_11578__$1 = state_11578;
var statearr_11581_11690 = state_11578__$1;
(statearr_11581_11690[(2)] = null);

(statearr_11581_11690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11579 === (4))){
var inst_11559 = (state_11578[(7)]);
var inst_11559__$1 = (state_11578[(2)]);
var inst_11560 = (inst_11559__$1 == null);
var state_11578__$1 = (function (){var statearr_11582 = state_11578;
(statearr_11582[(7)] = inst_11559__$1);

return statearr_11582;
})();
if(cljs.core.truth_(inst_11560)){
var statearr_11583_11691 = state_11578__$1;
(statearr_11583_11691[(1)] = (5));

} else {
var statearr_11584_11692 = state_11578__$1;
(statearr_11584_11692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11579 === (6))){
var inst_11559 = (state_11578[(7)]);
var inst_11564 = (state_11578[(8)]);
var inst_11564__$1 = cljs.core.async.chan.call(null,(1));
var inst_11565 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11566 = [inst_11559,inst_11564__$1];
var inst_11567 = (new cljs.core.PersistentVector(null,2,(5),inst_11565,inst_11566,null));
var state_11578__$1 = (function (){var statearr_11585 = state_11578;
(statearr_11585[(8)] = inst_11564__$1);

return statearr_11585;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11578__$1,(8),jobs,inst_11567);
} else {
if((state_val_11579 === (3))){
var inst_11576 = (state_11578[(2)]);
var state_11578__$1 = state_11578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11578__$1,inst_11576);
} else {
if((state_val_11579 === (2))){
var state_11578__$1 = state_11578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11578__$1,(4),from);
} else {
if((state_val_11579 === (9))){
var inst_11571 = (state_11578[(2)]);
var state_11578__$1 = (function (){var statearr_11586 = state_11578;
(statearr_11586[(9)] = inst_11571);

return statearr_11586;
})();
var statearr_11587_11693 = state_11578__$1;
(statearr_11587_11693[(2)] = null);

(statearr_11587_11693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11579 === (5))){
var inst_11562 = cljs.core.async.close_BANG_.call(null,jobs);
var state_11578__$1 = state_11578;
var statearr_11588_11694 = state_11578__$1;
(statearr_11588_11694[(2)] = inst_11562);

(statearr_11588_11694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11579 === (8))){
var inst_11564 = (state_11578[(8)]);
var inst_11569 = (state_11578[(2)]);
var state_11578__$1 = (function (){var statearr_11589 = state_11578;
(statearr_11589[(10)] = inst_11569);

return statearr_11589;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11578__$1,(9),results,inst_11564);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11232__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11232__auto____0 = (function (){
var statearr_11590 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11590[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11232__auto__);

(statearr_11590[(1)] = (1));

return statearr_11590;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11232__auto____1 = (function (state_11578){
while(true){
var ret_value__11233__auto__ = (function (){try{while(true){
var result__11234__auto__ = switch__11231__auto__.call(null,state_11578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11234__auto__;
}
break;
}
}catch (e11591){if((e11591 instanceof Object)){
var ex__11235__auto__ = e11591;
var statearr_11592_11695 = state_11578;
(statearr_11592_11695[(5)] = ex__11235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11696 = state_11578;
state_11578 = G__11696;
continue;
} else {
return ret_value__11233__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11232__auto__ = function(state_11578){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11232__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11232__auto____1.call(this,state_11578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11232__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11232__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11232__auto__;
})()
})();
var state__11328__auto__ = (function (){var statearr_11593 = f__11327__auto__.call(null);
(statearr_11593[(6)] = c__11326__auto___11688);

return statearr_11593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11328__auto__);
}));


var c__11326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11327__auto__ = (function (){var switch__11231__auto__ = (function (state_11631){
var state_val_11632 = (state_11631[(1)]);
if((state_val_11632 === (7))){
var inst_11627 = (state_11631[(2)]);
var state_11631__$1 = state_11631;
var statearr_11633_11697 = state_11631__$1;
(statearr_11633_11697[(2)] = inst_11627);

(statearr_11633_11697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11632 === (20))){
var state_11631__$1 = state_11631;
var statearr_11634_11698 = state_11631__$1;
(statearr_11634_11698[(2)] = null);

(statearr_11634_11698[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11632 === (1))){
var state_11631__$1 = state_11631;
var statearr_11635_11699 = state_11631__$1;
(statearr_11635_11699[(2)] = null);

(statearr_11635_11699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11632 === (4))){
var inst_11596 = (state_11631[(7)]);
var inst_11596__$1 = (state_11631[(2)]);
var inst_11597 = (inst_11596__$1 == null);
var state_11631__$1 = (function (){var statearr_11636 = state_11631;
(statearr_11636[(7)] = inst_11596__$1);

return statearr_11636;
})();
if(cljs.core.truth_(inst_11597)){
var statearr_11637_11700 = state_11631__$1;
(statearr_11637_11700[(1)] = (5));

} else {
var statearr_11638_11701 = state_11631__$1;
(statearr_11638_11701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11632 === (15))){
var inst_11609 = (state_11631[(8)]);
var state_11631__$1 = state_11631;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11631__$1,(18),to,inst_11609);
} else {
if((state_val_11632 === (21))){
var inst_11622 = (state_11631[(2)]);
var state_11631__$1 = state_11631;
var statearr_11639_11702 = state_11631__$1;
(statearr_11639_11702[(2)] = inst_11622);

(statearr_11639_11702[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11632 === (13))){
var inst_11624 = (state_11631[(2)]);
var state_11631__$1 = (function (){var statearr_11640 = state_11631;
(statearr_11640[(9)] = inst_11624);

return statearr_11640;
})();
var statearr_11641_11703 = state_11631__$1;
(statearr_11641_11703[(2)] = null);

(statearr_11641_11703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11632 === (6))){
var inst_11596 = (state_11631[(7)]);
var state_11631__$1 = state_11631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11631__$1,(11),inst_11596);
} else {
if((state_val_11632 === (17))){
var inst_11617 = (state_11631[(2)]);
var state_11631__$1 = state_11631;
if(cljs.core.truth_(inst_11617)){
var statearr_11642_11704 = state_11631__$1;
(statearr_11642_11704[(1)] = (19));

} else {
var statearr_11643_11705 = state_11631__$1;
(statearr_11643_11705[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11632 === (3))){
var inst_11629 = (state_11631[(2)]);
var state_11631__$1 = state_11631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11631__$1,inst_11629);
} else {
if((state_val_11632 === (12))){
var inst_11606 = (state_11631[(10)]);
var state_11631__$1 = state_11631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11631__$1,(14),inst_11606);
} else {
if((state_val_11632 === (2))){
var state_11631__$1 = state_11631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11631__$1,(4),results);
} else {
if((state_val_11632 === (19))){
var state_11631__$1 = state_11631;
var statearr_11644_11706 = state_11631__$1;
(statearr_11644_11706[(2)] = null);

(statearr_11644_11706[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11632 === (11))){
var inst_11606 = (state_11631[(2)]);
var state_11631__$1 = (function (){var statearr_11645 = state_11631;
(statearr_11645[(10)] = inst_11606);

return statearr_11645;
})();
var statearr_11646_11707 = state_11631__$1;
(statearr_11646_11707[(2)] = null);

(statearr_11646_11707[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11632 === (9))){
var state_11631__$1 = state_11631;
var statearr_11647_11708 = state_11631__$1;
(statearr_11647_11708[(2)] = null);

(statearr_11647_11708[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11632 === (5))){
var state_11631__$1 = state_11631;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11648_11709 = state_11631__$1;
(statearr_11648_11709[(1)] = (8));

} else {
var statearr_11649_11710 = state_11631__$1;
(statearr_11649_11710[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11632 === (14))){
var inst_11609 = (state_11631[(8)]);
var inst_11609__$1 = (state_11631[(2)]);
var inst_11610 = (inst_11609__$1 == null);
var inst_11611 = cljs.core.not.call(null,inst_11610);
var state_11631__$1 = (function (){var statearr_11650 = state_11631;
(statearr_11650[(8)] = inst_11609__$1);

return statearr_11650;
})();
if(inst_11611){
var statearr_11651_11711 = state_11631__$1;
(statearr_11651_11711[(1)] = (15));

} else {
var statearr_11652_11712 = state_11631__$1;
(statearr_11652_11712[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11632 === (16))){
var state_11631__$1 = state_11631;
var statearr_11653_11713 = state_11631__$1;
(statearr_11653_11713[(2)] = false);

(statearr_11653_11713[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11632 === (10))){
var inst_11603 = (state_11631[(2)]);
var state_11631__$1 = state_11631;
var statearr_11654_11714 = state_11631__$1;
(statearr_11654_11714[(2)] = inst_11603);

(statearr_11654_11714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11632 === (18))){
var inst_11614 = (state_11631[(2)]);
var state_11631__$1 = state_11631;
var statearr_11655_11715 = state_11631__$1;
(statearr_11655_11715[(2)] = inst_11614);

(statearr_11655_11715[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11632 === (8))){
var inst_11600 = cljs.core.async.close_BANG_.call(null,to);
var state_11631__$1 = state_11631;
var statearr_11656_11716 = state_11631__$1;
(statearr_11656_11716[(2)] = inst_11600);

(statearr_11656_11716[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11232__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11232__auto____0 = (function (){
var statearr_11657 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11657[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11232__auto__);

(statearr_11657[(1)] = (1));

return statearr_11657;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11232__auto____1 = (function (state_11631){
while(true){
var ret_value__11233__auto__ = (function (){try{while(true){
var result__11234__auto__ = switch__11231__auto__.call(null,state_11631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11234__auto__;
}
break;
}
}catch (e11658){if((e11658 instanceof Object)){
var ex__11235__auto__ = e11658;
var statearr_11659_11717 = state_11631;
(statearr_11659_11717[(5)] = ex__11235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11718 = state_11631;
state_11631 = G__11718;
continue;
} else {
return ret_value__11233__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11232__auto__ = function(state_11631){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11232__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11232__auto____1.call(this,state_11631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11232__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11232__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11232__auto__;
})()
})();
var state__11328__auto__ = (function (){var statearr_11660 = f__11327__auto__.call(null);
(statearr_11660[(6)] = c__11326__auto__);

return statearr_11660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11328__auto__);
}));

return c__11326__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__11720 = arguments.length;
switch (G__11720) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__11723 = arguments.length;
switch (G__11723) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__11726 = arguments.length;
switch (G__11726) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__11326__auto___11775 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11327__auto__ = (function (){var switch__11231__auto__ = (function (state_11752){
var state_val_11753 = (state_11752[(1)]);
if((state_val_11753 === (7))){
var inst_11748 = (state_11752[(2)]);
var state_11752__$1 = state_11752;
var statearr_11754_11776 = state_11752__$1;
(statearr_11754_11776[(2)] = inst_11748);

(statearr_11754_11776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11753 === (1))){
var state_11752__$1 = state_11752;
var statearr_11755_11777 = state_11752__$1;
(statearr_11755_11777[(2)] = null);

(statearr_11755_11777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11753 === (4))){
var inst_11729 = (state_11752[(7)]);
var inst_11729__$1 = (state_11752[(2)]);
var inst_11730 = (inst_11729__$1 == null);
var state_11752__$1 = (function (){var statearr_11756 = state_11752;
(statearr_11756[(7)] = inst_11729__$1);

return statearr_11756;
})();
if(cljs.core.truth_(inst_11730)){
var statearr_11757_11778 = state_11752__$1;
(statearr_11757_11778[(1)] = (5));

} else {
var statearr_11758_11779 = state_11752__$1;
(statearr_11758_11779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11753 === (13))){
var state_11752__$1 = state_11752;
var statearr_11759_11780 = state_11752__$1;
(statearr_11759_11780[(2)] = null);

(statearr_11759_11780[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11753 === (6))){
var inst_11729 = (state_11752[(7)]);
var inst_11735 = p.call(null,inst_11729);
var state_11752__$1 = state_11752;
if(cljs.core.truth_(inst_11735)){
var statearr_11760_11781 = state_11752__$1;
(statearr_11760_11781[(1)] = (9));

} else {
var statearr_11761_11782 = state_11752__$1;
(statearr_11761_11782[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11753 === (3))){
var inst_11750 = (state_11752[(2)]);
var state_11752__$1 = state_11752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11752__$1,inst_11750);
} else {
if((state_val_11753 === (12))){
var state_11752__$1 = state_11752;
var statearr_11762_11783 = state_11752__$1;
(statearr_11762_11783[(2)] = null);

(statearr_11762_11783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11753 === (2))){
var state_11752__$1 = state_11752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11752__$1,(4),ch);
} else {
if((state_val_11753 === (11))){
var inst_11729 = (state_11752[(7)]);
var inst_11739 = (state_11752[(2)]);
var state_11752__$1 = state_11752;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11752__$1,(8),inst_11739,inst_11729);
} else {
if((state_val_11753 === (9))){
var state_11752__$1 = state_11752;
var statearr_11763_11784 = state_11752__$1;
(statearr_11763_11784[(2)] = tc);

(statearr_11763_11784[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11753 === (5))){
var inst_11732 = cljs.core.async.close_BANG_.call(null,tc);
var inst_11733 = cljs.core.async.close_BANG_.call(null,fc);
var state_11752__$1 = (function (){var statearr_11764 = state_11752;
(statearr_11764[(8)] = inst_11732);

return statearr_11764;
})();
var statearr_11765_11785 = state_11752__$1;
(statearr_11765_11785[(2)] = inst_11733);

(statearr_11765_11785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11753 === (14))){
var inst_11746 = (state_11752[(2)]);
var state_11752__$1 = state_11752;
var statearr_11766_11786 = state_11752__$1;
(statearr_11766_11786[(2)] = inst_11746);

(statearr_11766_11786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11753 === (10))){
var state_11752__$1 = state_11752;
var statearr_11767_11787 = state_11752__$1;
(statearr_11767_11787[(2)] = fc);

(statearr_11767_11787[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11753 === (8))){
var inst_11741 = (state_11752[(2)]);
var state_11752__$1 = state_11752;
if(cljs.core.truth_(inst_11741)){
var statearr_11768_11788 = state_11752__$1;
(statearr_11768_11788[(1)] = (12));

} else {
var statearr_11769_11789 = state_11752__$1;
(statearr_11769_11789[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11232__auto__ = null;
var cljs$core$async$state_machine__11232__auto____0 = (function (){
var statearr_11770 = [null,null,null,null,null,null,null,null,null];
(statearr_11770[(0)] = cljs$core$async$state_machine__11232__auto__);

(statearr_11770[(1)] = (1));

return statearr_11770;
});
var cljs$core$async$state_machine__11232__auto____1 = (function (state_11752){
while(true){
var ret_value__11233__auto__ = (function (){try{while(true){
var result__11234__auto__ = switch__11231__auto__.call(null,state_11752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11234__auto__;
}
break;
}
}catch (e11771){if((e11771 instanceof Object)){
var ex__11235__auto__ = e11771;
var statearr_11772_11790 = state_11752;
(statearr_11772_11790[(5)] = ex__11235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11791 = state_11752;
state_11752 = G__11791;
continue;
} else {
return ret_value__11233__auto__;
}
break;
}
});
cljs$core$async$state_machine__11232__auto__ = function(state_11752){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11232__auto____1.call(this,state_11752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11232__auto____0;
cljs$core$async$state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11232__auto____1;
return cljs$core$async$state_machine__11232__auto__;
})()
})();
var state__11328__auto__ = (function (){var statearr_11773 = f__11327__auto__.call(null);
(statearr_11773[(6)] = c__11326__auto___11775);

return statearr_11773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11328__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__11326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11327__auto__ = (function (){var switch__11231__auto__ = (function (state_11812){
var state_val_11813 = (state_11812[(1)]);
if((state_val_11813 === (7))){
var inst_11808 = (state_11812[(2)]);
var state_11812__$1 = state_11812;
var statearr_11814_11832 = state_11812__$1;
(statearr_11814_11832[(2)] = inst_11808);

(statearr_11814_11832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11813 === (1))){
var inst_11792 = init;
var state_11812__$1 = (function (){var statearr_11815 = state_11812;
(statearr_11815[(7)] = inst_11792);

return statearr_11815;
})();
var statearr_11816_11833 = state_11812__$1;
(statearr_11816_11833[(2)] = null);

(statearr_11816_11833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11813 === (4))){
var inst_11795 = (state_11812[(8)]);
var inst_11795__$1 = (state_11812[(2)]);
var inst_11796 = (inst_11795__$1 == null);
var state_11812__$1 = (function (){var statearr_11817 = state_11812;
(statearr_11817[(8)] = inst_11795__$1);

return statearr_11817;
})();
if(cljs.core.truth_(inst_11796)){
var statearr_11818_11834 = state_11812__$1;
(statearr_11818_11834[(1)] = (5));

} else {
var statearr_11819_11835 = state_11812__$1;
(statearr_11819_11835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11813 === (6))){
var inst_11795 = (state_11812[(8)]);
var inst_11792 = (state_11812[(7)]);
var inst_11799 = (state_11812[(9)]);
var inst_11799__$1 = f.call(null,inst_11792,inst_11795);
var inst_11800 = cljs.core.reduced_QMARK_.call(null,inst_11799__$1);
var state_11812__$1 = (function (){var statearr_11820 = state_11812;
(statearr_11820[(9)] = inst_11799__$1);

return statearr_11820;
})();
if(inst_11800){
var statearr_11821_11836 = state_11812__$1;
(statearr_11821_11836[(1)] = (8));

} else {
var statearr_11822_11837 = state_11812__$1;
(statearr_11822_11837[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11813 === (3))){
var inst_11810 = (state_11812[(2)]);
var state_11812__$1 = state_11812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11812__$1,inst_11810);
} else {
if((state_val_11813 === (2))){
var state_11812__$1 = state_11812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11812__$1,(4),ch);
} else {
if((state_val_11813 === (9))){
var inst_11799 = (state_11812[(9)]);
var inst_11792 = inst_11799;
var state_11812__$1 = (function (){var statearr_11823 = state_11812;
(statearr_11823[(7)] = inst_11792);

return statearr_11823;
})();
var statearr_11824_11838 = state_11812__$1;
(statearr_11824_11838[(2)] = null);

(statearr_11824_11838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11813 === (5))){
var inst_11792 = (state_11812[(7)]);
var state_11812__$1 = state_11812;
var statearr_11825_11839 = state_11812__$1;
(statearr_11825_11839[(2)] = inst_11792);

(statearr_11825_11839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11813 === (10))){
var inst_11806 = (state_11812[(2)]);
var state_11812__$1 = state_11812;
var statearr_11826_11840 = state_11812__$1;
(statearr_11826_11840[(2)] = inst_11806);

(statearr_11826_11840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11813 === (8))){
var inst_11799 = (state_11812[(9)]);
var inst_11802 = cljs.core.deref.call(null,inst_11799);
var state_11812__$1 = state_11812;
var statearr_11827_11841 = state_11812__$1;
(statearr_11827_11841[(2)] = inst_11802);

(statearr_11827_11841[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__11232__auto__ = null;
var cljs$core$async$reduce_$_state_machine__11232__auto____0 = (function (){
var statearr_11828 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11828[(0)] = cljs$core$async$reduce_$_state_machine__11232__auto__);

(statearr_11828[(1)] = (1));

return statearr_11828;
});
var cljs$core$async$reduce_$_state_machine__11232__auto____1 = (function (state_11812){
while(true){
var ret_value__11233__auto__ = (function (){try{while(true){
var result__11234__auto__ = switch__11231__auto__.call(null,state_11812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11234__auto__;
}
break;
}
}catch (e11829){if((e11829 instanceof Object)){
var ex__11235__auto__ = e11829;
var statearr_11830_11842 = state_11812;
(statearr_11830_11842[(5)] = ex__11235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11843 = state_11812;
state_11812 = G__11843;
continue;
} else {
return ret_value__11233__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__11232__auto__ = function(state_11812){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__11232__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__11232__auto____1.call(this,state_11812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__11232__auto____0;
cljs$core$async$reduce_$_state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__11232__auto____1;
return cljs$core$async$reduce_$_state_machine__11232__auto__;
})()
})();
var state__11328__auto__ = (function (){var statearr_11831 = f__11327__auto__.call(null);
(statearr_11831[(6)] = c__11326__auto__);

return statearr_11831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11328__auto__);
}));

return c__11326__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__11326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11327__auto__ = (function (){var switch__11231__auto__ = (function (state_11849){
var state_val_11850 = (state_11849[(1)]);
if((state_val_11850 === (1))){
var inst_11844 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_11849__$1 = state_11849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11849__$1,(2),inst_11844);
} else {
if((state_val_11850 === (2))){
var inst_11846 = (state_11849[(2)]);
var inst_11847 = f__$1.call(null,inst_11846);
var state_11849__$1 = state_11849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11849__$1,inst_11847);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__11232__auto__ = null;
var cljs$core$async$transduce_$_state_machine__11232__auto____0 = (function (){
var statearr_11851 = [null,null,null,null,null,null,null];
(statearr_11851[(0)] = cljs$core$async$transduce_$_state_machine__11232__auto__);

(statearr_11851[(1)] = (1));

return statearr_11851;
});
var cljs$core$async$transduce_$_state_machine__11232__auto____1 = (function (state_11849){
while(true){
var ret_value__11233__auto__ = (function (){try{while(true){
var result__11234__auto__ = switch__11231__auto__.call(null,state_11849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11234__auto__;
}
break;
}
}catch (e11852){if((e11852 instanceof Object)){
var ex__11235__auto__ = e11852;
var statearr_11853_11855 = state_11849;
(statearr_11853_11855[(5)] = ex__11235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11856 = state_11849;
state_11849 = G__11856;
continue;
} else {
return ret_value__11233__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__11232__auto__ = function(state_11849){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__11232__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__11232__auto____1.call(this,state_11849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__11232__auto____0;
cljs$core$async$transduce_$_state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__11232__auto____1;
return cljs$core$async$transduce_$_state_machine__11232__auto__;
})()
})();
var state__11328__auto__ = (function (){var statearr_11854 = f__11327__auto__.call(null);
(statearr_11854[(6)] = c__11326__auto__);

return statearr_11854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11328__auto__);
}));

return c__11326__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__11858 = arguments.length;
switch (G__11858) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__11326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11327__auto__ = (function (){var switch__11231__auto__ = (function (state_11883){
var state_val_11884 = (state_11883[(1)]);
if((state_val_11884 === (7))){
var inst_11865 = (state_11883[(2)]);
var state_11883__$1 = state_11883;
var statearr_11885_11906 = state_11883__$1;
(statearr_11885_11906[(2)] = inst_11865);

(statearr_11885_11906[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11884 === (1))){
var inst_11859 = cljs.core.seq.call(null,coll);
var inst_11860 = inst_11859;
var state_11883__$1 = (function (){var statearr_11886 = state_11883;
(statearr_11886[(7)] = inst_11860);

return statearr_11886;
})();
var statearr_11887_11907 = state_11883__$1;
(statearr_11887_11907[(2)] = null);

(statearr_11887_11907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11884 === (4))){
var inst_11860 = (state_11883[(7)]);
var inst_11863 = cljs.core.first.call(null,inst_11860);
var state_11883__$1 = state_11883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11883__$1,(7),ch,inst_11863);
} else {
if((state_val_11884 === (13))){
var inst_11877 = (state_11883[(2)]);
var state_11883__$1 = state_11883;
var statearr_11888_11908 = state_11883__$1;
(statearr_11888_11908[(2)] = inst_11877);

(statearr_11888_11908[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11884 === (6))){
var inst_11868 = (state_11883[(2)]);
var state_11883__$1 = state_11883;
if(cljs.core.truth_(inst_11868)){
var statearr_11889_11909 = state_11883__$1;
(statearr_11889_11909[(1)] = (8));

} else {
var statearr_11890_11910 = state_11883__$1;
(statearr_11890_11910[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11884 === (3))){
var inst_11881 = (state_11883[(2)]);
var state_11883__$1 = state_11883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11883__$1,inst_11881);
} else {
if((state_val_11884 === (12))){
var state_11883__$1 = state_11883;
var statearr_11891_11911 = state_11883__$1;
(statearr_11891_11911[(2)] = null);

(statearr_11891_11911[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11884 === (2))){
var inst_11860 = (state_11883[(7)]);
var state_11883__$1 = state_11883;
if(cljs.core.truth_(inst_11860)){
var statearr_11892_11912 = state_11883__$1;
(statearr_11892_11912[(1)] = (4));

} else {
var statearr_11893_11913 = state_11883__$1;
(statearr_11893_11913[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11884 === (11))){
var inst_11874 = cljs.core.async.close_BANG_.call(null,ch);
var state_11883__$1 = state_11883;
var statearr_11894_11914 = state_11883__$1;
(statearr_11894_11914[(2)] = inst_11874);

(statearr_11894_11914[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11884 === (9))){
var state_11883__$1 = state_11883;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11895_11915 = state_11883__$1;
(statearr_11895_11915[(1)] = (11));

} else {
var statearr_11896_11916 = state_11883__$1;
(statearr_11896_11916[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11884 === (5))){
var inst_11860 = (state_11883[(7)]);
var state_11883__$1 = state_11883;
var statearr_11897_11917 = state_11883__$1;
(statearr_11897_11917[(2)] = inst_11860);

(statearr_11897_11917[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11884 === (10))){
var inst_11879 = (state_11883[(2)]);
var state_11883__$1 = state_11883;
var statearr_11898_11918 = state_11883__$1;
(statearr_11898_11918[(2)] = inst_11879);

(statearr_11898_11918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11884 === (8))){
var inst_11860 = (state_11883[(7)]);
var inst_11870 = cljs.core.next.call(null,inst_11860);
var inst_11860__$1 = inst_11870;
var state_11883__$1 = (function (){var statearr_11899 = state_11883;
(statearr_11899[(7)] = inst_11860__$1);

return statearr_11899;
})();
var statearr_11900_11919 = state_11883__$1;
(statearr_11900_11919[(2)] = null);

(statearr_11900_11919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11232__auto__ = null;
var cljs$core$async$state_machine__11232__auto____0 = (function (){
var statearr_11901 = [null,null,null,null,null,null,null,null];
(statearr_11901[(0)] = cljs$core$async$state_machine__11232__auto__);

(statearr_11901[(1)] = (1));

return statearr_11901;
});
var cljs$core$async$state_machine__11232__auto____1 = (function (state_11883){
while(true){
var ret_value__11233__auto__ = (function (){try{while(true){
var result__11234__auto__ = switch__11231__auto__.call(null,state_11883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11234__auto__;
}
break;
}
}catch (e11902){if((e11902 instanceof Object)){
var ex__11235__auto__ = e11902;
var statearr_11903_11920 = state_11883;
(statearr_11903_11920[(5)] = ex__11235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11921 = state_11883;
state_11883 = G__11921;
continue;
} else {
return ret_value__11233__auto__;
}
break;
}
});
cljs$core$async$state_machine__11232__auto__ = function(state_11883){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11232__auto____1.call(this,state_11883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11232__auto____0;
cljs$core$async$state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11232__auto____1;
return cljs$core$async$state_machine__11232__auto__;
})()
})();
var state__11328__auto__ = (function (){var statearr_11904 = f__11327__auto__.call(null);
(statearr_11904[(6)] = c__11326__auto__);

return statearr_11904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11328__auto__);
}));

return c__11326__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,_);
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m);
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11922 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11922 = (function (ch,cs,meta11923){
this.ch = ch;
this.cs = cs;
this.meta11923 = meta11923;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11924,meta11923__$1){
var self__ = this;
var _11924__$1 = this;
return (new cljs.core.async.t_cljs$core$async11922(self__.ch,self__.cs,meta11923__$1));
}));

(cljs.core.async.t_cljs$core$async11922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11924){
var self__ = this;
var _11924__$1 = this;
return self__.meta11923;
}));

(cljs.core.async.t_cljs$core$async11922.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11922.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11922.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11922.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async11922.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async11922.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async11922.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11923","meta11923",1335643083,null)], null);
}));

(cljs.core.async.t_cljs$core$async11922.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11922.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11922");

(cljs.core.async.t_cljs$core$async11922.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async11922");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11922.
 */
cljs.core.async.__GT_t_cljs$core$async11922 = (function cljs$core$async$mult_$___GT_t_cljs$core$async11922(ch__$1,cs__$1,meta11923){
return (new cljs.core.async.t_cljs$core$async11922(ch__$1,cs__$1,meta11923));
});

}

return (new cljs.core.async.t_cljs$core$async11922(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__11326__auto___12140 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11327__auto__ = (function (){var switch__11231__auto__ = (function (state_12057){
var state_val_12058 = (state_12057[(1)]);
if((state_val_12058 === (7))){
var inst_12053 = (state_12057[(2)]);
var state_12057__$1 = state_12057;
var statearr_12059_12141 = state_12057__$1;
(statearr_12059_12141[(2)] = inst_12053);

(statearr_12059_12141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (20))){
var inst_11958 = (state_12057[(7)]);
var inst_11970 = cljs.core.first.call(null,inst_11958);
var inst_11971 = cljs.core.nth.call(null,inst_11970,(0),null);
var inst_11972 = cljs.core.nth.call(null,inst_11970,(1),null);
var state_12057__$1 = (function (){var statearr_12060 = state_12057;
(statearr_12060[(8)] = inst_11971);

return statearr_12060;
})();
if(cljs.core.truth_(inst_11972)){
var statearr_12061_12142 = state_12057__$1;
(statearr_12061_12142[(1)] = (22));

} else {
var statearr_12062_12143 = state_12057__$1;
(statearr_12062_12143[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (27))){
var inst_11927 = (state_12057[(9)]);
var inst_12002 = (state_12057[(10)]);
var inst_12007 = (state_12057[(11)]);
var inst_12000 = (state_12057[(12)]);
var inst_12007__$1 = cljs.core._nth.call(null,inst_12000,inst_12002);
var inst_12008 = cljs.core.async.put_BANG_.call(null,inst_12007__$1,inst_11927,done);
var state_12057__$1 = (function (){var statearr_12063 = state_12057;
(statearr_12063[(11)] = inst_12007__$1);

return statearr_12063;
})();
if(cljs.core.truth_(inst_12008)){
var statearr_12064_12144 = state_12057__$1;
(statearr_12064_12144[(1)] = (30));

} else {
var statearr_12065_12145 = state_12057__$1;
(statearr_12065_12145[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (1))){
var state_12057__$1 = state_12057;
var statearr_12066_12146 = state_12057__$1;
(statearr_12066_12146[(2)] = null);

(statearr_12066_12146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (24))){
var inst_11958 = (state_12057[(7)]);
var inst_11977 = (state_12057[(2)]);
var inst_11978 = cljs.core.next.call(null,inst_11958);
var inst_11936 = inst_11978;
var inst_11937 = null;
var inst_11938 = (0);
var inst_11939 = (0);
var state_12057__$1 = (function (){var statearr_12067 = state_12057;
(statearr_12067[(13)] = inst_11936);

(statearr_12067[(14)] = inst_11937);

(statearr_12067[(15)] = inst_11939);

(statearr_12067[(16)] = inst_11938);

(statearr_12067[(17)] = inst_11977);

return statearr_12067;
})();
var statearr_12068_12147 = state_12057__$1;
(statearr_12068_12147[(2)] = null);

(statearr_12068_12147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (39))){
var state_12057__$1 = state_12057;
var statearr_12072_12148 = state_12057__$1;
(statearr_12072_12148[(2)] = null);

(statearr_12072_12148[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (4))){
var inst_11927 = (state_12057[(9)]);
var inst_11927__$1 = (state_12057[(2)]);
var inst_11928 = (inst_11927__$1 == null);
var state_12057__$1 = (function (){var statearr_12073 = state_12057;
(statearr_12073[(9)] = inst_11927__$1);

return statearr_12073;
})();
if(cljs.core.truth_(inst_11928)){
var statearr_12074_12149 = state_12057__$1;
(statearr_12074_12149[(1)] = (5));

} else {
var statearr_12075_12150 = state_12057__$1;
(statearr_12075_12150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (15))){
var inst_11936 = (state_12057[(13)]);
var inst_11937 = (state_12057[(14)]);
var inst_11939 = (state_12057[(15)]);
var inst_11938 = (state_12057[(16)]);
var inst_11954 = (state_12057[(2)]);
var inst_11955 = (inst_11939 + (1));
var tmp12069 = inst_11936;
var tmp12070 = inst_11937;
var tmp12071 = inst_11938;
var inst_11936__$1 = tmp12069;
var inst_11937__$1 = tmp12070;
var inst_11938__$1 = tmp12071;
var inst_11939__$1 = inst_11955;
var state_12057__$1 = (function (){var statearr_12076 = state_12057;
(statearr_12076[(13)] = inst_11936__$1);

(statearr_12076[(14)] = inst_11937__$1);

(statearr_12076[(15)] = inst_11939__$1);

(statearr_12076[(16)] = inst_11938__$1);

(statearr_12076[(18)] = inst_11954);

return statearr_12076;
})();
var statearr_12077_12151 = state_12057__$1;
(statearr_12077_12151[(2)] = null);

(statearr_12077_12151[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (21))){
var inst_11981 = (state_12057[(2)]);
var state_12057__$1 = state_12057;
var statearr_12081_12152 = state_12057__$1;
(statearr_12081_12152[(2)] = inst_11981);

(statearr_12081_12152[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (31))){
var inst_12007 = (state_12057[(11)]);
var inst_12011 = cljs.core.async.untap_STAR_.call(null,m,inst_12007);
var state_12057__$1 = state_12057;
var statearr_12082_12153 = state_12057__$1;
(statearr_12082_12153[(2)] = inst_12011);

(statearr_12082_12153[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (32))){
var inst_12001 = (state_12057[(19)]);
var inst_11999 = (state_12057[(20)]);
var inst_12002 = (state_12057[(10)]);
var inst_12000 = (state_12057[(12)]);
var inst_12013 = (state_12057[(2)]);
var inst_12014 = (inst_12002 + (1));
var tmp12078 = inst_12001;
var tmp12079 = inst_11999;
var tmp12080 = inst_12000;
var inst_11999__$1 = tmp12079;
var inst_12000__$1 = tmp12080;
var inst_12001__$1 = tmp12078;
var inst_12002__$1 = inst_12014;
var state_12057__$1 = (function (){var statearr_12083 = state_12057;
(statearr_12083[(21)] = inst_12013);

(statearr_12083[(19)] = inst_12001__$1);

(statearr_12083[(20)] = inst_11999__$1);

(statearr_12083[(10)] = inst_12002__$1);

(statearr_12083[(12)] = inst_12000__$1);

return statearr_12083;
})();
var statearr_12084_12154 = state_12057__$1;
(statearr_12084_12154[(2)] = null);

(statearr_12084_12154[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (40))){
var inst_12026 = (state_12057[(22)]);
var inst_12030 = cljs.core.async.untap_STAR_.call(null,m,inst_12026);
var state_12057__$1 = state_12057;
var statearr_12085_12155 = state_12057__$1;
(statearr_12085_12155[(2)] = inst_12030);

(statearr_12085_12155[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (33))){
var inst_12017 = (state_12057[(23)]);
var inst_12019 = cljs.core.chunked_seq_QMARK_.call(null,inst_12017);
var state_12057__$1 = state_12057;
if(inst_12019){
var statearr_12086_12156 = state_12057__$1;
(statearr_12086_12156[(1)] = (36));

} else {
var statearr_12087_12157 = state_12057__$1;
(statearr_12087_12157[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (13))){
var inst_11948 = (state_12057[(24)]);
var inst_11951 = cljs.core.async.close_BANG_.call(null,inst_11948);
var state_12057__$1 = state_12057;
var statearr_12088_12158 = state_12057__$1;
(statearr_12088_12158[(2)] = inst_11951);

(statearr_12088_12158[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (22))){
var inst_11971 = (state_12057[(8)]);
var inst_11974 = cljs.core.async.close_BANG_.call(null,inst_11971);
var state_12057__$1 = state_12057;
var statearr_12089_12159 = state_12057__$1;
(statearr_12089_12159[(2)] = inst_11974);

(statearr_12089_12159[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (36))){
var inst_12017 = (state_12057[(23)]);
var inst_12021 = cljs.core.chunk_first.call(null,inst_12017);
var inst_12022 = cljs.core.chunk_rest.call(null,inst_12017);
var inst_12023 = cljs.core.count.call(null,inst_12021);
var inst_11999 = inst_12022;
var inst_12000 = inst_12021;
var inst_12001 = inst_12023;
var inst_12002 = (0);
var state_12057__$1 = (function (){var statearr_12090 = state_12057;
(statearr_12090[(19)] = inst_12001);

(statearr_12090[(20)] = inst_11999);

(statearr_12090[(10)] = inst_12002);

(statearr_12090[(12)] = inst_12000);

return statearr_12090;
})();
var statearr_12091_12160 = state_12057__$1;
(statearr_12091_12160[(2)] = null);

(statearr_12091_12160[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (41))){
var inst_12017 = (state_12057[(23)]);
var inst_12032 = (state_12057[(2)]);
var inst_12033 = cljs.core.next.call(null,inst_12017);
var inst_11999 = inst_12033;
var inst_12000 = null;
var inst_12001 = (0);
var inst_12002 = (0);
var state_12057__$1 = (function (){var statearr_12092 = state_12057;
(statearr_12092[(19)] = inst_12001);

(statearr_12092[(25)] = inst_12032);

(statearr_12092[(20)] = inst_11999);

(statearr_12092[(10)] = inst_12002);

(statearr_12092[(12)] = inst_12000);

return statearr_12092;
})();
var statearr_12093_12161 = state_12057__$1;
(statearr_12093_12161[(2)] = null);

(statearr_12093_12161[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (43))){
var state_12057__$1 = state_12057;
var statearr_12094_12162 = state_12057__$1;
(statearr_12094_12162[(2)] = null);

(statearr_12094_12162[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (29))){
var inst_12041 = (state_12057[(2)]);
var state_12057__$1 = state_12057;
var statearr_12095_12163 = state_12057__$1;
(statearr_12095_12163[(2)] = inst_12041);

(statearr_12095_12163[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (44))){
var inst_12050 = (state_12057[(2)]);
var state_12057__$1 = (function (){var statearr_12096 = state_12057;
(statearr_12096[(26)] = inst_12050);

return statearr_12096;
})();
var statearr_12097_12164 = state_12057__$1;
(statearr_12097_12164[(2)] = null);

(statearr_12097_12164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (6))){
var inst_11991 = (state_12057[(27)]);
var inst_11990 = cljs.core.deref.call(null,cs);
var inst_11991__$1 = cljs.core.keys.call(null,inst_11990);
var inst_11992 = cljs.core.count.call(null,inst_11991__$1);
var inst_11993 = cljs.core.reset_BANG_.call(null,dctr,inst_11992);
var inst_11998 = cljs.core.seq.call(null,inst_11991__$1);
var inst_11999 = inst_11998;
var inst_12000 = null;
var inst_12001 = (0);
var inst_12002 = (0);
var state_12057__$1 = (function (){var statearr_12098 = state_12057;
(statearr_12098[(27)] = inst_11991__$1);

(statearr_12098[(19)] = inst_12001);

(statearr_12098[(20)] = inst_11999);

(statearr_12098[(10)] = inst_12002);

(statearr_12098[(12)] = inst_12000);

(statearr_12098[(28)] = inst_11993);

return statearr_12098;
})();
var statearr_12099_12165 = state_12057__$1;
(statearr_12099_12165[(2)] = null);

(statearr_12099_12165[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (28))){
var inst_12017 = (state_12057[(23)]);
var inst_11999 = (state_12057[(20)]);
var inst_12017__$1 = cljs.core.seq.call(null,inst_11999);
var state_12057__$1 = (function (){var statearr_12100 = state_12057;
(statearr_12100[(23)] = inst_12017__$1);

return statearr_12100;
})();
if(inst_12017__$1){
var statearr_12101_12166 = state_12057__$1;
(statearr_12101_12166[(1)] = (33));

} else {
var statearr_12102_12167 = state_12057__$1;
(statearr_12102_12167[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (25))){
var inst_12001 = (state_12057[(19)]);
var inst_12002 = (state_12057[(10)]);
var inst_12004 = (inst_12002 < inst_12001);
var inst_12005 = inst_12004;
var state_12057__$1 = state_12057;
if(cljs.core.truth_(inst_12005)){
var statearr_12103_12168 = state_12057__$1;
(statearr_12103_12168[(1)] = (27));

} else {
var statearr_12104_12169 = state_12057__$1;
(statearr_12104_12169[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (34))){
var state_12057__$1 = state_12057;
var statearr_12105_12170 = state_12057__$1;
(statearr_12105_12170[(2)] = null);

(statearr_12105_12170[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (17))){
var state_12057__$1 = state_12057;
var statearr_12106_12171 = state_12057__$1;
(statearr_12106_12171[(2)] = null);

(statearr_12106_12171[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (3))){
var inst_12055 = (state_12057[(2)]);
var state_12057__$1 = state_12057;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12057__$1,inst_12055);
} else {
if((state_val_12058 === (12))){
var inst_11986 = (state_12057[(2)]);
var state_12057__$1 = state_12057;
var statearr_12107_12172 = state_12057__$1;
(statearr_12107_12172[(2)] = inst_11986);

(statearr_12107_12172[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (2))){
var state_12057__$1 = state_12057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12057__$1,(4),ch);
} else {
if((state_val_12058 === (23))){
var state_12057__$1 = state_12057;
var statearr_12108_12173 = state_12057__$1;
(statearr_12108_12173[(2)] = null);

(statearr_12108_12173[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (35))){
var inst_12039 = (state_12057[(2)]);
var state_12057__$1 = state_12057;
var statearr_12109_12174 = state_12057__$1;
(statearr_12109_12174[(2)] = inst_12039);

(statearr_12109_12174[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (19))){
var inst_11958 = (state_12057[(7)]);
var inst_11962 = cljs.core.chunk_first.call(null,inst_11958);
var inst_11963 = cljs.core.chunk_rest.call(null,inst_11958);
var inst_11964 = cljs.core.count.call(null,inst_11962);
var inst_11936 = inst_11963;
var inst_11937 = inst_11962;
var inst_11938 = inst_11964;
var inst_11939 = (0);
var state_12057__$1 = (function (){var statearr_12110 = state_12057;
(statearr_12110[(13)] = inst_11936);

(statearr_12110[(14)] = inst_11937);

(statearr_12110[(15)] = inst_11939);

(statearr_12110[(16)] = inst_11938);

return statearr_12110;
})();
var statearr_12111_12175 = state_12057__$1;
(statearr_12111_12175[(2)] = null);

(statearr_12111_12175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (11))){
var inst_11936 = (state_12057[(13)]);
var inst_11958 = (state_12057[(7)]);
var inst_11958__$1 = cljs.core.seq.call(null,inst_11936);
var state_12057__$1 = (function (){var statearr_12112 = state_12057;
(statearr_12112[(7)] = inst_11958__$1);

return statearr_12112;
})();
if(inst_11958__$1){
var statearr_12113_12176 = state_12057__$1;
(statearr_12113_12176[(1)] = (16));

} else {
var statearr_12114_12177 = state_12057__$1;
(statearr_12114_12177[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (9))){
var inst_11988 = (state_12057[(2)]);
var state_12057__$1 = state_12057;
var statearr_12115_12178 = state_12057__$1;
(statearr_12115_12178[(2)] = inst_11988);

(statearr_12115_12178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (5))){
var inst_11934 = cljs.core.deref.call(null,cs);
var inst_11935 = cljs.core.seq.call(null,inst_11934);
var inst_11936 = inst_11935;
var inst_11937 = null;
var inst_11938 = (0);
var inst_11939 = (0);
var state_12057__$1 = (function (){var statearr_12116 = state_12057;
(statearr_12116[(13)] = inst_11936);

(statearr_12116[(14)] = inst_11937);

(statearr_12116[(15)] = inst_11939);

(statearr_12116[(16)] = inst_11938);

return statearr_12116;
})();
var statearr_12117_12179 = state_12057__$1;
(statearr_12117_12179[(2)] = null);

(statearr_12117_12179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (14))){
var state_12057__$1 = state_12057;
var statearr_12118_12180 = state_12057__$1;
(statearr_12118_12180[(2)] = null);

(statearr_12118_12180[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (45))){
var inst_12047 = (state_12057[(2)]);
var state_12057__$1 = state_12057;
var statearr_12119_12181 = state_12057__$1;
(statearr_12119_12181[(2)] = inst_12047);

(statearr_12119_12181[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (26))){
var inst_11991 = (state_12057[(27)]);
var inst_12043 = (state_12057[(2)]);
var inst_12044 = cljs.core.seq.call(null,inst_11991);
var state_12057__$1 = (function (){var statearr_12120 = state_12057;
(statearr_12120[(29)] = inst_12043);

return statearr_12120;
})();
if(inst_12044){
var statearr_12121_12182 = state_12057__$1;
(statearr_12121_12182[(1)] = (42));

} else {
var statearr_12122_12183 = state_12057__$1;
(statearr_12122_12183[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (16))){
var inst_11958 = (state_12057[(7)]);
var inst_11960 = cljs.core.chunked_seq_QMARK_.call(null,inst_11958);
var state_12057__$1 = state_12057;
if(inst_11960){
var statearr_12123_12184 = state_12057__$1;
(statearr_12123_12184[(1)] = (19));

} else {
var statearr_12124_12185 = state_12057__$1;
(statearr_12124_12185[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (38))){
var inst_12036 = (state_12057[(2)]);
var state_12057__$1 = state_12057;
var statearr_12125_12186 = state_12057__$1;
(statearr_12125_12186[(2)] = inst_12036);

(statearr_12125_12186[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (30))){
var state_12057__$1 = state_12057;
var statearr_12126_12187 = state_12057__$1;
(statearr_12126_12187[(2)] = null);

(statearr_12126_12187[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (10))){
var inst_11937 = (state_12057[(14)]);
var inst_11939 = (state_12057[(15)]);
var inst_11947 = cljs.core._nth.call(null,inst_11937,inst_11939);
var inst_11948 = cljs.core.nth.call(null,inst_11947,(0),null);
var inst_11949 = cljs.core.nth.call(null,inst_11947,(1),null);
var state_12057__$1 = (function (){var statearr_12127 = state_12057;
(statearr_12127[(24)] = inst_11948);

return statearr_12127;
})();
if(cljs.core.truth_(inst_11949)){
var statearr_12128_12188 = state_12057__$1;
(statearr_12128_12188[(1)] = (13));

} else {
var statearr_12129_12189 = state_12057__$1;
(statearr_12129_12189[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (18))){
var inst_11984 = (state_12057[(2)]);
var state_12057__$1 = state_12057;
var statearr_12130_12190 = state_12057__$1;
(statearr_12130_12190[(2)] = inst_11984);

(statearr_12130_12190[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (42))){
var state_12057__$1 = state_12057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12057__$1,(45),dchan);
} else {
if((state_val_12058 === (37))){
var inst_11927 = (state_12057[(9)]);
var inst_12026 = (state_12057[(22)]);
var inst_12017 = (state_12057[(23)]);
var inst_12026__$1 = cljs.core.first.call(null,inst_12017);
var inst_12027 = cljs.core.async.put_BANG_.call(null,inst_12026__$1,inst_11927,done);
var state_12057__$1 = (function (){var statearr_12131 = state_12057;
(statearr_12131[(22)] = inst_12026__$1);

return statearr_12131;
})();
if(cljs.core.truth_(inst_12027)){
var statearr_12132_12191 = state_12057__$1;
(statearr_12132_12191[(1)] = (39));

} else {
var statearr_12133_12192 = state_12057__$1;
(statearr_12133_12192[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (8))){
var inst_11939 = (state_12057[(15)]);
var inst_11938 = (state_12057[(16)]);
var inst_11941 = (inst_11939 < inst_11938);
var inst_11942 = inst_11941;
var state_12057__$1 = state_12057;
if(cljs.core.truth_(inst_11942)){
var statearr_12134_12193 = state_12057__$1;
(statearr_12134_12193[(1)] = (10));

} else {
var statearr_12135_12194 = state_12057__$1;
(statearr_12135_12194[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__11232__auto__ = null;
var cljs$core$async$mult_$_state_machine__11232__auto____0 = (function (){
var statearr_12136 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12136[(0)] = cljs$core$async$mult_$_state_machine__11232__auto__);

(statearr_12136[(1)] = (1));

return statearr_12136;
});
var cljs$core$async$mult_$_state_machine__11232__auto____1 = (function (state_12057){
while(true){
var ret_value__11233__auto__ = (function (){try{while(true){
var result__11234__auto__ = switch__11231__auto__.call(null,state_12057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11234__auto__;
}
break;
}
}catch (e12137){if((e12137 instanceof Object)){
var ex__11235__auto__ = e12137;
var statearr_12138_12195 = state_12057;
(statearr_12138_12195[(5)] = ex__11235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12196 = state_12057;
state_12057 = G__12196;
continue;
} else {
return ret_value__11233__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11232__auto__ = function(state_12057){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11232__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11232__auto____1.call(this,state_12057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11232__auto____0;
cljs$core$async$mult_$_state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11232__auto____1;
return cljs$core$async$mult_$_state_machine__11232__auto__;
})()
})();
var state__11328__auto__ = (function (){var statearr_12139 = f__11327__auto__.call(null);
(statearr_12139[(6)] = c__11326__auto___12140);

return statearr_12139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11328__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__12198 = arguments.length;
switch (G__12198) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m);
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,state_map);
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,mode);
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___12210 = arguments.length;
var i__4790__auto___12211 = (0);
while(true){
if((i__4790__auto___12211 < len__4789__auto___12210)){
args__4795__auto__.push((arguments[i__4790__auto___12211]));

var G__12212 = (i__4790__auto___12211 + (1));
i__4790__auto___12211 = G__12212;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12204){
var map__12205 = p__12204;
var map__12205__$1 = (((((!((map__12205 == null))))?(((((map__12205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12205):map__12205);
var opts = map__12205__$1;
var statearr_12207_12213 = state;
(statearr_12207_12213[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_12208_12214 = state;
(statearr_12208_12214[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_12209_12215 = state;
(statearr_12209_12215[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12200){
var G__12201 = cljs.core.first.call(null,seq12200);
var seq12200__$1 = cljs.core.next.call(null,seq12200);
var G__12202 = cljs.core.first.call(null,seq12200__$1);
var seq12200__$2 = cljs.core.next.call(null,seq12200__$1);
var G__12203 = cljs.core.first.call(null,seq12200__$2);
var seq12200__$3 = cljs.core.next.call(null,seq12200__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12201,G__12202,G__12203,seq12200__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12216 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12216 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12217){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12217 = meta12217;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12218,meta12217__$1){
var self__ = this;
var _12218__$1 = this;
return (new cljs.core.async.t_cljs$core$async12216(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12217__$1));
}));

(cljs.core.async.t_cljs$core$async12216.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12218){
var self__ = this;
var _12218__$1 = this;
return self__.meta12217;
}));

(cljs.core.async.t_cljs$core$async12216.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12216.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async12216.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12216.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12216.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12216.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12216.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12216.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12216.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta12217","meta12217",-34665058,null)], null);
}));

(cljs.core.async.t_cljs$core$async12216.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12216.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12216");

(cljs.core.async.t_cljs$core$async12216.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async12216");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12216.
 */
cljs.core.async.__GT_t_cljs$core$async12216 = (function cljs$core$async$mix_$___GT_t_cljs$core$async12216(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12217){
return (new cljs.core.async.t_cljs$core$async12216(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12217));
});

}

return (new cljs.core.async.t_cljs$core$async12216(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11326__auto___12380 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11327__auto__ = (function (){var switch__11231__auto__ = (function (state_12320){
var state_val_12321 = (state_12320[(1)]);
if((state_val_12321 === (7))){
var inst_12235 = (state_12320[(2)]);
var state_12320__$1 = state_12320;
var statearr_12322_12381 = state_12320__$1;
(statearr_12322_12381[(2)] = inst_12235);

(statearr_12322_12381[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12321 === (20))){
var inst_12247 = (state_12320[(7)]);
var state_12320__$1 = state_12320;
var statearr_12323_12382 = state_12320__$1;
(statearr_12323_12382[(2)] = inst_12247);

(statearr_12323_12382[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12321 === (27))){
var state_12320__$1 = state_12320;
var statearr_12324_12383 = state_12320__$1;
(statearr_12324_12383[(2)] = null);

(statearr_12324_12383[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12321 === (1))){
var inst_12222 = (state_12320[(8)]);
var inst_12222__$1 = calc_state.call(null);
var inst_12224 = (inst_12222__$1 == null);
var inst_12225 = cljs.core.not.call(null,inst_12224);
var state_12320__$1 = (function (){var statearr_12325 = state_12320;
(statearr_12325[(8)] = inst_12222__$1);

return statearr_12325;
})();
if(inst_12225){
var statearr_12326_12384 = state_12320__$1;
(statearr_12326_12384[(1)] = (2));

} else {
var statearr_12327_12385 = state_12320__$1;
(statearr_12327_12385[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12321 === (24))){
var inst_12271 = (state_12320[(9)]);
var inst_12294 = (state_12320[(10)]);
var inst_12280 = (state_12320[(11)]);
var inst_12294__$1 = inst_12271.call(null,inst_12280);
var state_12320__$1 = (function (){var statearr_12328 = state_12320;
(statearr_12328[(10)] = inst_12294__$1);

return statearr_12328;
})();
if(cljs.core.truth_(inst_12294__$1)){
var statearr_12329_12386 = state_12320__$1;
(statearr_12329_12386[(1)] = (29));

} else {
var statearr_12330_12387 = state_12320__$1;
(statearr_12330_12387[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12321 === (4))){
var inst_12238 = (state_12320[(2)]);
var state_12320__$1 = state_12320;
if(cljs.core.truth_(inst_12238)){
var statearr_12331_12388 = state_12320__$1;
(statearr_12331_12388[(1)] = (8));

} else {
var statearr_12332_12389 = state_12320__$1;
(statearr_12332_12389[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12321 === (15))){
var inst_12265 = (state_12320[(2)]);
var state_12320__$1 = state_12320;
if(cljs.core.truth_(inst_12265)){
var statearr_12333_12390 = state_12320__$1;
(statearr_12333_12390[(1)] = (19));

} else {
var statearr_12334_12391 = state_12320__$1;
(statearr_12334_12391[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12321 === (21))){
var inst_12270 = (state_12320[(12)]);
var inst_12270__$1 = (state_12320[(2)]);
var inst_12271 = cljs.core.get.call(null,inst_12270__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12272 = cljs.core.get.call(null,inst_12270__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12273 = cljs.core.get.call(null,inst_12270__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12320__$1 = (function (){var statearr_12335 = state_12320;
(statearr_12335[(12)] = inst_12270__$1);

(statearr_12335[(9)] = inst_12271);

(statearr_12335[(13)] = inst_12272);

return statearr_12335;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12320__$1,(22),inst_12273);
} else {
if((state_val_12321 === (31))){
var inst_12302 = (state_12320[(2)]);
var state_12320__$1 = state_12320;
if(cljs.core.truth_(inst_12302)){
var statearr_12336_12392 = state_12320__$1;
(statearr_12336_12392[(1)] = (32));

} else {
var statearr_12337_12393 = state_12320__$1;
(statearr_12337_12393[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12321 === (32))){
var inst_12279 = (state_12320[(14)]);
var state_12320__$1 = state_12320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12320__$1,(35),out,inst_12279);
} else {
if((state_val_12321 === (33))){
var inst_12270 = (state_12320[(12)]);
var inst_12247 = inst_12270;
var state_12320__$1 = (function (){var statearr_12338 = state_12320;
(statearr_12338[(7)] = inst_12247);

return statearr_12338;
})();
var statearr_12339_12394 = state_12320__$1;
(statearr_12339_12394[(2)] = null);

(statearr_12339_12394[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12321 === (13))){
var inst_12247 = (state_12320[(7)]);
var inst_12254 = inst_12247.cljs$lang$protocol_mask$partition0$;
var inst_12255 = (inst_12254 & (64));
var inst_12256 = inst_12247.cljs$core$ISeq$;
var inst_12257 = (cljs.core.PROTOCOL_SENTINEL === inst_12256);
var inst_12258 = ((inst_12255) || (inst_12257));
var state_12320__$1 = state_12320;
if(cljs.core.truth_(inst_12258)){
var statearr_12340_12395 = state_12320__$1;
(statearr_12340_12395[(1)] = (16));

} else {
var statearr_12341_12396 = state_12320__$1;
(statearr_12341_12396[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12321 === (22))){
var inst_12279 = (state_12320[(14)]);
var inst_12280 = (state_12320[(11)]);
var inst_12278 = (state_12320[(2)]);
var inst_12279__$1 = cljs.core.nth.call(null,inst_12278,(0),null);
var inst_12280__$1 = cljs.core.nth.call(null,inst_12278,(1),null);
var inst_12281 = (inst_12279__$1 == null);
var inst_12282 = cljs.core._EQ_.call(null,inst_12280__$1,change);
var inst_12283 = ((inst_12281) || (inst_12282));
var state_12320__$1 = (function (){var statearr_12342 = state_12320;
(statearr_12342[(14)] = inst_12279__$1);

(statearr_12342[(11)] = inst_12280__$1);

return statearr_12342;
})();
if(cljs.core.truth_(inst_12283)){
var statearr_12343_12397 = state_12320__$1;
(statearr_12343_12397[(1)] = (23));

} else {
var statearr_12344_12398 = state_12320__$1;
(statearr_12344_12398[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12321 === (36))){
var inst_12270 = (state_12320[(12)]);
var inst_12247 = inst_12270;
var state_12320__$1 = (function (){var statearr_12345 = state_12320;
(statearr_12345[(7)] = inst_12247);

return statearr_12345;
})();
var statearr_12346_12399 = state_12320__$1;
(statearr_12346_12399[(2)] = null);

(statearr_12346_12399[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12321 === (29))){
var inst_12294 = (state_12320[(10)]);
var state_12320__$1 = state_12320;
var statearr_12347_12400 = state_12320__$1;
(statearr_12347_12400[(2)] = inst_12294);

(statearr_12347_12400[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12321 === (6))){
var state_12320__$1 = state_12320;
var statearr_12348_12401 = state_12320__$1;
(statearr_12348_12401[(2)] = false);

(statearr_12348_12401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12321 === (28))){
var inst_12290 = (state_12320[(2)]);
var inst_12291 = calc_state.call(null);
var inst_12247 = inst_12291;
var state_12320__$1 = (function (){var statearr_12349 = state_12320;
(statearr_12349[(7)] = inst_12247);

(statearr_12349[(15)] = inst_12290);

return statearr_12349;
})();
var statearr_12350_12402 = state_12320__$1;
(statearr_12350_12402[(2)] = null);

(statearr_12350_12402[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12321 === (25))){
var inst_12316 = (state_12320[(2)]);
var state_12320__$1 = state_12320;
var statearr_12351_12403 = state_12320__$1;
(statearr_12351_12403[(2)] = inst_12316);

(statearr_12351_12403[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12321 === (34))){
var inst_12314 = (state_12320[(2)]);
var state_12320__$1 = state_12320;
var statearr_12352_12404 = state_12320__$1;
(statearr_12352_12404[(2)] = inst_12314);

(statearr_12352_12404[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12321 === (17))){
var state_12320__$1 = state_12320;
var statearr_12353_12405 = state_12320__$1;
(statearr_12353_12405[(2)] = false);

(statearr_12353_12405[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12321 === (3))){
var state_12320__$1 = state_12320;
var statearr_12354_12406 = state_12320__$1;
(statearr_12354_12406[(2)] = false);

(statearr_12354_12406[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12321 === (12))){
var inst_12318 = (state_12320[(2)]);
var state_12320__$1 = state_12320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12320__$1,inst_12318);
} else {
if((state_val_12321 === (2))){
var inst_12222 = (state_12320[(8)]);
var inst_12227 = inst_12222.cljs$lang$protocol_mask$partition0$;
var inst_12228 = (inst_12227 & (64));
var inst_12229 = inst_12222.cljs$core$ISeq$;
var inst_12230 = (cljs.core.PROTOCOL_SENTINEL === inst_12229);
var inst_12231 = ((inst_12228) || (inst_12230));
var state_12320__$1 = state_12320;
if(cljs.core.truth_(inst_12231)){
var statearr_12355_12407 = state_12320__$1;
(statearr_12355_12407[(1)] = (5));

} else {
var statearr_12356_12408 = state_12320__$1;
(statearr_12356_12408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12321 === (23))){
var inst_12279 = (state_12320[(14)]);
var inst_12285 = (inst_12279 == null);
var state_12320__$1 = state_12320;
if(cljs.core.truth_(inst_12285)){
var statearr_12357_12409 = state_12320__$1;
(statearr_12357_12409[(1)] = (26));

} else {
var statearr_12358_12410 = state_12320__$1;
(statearr_12358_12410[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12321 === (35))){
var inst_12305 = (state_12320[(2)]);
var state_12320__$1 = state_12320;
if(cljs.core.truth_(inst_12305)){
var statearr_12359_12411 = state_12320__$1;
(statearr_12359_12411[(1)] = (36));

} else {
var statearr_12360_12412 = state_12320__$1;
(statearr_12360_12412[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12321 === (19))){
var inst_12247 = (state_12320[(7)]);
var inst_12267 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12247);
var state_12320__$1 = state_12320;
var statearr_12361_12413 = state_12320__$1;
(statearr_12361_12413[(2)] = inst_12267);

(statearr_12361_12413[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12321 === (11))){
var inst_12247 = (state_12320[(7)]);
var inst_12251 = (inst_12247 == null);
var inst_12252 = cljs.core.not.call(null,inst_12251);
var state_12320__$1 = state_12320;
if(inst_12252){
var statearr_12362_12414 = state_12320__$1;
(statearr_12362_12414[(1)] = (13));

} else {
var statearr_12363_12415 = state_12320__$1;
(statearr_12363_12415[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12321 === (9))){
var inst_12222 = (state_12320[(8)]);
var state_12320__$1 = state_12320;
var statearr_12364_12416 = state_12320__$1;
(statearr_12364_12416[(2)] = inst_12222);

(statearr_12364_12416[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12321 === (5))){
var state_12320__$1 = state_12320;
var statearr_12365_12417 = state_12320__$1;
(statearr_12365_12417[(2)] = true);

(statearr_12365_12417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12321 === (14))){
var state_12320__$1 = state_12320;
var statearr_12366_12418 = state_12320__$1;
(statearr_12366_12418[(2)] = false);

(statearr_12366_12418[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12321 === (26))){
var inst_12280 = (state_12320[(11)]);
var inst_12287 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12280);
var state_12320__$1 = state_12320;
var statearr_12367_12419 = state_12320__$1;
(statearr_12367_12419[(2)] = inst_12287);

(statearr_12367_12419[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12321 === (16))){
var state_12320__$1 = state_12320;
var statearr_12368_12420 = state_12320__$1;
(statearr_12368_12420[(2)] = true);

(statearr_12368_12420[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12321 === (38))){
var inst_12310 = (state_12320[(2)]);
var state_12320__$1 = state_12320;
var statearr_12369_12421 = state_12320__$1;
(statearr_12369_12421[(2)] = inst_12310);

(statearr_12369_12421[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12321 === (30))){
var inst_12271 = (state_12320[(9)]);
var inst_12272 = (state_12320[(13)]);
var inst_12280 = (state_12320[(11)]);
var inst_12297 = cljs.core.empty_QMARK_.call(null,inst_12271);
var inst_12298 = inst_12272.call(null,inst_12280);
var inst_12299 = cljs.core.not.call(null,inst_12298);
var inst_12300 = ((inst_12297) && (inst_12299));
var state_12320__$1 = state_12320;
var statearr_12370_12422 = state_12320__$1;
(statearr_12370_12422[(2)] = inst_12300);

(statearr_12370_12422[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12321 === (10))){
var inst_12222 = (state_12320[(8)]);
var inst_12243 = (state_12320[(2)]);
var inst_12244 = cljs.core.get.call(null,inst_12243,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12245 = cljs.core.get.call(null,inst_12243,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12246 = cljs.core.get.call(null,inst_12243,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12247 = inst_12222;
var state_12320__$1 = (function (){var statearr_12371 = state_12320;
(statearr_12371[(16)] = inst_12246);

(statearr_12371[(7)] = inst_12247);

(statearr_12371[(17)] = inst_12245);

(statearr_12371[(18)] = inst_12244);

return statearr_12371;
})();
var statearr_12372_12423 = state_12320__$1;
(statearr_12372_12423[(2)] = null);

(statearr_12372_12423[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12321 === (18))){
var inst_12262 = (state_12320[(2)]);
var state_12320__$1 = state_12320;
var statearr_12373_12424 = state_12320__$1;
(statearr_12373_12424[(2)] = inst_12262);

(statearr_12373_12424[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12321 === (37))){
var state_12320__$1 = state_12320;
var statearr_12374_12425 = state_12320__$1;
(statearr_12374_12425[(2)] = null);

(statearr_12374_12425[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12321 === (8))){
var inst_12222 = (state_12320[(8)]);
var inst_12240 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12222);
var state_12320__$1 = state_12320;
var statearr_12375_12426 = state_12320__$1;
(statearr_12375_12426[(2)] = inst_12240);

(statearr_12375_12426[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__11232__auto__ = null;
var cljs$core$async$mix_$_state_machine__11232__auto____0 = (function (){
var statearr_12376 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12376[(0)] = cljs$core$async$mix_$_state_machine__11232__auto__);

(statearr_12376[(1)] = (1));

return statearr_12376;
});
var cljs$core$async$mix_$_state_machine__11232__auto____1 = (function (state_12320){
while(true){
var ret_value__11233__auto__ = (function (){try{while(true){
var result__11234__auto__ = switch__11231__auto__.call(null,state_12320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11234__auto__;
}
break;
}
}catch (e12377){if((e12377 instanceof Object)){
var ex__11235__auto__ = e12377;
var statearr_12378_12427 = state_12320;
(statearr_12378_12427[(5)] = ex__11235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12428 = state_12320;
state_12320 = G__12428;
continue;
} else {
return ret_value__11233__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11232__auto__ = function(state_12320){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11232__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11232__auto____1.call(this,state_12320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__11232__auto____0;
cljs$core$async$mix_$_state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__11232__auto____1;
return cljs$core$async$mix_$_state_machine__11232__auto__;
})()
})();
var state__11328__auto__ = (function (){var statearr_12379 = f__11327__auto__.call(null);
(statearr_12379[(6)] = c__11326__auto___12380);

return statearr_12379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11328__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p,v,ch);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__12430 = arguments.length;
switch (G__12430) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p,v);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__12434 = arguments.length;
switch (G__12434) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__12432_SHARP_){
if(cljs.core.truth_(p1__12432_SHARP_.call(null,topic))){
return p1__12432_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12432_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12435 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12435 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12436){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12436 = meta12436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12437,meta12436__$1){
var self__ = this;
var _12437__$1 = this;
return (new cljs.core.async.t_cljs$core$async12435(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12436__$1));
}));

(cljs.core.async.t_cljs$core$async12435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12437){
var self__ = this;
var _12437__$1 = this;
return self__.meta12436;
}));

(cljs.core.async.t_cljs$core$async12435.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12435.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12435.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12435.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async12435.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async12435.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async12435.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async12435.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12436","meta12436",-1036236578,null)], null);
}));

(cljs.core.async.t_cljs$core$async12435.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12435.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12435");

(cljs.core.async.t_cljs$core$async12435.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async12435");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12435.
 */
cljs.core.async.__GT_t_cljs$core$async12435 = (function cljs$core$async$__GT_t_cljs$core$async12435(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12436){
return (new cljs.core.async.t_cljs$core$async12435(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12436));
});

}

return (new cljs.core.async.t_cljs$core$async12435(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11326__auto___12555 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11327__auto__ = (function (){var switch__11231__auto__ = (function (state_12509){
var state_val_12510 = (state_12509[(1)]);
if((state_val_12510 === (7))){
var inst_12505 = (state_12509[(2)]);
var state_12509__$1 = state_12509;
var statearr_12511_12556 = state_12509__$1;
(statearr_12511_12556[(2)] = inst_12505);

(statearr_12511_12556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12510 === (20))){
var state_12509__$1 = state_12509;
var statearr_12512_12557 = state_12509__$1;
(statearr_12512_12557[(2)] = null);

(statearr_12512_12557[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12510 === (1))){
var state_12509__$1 = state_12509;
var statearr_12513_12558 = state_12509__$1;
(statearr_12513_12558[(2)] = null);

(statearr_12513_12558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12510 === (24))){
var inst_12488 = (state_12509[(7)]);
var inst_12497 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12488);
var state_12509__$1 = state_12509;
var statearr_12514_12559 = state_12509__$1;
(statearr_12514_12559[(2)] = inst_12497);

(statearr_12514_12559[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12510 === (4))){
var inst_12440 = (state_12509[(8)]);
var inst_12440__$1 = (state_12509[(2)]);
var inst_12441 = (inst_12440__$1 == null);
var state_12509__$1 = (function (){var statearr_12515 = state_12509;
(statearr_12515[(8)] = inst_12440__$1);

return statearr_12515;
})();
if(cljs.core.truth_(inst_12441)){
var statearr_12516_12560 = state_12509__$1;
(statearr_12516_12560[(1)] = (5));

} else {
var statearr_12517_12561 = state_12509__$1;
(statearr_12517_12561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12510 === (15))){
var inst_12482 = (state_12509[(2)]);
var state_12509__$1 = state_12509;
var statearr_12518_12562 = state_12509__$1;
(statearr_12518_12562[(2)] = inst_12482);

(statearr_12518_12562[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12510 === (21))){
var inst_12502 = (state_12509[(2)]);
var state_12509__$1 = (function (){var statearr_12519 = state_12509;
(statearr_12519[(9)] = inst_12502);

return statearr_12519;
})();
var statearr_12520_12563 = state_12509__$1;
(statearr_12520_12563[(2)] = null);

(statearr_12520_12563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12510 === (13))){
var inst_12464 = (state_12509[(10)]);
var inst_12466 = cljs.core.chunked_seq_QMARK_.call(null,inst_12464);
var state_12509__$1 = state_12509;
if(inst_12466){
var statearr_12521_12564 = state_12509__$1;
(statearr_12521_12564[(1)] = (16));

} else {
var statearr_12522_12565 = state_12509__$1;
(statearr_12522_12565[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12510 === (22))){
var inst_12494 = (state_12509[(2)]);
var state_12509__$1 = state_12509;
if(cljs.core.truth_(inst_12494)){
var statearr_12523_12566 = state_12509__$1;
(statearr_12523_12566[(1)] = (23));

} else {
var statearr_12524_12567 = state_12509__$1;
(statearr_12524_12567[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12510 === (6))){
var inst_12490 = (state_12509[(11)]);
var inst_12488 = (state_12509[(7)]);
var inst_12440 = (state_12509[(8)]);
var inst_12488__$1 = topic_fn.call(null,inst_12440);
var inst_12489 = cljs.core.deref.call(null,mults);
var inst_12490__$1 = cljs.core.get.call(null,inst_12489,inst_12488__$1);
var state_12509__$1 = (function (){var statearr_12525 = state_12509;
(statearr_12525[(11)] = inst_12490__$1);

(statearr_12525[(7)] = inst_12488__$1);

return statearr_12525;
})();
if(cljs.core.truth_(inst_12490__$1)){
var statearr_12526_12568 = state_12509__$1;
(statearr_12526_12568[(1)] = (19));

} else {
var statearr_12527_12569 = state_12509__$1;
(statearr_12527_12569[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12510 === (25))){
var inst_12499 = (state_12509[(2)]);
var state_12509__$1 = state_12509;
var statearr_12528_12570 = state_12509__$1;
(statearr_12528_12570[(2)] = inst_12499);

(statearr_12528_12570[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12510 === (17))){
var inst_12464 = (state_12509[(10)]);
var inst_12473 = cljs.core.first.call(null,inst_12464);
var inst_12474 = cljs.core.async.muxch_STAR_.call(null,inst_12473);
var inst_12475 = cljs.core.async.close_BANG_.call(null,inst_12474);
var inst_12476 = cljs.core.next.call(null,inst_12464);
var inst_12450 = inst_12476;
var inst_12451 = null;
var inst_12452 = (0);
var inst_12453 = (0);
var state_12509__$1 = (function (){var statearr_12529 = state_12509;
(statearr_12529[(12)] = inst_12475);

(statearr_12529[(13)] = inst_12451);

(statearr_12529[(14)] = inst_12450);

(statearr_12529[(15)] = inst_12453);

(statearr_12529[(16)] = inst_12452);

return statearr_12529;
})();
var statearr_12530_12571 = state_12509__$1;
(statearr_12530_12571[(2)] = null);

(statearr_12530_12571[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12510 === (3))){
var inst_12507 = (state_12509[(2)]);
var state_12509__$1 = state_12509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12509__$1,inst_12507);
} else {
if((state_val_12510 === (12))){
var inst_12484 = (state_12509[(2)]);
var state_12509__$1 = state_12509;
var statearr_12531_12572 = state_12509__$1;
(statearr_12531_12572[(2)] = inst_12484);

(statearr_12531_12572[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12510 === (2))){
var state_12509__$1 = state_12509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12509__$1,(4),ch);
} else {
if((state_val_12510 === (23))){
var state_12509__$1 = state_12509;
var statearr_12532_12573 = state_12509__$1;
(statearr_12532_12573[(2)] = null);

(statearr_12532_12573[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12510 === (19))){
var inst_12490 = (state_12509[(11)]);
var inst_12440 = (state_12509[(8)]);
var inst_12492 = cljs.core.async.muxch_STAR_.call(null,inst_12490);
var state_12509__$1 = state_12509;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12509__$1,(22),inst_12492,inst_12440);
} else {
if((state_val_12510 === (11))){
var inst_12464 = (state_12509[(10)]);
var inst_12450 = (state_12509[(14)]);
var inst_12464__$1 = cljs.core.seq.call(null,inst_12450);
var state_12509__$1 = (function (){var statearr_12533 = state_12509;
(statearr_12533[(10)] = inst_12464__$1);

return statearr_12533;
})();
if(inst_12464__$1){
var statearr_12534_12574 = state_12509__$1;
(statearr_12534_12574[(1)] = (13));

} else {
var statearr_12535_12575 = state_12509__$1;
(statearr_12535_12575[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12510 === (9))){
var inst_12486 = (state_12509[(2)]);
var state_12509__$1 = state_12509;
var statearr_12536_12576 = state_12509__$1;
(statearr_12536_12576[(2)] = inst_12486);

(statearr_12536_12576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12510 === (5))){
var inst_12447 = cljs.core.deref.call(null,mults);
var inst_12448 = cljs.core.vals.call(null,inst_12447);
var inst_12449 = cljs.core.seq.call(null,inst_12448);
var inst_12450 = inst_12449;
var inst_12451 = null;
var inst_12452 = (0);
var inst_12453 = (0);
var state_12509__$1 = (function (){var statearr_12537 = state_12509;
(statearr_12537[(13)] = inst_12451);

(statearr_12537[(14)] = inst_12450);

(statearr_12537[(15)] = inst_12453);

(statearr_12537[(16)] = inst_12452);

return statearr_12537;
})();
var statearr_12538_12577 = state_12509__$1;
(statearr_12538_12577[(2)] = null);

(statearr_12538_12577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12510 === (14))){
var state_12509__$1 = state_12509;
var statearr_12542_12578 = state_12509__$1;
(statearr_12542_12578[(2)] = null);

(statearr_12542_12578[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12510 === (16))){
var inst_12464 = (state_12509[(10)]);
var inst_12468 = cljs.core.chunk_first.call(null,inst_12464);
var inst_12469 = cljs.core.chunk_rest.call(null,inst_12464);
var inst_12470 = cljs.core.count.call(null,inst_12468);
var inst_12450 = inst_12469;
var inst_12451 = inst_12468;
var inst_12452 = inst_12470;
var inst_12453 = (0);
var state_12509__$1 = (function (){var statearr_12543 = state_12509;
(statearr_12543[(13)] = inst_12451);

(statearr_12543[(14)] = inst_12450);

(statearr_12543[(15)] = inst_12453);

(statearr_12543[(16)] = inst_12452);

return statearr_12543;
})();
var statearr_12544_12579 = state_12509__$1;
(statearr_12544_12579[(2)] = null);

(statearr_12544_12579[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12510 === (10))){
var inst_12451 = (state_12509[(13)]);
var inst_12450 = (state_12509[(14)]);
var inst_12453 = (state_12509[(15)]);
var inst_12452 = (state_12509[(16)]);
var inst_12458 = cljs.core._nth.call(null,inst_12451,inst_12453);
var inst_12459 = cljs.core.async.muxch_STAR_.call(null,inst_12458);
var inst_12460 = cljs.core.async.close_BANG_.call(null,inst_12459);
var inst_12461 = (inst_12453 + (1));
var tmp12539 = inst_12451;
var tmp12540 = inst_12450;
var tmp12541 = inst_12452;
var inst_12450__$1 = tmp12540;
var inst_12451__$1 = tmp12539;
var inst_12452__$1 = tmp12541;
var inst_12453__$1 = inst_12461;
var state_12509__$1 = (function (){var statearr_12545 = state_12509;
(statearr_12545[(17)] = inst_12460);

(statearr_12545[(13)] = inst_12451__$1);

(statearr_12545[(14)] = inst_12450__$1);

(statearr_12545[(15)] = inst_12453__$1);

(statearr_12545[(16)] = inst_12452__$1);

return statearr_12545;
})();
var statearr_12546_12580 = state_12509__$1;
(statearr_12546_12580[(2)] = null);

(statearr_12546_12580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12510 === (18))){
var inst_12479 = (state_12509[(2)]);
var state_12509__$1 = state_12509;
var statearr_12547_12581 = state_12509__$1;
(statearr_12547_12581[(2)] = inst_12479);

(statearr_12547_12581[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12510 === (8))){
var inst_12453 = (state_12509[(15)]);
var inst_12452 = (state_12509[(16)]);
var inst_12455 = (inst_12453 < inst_12452);
var inst_12456 = inst_12455;
var state_12509__$1 = state_12509;
if(cljs.core.truth_(inst_12456)){
var statearr_12548_12582 = state_12509__$1;
(statearr_12548_12582[(1)] = (10));

} else {
var statearr_12549_12583 = state_12509__$1;
(statearr_12549_12583[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11232__auto__ = null;
var cljs$core$async$state_machine__11232__auto____0 = (function (){
var statearr_12550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12550[(0)] = cljs$core$async$state_machine__11232__auto__);

(statearr_12550[(1)] = (1));

return statearr_12550;
});
var cljs$core$async$state_machine__11232__auto____1 = (function (state_12509){
while(true){
var ret_value__11233__auto__ = (function (){try{while(true){
var result__11234__auto__ = switch__11231__auto__.call(null,state_12509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11234__auto__;
}
break;
}
}catch (e12551){if((e12551 instanceof Object)){
var ex__11235__auto__ = e12551;
var statearr_12552_12584 = state_12509;
(statearr_12552_12584[(5)] = ex__11235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12585 = state_12509;
state_12509 = G__12585;
continue;
} else {
return ret_value__11233__auto__;
}
break;
}
});
cljs$core$async$state_machine__11232__auto__ = function(state_12509){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11232__auto____1.call(this,state_12509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11232__auto____0;
cljs$core$async$state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11232__auto____1;
return cljs$core$async$state_machine__11232__auto__;
})()
})();
var state__11328__auto__ = (function (){var statearr_12553 = f__11327__auto__.call(null);
(statearr_12553[(6)] = c__11326__auto___12555);

return statearr_12553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11328__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__12587 = arguments.length;
switch (G__12587) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__12590 = arguments.length;
switch (G__12590) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__12593 = arguments.length;
switch (G__12593) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__11326__auto___12660 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11327__auto__ = (function (){var switch__11231__auto__ = (function (state_12632){
var state_val_12633 = (state_12632[(1)]);
if((state_val_12633 === (7))){
var state_12632__$1 = state_12632;
var statearr_12634_12661 = state_12632__$1;
(statearr_12634_12661[(2)] = null);

(statearr_12634_12661[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12633 === (1))){
var state_12632__$1 = state_12632;
var statearr_12635_12662 = state_12632__$1;
(statearr_12635_12662[(2)] = null);

(statearr_12635_12662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12633 === (4))){
var inst_12596 = (state_12632[(7)]);
var inst_12598 = (inst_12596 < cnt);
var state_12632__$1 = state_12632;
if(cljs.core.truth_(inst_12598)){
var statearr_12636_12663 = state_12632__$1;
(statearr_12636_12663[(1)] = (6));

} else {
var statearr_12637_12664 = state_12632__$1;
(statearr_12637_12664[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12633 === (15))){
var inst_12628 = (state_12632[(2)]);
var state_12632__$1 = state_12632;
var statearr_12638_12665 = state_12632__$1;
(statearr_12638_12665[(2)] = inst_12628);

(statearr_12638_12665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12633 === (13))){
var inst_12621 = cljs.core.async.close_BANG_.call(null,out);
var state_12632__$1 = state_12632;
var statearr_12639_12666 = state_12632__$1;
(statearr_12639_12666[(2)] = inst_12621);

(statearr_12639_12666[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12633 === (6))){
var state_12632__$1 = state_12632;
var statearr_12640_12667 = state_12632__$1;
(statearr_12640_12667[(2)] = null);

(statearr_12640_12667[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12633 === (3))){
var inst_12630 = (state_12632[(2)]);
var state_12632__$1 = state_12632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12632__$1,inst_12630);
} else {
if((state_val_12633 === (12))){
var inst_12618 = (state_12632[(8)]);
var inst_12618__$1 = (state_12632[(2)]);
var inst_12619 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12618__$1);
var state_12632__$1 = (function (){var statearr_12641 = state_12632;
(statearr_12641[(8)] = inst_12618__$1);

return statearr_12641;
})();
if(cljs.core.truth_(inst_12619)){
var statearr_12642_12668 = state_12632__$1;
(statearr_12642_12668[(1)] = (13));

} else {
var statearr_12643_12669 = state_12632__$1;
(statearr_12643_12669[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12633 === (2))){
var inst_12595 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_12596 = (0);
var state_12632__$1 = (function (){var statearr_12644 = state_12632;
(statearr_12644[(9)] = inst_12595);

(statearr_12644[(7)] = inst_12596);

return statearr_12644;
})();
var statearr_12645_12670 = state_12632__$1;
(statearr_12645_12670[(2)] = null);

(statearr_12645_12670[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12633 === (11))){
var inst_12596 = (state_12632[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12632,(10),Object,null,(9));
var inst_12605 = chs__$1.call(null,inst_12596);
var inst_12606 = done.call(null,inst_12596);
var inst_12607 = cljs.core.async.take_BANG_.call(null,inst_12605,inst_12606);
var state_12632__$1 = state_12632;
var statearr_12646_12671 = state_12632__$1;
(statearr_12646_12671[(2)] = inst_12607);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12632__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12633 === (9))){
var inst_12596 = (state_12632[(7)]);
var inst_12609 = (state_12632[(2)]);
var inst_12610 = (inst_12596 + (1));
var inst_12596__$1 = inst_12610;
var state_12632__$1 = (function (){var statearr_12647 = state_12632;
(statearr_12647[(10)] = inst_12609);

(statearr_12647[(7)] = inst_12596__$1);

return statearr_12647;
})();
var statearr_12648_12672 = state_12632__$1;
(statearr_12648_12672[(2)] = null);

(statearr_12648_12672[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12633 === (5))){
var inst_12616 = (state_12632[(2)]);
var state_12632__$1 = (function (){var statearr_12649 = state_12632;
(statearr_12649[(11)] = inst_12616);

return statearr_12649;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12632__$1,(12),dchan);
} else {
if((state_val_12633 === (14))){
var inst_12618 = (state_12632[(8)]);
var inst_12623 = cljs.core.apply.call(null,f,inst_12618);
var state_12632__$1 = state_12632;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12632__$1,(16),out,inst_12623);
} else {
if((state_val_12633 === (16))){
var inst_12625 = (state_12632[(2)]);
var state_12632__$1 = (function (){var statearr_12650 = state_12632;
(statearr_12650[(12)] = inst_12625);

return statearr_12650;
})();
var statearr_12651_12673 = state_12632__$1;
(statearr_12651_12673[(2)] = null);

(statearr_12651_12673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12633 === (10))){
var inst_12600 = (state_12632[(2)]);
var inst_12601 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_12632__$1 = (function (){var statearr_12652 = state_12632;
(statearr_12652[(13)] = inst_12600);

return statearr_12652;
})();
var statearr_12653_12674 = state_12632__$1;
(statearr_12653_12674[(2)] = inst_12601);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12632__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12633 === (8))){
var inst_12614 = (state_12632[(2)]);
var state_12632__$1 = state_12632;
var statearr_12654_12675 = state_12632__$1;
(statearr_12654_12675[(2)] = inst_12614);

(statearr_12654_12675[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11232__auto__ = null;
var cljs$core$async$state_machine__11232__auto____0 = (function (){
var statearr_12655 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12655[(0)] = cljs$core$async$state_machine__11232__auto__);

(statearr_12655[(1)] = (1));

return statearr_12655;
});
var cljs$core$async$state_machine__11232__auto____1 = (function (state_12632){
while(true){
var ret_value__11233__auto__ = (function (){try{while(true){
var result__11234__auto__ = switch__11231__auto__.call(null,state_12632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11234__auto__;
}
break;
}
}catch (e12656){if((e12656 instanceof Object)){
var ex__11235__auto__ = e12656;
var statearr_12657_12676 = state_12632;
(statearr_12657_12676[(5)] = ex__11235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12677 = state_12632;
state_12632 = G__12677;
continue;
} else {
return ret_value__11233__auto__;
}
break;
}
});
cljs$core$async$state_machine__11232__auto__ = function(state_12632){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11232__auto____1.call(this,state_12632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11232__auto____0;
cljs$core$async$state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11232__auto____1;
return cljs$core$async$state_machine__11232__auto__;
})()
})();
var state__11328__auto__ = (function (){var statearr_12658 = f__11327__auto__.call(null);
(statearr_12658[(6)] = c__11326__auto___12660);

return statearr_12658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11328__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__12680 = arguments.length;
switch (G__12680) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11326__auto___12734 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11327__auto__ = (function (){var switch__11231__auto__ = (function (state_12712){
var state_val_12713 = (state_12712[(1)]);
if((state_val_12713 === (7))){
var inst_12691 = (state_12712[(7)]);
var inst_12692 = (state_12712[(8)]);
var inst_12691__$1 = (state_12712[(2)]);
var inst_12692__$1 = cljs.core.nth.call(null,inst_12691__$1,(0),null);
var inst_12693 = cljs.core.nth.call(null,inst_12691__$1,(1),null);
var inst_12694 = (inst_12692__$1 == null);
var state_12712__$1 = (function (){var statearr_12714 = state_12712;
(statearr_12714[(9)] = inst_12693);

(statearr_12714[(7)] = inst_12691__$1);

(statearr_12714[(8)] = inst_12692__$1);

return statearr_12714;
})();
if(cljs.core.truth_(inst_12694)){
var statearr_12715_12735 = state_12712__$1;
(statearr_12715_12735[(1)] = (8));

} else {
var statearr_12716_12736 = state_12712__$1;
(statearr_12716_12736[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12713 === (1))){
var inst_12681 = cljs.core.vec.call(null,chs);
var inst_12682 = inst_12681;
var state_12712__$1 = (function (){var statearr_12717 = state_12712;
(statearr_12717[(10)] = inst_12682);

return statearr_12717;
})();
var statearr_12718_12737 = state_12712__$1;
(statearr_12718_12737[(2)] = null);

(statearr_12718_12737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12713 === (4))){
var inst_12682 = (state_12712[(10)]);
var state_12712__$1 = state_12712;
return cljs.core.async.ioc_alts_BANG_.call(null,state_12712__$1,(7),inst_12682);
} else {
if((state_val_12713 === (6))){
var inst_12708 = (state_12712[(2)]);
var state_12712__$1 = state_12712;
var statearr_12719_12738 = state_12712__$1;
(statearr_12719_12738[(2)] = inst_12708);

(statearr_12719_12738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12713 === (3))){
var inst_12710 = (state_12712[(2)]);
var state_12712__$1 = state_12712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12712__$1,inst_12710);
} else {
if((state_val_12713 === (2))){
var inst_12682 = (state_12712[(10)]);
var inst_12684 = cljs.core.count.call(null,inst_12682);
var inst_12685 = (inst_12684 > (0));
var state_12712__$1 = state_12712;
if(cljs.core.truth_(inst_12685)){
var statearr_12721_12739 = state_12712__$1;
(statearr_12721_12739[(1)] = (4));

} else {
var statearr_12722_12740 = state_12712__$1;
(statearr_12722_12740[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12713 === (11))){
var inst_12682 = (state_12712[(10)]);
var inst_12701 = (state_12712[(2)]);
var tmp12720 = inst_12682;
var inst_12682__$1 = tmp12720;
var state_12712__$1 = (function (){var statearr_12723 = state_12712;
(statearr_12723[(10)] = inst_12682__$1);

(statearr_12723[(11)] = inst_12701);

return statearr_12723;
})();
var statearr_12724_12741 = state_12712__$1;
(statearr_12724_12741[(2)] = null);

(statearr_12724_12741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12713 === (9))){
var inst_12692 = (state_12712[(8)]);
var state_12712__$1 = state_12712;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12712__$1,(11),out,inst_12692);
} else {
if((state_val_12713 === (5))){
var inst_12706 = cljs.core.async.close_BANG_.call(null,out);
var state_12712__$1 = state_12712;
var statearr_12725_12742 = state_12712__$1;
(statearr_12725_12742[(2)] = inst_12706);

(statearr_12725_12742[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12713 === (10))){
var inst_12704 = (state_12712[(2)]);
var state_12712__$1 = state_12712;
var statearr_12726_12743 = state_12712__$1;
(statearr_12726_12743[(2)] = inst_12704);

(statearr_12726_12743[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12713 === (8))){
var inst_12693 = (state_12712[(9)]);
var inst_12682 = (state_12712[(10)]);
var inst_12691 = (state_12712[(7)]);
var inst_12692 = (state_12712[(8)]);
var inst_12696 = (function (){var cs = inst_12682;
var vec__12687 = inst_12691;
var v = inst_12692;
var c = inst_12693;
return (function (p1__12678_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__12678_SHARP_);
});
})();
var inst_12697 = cljs.core.filterv.call(null,inst_12696,inst_12682);
var inst_12682__$1 = inst_12697;
var state_12712__$1 = (function (){var statearr_12727 = state_12712;
(statearr_12727[(10)] = inst_12682__$1);

return statearr_12727;
})();
var statearr_12728_12744 = state_12712__$1;
(statearr_12728_12744[(2)] = null);

(statearr_12728_12744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11232__auto__ = null;
var cljs$core$async$state_machine__11232__auto____0 = (function (){
var statearr_12729 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12729[(0)] = cljs$core$async$state_machine__11232__auto__);

(statearr_12729[(1)] = (1));

return statearr_12729;
});
var cljs$core$async$state_machine__11232__auto____1 = (function (state_12712){
while(true){
var ret_value__11233__auto__ = (function (){try{while(true){
var result__11234__auto__ = switch__11231__auto__.call(null,state_12712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11234__auto__;
}
break;
}
}catch (e12730){if((e12730 instanceof Object)){
var ex__11235__auto__ = e12730;
var statearr_12731_12745 = state_12712;
(statearr_12731_12745[(5)] = ex__11235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12746 = state_12712;
state_12712 = G__12746;
continue;
} else {
return ret_value__11233__auto__;
}
break;
}
});
cljs$core$async$state_machine__11232__auto__ = function(state_12712){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11232__auto____1.call(this,state_12712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11232__auto____0;
cljs$core$async$state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11232__auto____1;
return cljs$core$async$state_machine__11232__auto__;
})()
})();
var state__11328__auto__ = (function (){var statearr_12732 = f__11327__auto__.call(null);
(statearr_12732[(6)] = c__11326__auto___12734);

return statearr_12732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11328__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__12748 = arguments.length;
switch (G__12748) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11326__auto___12793 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11327__auto__ = (function (){var switch__11231__auto__ = (function (state_12772){
var state_val_12773 = (state_12772[(1)]);
if((state_val_12773 === (7))){
var inst_12754 = (state_12772[(7)]);
var inst_12754__$1 = (state_12772[(2)]);
var inst_12755 = (inst_12754__$1 == null);
var inst_12756 = cljs.core.not.call(null,inst_12755);
var state_12772__$1 = (function (){var statearr_12774 = state_12772;
(statearr_12774[(7)] = inst_12754__$1);

return statearr_12774;
})();
if(inst_12756){
var statearr_12775_12794 = state_12772__$1;
(statearr_12775_12794[(1)] = (8));

} else {
var statearr_12776_12795 = state_12772__$1;
(statearr_12776_12795[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12773 === (1))){
var inst_12749 = (0);
var state_12772__$1 = (function (){var statearr_12777 = state_12772;
(statearr_12777[(8)] = inst_12749);

return statearr_12777;
})();
var statearr_12778_12796 = state_12772__$1;
(statearr_12778_12796[(2)] = null);

(statearr_12778_12796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12773 === (4))){
var state_12772__$1 = state_12772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12772__$1,(7),ch);
} else {
if((state_val_12773 === (6))){
var inst_12767 = (state_12772[(2)]);
var state_12772__$1 = state_12772;
var statearr_12779_12797 = state_12772__$1;
(statearr_12779_12797[(2)] = inst_12767);

(statearr_12779_12797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12773 === (3))){
var inst_12769 = (state_12772[(2)]);
var inst_12770 = cljs.core.async.close_BANG_.call(null,out);
var state_12772__$1 = (function (){var statearr_12780 = state_12772;
(statearr_12780[(9)] = inst_12769);

return statearr_12780;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12772__$1,inst_12770);
} else {
if((state_val_12773 === (2))){
var inst_12749 = (state_12772[(8)]);
var inst_12751 = (inst_12749 < n);
var state_12772__$1 = state_12772;
if(cljs.core.truth_(inst_12751)){
var statearr_12781_12798 = state_12772__$1;
(statearr_12781_12798[(1)] = (4));

} else {
var statearr_12782_12799 = state_12772__$1;
(statearr_12782_12799[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12773 === (11))){
var inst_12749 = (state_12772[(8)]);
var inst_12759 = (state_12772[(2)]);
var inst_12760 = (inst_12749 + (1));
var inst_12749__$1 = inst_12760;
var state_12772__$1 = (function (){var statearr_12783 = state_12772;
(statearr_12783[(8)] = inst_12749__$1);

(statearr_12783[(10)] = inst_12759);

return statearr_12783;
})();
var statearr_12784_12800 = state_12772__$1;
(statearr_12784_12800[(2)] = null);

(statearr_12784_12800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12773 === (9))){
var state_12772__$1 = state_12772;
var statearr_12785_12801 = state_12772__$1;
(statearr_12785_12801[(2)] = null);

(statearr_12785_12801[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12773 === (5))){
var state_12772__$1 = state_12772;
var statearr_12786_12802 = state_12772__$1;
(statearr_12786_12802[(2)] = null);

(statearr_12786_12802[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12773 === (10))){
var inst_12764 = (state_12772[(2)]);
var state_12772__$1 = state_12772;
var statearr_12787_12803 = state_12772__$1;
(statearr_12787_12803[(2)] = inst_12764);

(statearr_12787_12803[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12773 === (8))){
var inst_12754 = (state_12772[(7)]);
var state_12772__$1 = state_12772;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12772__$1,(11),out,inst_12754);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11232__auto__ = null;
var cljs$core$async$state_machine__11232__auto____0 = (function (){
var statearr_12788 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12788[(0)] = cljs$core$async$state_machine__11232__auto__);

(statearr_12788[(1)] = (1));

return statearr_12788;
});
var cljs$core$async$state_machine__11232__auto____1 = (function (state_12772){
while(true){
var ret_value__11233__auto__ = (function (){try{while(true){
var result__11234__auto__ = switch__11231__auto__.call(null,state_12772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11234__auto__;
}
break;
}
}catch (e12789){if((e12789 instanceof Object)){
var ex__11235__auto__ = e12789;
var statearr_12790_12804 = state_12772;
(statearr_12790_12804[(5)] = ex__11235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12805 = state_12772;
state_12772 = G__12805;
continue;
} else {
return ret_value__11233__auto__;
}
break;
}
});
cljs$core$async$state_machine__11232__auto__ = function(state_12772){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11232__auto____1.call(this,state_12772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11232__auto____0;
cljs$core$async$state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11232__auto____1;
return cljs$core$async$state_machine__11232__auto__;
})()
})();
var state__11328__auto__ = (function (){var statearr_12791 = f__11327__auto__.call(null);
(statearr_12791[(6)] = c__11326__auto___12793);

return statearr_12791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11328__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12807 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12807 = (function (f,ch,meta12808){
this.f = f;
this.ch = ch;
this.meta12808 = meta12808;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12809,meta12808__$1){
var self__ = this;
var _12809__$1 = this;
return (new cljs.core.async.t_cljs$core$async12807(self__.f,self__.ch,meta12808__$1));
}));

(cljs.core.async.t_cljs$core$async12807.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12809){
var self__ = this;
var _12809__$1 = this;
return self__.meta12808;
}));

(cljs.core.async.t_cljs$core$async12807.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12807.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async12807.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async12807.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12807.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12810 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12810 = (function (f,ch,meta12808,_,fn1,meta12811){
this.f = f;
this.ch = ch;
this.meta12808 = meta12808;
this._ = _;
this.fn1 = fn1;
this.meta12811 = meta12811;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12812,meta12811__$1){
var self__ = this;
var _12812__$1 = this;
return (new cljs.core.async.t_cljs$core$async12810(self__.f,self__.ch,self__.meta12808,self__._,self__.fn1,meta12811__$1));
}));

(cljs.core.async.t_cljs$core$async12810.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12812){
var self__ = this;
var _12812__$1 = this;
return self__.meta12811;
}));

(cljs.core.async.t_cljs$core$async12810.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12810.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async12810.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12810.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__12806_SHARP_){
return f1.call(null,(((p1__12806_SHARP_ == null))?null:self__.f.call(null,p1__12806_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async12810.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12808","meta12808",-628735870,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12807","cljs.core.async/t_cljs$core$async12807",-1691992397,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12811","meta12811",1410623254,null)], null);
}));

(cljs.core.async.t_cljs$core$async12810.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12810.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12810");

(cljs.core.async.t_cljs$core$async12810.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async12810");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12810.
 */
cljs.core.async.__GT_t_cljs$core$async12810 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12810(f__$1,ch__$1,meta12808__$1,___$2,fn1__$1,meta12811){
return (new cljs.core.async.t_cljs$core$async12810(f__$1,ch__$1,meta12808__$1,___$2,fn1__$1,meta12811));
});

}

return (new cljs.core.async.t_cljs$core$async12810(self__.f,self__.ch,self__.meta12808,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async12807.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12807.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async12807.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12808","meta12808",-628735870,null)], null);
}));

(cljs.core.async.t_cljs$core$async12807.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12807.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12807");

(cljs.core.async.t_cljs$core$async12807.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async12807");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12807.
 */
cljs.core.async.__GT_t_cljs$core$async12807 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12807(f__$1,ch__$1,meta12808){
return (new cljs.core.async.t_cljs$core$async12807(f__$1,ch__$1,meta12808));
});

}

return (new cljs.core.async.t_cljs$core$async12807(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12813 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12813 = (function (f,ch,meta12814){
this.f = f;
this.ch = ch;
this.meta12814 = meta12814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12815,meta12814__$1){
var self__ = this;
var _12815__$1 = this;
return (new cljs.core.async.t_cljs$core$async12813(self__.f,self__.ch,meta12814__$1));
}));

(cljs.core.async.t_cljs$core$async12813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12815){
var self__ = this;
var _12815__$1 = this;
return self__.meta12814;
}));

(cljs.core.async.t_cljs$core$async12813.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12813.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async12813.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12813.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12813.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12813.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async12813.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12814","meta12814",713655333,null)], null);
}));

(cljs.core.async.t_cljs$core$async12813.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12813.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12813");

(cljs.core.async.t_cljs$core$async12813.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async12813");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12813.
 */
cljs.core.async.__GT_t_cljs$core$async12813 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12813(f__$1,ch__$1,meta12814){
return (new cljs.core.async.t_cljs$core$async12813(f__$1,ch__$1,meta12814));
});

}

return (new cljs.core.async.t_cljs$core$async12813(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12816 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12816 = (function (p,ch,meta12817){
this.p = p;
this.ch = ch;
this.meta12817 = meta12817;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12818,meta12817__$1){
var self__ = this;
var _12818__$1 = this;
return (new cljs.core.async.t_cljs$core$async12816(self__.p,self__.ch,meta12817__$1));
}));

(cljs.core.async.t_cljs$core$async12816.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12818){
var self__ = this;
var _12818__$1 = this;
return self__.meta12817;
}));

(cljs.core.async.t_cljs$core$async12816.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12816.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async12816.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async12816.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12816.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12816.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12816.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async12816.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12817","meta12817",1253344164,null)], null);
}));

(cljs.core.async.t_cljs$core$async12816.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12816.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12816");

(cljs.core.async.t_cljs$core$async12816.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async12816");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12816.
 */
cljs.core.async.__GT_t_cljs$core$async12816 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12816(p__$1,ch__$1,meta12817){
return (new cljs.core.async.t_cljs$core$async12816(p__$1,ch__$1,meta12817));
});

}

return (new cljs.core.async.t_cljs$core$async12816(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__12820 = arguments.length;
switch (G__12820) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11326__auto___12860 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11327__auto__ = (function (){var switch__11231__auto__ = (function (state_12841){
var state_val_12842 = (state_12841[(1)]);
if((state_val_12842 === (7))){
var inst_12837 = (state_12841[(2)]);
var state_12841__$1 = state_12841;
var statearr_12843_12861 = state_12841__$1;
(statearr_12843_12861[(2)] = inst_12837);

(statearr_12843_12861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12842 === (1))){
var state_12841__$1 = state_12841;
var statearr_12844_12862 = state_12841__$1;
(statearr_12844_12862[(2)] = null);

(statearr_12844_12862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12842 === (4))){
var inst_12823 = (state_12841[(7)]);
var inst_12823__$1 = (state_12841[(2)]);
var inst_12824 = (inst_12823__$1 == null);
var state_12841__$1 = (function (){var statearr_12845 = state_12841;
(statearr_12845[(7)] = inst_12823__$1);

return statearr_12845;
})();
if(cljs.core.truth_(inst_12824)){
var statearr_12846_12863 = state_12841__$1;
(statearr_12846_12863[(1)] = (5));

} else {
var statearr_12847_12864 = state_12841__$1;
(statearr_12847_12864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12842 === (6))){
var inst_12823 = (state_12841[(7)]);
var inst_12828 = p.call(null,inst_12823);
var state_12841__$1 = state_12841;
if(cljs.core.truth_(inst_12828)){
var statearr_12848_12865 = state_12841__$1;
(statearr_12848_12865[(1)] = (8));

} else {
var statearr_12849_12866 = state_12841__$1;
(statearr_12849_12866[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12842 === (3))){
var inst_12839 = (state_12841[(2)]);
var state_12841__$1 = state_12841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12841__$1,inst_12839);
} else {
if((state_val_12842 === (2))){
var state_12841__$1 = state_12841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12841__$1,(4),ch);
} else {
if((state_val_12842 === (11))){
var inst_12831 = (state_12841[(2)]);
var state_12841__$1 = state_12841;
var statearr_12850_12867 = state_12841__$1;
(statearr_12850_12867[(2)] = inst_12831);

(statearr_12850_12867[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12842 === (9))){
var state_12841__$1 = state_12841;
var statearr_12851_12868 = state_12841__$1;
(statearr_12851_12868[(2)] = null);

(statearr_12851_12868[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12842 === (5))){
var inst_12826 = cljs.core.async.close_BANG_.call(null,out);
var state_12841__$1 = state_12841;
var statearr_12852_12869 = state_12841__$1;
(statearr_12852_12869[(2)] = inst_12826);

(statearr_12852_12869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12842 === (10))){
var inst_12834 = (state_12841[(2)]);
var state_12841__$1 = (function (){var statearr_12853 = state_12841;
(statearr_12853[(8)] = inst_12834);

return statearr_12853;
})();
var statearr_12854_12870 = state_12841__$1;
(statearr_12854_12870[(2)] = null);

(statearr_12854_12870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12842 === (8))){
var inst_12823 = (state_12841[(7)]);
var state_12841__$1 = state_12841;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12841__$1,(11),out,inst_12823);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11232__auto__ = null;
var cljs$core$async$state_machine__11232__auto____0 = (function (){
var statearr_12855 = [null,null,null,null,null,null,null,null,null];
(statearr_12855[(0)] = cljs$core$async$state_machine__11232__auto__);

(statearr_12855[(1)] = (1));

return statearr_12855;
});
var cljs$core$async$state_machine__11232__auto____1 = (function (state_12841){
while(true){
var ret_value__11233__auto__ = (function (){try{while(true){
var result__11234__auto__ = switch__11231__auto__.call(null,state_12841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11234__auto__;
}
break;
}
}catch (e12856){if((e12856 instanceof Object)){
var ex__11235__auto__ = e12856;
var statearr_12857_12871 = state_12841;
(statearr_12857_12871[(5)] = ex__11235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12872 = state_12841;
state_12841 = G__12872;
continue;
} else {
return ret_value__11233__auto__;
}
break;
}
});
cljs$core$async$state_machine__11232__auto__ = function(state_12841){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11232__auto____1.call(this,state_12841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11232__auto____0;
cljs$core$async$state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11232__auto____1;
return cljs$core$async$state_machine__11232__auto__;
})()
})();
var state__11328__auto__ = (function (){var statearr_12858 = f__11327__auto__.call(null);
(statearr_12858[(6)] = c__11326__auto___12860);

return statearr_12858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11328__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__12874 = arguments.length;
switch (G__12874) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__11326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11327__auto__ = (function (){var switch__11231__auto__ = (function (state_12937){
var state_val_12938 = (state_12937[(1)]);
if((state_val_12938 === (7))){
var inst_12933 = (state_12937[(2)]);
var state_12937__$1 = state_12937;
var statearr_12939_12977 = state_12937__$1;
(statearr_12939_12977[(2)] = inst_12933);

(statearr_12939_12977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12938 === (20))){
var inst_12903 = (state_12937[(7)]);
var inst_12914 = (state_12937[(2)]);
var inst_12915 = cljs.core.next.call(null,inst_12903);
var inst_12889 = inst_12915;
var inst_12890 = null;
var inst_12891 = (0);
var inst_12892 = (0);
var state_12937__$1 = (function (){var statearr_12940 = state_12937;
(statearr_12940[(8)] = inst_12891);

(statearr_12940[(9)] = inst_12892);

(statearr_12940[(10)] = inst_12914);

(statearr_12940[(11)] = inst_12889);

(statearr_12940[(12)] = inst_12890);

return statearr_12940;
})();
var statearr_12941_12978 = state_12937__$1;
(statearr_12941_12978[(2)] = null);

(statearr_12941_12978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12938 === (1))){
var state_12937__$1 = state_12937;
var statearr_12942_12979 = state_12937__$1;
(statearr_12942_12979[(2)] = null);

(statearr_12942_12979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12938 === (4))){
var inst_12878 = (state_12937[(13)]);
var inst_12878__$1 = (state_12937[(2)]);
var inst_12879 = (inst_12878__$1 == null);
var state_12937__$1 = (function (){var statearr_12943 = state_12937;
(statearr_12943[(13)] = inst_12878__$1);

return statearr_12943;
})();
if(cljs.core.truth_(inst_12879)){
var statearr_12944_12980 = state_12937__$1;
(statearr_12944_12980[(1)] = (5));

} else {
var statearr_12945_12981 = state_12937__$1;
(statearr_12945_12981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12938 === (15))){
var state_12937__$1 = state_12937;
var statearr_12949_12982 = state_12937__$1;
(statearr_12949_12982[(2)] = null);

(statearr_12949_12982[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12938 === (21))){
var state_12937__$1 = state_12937;
var statearr_12950_12983 = state_12937__$1;
(statearr_12950_12983[(2)] = null);

(statearr_12950_12983[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12938 === (13))){
var inst_12891 = (state_12937[(8)]);
var inst_12892 = (state_12937[(9)]);
var inst_12889 = (state_12937[(11)]);
var inst_12890 = (state_12937[(12)]);
var inst_12899 = (state_12937[(2)]);
var inst_12900 = (inst_12892 + (1));
var tmp12946 = inst_12891;
var tmp12947 = inst_12889;
var tmp12948 = inst_12890;
var inst_12889__$1 = tmp12947;
var inst_12890__$1 = tmp12948;
var inst_12891__$1 = tmp12946;
var inst_12892__$1 = inst_12900;
var state_12937__$1 = (function (){var statearr_12951 = state_12937;
(statearr_12951[(8)] = inst_12891__$1);

(statearr_12951[(9)] = inst_12892__$1);

(statearr_12951[(14)] = inst_12899);

(statearr_12951[(11)] = inst_12889__$1);

(statearr_12951[(12)] = inst_12890__$1);

return statearr_12951;
})();
var statearr_12952_12984 = state_12937__$1;
(statearr_12952_12984[(2)] = null);

(statearr_12952_12984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12938 === (22))){
var state_12937__$1 = state_12937;
var statearr_12953_12985 = state_12937__$1;
(statearr_12953_12985[(2)] = null);

(statearr_12953_12985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12938 === (6))){
var inst_12878 = (state_12937[(13)]);
var inst_12887 = f.call(null,inst_12878);
var inst_12888 = cljs.core.seq.call(null,inst_12887);
var inst_12889 = inst_12888;
var inst_12890 = null;
var inst_12891 = (0);
var inst_12892 = (0);
var state_12937__$1 = (function (){var statearr_12954 = state_12937;
(statearr_12954[(8)] = inst_12891);

(statearr_12954[(9)] = inst_12892);

(statearr_12954[(11)] = inst_12889);

(statearr_12954[(12)] = inst_12890);

return statearr_12954;
})();
var statearr_12955_12986 = state_12937__$1;
(statearr_12955_12986[(2)] = null);

(statearr_12955_12986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12938 === (17))){
var inst_12903 = (state_12937[(7)]);
var inst_12907 = cljs.core.chunk_first.call(null,inst_12903);
var inst_12908 = cljs.core.chunk_rest.call(null,inst_12903);
var inst_12909 = cljs.core.count.call(null,inst_12907);
var inst_12889 = inst_12908;
var inst_12890 = inst_12907;
var inst_12891 = inst_12909;
var inst_12892 = (0);
var state_12937__$1 = (function (){var statearr_12956 = state_12937;
(statearr_12956[(8)] = inst_12891);

(statearr_12956[(9)] = inst_12892);

(statearr_12956[(11)] = inst_12889);

(statearr_12956[(12)] = inst_12890);

return statearr_12956;
})();
var statearr_12957_12987 = state_12937__$1;
(statearr_12957_12987[(2)] = null);

(statearr_12957_12987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12938 === (3))){
var inst_12935 = (state_12937[(2)]);
var state_12937__$1 = state_12937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12937__$1,inst_12935);
} else {
if((state_val_12938 === (12))){
var inst_12923 = (state_12937[(2)]);
var state_12937__$1 = state_12937;
var statearr_12958_12988 = state_12937__$1;
(statearr_12958_12988[(2)] = inst_12923);

(statearr_12958_12988[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12938 === (2))){
var state_12937__$1 = state_12937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12937__$1,(4),in$);
} else {
if((state_val_12938 === (23))){
var inst_12931 = (state_12937[(2)]);
var state_12937__$1 = state_12937;
var statearr_12959_12989 = state_12937__$1;
(statearr_12959_12989[(2)] = inst_12931);

(statearr_12959_12989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12938 === (19))){
var inst_12918 = (state_12937[(2)]);
var state_12937__$1 = state_12937;
var statearr_12960_12990 = state_12937__$1;
(statearr_12960_12990[(2)] = inst_12918);

(statearr_12960_12990[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12938 === (11))){
var inst_12903 = (state_12937[(7)]);
var inst_12889 = (state_12937[(11)]);
var inst_12903__$1 = cljs.core.seq.call(null,inst_12889);
var state_12937__$1 = (function (){var statearr_12961 = state_12937;
(statearr_12961[(7)] = inst_12903__$1);

return statearr_12961;
})();
if(inst_12903__$1){
var statearr_12962_12991 = state_12937__$1;
(statearr_12962_12991[(1)] = (14));

} else {
var statearr_12963_12992 = state_12937__$1;
(statearr_12963_12992[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12938 === (9))){
var inst_12925 = (state_12937[(2)]);
var inst_12926 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_12937__$1 = (function (){var statearr_12964 = state_12937;
(statearr_12964[(15)] = inst_12925);

return statearr_12964;
})();
if(cljs.core.truth_(inst_12926)){
var statearr_12965_12993 = state_12937__$1;
(statearr_12965_12993[(1)] = (21));

} else {
var statearr_12966_12994 = state_12937__$1;
(statearr_12966_12994[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12938 === (5))){
var inst_12881 = cljs.core.async.close_BANG_.call(null,out);
var state_12937__$1 = state_12937;
var statearr_12967_12995 = state_12937__$1;
(statearr_12967_12995[(2)] = inst_12881);

(statearr_12967_12995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12938 === (14))){
var inst_12903 = (state_12937[(7)]);
var inst_12905 = cljs.core.chunked_seq_QMARK_.call(null,inst_12903);
var state_12937__$1 = state_12937;
if(inst_12905){
var statearr_12968_12996 = state_12937__$1;
(statearr_12968_12996[(1)] = (17));

} else {
var statearr_12969_12997 = state_12937__$1;
(statearr_12969_12997[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12938 === (16))){
var inst_12921 = (state_12937[(2)]);
var state_12937__$1 = state_12937;
var statearr_12970_12998 = state_12937__$1;
(statearr_12970_12998[(2)] = inst_12921);

(statearr_12970_12998[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12938 === (10))){
var inst_12892 = (state_12937[(9)]);
var inst_12890 = (state_12937[(12)]);
var inst_12897 = cljs.core._nth.call(null,inst_12890,inst_12892);
var state_12937__$1 = state_12937;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12937__$1,(13),out,inst_12897);
} else {
if((state_val_12938 === (18))){
var inst_12903 = (state_12937[(7)]);
var inst_12912 = cljs.core.first.call(null,inst_12903);
var state_12937__$1 = state_12937;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12937__$1,(20),out,inst_12912);
} else {
if((state_val_12938 === (8))){
var inst_12891 = (state_12937[(8)]);
var inst_12892 = (state_12937[(9)]);
var inst_12894 = (inst_12892 < inst_12891);
var inst_12895 = inst_12894;
var state_12937__$1 = state_12937;
if(cljs.core.truth_(inst_12895)){
var statearr_12971_12999 = state_12937__$1;
(statearr_12971_12999[(1)] = (10));

} else {
var statearr_12972_13000 = state_12937__$1;
(statearr_12972_13000[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__11232__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__11232__auto____0 = (function (){
var statearr_12973 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12973[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__11232__auto__);

(statearr_12973[(1)] = (1));

return statearr_12973;
});
var cljs$core$async$mapcat_STAR__$_state_machine__11232__auto____1 = (function (state_12937){
while(true){
var ret_value__11233__auto__ = (function (){try{while(true){
var result__11234__auto__ = switch__11231__auto__.call(null,state_12937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11234__auto__;
}
break;
}
}catch (e12974){if((e12974 instanceof Object)){
var ex__11235__auto__ = e12974;
var statearr_12975_13001 = state_12937;
(statearr_12975_13001[(5)] = ex__11235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13002 = state_12937;
state_12937 = G__13002;
continue;
} else {
return ret_value__11233__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__11232__auto__ = function(state_12937){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__11232__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__11232__auto____1.call(this,state_12937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__11232__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__11232__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__11232__auto__;
})()
})();
var state__11328__auto__ = (function (){var statearr_12976 = f__11327__auto__.call(null);
(statearr_12976[(6)] = c__11326__auto__);

return statearr_12976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11328__auto__);
}));

return c__11326__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__13004 = arguments.length;
switch (G__13004) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__13007 = arguments.length;
switch (G__13007) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__13010 = arguments.length;
switch (G__13010) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11326__auto___13057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11327__auto__ = (function (){var switch__11231__auto__ = (function (state_13034){
var state_val_13035 = (state_13034[(1)]);
if((state_val_13035 === (7))){
var inst_13029 = (state_13034[(2)]);
var state_13034__$1 = state_13034;
var statearr_13036_13058 = state_13034__$1;
(statearr_13036_13058[(2)] = inst_13029);

(statearr_13036_13058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13035 === (1))){
var inst_13011 = null;
var state_13034__$1 = (function (){var statearr_13037 = state_13034;
(statearr_13037[(7)] = inst_13011);

return statearr_13037;
})();
var statearr_13038_13059 = state_13034__$1;
(statearr_13038_13059[(2)] = null);

(statearr_13038_13059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13035 === (4))){
var inst_13014 = (state_13034[(8)]);
var inst_13014__$1 = (state_13034[(2)]);
var inst_13015 = (inst_13014__$1 == null);
var inst_13016 = cljs.core.not.call(null,inst_13015);
var state_13034__$1 = (function (){var statearr_13039 = state_13034;
(statearr_13039[(8)] = inst_13014__$1);

return statearr_13039;
})();
if(inst_13016){
var statearr_13040_13060 = state_13034__$1;
(statearr_13040_13060[(1)] = (5));

} else {
var statearr_13041_13061 = state_13034__$1;
(statearr_13041_13061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13035 === (6))){
var state_13034__$1 = state_13034;
var statearr_13042_13062 = state_13034__$1;
(statearr_13042_13062[(2)] = null);

(statearr_13042_13062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13035 === (3))){
var inst_13031 = (state_13034[(2)]);
var inst_13032 = cljs.core.async.close_BANG_.call(null,out);
var state_13034__$1 = (function (){var statearr_13043 = state_13034;
(statearr_13043[(9)] = inst_13031);

return statearr_13043;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13034__$1,inst_13032);
} else {
if((state_val_13035 === (2))){
var state_13034__$1 = state_13034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13034__$1,(4),ch);
} else {
if((state_val_13035 === (11))){
var inst_13014 = (state_13034[(8)]);
var inst_13023 = (state_13034[(2)]);
var inst_13011 = inst_13014;
var state_13034__$1 = (function (){var statearr_13044 = state_13034;
(statearr_13044[(7)] = inst_13011);

(statearr_13044[(10)] = inst_13023);

return statearr_13044;
})();
var statearr_13045_13063 = state_13034__$1;
(statearr_13045_13063[(2)] = null);

(statearr_13045_13063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13035 === (9))){
var inst_13014 = (state_13034[(8)]);
var state_13034__$1 = state_13034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13034__$1,(11),out,inst_13014);
} else {
if((state_val_13035 === (5))){
var inst_13011 = (state_13034[(7)]);
var inst_13014 = (state_13034[(8)]);
var inst_13018 = cljs.core._EQ_.call(null,inst_13014,inst_13011);
var state_13034__$1 = state_13034;
if(inst_13018){
var statearr_13047_13064 = state_13034__$1;
(statearr_13047_13064[(1)] = (8));

} else {
var statearr_13048_13065 = state_13034__$1;
(statearr_13048_13065[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13035 === (10))){
var inst_13026 = (state_13034[(2)]);
var state_13034__$1 = state_13034;
var statearr_13049_13066 = state_13034__$1;
(statearr_13049_13066[(2)] = inst_13026);

(statearr_13049_13066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13035 === (8))){
var inst_13011 = (state_13034[(7)]);
var tmp13046 = inst_13011;
var inst_13011__$1 = tmp13046;
var state_13034__$1 = (function (){var statearr_13050 = state_13034;
(statearr_13050[(7)] = inst_13011__$1);

return statearr_13050;
})();
var statearr_13051_13067 = state_13034__$1;
(statearr_13051_13067[(2)] = null);

(statearr_13051_13067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11232__auto__ = null;
var cljs$core$async$state_machine__11232__auto____0 = (function (){
var statearr_13052 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13052[(0)] = cljs$core$async$state_machine__11232__auto__);

(statearr_13052[(1)] = (1));

return statearr_13052;
});
var cljs$core$async$state_machine__11232__auto____1 = (function (state_13034){
while(true){
var ret_value__11233__auto__ = (function (){try{while(true){
var result__11234__auto__ = switch__11231__auto__.call(null,state_13034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11234__auto__;
}
break;
}
}catch (e13053){if((e13053 instanceof Object)){
var ex__11235__auto__ = e13053;
var statearr_13054_13068 = state_13034;
(statearr_13054_13068[(5)] = ex__11235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13069 = state_13034;
state_13034 = G__13069;
continue;
} else {
return ret_value__11233__auto__;
}
break;
}
});
cljs$core$async$state_machine__11232__auto__ = function(state_13034){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11232__auto____1.call(this,state_13034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11232__auto____0;
cljs$core$async$state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11232__auto____1;
return cljs$core$async$state_machine__11232__auto__;
})()
})();
var state__11328__auto__ = (function (){var statearr_13055 = f__11327__auto__.call(null);
(statearr_13055[(6)] = c__11326__auto___13057);

return statearr_13055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11328__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__13071 = arguments.length;
switch (G__13071) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11326__auto___13137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11327__auto__ = (function (){var switch__11231__auto__ = (function (state_13109){
var state_val_13110 = (state_13109[(1)]);
if((state_val_13110 === (7))){
var inst_13105 = (state_13109[(2)]);
var state_13109__$1 = state_13109;
var statearr_13111_13138 = state_13109__$1;
(statearr_13111_13138[(2)] = inst_13105);

(statearr_13111_13138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13110 === (1))){
var inst_13072 = (new Array(n));
var inst_13073 = inst_13072;
var inst_13074 = (0);
var state_13109__$1 = (function (){var statearr_13112 = state_13109;
(statearr_13112[(7)] = inst_13074);

(statearr_13112[(8)] = inst_13073);

return statearr_13112;
})();
var statearr_13113_13139 = state_13109__$1;
(statearr_13113_13139[(2)] = null);

(statearr_13113_13139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13110 === (4))){
var inst_13077 = (state_13109[(9)]);
var inst_13077__$1 = (state_13109[(2)]);
var inst_13078 = (inst_13077__$1 == null);
var inst_13079 = cljs.core.not.call(null,inst_13078);
var state_13109__$1 = (function (){var statearr_13114 = state_13109;
(statearr_13114[(9)] = inst_13077__$1);

return statearr_13114;
})();
if(inst_13079){
var statearr_13115_13140 = state_13109__$1;
(statearr_13115_13140[(1)] = (5));

} else {
var statearr_13116_13141 = state_13109__$1;
(statearr_13116_13141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13110 === (15))){
var inst_13099 = (state_13109[(2)]);
var state_13109__$1 = state_13109;
var statearr_13117_13142 = state_13109__$1;
(statearr_13117_13142[(2)] = inst_13099);

(statearr_13117_13142[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13110 === (13))){
var state_13109__$1 = state_13109;
var statearr_13118_13143 = state_13109__$1;
(statearr_13118_13143[(2)] = null);

(statearr_13118_13143[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13110 === (6))){
var inst_13074 = (state_13109[(7)]);
var inst_13095 = (inst_13074 > (0));
var state_13109__$1 = state_13109;
if(cljs.core.truth_(inst_13095)){
var statearr_13119_13144 = state_13109__$1;
(statearr_13119_13144[(1)] = (12));

} else {
var statearr_13120_13145 = state_13109__$1;
(statearr_13120_13145[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13110 === (3))){
var inst_13107 = (state_13109[(2)]);
var state_13109__$1 = state_13109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13109__$1,inst_13107);
} else {
if((state_val_13110 === (12))){
var inst_13073 = (state_13109[(8)]);
var inst_13097 = cljs.core.vec.call(null,inst_13073);
var state_13109__$1 = state_13109;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13109__$1,(15),out,inst_13097);
} else {
if((state_val_13110 === (2))){
var state_13109__$1 = state_13109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13109__$1,(4),ch);
} else {
if((state_val_13110 === (11))){
var inst_13089 = (state_13109[(2)]);
var inst_13090 = (new Array(n));
var inst_13073 = inst_13090;
var inst_13074 = (0);
var state_13109__$1 = (function (){var statearr_13121 = state_13109;
(statearr_13121[(10)] = inst_13089);

(statearr_13121[(7)] = inst_13074);

(statearr_13121[(8)] = inst_13073);

return statearr_13121;
})();
var statearr_13122_13146 = state_13109__$1;
(statearr_13122_13146[(2)] = null);

(statearr_13122_13146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13110 === (9))){
var inst_13073 = (state_13109[(8)]);
var inst_13087 = cljs.core.vec.call(null,inst_13073);
var state_13109__$1 = state_13109;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13109__$1,(11),out,inst_13087);
} else {
if((state_val_13110 === (5))){
var inst_13082 = (state_13109[(11)]);
var inst_13074 = (state_13109[(7)]);
var inst_13077 = (state_13109[(9)]);
var inst_13073 = (state_13109[(8)]);
var inst_13081 = (inst_13073[inst_13074] = inst_13077);
var inst_13082__$1 = (inst_13074 + (1));
var inst_13083 = (inst_13082__$1 < n);
var state_13109__$1 = (function (){var statearr_13123 = state_13109;
(statearr_13123[(11)] = inst_13082__$1);

(statearr_13123[(12)] = inst_13081);

return statearr_13123;
})();
if(cljs.core.truth_(inst_13083)){
var statearr_13124_13147 = state_13109__$1;
(statearr_13124_13147[(1)] = (8));

} else {
var statearr_13125_13148 = state_13109__$1;
(statearr_13125_13148[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13110 === (14))){
var inst_13102 = (state_13109[(2)]);
var inst_13103 = cljs.core.async.close_BANG_.call(null,out);
var state_13109__$1 = (function (){var statearr_13127 = state_13109;
(statearr_13127[(13)] = inst_13102);

return statearr_13127;
})();
var statearr_13128_13149 = state_13109__$1;
(statearr_13128_13149[(2)] = inst_13103);

(statearr_13128_13149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13110 === (10))){
var inst_13093 = (state_13109[(2)]);
var state_13109__$1 = state_13109;
var statearr_13129_13150 = state_13109__$1;
(statearr_13129_13150[(2)] = inst_13093);

(statearr_13129_13150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13110 === (8))){
var inst_13082 = (state_13109[(11)]);
var inst_13073 = (state_13109[(8)]);
var tmp13126 = inst_13073;
var inst_13073__$1 = tmp13126;
var inst_13074 = inst_13082;
var state_13109__$1 = (function (){var statearr_13130 = state_13109;
(statearr_13130[(7)] = inst_13074);

(statearr_13130[(8)] = inst_13073__$1);

return statearr_13130;
})();
var statearr_13131_13151 = state_13109__$1;
(statearr_13131_13151[(2)] = null);

(statearr_13131_13151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11232__auto__ = null;
var cljs$core$async$state_machine__11232__auto____0 = (function (){
var statearr_13132 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13132[(0)] = cljs$core$async$state_machine__11232__auto__);

(statearr_13132[(1)] = (1));

return statearr_13132;
});
var cljs$core$async$state_machine__11232__auto____1 = (function (state_13109){
while(true){
var ret_value__11233__auto__ = (function (){try{while(true){
var result__11234__auto__ = switch__11231__auto__.call(null,state_13109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11234__auto__;
}
break;
}
}catch (e13133){if((e13133 instanceof Object)){
var ex__11235__auto__ = e13133;
var statearr_13134_13152 = state_13109;
(statearr_13134_13152[(5)] = ex__11235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13153 = state_13109;
state_13109 = G__13153;
continue;
} else {
return ret_value__11233__auto__;
}
break;
}
});
cljs$core$async$state_machine__11232__auto__ = function(state_13109){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11232__auto____1.call(this,state_13109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11232__auto____0;
cljs$core$async$state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11232__auto____1;
return cljs$core$async$state_machine__11232__auto__;
})()
})();
var state__11328__auto__ = (function (){var statearr_13135 = f__11327__auto__.call(null);
(statearr_13135[(6)] = c__11326__auto___13137);

return statearr_13135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11328__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__13155 = arguments.length;
switch (G__13155) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11326__auto___13225 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11327__auto__ = (function (){var switch__11231__auto__ = (function (state_13197){
var state_val_13198 = (state_13197[(1)]);
if((state_val_13198 === (7))){
var inst_13193 = (state_13197[(2)]);
var state_13197__$1 = state_13197;
var statearr_13199_13226 = state_13197__$1;
(statearr_13199_13226[(2)] = inst_13193);

(statearr_13199_13226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13198 === (1))){
var inst_13156 = [];
var inst_13157 = inst_13156;
var inst_13158 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13197__$1 = (function (){var statearr_13200 = state_13197;
(statearr_13200[(7)] = inst_13157);

(statearr_13200[(8)] = inst_13158);

return statearr_13200;
})();
var statearr_13201_13227 = state_13197__$1;
(statearr_13201_13227[(2)] = null);

(statearr_13201_13227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13198 === (4))){
var inst_13161 = (state_13197[(9)]);
var inst_13161__$1 = (state_13197[(2)]);
var inst_13162 = (inst_13161__$1 == null);
var inst_13163 = cljs.core.not.call(null,inst_13162);
var state_13197__$1 = (function (){var statearr_13202 = state_13197;
(statearr_13202[(9)] = inst_13161__$1);

return statearr_13202;
})();
if(inst_13163){
var statearr_13203_13228 = state_13197__$1;
(statearr_13203_13228[(1)] = (5));

} else {
var statearr_13204_13229 = state_13197__$1;
(statearr_13204_13229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13198 === (15))){
var inst_13187 = (state_13197[(2)]);
var state_13197__$1 = state_13197;
var statearr_13205_13230 = state_13197__$1;
(statearr_13205_13230[(2)] = inst_13187);

(statearr_13205_13230[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13198 === (13))){
var state_13197__$1 = state_13197;
var statearr_13206_13231 = state_13197__$1;
(statearr_13206_13231[(2)] = null);

(statearr_13206_13231[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13198 === (6))){
var inst_13157 = (state_13197[(7)]);
var inst_13182 = inst_13157.length;
var inst_13183 = (inst_13182 > (0));
var state_13197__$1 = state_13197;
if(cljs.core.truth_(inst_13183)){
var statearr_13207_13232 = state_13197__$1;
(statearr_13207_13232[(1)] = (12));

} else {
var statearr_13208_13233 = state_13197__$1;
(statearr_13208_13233[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13198 === (3))){
var inst_13195 = (state_13197[(2)]);
var state_13197__$1 = state_13197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13197__$1,inst_13195);
} else {
if((state_val_13198 === (12))){
var inst_13157 = (state_13197[(7)]);
var inst_13185 = cljs.core.vec.call(null,inst_13157);
var state_13197__$1 = state_13197;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13197__$1,(15),out,inst_13185);
} else {
if((state_val_13198 === (2))){
var state_13197__$1 = state_13197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13197__$1,(4),ch);
} else {
if((state_val_13198 === (11))){
var inst_13165 = (state_13197[(10)]);
var inst_13161 = (state_13197[(9)]);
var inst_13175 = (state_13197[(2)]);
var inst_13176 = [];
var inst_13177 = inst_13176.push(inst_13161);
var inst_13157 = inst_13176;
var inst_13158 = inst_13165;
var state_13197__$1 = (function (){var statearr_13209 = state_13197;
(statearr_13209[(11)] = inst_13175);

(statearr_13209[(7)] = inst_13157);

(statearr_13209[(8)] = inst_13158);

(statearr_13209[(12)] = inst_13177);

return statearr_13209;
})();
var statearr_13210_13234 = state_13197__$1;
(statearr_13210_13234[(2)] = null);

(statearr_13210_13234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13198 === (9))){
var inst_13157 = (state_13197[(7)]);
var inst_13173 = cljs.core.vec.call(null,inst_13157);
var state_13197__$1 = state_13197;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13197__$1,(11),out,inst_13173);
} else {
if((state_val_13198 === (5))){
var inst_13165 = (state_13197[(10)]);
var inst_13161 = (state_13197[(9)]);
var inst_13158 = (state_13197[(8)]);
var inst_13165__$1 = f.call(null,inst_13161);
var inst_13166 = cljs.core._EQ_.call(null,inst_13165__$1,inst_13158);
var inst_13167 = cljs.core.keyword_identical_QMARK_.call(null,inst_13158,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_13168 = ((inst_13166) || (inst_13167));
var state_13197__$1 = (function (){var statearr_13211 = state_13197;
(statearr_13211[(10)] = inst_13165__$1);

return statearr_13211;
})();
if(cljs.core.truth_(inst_13168)){
var statearr_13212_13235 = state_13197__$1;
(statearr_13212_13235[(1)] = (8));

} else {
var statearr_13213_13236 = state_13197__$1;
(statearr_13213_13236[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13198 === (14))){
var inst_13190 = (state_13197[(2)]);
var inst_13191 = cljs.core.async.close_BANG_.call(null,out);
var state_13197__$1 = (function (){var statearr_13215 = state_13197;
(statearr_13215[(13)] = inst_13190);

return statearr_13215;
})();
var statearr_13216_13237 = state_13197__$1;
(statearr_13216_13237[(2)] = inst_13191);

(statearr_13216_13237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13198 === (10))){
var inst_13180 = (state_13197[(2)]);
var state_13197__$1 = state_13197;
var statearr_13217_13238 = state_13197__$1;
(statearr_13217_13238[(2)] = inst_13180);

(statearr_13217_13238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13198 === (8))){
var inst_13165 = (state_13197[(10)]);
var inst_13161 = (state_13197[(9)]);
var inst_13157 = (state_13197[(7)]);
var inst_13170 = inst_13157.push(inst_13161);
var tmp13214 = inst_13157;
var inst_13157__$1 = tmp13214;
var inst_13158 = inst_13165;
var state_13197__$1 = (function (){var statearr_13218 = state_13197;
(statearr_13218[(7)] = inst_13157__$1);

(statearr_13218[(8)] = inst_13158);

(statearr_13218[(14)] = inst_13170);

return statearr_13218;
})();
var statearr_13219_13239 = state_13197__$1;
(statearr_13219_13239[(2)] = null);

(statearr_13219_13239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11232__auto__ = null;
var cljs$core$async$state_machine__11232__auto____0 = (function (){
var statearr_13220 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13220[(0)] = cljs$core$async$state_machine__11232__auto__);

(statearr_13220[(1)] = (1));

return statearr_13220;
});
var cljs$core$async$state_machine__11232__auto____1 = (function (state_13197){
while(true){
var ret_value__11233__auto__ = (function (){try{while(true){
var result__11234__auto__ = switch__11231__auto__.call(null,state_13197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11234__auto__;
}
break;
}
}catch (e13221){if((e13221 instanceof Object)){
var ex__11235__auto__ = e13221;
var statearr_13222_13240 = state_13197;
(statearr_13222_13240[(5)] = ex__11235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13241 = state_13197;
state_13197 = G__13241;
continue;
} else {
return ret_value__11233__auto__;
}
break;
}
});
cljs$core$async$state_machine__11232__auto__ = function(state_13197){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11232__auto____1.call(this,state_13197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11232__auto____0;
cljs$core$async$state_machine__11232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11232__auto____1;
return cljs$core$async$state_machine__11232__auto__;
})()
})();
var state__11328__auto__ = (function (){var statearr_13223 = f__11327__auto__.call(null);
(statearr_13223[(6)] = c__11326__auto___13225);

return statearr_13223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11328__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
