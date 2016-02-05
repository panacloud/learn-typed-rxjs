System.register(['rxjs/Rx'], function(exports_1) {
    "use strict";
    var Rx_1;
    return {
        setters:[
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            Rx_1.Observable.fromEvent(document, 'click')
                .filter(function (c) {
                return c.clientX > window.innerWidth / 2;
            })
                .take(10)
                .subscribe(function (c) {
                console.log(c.clientX, c.clientY);
            });
        }
    }
});
//# sourceMappingURL=main.js.map