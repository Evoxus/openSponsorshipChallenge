"use strict";

// Declare app level module which depends on views, and core components
const athleteProfile = angular
  .module("athleteProfile", [
    "ngRoute",
    "ngAnimate",
    "ui.bootstrap",
    "athleteProfile.basicInfo",
    "athleteProfile.about",
    "athleteProfile.socialMedia",
    "athleteProfile.summary",
    "athleteProfile.profileList",
    "athleteProfile.version",
  ])
  .config([
    "$locationProvider",
    "$routeProvider",
    function ($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix("!");

      $routeProvider.otherwise({ redirectTo: "/basicInfo" });
    },
  ])
  .controller("DropdownController", DropdownController);

function DropdownController($scope) {
  $scope.isNavCollapsed = true;
}

function AthleteFactory($q, $timeout) {
  return {
    save: function (profile) {
      const deferred = $q.defer();
      $timeout(deferred.resolve, 1000);
      return deferred.promise;
    },
  };
}

athleteProfile.factory("Profile", ["$q", "$timeout", AthleteFactory]);

function AthleteController($scope, $window, Profile) {
  function success() {
      $window.alert('Profile saved successfully!');
  }

  function failure() {
      $window.alert('Oops!');
  }

  $scope.newProfile = {};

  $scope.submit = function() {
      Profile.save($scope.newProfile)
          .then(success, failure);
  };
}

athleteProfile.controller('AthleteController', ['$scope', '$window', 'Profile', AthleteController]);