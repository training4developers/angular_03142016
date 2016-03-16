homeCtrl.$inject = ["$log", "$scope"];

function homeCtrl(l, s) {
	s.message = "Go Patriots!";
	l.log(s.message);
}

console.log(homeCtrl.toString());

angular.module("WidgetApp", [])
	.controller("HomeCtrl", homeCtrl);
