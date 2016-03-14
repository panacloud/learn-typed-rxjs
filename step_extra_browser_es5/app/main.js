var subject = new Rx.Subject();

Rx.Observable.from([1,2,3])
.scan((count, change) => count + change)
.subscribe(x => console.log(x));