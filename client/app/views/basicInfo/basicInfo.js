'use strict';

angular
  .module('athleteProfile.basicInfo', ['ngRoute'])

  .config([
    '$routeProvider',
    function ($routeProvider) {
      $routeProvider.when('/basicInfo', {
        templateUrl: 'views/basicInfo/basicInfo.html',
        controller: 'basicInfoCtrl',
      });
    },
  ])

  .controller('basicInfoCtrl', [function () {}]);
