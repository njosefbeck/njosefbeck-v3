'use strict';

angular.module('njosefbeck')
  .controller('MainCtrl', function ($scope, $rootScope, $state) {
  	$rootScope.is = function(name){
  		return $state.is(name);
  	};

  	$scope.windowHeight = window.innerHeight;

  });
