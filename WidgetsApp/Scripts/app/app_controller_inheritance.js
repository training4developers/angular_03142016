"use strict";

angular.module("WidgetApp", [])
	.factory("events", function ($rootScope) {

		var _events = {};

		return {
			trigger: function (eventName, eventArgs) {

				if (!_events[eventName]) {
					return;
				}

				_events[eventName].forEach(function (eventHandler) {
					eventHandler(eventArgs);
				});

				//$rootScope.$apply();

			},
			on: function (eventName, eventHandler) {

				if (!_events[eventName]) {
					_events[eventName] = [];
				}

				_events[eventName].push(eventHandler);

			}
		}


	})
	.provider("logger", function () {

		var prefix;

		return {
			setPrefix: function(newPrefix) {
				prefix = newPrefix
			},
			$get: ["$log", function ($log) {
				return {
					info: function (msg) {
						$log.info(prefix + msg);
					}
				}
			}]
		}


	})
	.config(function (loggerProvider) {
		loggerProvider.setPrefix("Widgets App> ");

	})
	.controller("LeftCtrl", LeftCtrl)
	.controller("RightCtrl", RightCtrl);

function _extends(child, parent) {
	child.prototype = Object.create(parent.prototype);
	child.prototype.constructor = child;
	child.prototype._super = parent;
}

function BaseCtrl() { }
BaseCtrl.prototype.events = angular.injector(["ng", "WidgetApp"]).get("events");

function LeftCtrl($scope) {
	this._super.call(this);
	var vm = this;
	vm.buttonClicked = function () {
		vm.events.trigger("button-clicked", {});
	};
}

_extends(LeftCtrl, BaseCtrl);

function RightCtrl($scope) {
	this._super.call(this);
	var vm = this;
	vm.events.on("button-clicked", function () {
		vm.message = "I was clicked!";
	});

	vm.message = "I have not been clicked!";
}

_extends(RightCtrl, BaseCtrl);


