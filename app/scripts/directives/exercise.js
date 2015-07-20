'use strict';

/**
 * @ngdoc directive
 * @name liphtApp.directive:exercise
 * @description
 * # exercise
 */
angular.module('liphtApp')
  .directive('exercise', function () {
    return {
      templateUrl: 'views/exercise.html',
      restrict: 'E',
      scope: {
        name: '@',
        sets: '@',
        reps: '@',
        weight: '@',
        unit: '@'
      },
      link: function postLink(scope, element, attrs) {
        
        scope.exerciseSets = [];
        
        for (var i = 0; i < scope.sets; i++) {
          scope.exerciseSets.push({goalReps: scope.reps});
        }
        
      }
    };
  });
