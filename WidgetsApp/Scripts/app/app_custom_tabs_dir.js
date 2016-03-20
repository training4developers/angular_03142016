"use strict";

angular.module("WidgetApp", [])
	.directive("tabs", function ($compile, $templateCache) {

		return {
			restrict: "E",
			controller: function ($scope, $attrs) {

				$scope.tabs = [];
				$scope.activeTabId = $attrs.activeTabId;

				$scope.activateTab = function (tabId) {
					$scope.activeTabId = tabId;
				};

				this.addTab = function (tabId, tabCaption, tabContent) {
					$scope.tabs.push({
						tabId: tabId,
						tabCaption: tabCaption,
						tabContent: tabContent
					});
				};

			},
			link: function ($scope, $element, $attrs) {

				var tpl = $templateCache.get("tabs");

				//var linkingFn = $compile(tpl);
				//var domElements = linkingFn($scope);
				//$element.empty().append(domElements);

				$element.empty().append($compile(tpl)($scope));
				

				console.dir($scope.tabs);
			}
		};

	})
	.directive("tab", function () {

		return {
			restrict: "E",
			require: "^tabs",
			link: function (scope, element, attrs, ctrl) {
				ctrl.addTab(attrs.tabId, attrs.tabCaption, element.html());
			}
		};

	})
	.controller("HomeCtrl", function ($scope, $timeout) {

	})
	.run(function ($templateCache) {

		$templateCache.put("tabs", "<div class='tabs'><ul>" +
				"<li ng-repeat='tab in tabs' ng-class='{ active: tab.tabId === activeTabId }'>" +
				"<a href='#' ng-click='activateTab(tab.tabId)'>{{tab.tabCaption}}</a>" +
				"</li></ul>" +
				"<div ng-repeat='tab in tabs' ng-if='tab.tabId === activeTabId'>{{tab.tabContent}}</div>" +
				"</div>");


	});
