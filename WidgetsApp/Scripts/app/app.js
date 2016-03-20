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
			.state("template", {
				abstract: true,
				views: {
					header: {
						template: "header <div ui-view='nav'></div>",
						controller: function () { }
					},
					content: {
						template: "content <div ui-view></div>"
					},
					footer: {
						template: "footer",
						controller: function () { }
					}
				}
			})
			.state("home", {
				parent: "template",
				url: "/",
				views : {
					"": {
						template: "Home",
						controller: function () {}
					},
					'nav': {
						template: "<a ui-sref='about'>About</a>"
					}
				}
			})
			.state("about", {
				parent: "template",
				url: "/about",
				views : {
					"": {
						template: "About",
						controller: function() {}
					},
					'nav': {
						template: "<a ui-sref='home'>Home</a>"
					}
				}
			});

	});

