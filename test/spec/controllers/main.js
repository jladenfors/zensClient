'use strict';

describe('Controller: ZensGraf', function () {

  // load the controller's module
  beforeEach(module('zens'));

  var ZensGraf, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
      ZensGraf = $controller('ZensGraf', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {      
    expect(scope.parameters.sensorId).toBe("graphDiv");
  });
});
