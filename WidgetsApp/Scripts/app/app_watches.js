"use strict";

function messageWatch(newValue, oldValue, scope) {

	console.log("new value = " + newValue);
	console.log("old value = " + oldValue);

}

angular.module("WidgetApp", [])
	.controller("HomeCtrl", function ($scope, $timeout) {

		$scope.marines = [
			"scouts", "librarians", "clans", "tribes", "priests", "ultra"
		];

		$scope.olympics = {
			host: "Brazil",
			kind: "summer"
		};

		$scope.$watch(function () {
			console.log("digest loop executed");
		});

		$scope.$watch("message", messageWatch);

		//$scope.$watch("olympics", function (newValue, oldValue) {
		//	console.log("new value: " + JSON.stringify(newValue));
		//}, true);

		$scope.$watchGroup(["olympics.host", "olympics.kind"],
			function (newValues, oldValues) {
				console.log("new value: " + JSON.stringify(newValues));
			});

		$scope.$watchCollection("marines", function (newList, oldList) {
			console.log(newList.join(","));
		});

		//setTimeout(function () {
		//	console.dir($scope);
		//},0);

		$timeout(function () {
			console.log("timeout expired");
			$scope.marines.push("salmanders");

			$scope.olympics.kind = "winter";

		}, 1000);
	});
