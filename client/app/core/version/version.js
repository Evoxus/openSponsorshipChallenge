'use strict';

angular
  .module('athleteProfile.version', [
    'athleteProfile.version.interpolate-filter',
    'athleteProfile.version.version-directive',
  ])

  .value('version', '0.1');
