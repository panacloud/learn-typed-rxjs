import Rx = require('rxjs/Rx');

const simpleStream = Rx.Observable.of('hello world');

simpleStream.subscribe((value) => {  
   console.log(value);
});

