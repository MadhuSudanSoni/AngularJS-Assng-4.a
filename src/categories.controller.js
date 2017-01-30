(function () {
	angular.module('data')
	.controller('categoriesController', categoriesController);
	categoriesController.$inject = ['MenuDataService'];
	function categoriesController (MenuDataService) {
		var cat = this;
		var promise = MenuDataService.getAllCategories();
		promise.then(function (response) {
		cat.categories = response.data;
		})
		.catch(function (error) {
    	console.log("Something went terribly wrong.");
  	});  
}
})();

