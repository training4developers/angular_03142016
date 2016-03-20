"use strict";

angular.module("WidgetApp", [])
	.directive("myDir", function () {

		return {
			transclude: true,
			restrict: "A",
			//template: "<h1>My Directive</h1><div ng-transclude></div><div ng-transclude></div><div ng-transclude></div><div ng-transclude></div><div ng-transclude></div>",
			//templateUrl: "/Content/partials/demo.html",
			link: function (scope, element, attrs, ctrl, transclude) {
				scope.message = "Hi Class!";

				transclude(function (clone) {
					element.append(clone);
				});
				transclude(function (clone) {
					element.append(clone);
				});
				transclude(function (clone) {
					element.append(clone);
				});
				transclude(function (clone) {
					element.append(clone);
				});
			}
		};

	})
	.controller("HomeCtrl", function () {
	});
