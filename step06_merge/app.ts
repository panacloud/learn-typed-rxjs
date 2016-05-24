import Rx = require('rxjs/Rx');


var a = Rx.Observable.interval(200).map(function(i: number) {
    return 'A' + i;
});
var b = Rx.Observable.interval(100).map(function(i: number) {
    return 'B' + i;
});
Rx.Observable.merge(a, b).subscribe(function(x: string) {
    console.log(x);
});






