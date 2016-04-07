(function(){
  'use strict';

  angular
    .module('app')
    .controller('KmeansController', KmeansController);

  KmeansController.$inject = ['api','highchartsNG'];

  function KmeansController(api,highchartsNG){

    var vm = this;

    vm.sampleSize = 50;
    vm.clusters = 4;
    vm.processed = false;
    vm.unclusteredConfig = defaultChartOptions();
    vm.clusteredConfig = defaultChartOptions();

    vm.updateData = function() {
      api.getKMeansData(vm.sampleSize, vm.clusters)
      .then(function(data){
        vm.unclusteredConfig.series = data.unclustered;
        vm.clusteredConfig.series = data.clustered;
        vm.processed = true;
      });
    }
  }

  function defaultChartOptions(){
    //This is not a highcharts object. It just looks a little like one!
    var chartConfig = {

      options: {
          //This is the Main Highcharts chart config. Any Highchart options are valid here.
          //will be overriden by values specified below.
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
      //The below properties are watched separately for changes.

      //Title configuration (optional)
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
      //Whether to use Highstocks instead of Highcharts (optional). Defaults to false.
      useHighStocks: false,
      //size (optional) if left out the chart will default to size of the div or something sensible.
      size: {
       height: 500
      },
      //function (optional)
      func: function (chart) {
       //setup some logic for the chart
      }
    };
    return chartConfig;
  }


}());