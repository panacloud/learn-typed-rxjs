import Rx = require('rxjs/Rx');

var avg = Rx.Observable.interval(1000)
.scan((prev, cur) => {
    return {
        sum: prev.sum + cur,
        count: prev.count + 1
    };
}, { sum: 0, count: 0 })
.map((o) => {
    return o.sum / o.count;
});
var subscription = avg.subscribe( function (x) {
    console.log(x);
});











