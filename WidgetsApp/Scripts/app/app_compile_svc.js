"use strict";

angular.module("WidgetApp", [])
	.directive("myDir", function ($compile) {

		return {
			link: function (scope, element, attrs) {

				var tpl = "<h1>{{message}}</h1>";
				var linkingFn = $compile(tpl);
				var domElements = linkingFn(scope);
				element.append(domElements);

				scope.message = "Agile Rocks!";

			}
		};

	})
	.controller("HomeCtrl", function () {
	});
