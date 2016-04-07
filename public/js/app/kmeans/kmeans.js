/*
 * KMEANS
 * The collection of controllers and functions for processing kMeans and HighCharts
 */
(function(){
  'use strict';

  angular
    .module('app')
    .controller('KmeansController', KmeansController);

  KmeansController.$inject = ['api','highchartsNG'];

  /**
   * Kmeans Angular Controller
   *
   * @method     KmeansController
   * @param      service  api           custom api-service
   * @param      directive  highchartsNG  highchartsNG
   */
  function KmeansController(api,highchartsNG){

    var vm = this;

    // Sample Size refers to the student population size, clusters to how many
    // clusters we are going to create of the data.
    vm.sampleSize = 200;
    vm.clusters = 4;

    // Start off with processed false to allow us to not show the screen.
    vm.processed = false;
    vm.unclusteredConfig = defaultChartOptions();
    vm.clusteredConfig = defaultChartOptions();

    // Call the API and update the data objects accordingly
    vm.updateData = function() {
      api.getKMeansData(vm.sampleSize, vm.clusters)
      .then(function(data){
        vm.unclusteredConfig.series = data.unclustered;
        vm.clusteredConfig.series = data.clustered;
        vm.processed = true;
      });
    }
  }

  /**
   * Returns the default chart options for HighCharts
   *
   * @method     defaultChartOptions
   */
  function defaultChartOptions(){
    // High Charts NG Configuration
    var chartConfig = {

      // Anything valid in the High Charts config object is valid here.
      options: {
          chart: {
              type: 'scatter',
              zoomType: 'xy'
          },
          tooltip: {
              style: {
                  padding: 10,
                  fontWeight: 'bold'
              }
          },
          yAxis: {
              title: {
                  text: 'GPA (4.0 Scale)'
              }
          },
          plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: '{point.x} cm, {point.y} kg'
                }
            }
        }
      },

      //Title
      title: {
         text: 'Student GPA versus Engagement'
      },
      loading: false,
      xAxis: {
        title: {
            enabled: true,
            text: 'Student Engagement (10.0 Scale)'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true
      },

      //size, width defaults to the width of the container
      size: {
       height: 400
      }
    };
    return chartConfig;
  }


}());