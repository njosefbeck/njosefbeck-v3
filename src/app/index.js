'use strict';

angular.module('njosefbeck', ['ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.when('devProjects', '/devProjects/list');
    $urlRouterProvider.when('/devProjects', '/devProjects/list');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('devAbout', {
      	url: '/dev-about',
      	templateUrl: 'app/dev/devAbout.html',
      	controller: 'devCtrl'
      })
      .state('devContact', {
      	url: '/dev-contact',
      	templateUrl: 'app/dev/devContact.html',
      	controller: 'devCtrl'
      })
      .state('devProjects', {
      	url: '/devProjects',
      	templateUrl: 'app/dev/devProjects.html',
      	controller: 'devCtrl'
      })
      .state('devProjects.list', {
        url: '/list',
        templateUrl: 'app/dev/devProjects.list.html'
      }) 
      .state('devProjects.detail', {
        url: '/:id',
        templateUrl: 'app/dev/devProjects.detail.html',
        controller: function($scope, $stateParams){
          $scope.aProject = $scope.projects[$stateParams.id];
        }
      })
      .state('spanishAbout', {
      	url: '/spanish-about',
      	templateUrl: 'app/spanish/spanishAbout.html',
      	controller: 'spanishAboutCtrl'
      })
      .state('spanishContact', {
      	url: '/spanish-contact',
      	templateUrl: 'app/spanish/spanishContact.html',
      	controller: 'spanishContactCtrl'
      })
      .state('yogaAbout', {
      	url: '/yoga-about',
      	templateUrl: 'app/yoga/yogaAbout.html',
      	controller: 'yogaAboutCtrl'
      })
      .state('yogaContact', {
      	url: '/yoga-contact',
      	templateUrl: 'app/yoga/yogaContact.html',
      	controller: 'yogaContactCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;

angular.module('njosefbeck')
  .directive('project', function () {
    return {
      restrict: 'A',
      templateUrl: 'app/dev/devProject-template.html',
      controller: 'devCtrl'
    };
  });
