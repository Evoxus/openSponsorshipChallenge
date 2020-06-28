'use strict';

angular
  .module('athleteProfile.basicInfo', ['ngRoute'])

  .config([
    '$routeProvider',
    function ($routeProvider) {
      $routeProvider.when('/basicInfo', {
        templateUrl: 'views/basicInfo/basicInfo.html',
        controller: 'AthleteController',
      });
    },
  ])
  .controller('AthleteController', ['$scope', '$window', 'Profile', AthleteController]);
  
