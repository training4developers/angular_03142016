"use strict";

angular.module("WidgetApp", [])
	.directive("myDir", function ($compile) {

		return {
			//transclude: true
			compile: function (tElement, tAttrs) {

				var tpl = tElement.html();
				tElement.empty();

				console.log(tpl);

				return function (scope, element, attrs) {

					function transclude(cloneFn) {

						var linkingFn = $compile(tpl);
						var domElements = linkingFn(scope);
						cloneFn(domElements);
					}

					transclude(function (clone) {
						element.append(clone);
					});

				}

			}
		};


	})
	.controller("HomeCtrl", function ($scope) {
		$scope.message = "Transclusion is fun!";
	});
