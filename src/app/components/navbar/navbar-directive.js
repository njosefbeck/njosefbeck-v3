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
      template: '<div></div>',
      restrict: 'E',
      link: function(scope, element, attrs) {
        element.text('this is the navbar directive');
      }
    };
  });
