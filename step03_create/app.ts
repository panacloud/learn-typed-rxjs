import Rx = require('rxjs/Rx');

/*
https://github.com/ReactiveX/RxJS/blob/master/MIGRATION.md
*/  
var observable : Rx.Observable<String> = Rx.Observable.create(function(observer: Rx.Observer<String>) {
    observer.next('Simon');
    observer.next('Jen');
    observer.next('Sergi');
    observer.complete(); // We are done
});


observable.subscribe(
    function next(x: String) { console.log('Next: ' + x); },
    function error(err) { console.log('Error: ' + err); },
    function complete() { console.log('Completed'); }
);








