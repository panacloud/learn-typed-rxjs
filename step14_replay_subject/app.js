"use strict";
var Rx = require('rxjs/Rx');
//A Subject allows us to push and pull values to the underlying Observable.
var simpleStream$ = new Rx.ReplaySubject(2);
simpleStream$.subscribe(function (value) {
    console.log("first: " + value);
});
simpleStream$.next("a");
simpleStream$.next("b");
simpleStream$.subscribe(function (value) {
    console.log("second: " + value);
});
simpleStream$.next("c");
simpleStream$.next("d");
