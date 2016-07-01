"use strict";
var Rx = require('rxjs/Rx');
var range = Rx.Observable.range(0, 5);
var avg = range.reduce(function (prev, cur) {
    return {
        sum: prev.sum + cur,
        count: prev.count + 1
    };
}, { sum: 0, count: 0 })
    .map(function (o) {
    return o.sum / o.count;
});
var subscription = avg.subscribe(function (x) {
    console.log('Average is: ', x);
});
