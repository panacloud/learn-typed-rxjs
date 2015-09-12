/// <reference path='./typings/tsd.d.ts' />
var Observable = Rx.Observable;
var button = document.getElementById('button');
var clicks = Observable.fromEvent(button, "click");
var subscribtion = clicks.forEach(function OnNext(e) {
    alert("clicked");
    subscribtion.dispose();
}, function onError(error) {
    console.log("Error");
}, function onCompleted() {
    console.log("Completed");
});
