import {Observable} from 'rxjs/Rx';

Observable.fromEvent(document, 'click')
.filter(function(c: MouseEvent) { 
    return c.clientX > window.innerWidth / 2; 
})
.take(10)
.subscribe(function(c: MouseEvent) { 
    console.log(c.clientX, c.clientY) 
})



