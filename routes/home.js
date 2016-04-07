var express = require('express');
var _ = require('underscore');
var kMeans = require('kmeans-js');
var dataService = require('../services/data-service');

var router = express.Router();


/* GET index page for the k-means clustering algo example. */
router.get('/', function(req, res, next) {

  var vm = {
    title: 'Home',
    name: req.user ? req.user.name : 'test'
  }
  res.render('home/index', vm);
});

router.get('/api/load/:sample/:clusters', function(req, res, next) {

  // Our data service creates the data
  var data = dataService.createData(req.params.sample);
        
  var km = new kMeans({ K: req.params.clusters });

  // Set up the initial clusters
  km.cluster(data);

  // We are stepping through the K-Means process
  while (km.step()) {
      km.findClosestCentroids();
      km.moveCentroids();
      if(km.hasConverged()) break;
  }

  // Gather up our clusters for display
  var clusters = [];
  var datapoints = [];
  var popNumber = 1;
  // The cluster format returns the array index of the datapoint
  // instead of the datapoint itself.
  for (cl of km.clusters){
    for(cp of cl){
      datapoints.push(data[cp]);
    }

    // Set up each of the populations by creating a name and getting a unique color
    clusters.push({
      name: 'Population ' + popNumber,
      color: dataService.getColor(popNumber),
      data: datapoints
    });
    datapoints = [];
    popNumber = popNumber + 1;
  }


  vm = {
    unclustered: [{
            name: 'Student Data',
            color: 'rgba(26, 143, 32, .7)',
            data: data
        }],
    clustered: clusters,
    iterations: km.currentIteration
  }

  return res.json(vm);
});

module.exports = router;
