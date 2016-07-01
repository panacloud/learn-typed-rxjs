"use strict";
var Rx = require('rxjs/Rx');
var a = Rx.Observable.interval(200).map(function (i) {
    return 'A' + i;
});
var b = Rx.Observable.interval(100).map(function (i) {
    return 'B' + i;
});
var m = Rx.Observable.merge(a, b);
m.subscribe(function (x) {
    console.log(x);
});
