"use strict";
var Rx = require('rxjs/Rx');
var src = Rx.Observable.range(1, 5);
var upper = src.map(function (val) {
    return val * 2;
});
upper.subscribe(function (val) {
    console.log(val);
});
