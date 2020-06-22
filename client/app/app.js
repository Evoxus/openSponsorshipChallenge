'use strict';

// Declare app level module which depends on views, and core components
const athleteProfile = angular
  .module('athleteProfile', [
    'ngRoute',
    'ngAnimate',
    'ui.bootstrap',
    'athleteProfile.basicInfo',
    'athleteProfile.about',
    'athleteProfile.socialMedia',
    'athleteProfile.summary',
    'athleteProfile.profileList',
    'athleteProfile.version',
  ])
  .config([
    '$locationProvider',
    '$routeProvider',
    function ($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.otherwise({ redirectTo: '/basicInfo' });
    },
  ])
  .controller('DropdownController', DropdownController);

function DropdownController($scope) {
  $scope.isNavCollapsed = true;
}

athleteProfile.controller('mainCtrl', mainCtrl);

function mainCtrl($scope) {
  ($scope.setName = function (value) {
    $scope.name = value;
  }),
    ($scope.sports = []);
  $scope.nationality = '';
  $scope.gender = '';
  $scope.dob = '';
}
