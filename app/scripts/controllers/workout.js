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
      { name: "Squat", sets: 5, reps: 5, weight: 105, unit: "lb"},
      { name: "Bench Press", sets: 5, reps: 5, weight: 75, unit: "lb"},
      { name: "Barbell Row", sets: 5, reps: 5, weight: 95, unit: "lb"},
      { name: "Weighted Dips", sets: 3, reps: 10, weight: "BW+5", unit: "lb"}
    ];
    $scope.bodyWeight = 185.4;
    
  });
