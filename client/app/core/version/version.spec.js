'use strict';

describe('athleteProfile.version module', function () {
  beforeEach(module('athleteProfile.version'));

  describe('version service', function () {
    it('should return current version', inject(function (version) {
      expect(version).toEqual('0.1');
    }));
  });
});
