'use strict';

angular
  .module('athleteProfile.summary', ['ngRoute', 'athleteProfile'])

  .config([
    '$routeProvider',
    function ($routeProvider) {
      $routeProvider.when('/summary', {
        templateUrl: 'views/summary/summary.html',
        controller: 'AthleteController',
      });
    },
  ])
  .controller('AthleteController', ['$scope', '$window', 'Profile', AthleteController]);
