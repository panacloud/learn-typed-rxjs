import * as Rx from 'rxjs/Rx';


Rx.Observable
.from(['Adrià', 'Jen', 'Sergi'])
.subscribe(
    function(x: String) { console.log('Next: ' + x); },
    function(err) { console.log('Error:', err); },
    function() { console.log('Completed'); }
);







