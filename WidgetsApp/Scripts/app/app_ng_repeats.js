angular.module("WidgetApp", [])
	.controller("HomeCtrl", function ($scope) {
		$scope.colours = ["yellow", "light blue", "red",
			"green", "white", "orange", "saffron", "navy", "blue", "black", "brown"];
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

		window.addColour = function () {
			$scope.$apply(function () {
				$scope.colours.push($scope.newColour);
			});
			//$scope.$digest();
			console.dir($scope);
		};

		//setTimeout(function () {
		//	console.dir($scope);
		//}, 0);

	});
