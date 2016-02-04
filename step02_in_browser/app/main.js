System.register(['rxjs/Rx'], function(exports_1) {
    var Rx_1;
    var button, clicks;
    return {
        setters:[
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            //import { Subject } from 'rxjs/Subject';
            button = document.getElementById('button');
            clicks = Rx_1.Observable.fromEvent(button, "click");
            clicks.subscribe(function (x) { return alert("clicked"); }, function (err) { return alert("error"); }, function () { return alert('Completed'); });
        }
    }
});
//# sourceMappingURL=main.js.map