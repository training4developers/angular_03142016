"use strict";

angular.module("WidgetApp", [])
	.directive("myDir", function () {

		// directive definition object
		return {
			compile: function (tElement, tAttrs) {

				//tElement.append("<div>{{message}}</div>");

				// mo object
				return {
					// pre-link
					pre: function (scope, element, attrs) {

					},
					// post-link
					post: function (scope, element, attrs) {
						element.html("Hello World!");
					}
				};

			}
		};

	})
	//.directive("myDir", function () {

	//	// directive definition object
	//	return {
	//		compile: function (tElement, tAttrs) {

	//			//tElement.append("<div>{{message}}</div>");

	//			// post-link
	//			return function (scope, element, attrs) {
	//				element.html("Hello World!");

	//				//element.append("<div>{{message}}</div>");
	//				//scope.message = "Hello World!";
	//			};
	//		}
	//	};

	//})
	//.directive("myDir", function () {

	//	// directive definition object
	//	return {
	//		// post-link
	//		link: function (scope, element, attrs) {
	//			element.html("Hello World!");
	//		}
	//	};

	//})
	//.directive("myDir", function () {

	//	// post-link
	//	return function (scope, element, attrs) {
	//		element.html("Hello World!");
	//	};

	//})
	.controller("HomeCtrl", function () {
	});
