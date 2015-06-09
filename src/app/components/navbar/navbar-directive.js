'use strict';
/**
 * @ngdoc directive
 * @name njosefbeck.directive:navbar
 * @description
 * # navbar
 */
angular.module('njosefbeck')
  .directive('navbar', function () {
    return {
      templateUrl: 'app/components/navbar/navbar.html',
      restrict: 'AE',
      replace: 'true',
      scope: {},
      link: function(scope, element, attrs) {
        $scope.isCollapsed = false;
      }
    };
  });
