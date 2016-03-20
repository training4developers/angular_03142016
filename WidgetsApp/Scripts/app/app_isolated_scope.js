"use strict";

angular.module("WidgetApp", [])
	.directive("myDir", function () {

		// ddo
		return {
			scope: {
				msg: "=myDir",
				oneWay: "@",
				fn: "&"
			},
			template: "Inside Dir Scope Id: {{$id}}<br>" + 
				"Inside Message: {{msg}}<br><input ng-model='msg'><br>" + 
				"{{oneWay}}",
			link: function (scope) {
				console.log(Object.getPrototypeOf(scope) === scope.$parent);


				scope.fn();
			}

		};

	})
	.controller("HomeCtrl", function ($scope, $timeout) {
		$scope.message = "Ivory Coast Rocks!";

		$scope.doSomething = function () {
			console.log("did it!");
		};
	});
