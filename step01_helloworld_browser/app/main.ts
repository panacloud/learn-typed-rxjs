import {Observable} from 'rxjs/Rx';
//import { Subject } from 'rxjs/Subject';

var button = document.getElementById('button');

var clicks = Observable.fromEvent(button, "click");



clicks.subscribe(
  (x) => alert("clicked"),
  (err) => alert("error"),
  () => alert('Completed')
);

