"use strict";
var Rx = require('rxjs/Rx');
var src = Rx.Observable.range(1, 5);
var upper = src.reduce(function (acc, val) { return acc + val; });
upper.subscribe(function (val) {
    console.log(val);
});
