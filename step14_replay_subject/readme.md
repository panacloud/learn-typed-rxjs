ReplaySubject represents an object that is both an observable sequence as well as an observer. 
Each notification is broadcasted to all subscribed and future observers, subject to buffer trimming policies.
ReplaySubject stores all the values that it has published. Therefore, when you subscribe to it, you automatically receive an entire history of values that it has published, even though your subscription might have come in after certain values have been pushed out.

http://reactivex.io/rxjs/manual/overview.html#replaysubject

http://juristr.com/blog/2016/06/rxjs-1st-steps-subject/
