(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templete/home.html'
    })
    .state('categories', {
      url: '/categories',
      templateUrl: 'templete/categories.html'
    })
    .state('items', {
      url: '/items/{category}',
      templateUrl: 'templete/items.html',
      controller: 'itemsController as itemsController',
      resolve: {
       items: ['MenuDataService', '$stateParams',
        function(MenuDataService, $stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.category)
          .then(function(response) {
            console.log("In service", response.data.menu_items);
            return response.data.menu_items;
        });
      }] 
      }
    });
}

})();