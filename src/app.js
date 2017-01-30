(function () {
'use strict';

angular.module('MenuApp',['ui.router', 'data']);

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
      templateUrl: 'src/home.html'
    })
    .state('home.categories', {
      url: '/categories',
      templateUrl: 'src/categories.html'
    })
    .state('home.categories.items', {
      url: '/items',
      templateUrl: 'src/items.html'
    });
}


})();
