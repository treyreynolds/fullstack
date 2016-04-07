(function() {
  'use strict';

  angular
    .module('app')
    .factory('api', apiFactory);

  apiFactory.$inject = ['$http'];

  function apiFactory($http) {
    return {
      getKMeansData: getKMeansData
    };

    function getKMeansData(sampleSize, clusters) {
      return $http.get('/home/api/load/'+sampleSize+'/'+clusters)
        .then(function(response) {
          return response.data;
        });
    }

  }
}());