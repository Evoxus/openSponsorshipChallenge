'use strict';

// Declare app level module which depends on views, and core components
angular
  .module('athleteProfile', [
    'ngRoute',
    'athleteProfile.view1',
    'athleteProfile.view2',
    'athleteProfile.version',
  ])
  .config([
    '$locationProvider',
    '$routeProvider',
    function ($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.otherwise({ redirectTo: '/view1' });
    },
  ]);
