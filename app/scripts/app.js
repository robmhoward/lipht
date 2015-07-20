'use strict';

/**
 * @ngdoc overview
 * @name liphtApp
 * @description
 * # liphtApp
 *
 * Main module of the application.
 */
angular
  .module('liphtApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/workout', {
        templateUrl: 'views/workout.html',
        controller: 'WorkoutCtrl',
        controllerAs: 'workout'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
