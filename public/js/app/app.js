/*
 * APP
 * Our central container.
 */
'use strict';

angular.module('app', ['ngRoute', 'highcharts-ng'])
  .config(['$routeProvider',function($routeProvider){
    $routeProvider.otherwise({redirectTo:'/'})
  }]);