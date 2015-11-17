var Observable = Rx.Observable;

var button = document.getElementById('button');

var clicks = Observable.fromEvent(button, "click");

clicks.forEach(function(e){//Note this method runs asynchronous
	alert("clicked");
});