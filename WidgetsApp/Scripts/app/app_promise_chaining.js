"use strict";

angular.module("WidgetApp", [])
	.controller("HomeCtrl", function ($q) {

		var youngLady = $q.defer();

		var youngMan = youngLady.promise;

		youngMan.then(function (msg) {
			console.log(msg);
			console.log("excited about getting married!!!");

			//var saveMoney = $q.defer();

			//setTimeout(function () {
			//	saveMoney.resolve(10000);
			//}, 3000);

			//return saveMoney.promise;

			return 100000;


		}).then(function(amountOfMoneySaved) {

			console.log("money saved " + amountOfMoneySaved);


		}).catch(function (msg) {
			console.log(msg);
			console.log("young man is going to join eHarmony...");
		});

		console.log("young man is waiting...");

		setTimeout(function () {

			try {
				youngLady.resolve("I will marry you");
				//throw Error("run over by bus");
			} catch (err) {
				youngLady.reject(err);
			}


		}, 2000);


	});

