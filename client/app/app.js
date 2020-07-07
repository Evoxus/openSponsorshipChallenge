"use strict";

// Declare app level module which depends on views, and core components
const athleteProfile = angular
  .module("athleteProfile", ["ui.router", "ngAnimate", "ui.bootstrap"])
  .config(function ($urlRouterProvider, $stateProvider) {
    $stateProvider
      .state("profile", {
        url: "/profile",
        templateUrl: "form.html",
        controller: "FormCtrl",
      })
      .state("profile.basicInfo", {
        url: "/basic-info",
        templateUrl: "./views/basicInfo/basicInfo.html",
      })
      .state("profile.about", {
        url: "/about",
        templateUrl: "./views/about/about.html",
      })
      .state("profile.socialMedia", {
        url: "/social-media",
        templateUrl: "./views/socialMedia/socialMedia.html",
      })
      .state("profile.summary", {
        url: "/summary",
        templateUrl: "views/summary/summary.html",
      })
      .state("profile.profileList", {
        url: "/profile-list",
        templateUrl: "./views/profileList/profileList.html",
      });

    $urlRouterProvider.otherwise("/profile/basic-info");
  })
  .controller("DropdownController", DropdownController)
  .controller("FormCtrl", FormCtrl);

function FormCtrl($scope) {
  $scope.newProfile = {};

  $scope.processForm = function () {
    alert("Successfully submitted profile!");
  };
}

function DropdownController($scope) {
  $scope.isNavCollapsed = true;
}
