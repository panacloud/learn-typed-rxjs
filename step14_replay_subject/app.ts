import Rx = require('rxjs/Rx');
//A Subject allows us to push and pull values to the underlying Observable.
const simpleStream$ = new Rx.ReplaySubject<string>(2);

simpleStream$.subscribe((value) => {  
   console.log("firstObserver: " + value);
});

simpleStream$.next("a");
simpleStream$.next("b");


simpleStream$.subscribe((value) => {  
   console.log("secondObserver: " + value);
});

simpleStream$.next("c");
simpleStream$.next("d");



