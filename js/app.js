'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/anasayfa', {templateUrl: 'partials/anasayfa_view.html', controller: 'Anasayfa'});
  $routeProvider.when('/haber/:haber_id', {templateUrl: 'partials/haber_single_view.html', controller: 'HaberSingle'});
  $routeProvider.when('/kategori/:kategori_id', {templateUrl: 'partials/kategori_view.html', controller: 'Kategori'});

  $routeProvider.otherwise({redirectTo: '/anasayfa'});
}]);

