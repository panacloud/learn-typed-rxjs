import * as Rx from 'rxjs/Rx';

Rx.Observable.of('hello world')
  .subscribe(function(x) { console.log(x); });
