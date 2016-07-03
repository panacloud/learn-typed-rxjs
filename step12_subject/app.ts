import Rx = require('rxjs/Rx');
//A Subject allows us to push and pull values to the underlying Observable.
const simpleStream$ = new Rx.Subject<string>();

simpleStream$.subscribe((value) => {  
   console.log("firstObservable: " + value);
});

simpleStream$.next("a");
simpleStream$.next("b");


simpleStream$.subscribe((value) => {  
   console.log("secondObservable: " + value);
});

simpleStream$.next("c");
simpleStream$.next("d");



