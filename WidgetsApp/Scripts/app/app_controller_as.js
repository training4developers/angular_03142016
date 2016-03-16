"use strict";

angular.module("WidgetApp", [])
	.controller("HomeCtrl", function ($scope) {
		this.message = "Hi Class!";

		console.dir($scope.home === this);

		//setTimeout(function () {
		//	console.dir($scope);
		//});
	});

function doIt() {
	console.log("called do it");
	console.dir(this);
	console.dir(arguments);
}

doIt();

var o = {
	id: 2,
	doIt: doIt
};

o.doIt();

console.log(o.doIt === doIt);

o.doIt.call({ id: 3 }, 1, 2);
o.doIt.apply({ id: 4 }, [1, 2]);

var fn = o.doIt.bind({ id: 5 });
fn();

