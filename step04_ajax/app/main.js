"use strict";
var Rx_1 = require('rxjs/Rx');
function get(url) {
    return Rx_1.Observable.create(function (observer) {
        // Make a traditional Ajax request
        var req = new XMLHttpRequest();
        req.open('GET', url);
        req.onload = function () {
            if (req.status == 200) {
                // If the status is 200, meaning there have been no problems,
                // Yield the result to listeners and complete the sequence
                observer.next(req.response);
                observer.complete();
            }
            else {
                // Otherwise, signal to listeners that there has been an error
                observer.error(new Error(req.statusText));
            }
        };
        req.onerror = function () {
            observer.error(new Error("Unknown Error"));
        };
        req.send();
    });
}
// Create an Ajax Observable
var test = get('/app/contents.json');
test.subscribe(function next(x) { console.log('Result: ' + x); }, function error(err) { console.log('Error: ' + err); }, function complete() { console.log('Completed'); });
//# sourceMappingURL=main.js.map