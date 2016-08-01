(function (angular) {
  'use strict';

  angular
    .module('githubApp', [
      'githubApp.controllers',
      'githubApp.services',
      'ngRoute',
      'ngResource'
    ])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.
        when('/', {
          templateUrl: 'partials/search.html',
          controller: 'SearchController',
          controllerAs: 'search'

        })
        .when('/github/:user/', {
          templateUrl: 'partials/user-page.html',
          controller: 'UserController',
          controllerAs: 'user'
        })
        .when('/github/:user/:repo/', {
          templateUrl: 'partials/repo-page.html',
          controller: 'RepoController',
          controllerAs: 'repo'
        })
        .otherwise('/', {
          redirectTo: '/'
        });
    }]);

})(angular);