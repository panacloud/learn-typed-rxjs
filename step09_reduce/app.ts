import Rx = require('rxjs/Rx');

var src = Rx.Observable.range(1, 5);

var upper = src.reduce((acc: number, val: number) => { return acc + val; });

upper.subscribe(function(val) { 
    console.log(val) 
});









