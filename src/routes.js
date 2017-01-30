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
      url: '/items/{shortName}',
      templateUrl: 'templete/items.html'
    });
}

})();