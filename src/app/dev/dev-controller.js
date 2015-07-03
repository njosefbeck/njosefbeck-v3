'use strict';

angular.module('njosefbeck')
  .controller('devCtrl', ['$scope', '$http', function ($scope, $http) {
  	$http.get("app/dev/data/devProjects.json").then(function(res){
  		$scope.projects = res.data;
  	})
  }]);