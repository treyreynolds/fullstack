/*
 * HOME CONTROLLER
 * The home page has a controller for multi-page support and so we can pull
 * any data we might be interested in.
 * 
 */
(function(){
  'use strict';

  angular
    .module('app')
    .controller('HomeController', HomeController);

  function HomeController(){
    var vm = this;
  }


}());