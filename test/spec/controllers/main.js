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

    it('get e1 data', function () {
        var  supports_html5_storage = function() {
            try {
                return 'localStorage' in window && window['localStorage'] !== null;
            } catch (e) {
                return false;
            }
        }

        expect(scope.sensors.switcher('e1')).toBe("graphDiv");
    });
    
});
