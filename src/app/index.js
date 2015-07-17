'use strict';

angular.module('njosefbeck', ['ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.when("devProjects", "/devProjects/list");
    $urlRouterProvider.when("/devProjects", "/devProjects/list");

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

  angular.module('njosefbeck')
    .controller('ContactController', function ($scope, $http) {
      $scope.result = 'hidden'
      $scope.resultMessage;
      $scope.formData; //formData is an object holding the name, email, subject, and message
      $scope.submitButtonDisabled = false;
      $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
      $scope.submit = function(contactform) {
          $scope.submitted = true;
          $scope.submitButtonDisabled = true;
          if (contactform.$valid) {
              $http({
                  method  : 'POST',
                  url     : 'contact-form.php',
                  data    : $.param($scope.formData),  //param method from jQuery
                  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
              }).success(function(data){
                  console.log(data);
                  if (data.success) { //success comes from the return json object
                      $scope.submitButtonDisabled = true;
                      $scope.resultMessage = data.message;
                      $scope.result='bg-success';
                  } else {
                      $scope.submitButtonDisabled = false;
                      $scope.resultMessage = data.message;
                      $scope.result='bg-danger';
                  }
              });
          } else {
              $scope.submitButtonDisabled = false;
              $scope.resultMessage = 'Failed :( Please fill out all the fields.';
              $scope.result='bg-danger';
          }
      }
  });
