"use strict";
var Rx = require('rxjs/Rx');
//A Subject allows us to push and pull values to the underlying Observable.
var simpleStream$ = new Rx.AsyncSubject();
simpleStream$.subscribe(function (value) {
    console.log("firstObserver: " + value);
});
simpleStream$.next("a");
simpleStream$.next("b");
simpleStream$.subscribe(function (value) {
    console.log("secondObserver: " + value);
});
simpleStream$.next("c");
simpleStream$.next("d");
simpleStream$.complete();
