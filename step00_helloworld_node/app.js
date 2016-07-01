"use strict";
var Rx = require('rxjs/Rx');
var simpleStream = Rx.Observable.of('hello world');
simpleStream.subscribe(function (value) {
    console.log(value);
});
