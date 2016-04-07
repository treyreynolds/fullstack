(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  config.$inject = ['$routeProvider'];

  function config($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/js/app/home/index.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .when('/kmeans', {
        templateUrl: '/js/app/kmeans/kmeans.html',
        controller: 'KmeansController',
        controllerAs: 'vm'
      });
  }
  
}());