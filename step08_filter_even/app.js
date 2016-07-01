"use strict";
var Rx = require('rxjs/Rx');
var src = Rx.Observable.range(1, 5);
var upper = src.filter(function (val) {
    return val % 2 !== 0;
});
upper.subscribe(function (val) {
    console.log(val);
});
