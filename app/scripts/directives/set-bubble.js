'use strict';

/**
 * @ngdoc directive
 * @name liphtApp.directive:setBubble
 * @description
 * # setBubble
 */
angular.module('liphtApp')
  .directive('setBubble', function () {
    return {
      templateUrl: 'views/set-bubble.html',
      restrict: 'E',
      scope: {
        completedReps: "@",
        goalReps: "@"
      },
      link: function(scope, element, attr) {
      
        scope.cycleRepCount = function() {
          if (scope.completedReps == 0) {
            delete scope.completedReps; 
          } else if (scope.completedReps > 0) {
            scope.completedReps--;
          } else {
            scope.completedReps = scope.goalReps;
          }
        };
        
        scope.$watch('completedReps', function(newValue, oldValue) {
          if (newValue) {console.log("I see a data change: " + newValue);}
        });
      }
    };
  });
