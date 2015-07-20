'use strict';

describe('Controller: WorkoutCtrl', function () {

  // load the controller's module
  beforeEach(module('liphtApp'));

  var WorkoutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WorkoutCtrl = $controller('WorkoutCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WorkoutCtrl.awesomeThings.length).toBe(3);
  });
});
