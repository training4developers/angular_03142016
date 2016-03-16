angular.module("WidgetApp", [])
	.controller("HomeCtrl", function ($scope) {
		$scope.message = "Hello World!";

		$scope.$watch(function () {
			console.log("$digest loop ran");

			var count = 1000000000;
			while (count--) {

			}

		});
	});
