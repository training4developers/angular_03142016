"use strict";

angular.module("WidgetApp", [])
	.controller("firstDirCtrl", function ($scope, $element, $attrs) {
		this.doIt = function () {
			console.log("did it!");
		};
	})
	.controller("thirdDirCtrl", function ($scope, $element, $attrs) {
		this.doIt2 = function () {
			console.log("did it 2!");
		};
	})
	.directive("firstDir", function () {
		return {
			controller: "firstDirCtrl"
		};
	})
	.directive("thirdDir", function () {
		return {
			controller: "thirdDirCtrl"
		};
	})
	.directive("secondDir", function () {
		return {
			require: ["firstDir", "thirdDir", "secondDir"],

			controller: function() {
				this.doIt3 = function() {
					console.log("do it second controller!");
				};
			},
			link: function (scope, element, attrs, ctrl) {

				ctrl[0].doIt();
				ctrl[1].doIt2();
				ctrl[2].doIt3();

			}
		};
	})
	.controller("HomeCtrl", function ($scope, $timeout) {
	});
