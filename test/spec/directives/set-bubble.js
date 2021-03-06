'use strict';

describe('Directive: setBubble', function () {

  // load the directive's module
  beforeEach(module('liphtApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<set-bubble></set-bubble>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the setBubble directive');
  }));
});
