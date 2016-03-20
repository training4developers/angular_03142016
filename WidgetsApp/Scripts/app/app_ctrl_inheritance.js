"use strict";

//class BaseController {
//	constructor() {

//	}

//	doIt() {
//		console.log("do it");
//	}
//}

//class HomeController extends BaseController {
//	constructor() {
//		super();
//		console.dir(this);
//	}
//}

function baseController() { }

baseController.prototype.doIt = function () {
	console.log("do it");
}

function homeController() {

	console.dir(this);

}

homeController.prototype = Object.create(baseController.prototype);
homeController.prototype.constructor = homeController;

angular.module("WidgetApp", [])
	.controller("HomeCtrl", HomeController);
