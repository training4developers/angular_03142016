"use strict";

angular.module("WidgetApp", [])
	.controller("HomeCtrl", function ($q) {

		var
			d1 = $q.defer(),
			d2 = $q.defer(),
			d3 = $q.defer(),
			d4 = $q.defer();

		var p6 = d1.promise.then(function () {

			var d7 = $q.defer();

			setTimeout(function () {
				d7.resolve()
			}, 4000);

			return d7.promise;

		})

		var p5 = $q.all([d1.promise, d2.promise]);

		p5.then(function () {
			console.log("1 and 2 resolved");
		});

		$q.all([
			p5, p6, d3.promise, d4.promise
		]).then(function () {
			console.log("all done");
			console.log(arguments);
		}).catch(function (err) {
			console.log(err);
		});

		console.log("waiting...");

		setTimeout(function () {
			console.log("d1 resolved");
			d1.resolve("a");
		}, 2000);

		setTimeout(function () {
			console.log("d2 resolved");
			d2.resolve("b");
		}, 4000);

		setTimeout(function () {
			console.log("d3 rejected");
			d3.rejected("c rejected");
		}, 6000);

		setTimeout(function () {
			console.log("d4 resolved");
			d4.resolve("d");
		}, 8000);


	});

