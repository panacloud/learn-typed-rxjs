import Rx = require('rxjs/Rx');
//The AsyncSubject is a variant where only the last value of the Observable execution is sent to its observers, 
//and only when the execution completes.
const simpleStream$ = new Rx.AsyncSubject<string>();

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

simpleStream$.complete();//comment this out and no event will be sent


