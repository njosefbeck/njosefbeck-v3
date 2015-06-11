'use strict';
/**
 * @ngdoc directive
 * @name njosefbeck.directive:navbarYoga
 * @description
 * # navbarYoga
 */
angular.module('njosefbeck')
  .directive('navbarYoga', function () {
    return {
      templateUrl: 'app/components/navbarYoga/navbarYoga.html',
      restrict: 'AE',
      replace: 'true',
      scope: {},
      link: function(scope, element, attrs) {
        scope.isCollapsed = false;
      }
    };
  });
