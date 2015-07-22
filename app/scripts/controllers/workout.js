'use strict';

/**
 * @ngdoc function
 * @name liphtApp.controller:WorkoutCtrl
 * @description
 * # WorkoutCtrl
 * Controller of the liphtApp
 */
angular.module('liphtApp')
  .controller('WorkoutCtrl', function ($scope) {
    $scope.exercises = [
      { name: "Squat", sets: 5, reps: 5, weight: 105, increment: 5, unit: "lb", completed: false},
      { name: "Bench Press", sets: 5, reps: 5, weight: 75, increment: 5, unit: "lb", completed: true},
      { name: "Barbell Row", sets: 5, reps: 5, weight: 95, increment: 5, unit: "lb", completed: true},
      { name: "Weighted Dips", sets: 3, reps: 10, weight: "BW+5", unit: "lb", completed: false}
    ];
    $scope.bodyWeight = 185.4;
    
  });
