(function () {
'use strict';	
angular.module('data')
.component('myItems', items);	

function items () {
	templateUrl : "controller/items.html",
	controller : "itemsController as itemsController",
	bindings : {
		items : '<'
	}
	
}
})();