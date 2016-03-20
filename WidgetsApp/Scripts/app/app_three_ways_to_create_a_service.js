"use strict";

function Widgets() {

	this.doIt = function () {
		console.log("did it!");
	};

}

angular.module("WidgetApp", [])
	.service("widgets", Widgets)
	.factory("widgets2", function () {
		return new Widgets();
		//return {
		//	doIt: function () {
		//		console.log("did it");
		//	}
		//};
	})
	.provider("widgets3", function () {

		// provider
		return {

			// factory
			$get: function () {

				// service
				return new Widgets();

			}

		}

	})
	.controller("HomeCtrl", function (widgets, widgets2, widgets3) {
		widgets.doIt();
		console.dir(widgets);
		console.dir(widgets2);
		console.dir(widgets3);
	});
