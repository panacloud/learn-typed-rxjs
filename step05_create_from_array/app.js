"use strict";
var Rx = require('rxjs/Rx');
/*
https://github.com/ReactiveX/RxJS/blob/master/MIGRATION.md
*/
Rx.Observable
    .from(['Adrià', 'Jen', 'Sergi'])
    .subscribe(function (x) { console.log('Next: ' + x); }, function (err) { console.log('Error:', err); }, function () { console.log('Completed'); });
//# sourceMappingURL=app.js.map