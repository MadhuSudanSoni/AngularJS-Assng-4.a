(function () {
'use strict';	
angular.module('data')
.component('myCategories', {
	templateUrl : "controller/categories.html",
	controller : "categoriesController as categoriesController",
	bindings : {
		categories : '<'
	}
});	

})();