(function () {
'use strict';	

angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http'];
function MenuDataService ($http) {
	var mds = this;

	mds.getAllCategories = function () {
		var response = $http({
			method : "GET",
			url : ("https://davids-restaurant.herokuapp.com/categories.json")
		});
		return response;
	};

	mds.getItemsForCategory = function (categoryShortName) {
		var response = $http({
			method : 'GET',
			url : 'https://davids-restaurant.herokuapp.com/menu_items.json',
			params: {
				category: categoryShortName
			}
		});
		console.log("in Service => categoryShortName:", categoryShortName);

		return response;
	};
}
})();