import Rx = require('rxjs/Rx');


var friends = Rx.Observable.from(["Inam", "Zeeshan", "Taha", "Hira"]);

friends.filter(x => x === "Hira").
subscribe(
  (x) => console.log('Next: %s', x),
  (err) => console.log('Error: %s', err),
  () => console.log('Completed')
);


