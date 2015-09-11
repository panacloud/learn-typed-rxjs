/// <reference path='./typings/tsd.d.ts' />


import Rx = require("Rx");


var friends = Rx.Observable.from(["Inam", "Zeeshan", "Taha", "Hira"]);

friends.forEach(function(value){
	console.log(value);
});
