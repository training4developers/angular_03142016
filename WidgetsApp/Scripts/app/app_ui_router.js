"use strict";

angular.module("WidgetApp", ["ui.router"])

	.factory("widgets", function($http) {

		return {
			getAll: function () {
				return $http.get("/api/widgets");
			},
			get: function(widgetId) {
				return $http.get("/api/widgets/" + encodeURIComponent(widgetId));
			},
			insert: function(widget) {
				return $http.post("/api/widgets/", widget);
			},
			update: function(widget) {
				return $http.put("/api/widgets/" + encodeURIComponent(widget.id), widget);
			},
			delete: function(widgetId) {
				return $http.delete("/api/widgets/" + encodeURIComponent(widgetId));
			}
		};

	})
	.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

		$urlRouterProvider.otherwise("/");
		$locationProvider.html5Mode(false);

		$stateProvider
			.state("home", {
				url: "/",
				template: "<h1>Home</h1>" +
					"<a ui-sref='about({ widgetId: 2 })'>About</a>" +
					"<button ng-click='gotoAbout()'>About</button>",
				controller: function (widgets, $state, $scope) {

					$scope.gotoAbout = function() {
						$state.go("about", { widgetId: 4 });
					}

					widgets.getAll().then(function (results) {
						console.dir(results.data);
					});
				}
			})
			.state("about", {
				url: "/about/:widgetId",
				template: "<h1>About</h1><span>{{widgetId}}" +
					"<button ng-click='gotoHome()'>Home</button>" +
					"<button ng-click='gotoContact()'>Contact</button>",
				controller: function ($scope, $state, $stateParams) {

					$scope.widgetId = $stateParams.widgetId;

					$scope.gotoHome = function() {
						$state.go("home");
					};

					$scope.gotoContact = function () {
						$state.go("contact", { widgetId: 2 });
					};
				}
			})
			.state("contact", {
				url: "/contact",
				params: {
					widgetId: 0
				},
				template: "<h1>Contact</h1><span>{{widgetId}}",
				controller: function($scope, $stateParams) {
					$scope.widgetId = $stateParams.widgetId;
				}
			});

	});

