'use strict';

angular
  .module('athleteProfile.profileList', ['ngRoute'])

  .config([
    '$routeProvider',
    function ($routeProvider) {
      $routeProvider.when('/profileList', {
        templateUrl: 'views/profileList/profileList.html',
        controller: 'profileListCtrl',
      });
    },
  ])

  .controller('profileListCtrl', [function () {}]);
