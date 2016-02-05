"use strict";
var Rx = require('rxjs/Rx');
var friends = Rx.Observable.from(["Inam", "Zeeshan", "Taha", "Hira"]);
friends.filter(function (x) { return x === "Hira"; }).
    subscribe(function (x) { return console.log('Next: %s', x); }, function (err) { return console.log('Error: %s', err); }, function () { return console.log('Completed'); });
//# sourceMappingURL=app.js.map