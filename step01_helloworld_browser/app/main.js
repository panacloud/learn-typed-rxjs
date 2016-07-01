"use strict";
var Rx_1 = require('rxjs/Rx');
var button = document.getElementById('button');
var clicks = Rx_1.Observable.fromEvent(button, "click");
clicks.subscribe(function (x) { return alert("clicked"); }, function (err) { return alert("error"); }, function () { return alert('Completed'); });
//# sourceMappingURL=main.js.map