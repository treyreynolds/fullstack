/*
 * API Service
 * Any and all calls to APIS go here
 */
(function() {
  'use strict';

  angular
    .module('app')
    .factory('api', apiFactory);

  apiFactory.$inject = ['$http'];

  /**
   * Api Factor holds the api calls
   * NOTE: We could use RESTAngular or another library, but these are simple
   * calls to non-rest endpoints.
   *
   * @method     apiFactory
   * @param      $http
   */
  function apiFactory($http) {
    return {
      getKMeansData: getKMeansData
    };

    /**
     * Get the k means data.
     *
     * @method     getKMeansData
     * @param      int  sampleSize  Population size to generate
     * @param      int  clusters    Clusters
     * @return     api response
     */
    function getKMeansData(sampleSize, clusters) {
      return $http.get('/api/load/'+sampleSize+'/'+clusters)
        .then(function(response) {
          return response.data;
        });
    }

  }
}());