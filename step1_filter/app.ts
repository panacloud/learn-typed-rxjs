/// <reference path='./typings/tsd.d.ts' />


import Rx = require("Rx");


var friends = Rx.Observable.from(["Inam", "Zeeshan", "Taha", "Hira"]);

friends.filter(function(value){
	if(value === "Hira"){
		return false;
	}
	else {
		return true;
	}
}).
forEach(function(value){
	console.log(value);
});
