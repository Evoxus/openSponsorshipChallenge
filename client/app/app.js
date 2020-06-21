'use strict';

// Declare app level module which depends on views, and core components
angular
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

function DropdownController() {
  var vm = this;

  vm.isCollapsed = true;
  vm.status = {
    isopen: false,
  };
}
