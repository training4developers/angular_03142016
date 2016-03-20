"use strict";

angular.module("WidgetApp", [])
	.directive("secondDir", function () {
		return {
			priority: 10,
			compile: function () {
				console.log("secondDir");
			}
		};
	})
	.directive("firstDir", function () {
		return {
			priority: 5,
			compile: function () {
				console.log("firstDir");
			}
		};
	})

	.controller("HomeCtrl", function ($scope, $timeout) {
	});
