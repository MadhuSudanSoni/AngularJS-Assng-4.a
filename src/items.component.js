(function () {
'use strict';	
angular.module('data')
.component('myItems',  {
	templateUrl : "controller/items.html",
	bindings : {
		items : '<'
	}	
	
});
})();