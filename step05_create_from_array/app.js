"use strict";
var Rx = require('rxjs/Rx');
Rx.Observable
    .from(['Adrià', 'Jen', 'Sergi'])
    .subscribe(function (x) { console.log('Next: ' + x); }, function (err) { console.log('Error:', err); }, function () { console.log('Completed'); });
