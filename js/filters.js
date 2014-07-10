'use strict';

/* Filters */



angular.module('myApp.filters', [])

.filter('firstOne', function() {
  return function(input) {
   	return input.split('x')[0];
  };
})
.filter('secondOne', function() {
  return function(input) {
   	return input.split('x')[1];
  };
});



