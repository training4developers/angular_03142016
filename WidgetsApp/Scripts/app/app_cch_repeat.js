"use strict";

angular.module("WidgetApp", [])
	.directive("cchRepeat", function () {

		// directive definition object
		return {
			transclude: true,
			compile: function (tElement, tAttrs) {

				var
					tokens = tAttrs.cchRepeat.split(" "),
					itemName = tokens[0],
					collectionName = tokens[2],
					collectionExpr = tokens.splice(2).join(" ");

				console.log(collectionExpr);

				return function (scope, element, attrs, ctrl, transclude) {

					var childScopes = [];

					scope.$watchCollection(collectionName, function (newList, oldList, scope) {

						element.empty();

						childScopes.forEach(function (childScope) {
							childScope.$destroy();
						});

						childScopes = [];

						scope.$eval(collectionExpr).forEach(function (item) {

							var childScope = scope.$new();
							childScope[itemName] = item;

							transclude(childScope, function (clone, scope) {
								element.append(clone);
							});

							childScopes.push(childScope);

						});
					});



				}

			}
		};

	})
	.controller("HomeCtrl", function ($scope, $timeout) {
		$scope.colors = [
			"hot pink", "baby blue", "tangy teal", "moldy green"
		];

		$timeout(function () {
			$scope.colors.push("silky silver");
			console.dir($scope.colors);
		}, 1000);
	});
