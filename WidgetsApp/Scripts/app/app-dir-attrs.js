"use strict";

angular.module("WidgetApp", [])
	.directive("myDir", function () {

		return {
			link: function (scope, element, attrs) {
				console.dir(attrs);

				attrs.$addClass("angular-class");
				attrs.$removeClass("angular-class");

				console.log(attrs.$normalize("angular-class"));

				attrs.$observe("thao", function (newValue) {
					console.log(newValue);
				});

			}
		};

	})
	.controller("HomeCtrl", function ($scope, $timeout) {

	});
