(function () {
	angular.module('data')
	.controller('itemsController', itemsController);
	itemsController.$inject = ['MenuDataService'];
	function itemsController (MenuDataService) {
		var cat = this;
		var promise = MenuDataService.getItemsForCategory();
		promise.then(function (response) {
		cat.categories = response.data;
		})
		.catch(function (error) {
    	console.log("Something went terribly wrong.");
  	});  
}
})();
