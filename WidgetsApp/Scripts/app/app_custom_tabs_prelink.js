"use strict";

angular.module("WidgetApp", [])
	.directive("tabs", function ($compile, $templateCache) {

		return {
			restrict: "E",
			controller: function ($scope) {

				this.addTab = function (tabId, tabCaption, tabContent) {
					$scope.tabs.push({
						tabId: tabId,
						tabCaption: tabCaption,
						tabContent: tabContent
					});
				};

			},
			compile: function(tElement, tAttrs) {

				return {
					pre: function($scope, $element, $attrs) {
						$scope.tabs = [];
						$scope.activeTabId = $attrs.activeTabId;

						$scope.activateTab = function (tabId) {
							$scope.activeTabId = tabId;
						};
					},
					post: function($scope, $element) {
						$element
							.replaceWith($compile($templateCache.get("tabs"))($scope));
					}
				}

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
