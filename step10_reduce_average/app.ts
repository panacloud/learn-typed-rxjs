import Rx = require('rxjs/Rx');

var range = Rx.Observable.range(0, 5);
var avg = range.reduce((prev, cur) => {
    return {
        sum: prev.sum + cur,
        count: prev.count + 1
    };
}, { sum: 0, count: 0 })
.map((o) => {
    return o.sum / o.count;
});
var subscription = avg.subscribe((x) => {
    console.log('Average is: ', x);
});











