System.register(['rxjs/Observable'], function(exports_1) {
    var Observable_1;
    var button, clicks;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            //import { Subject } from 'rxjs/Subject';
            button = document.getElementById('button');
            clicks = Observable_1.Observable.fromEvent(button, "click");
            clicks.subscribe(function (x) { return alert("clicked"); }, function (err) { return alert("error"); }, function () { return alert('Completed'); });
        }
    }
});
//# sourceMappingURL=main.js.map