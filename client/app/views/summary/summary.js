'use strict';

angular
  .module('athleteProfile.summary', ['ngRoute'])

  .config([
    '$routeProvider',
    function ($routeProvider) {
      $routeProvider.when('/summary', {
        templateUrl: 'views/summary/summary.html',
        controller: 'summaryCtrl',
      });
    },
  ])

  .controller('summaryCtrl', [function () {}]);
