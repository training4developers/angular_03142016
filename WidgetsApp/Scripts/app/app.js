"use strict";

angular.module("WidgetApp", [])
	.filter("cchUpperCase", function () {

		return function (value) {
			return String(value).toUpperCase();
		};

	})
	.filter("cchAppend", function () {
		return function (value, strToAppend) {
			return String(value) + String(strToAppend);
		}
	})
	.filter("asianCountries", function () {

		return function (list) {
			return list.filter(function (country) {
				return country.continent === "Asia";
			});
		};

	})
	.controller("HomeCtrl", function ($scope) {

		$scope.message = "Hi Class";

		$scope.countries = [
	{ code: "UA", name: "Ukraine", capital: "Kiev", continent: "Europe" },
	{ code: "VN", name: "Vietnam", capital: "Hanoi", continent: "Asia" },
	{ code: "IE", name: "Ireland", capital: "Dublin", continent: "Europe" },
	{ code: "IN", name: "India", capital: "New Delhi", continent: "Asia" },
	{ code: "CI", name: "Ivory Coast", capital: "Yamoussoukro", continent: "Africa" },
	{ code: "NP", name: "Nepal", capital: "Kathmandu", continent: "Asia" },
	{ code: "UK", name: "United Kingdom", capital: "London", continent: "Europe" },
	{ code: "US", name: "United States", capital: "Washington", continent: "North America" },
	{ code: "KO", name: "South Korea", capital: "Seoul", continent: "Asia" }
		];

	});


//function Person(firstName, lastName) {
//	this.firstName = firstName;
//	this.lastName = lastName;
//}

//Person.prototype.getFullName = function () {
//	return this.firstName + " " + this.lastName;
//};

//console.dir(Person);


//var p = new Person("Bob", "Smith");
//console.dir(p);

//console.log(Person.prototype === Object.getPrototypeOf(p));
//console.log(Person.prototype === Object.getPrototypeOf(Person));


//var p2 = Person.call({}, "Jane", "Doe");
//console.dir(p2);

