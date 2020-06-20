'use strict';

angular
  .module('athleteProfile.socialMedia', ['ngRoute'])

  .config([
    '$routeProvider',
    function ($routeProvider) {
      $routeProvider.when('/socialMedia', {
        templateUrl: 'views/socialMedia/socialMedia.html',
        controller: 'socialMediaCtrl',
      });
    },
  ])

  .controller('socialMediaCtrl', [function () {}]);
