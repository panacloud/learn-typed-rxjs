var Rx = require('@reactivex/rxjs');
var friends = Rx.Observable.from(["Inam", "Zeeshan", "Taha", "Hira"]);
friends.filter(function (value) {
    if (value === "Hira") {
        return false;
    }
    else {
        return true;
    }
}).
    forEach(function (value) {
    console.log(value);
});
