(function(angular) {
    'use strict';

    angular
    .module('githubApp.modules.GitHub.controllers', [])
    .controller('SearchController', SearchController)
    .controller('UserController', UserController)
    .controller('RepoController', RepoController);

    SearchController.$inject = ['$location'];
    UserController.$inject = ['$routeParams', 'GithubResource'];
    RepoController.$inject = ['$routeParams', 'GithubResource'];

    function SearchController($location){
    	var vm = this;

    	vm.userSearch = function(){
    		$location.path(['', 'github', vm.text, ''].join('/'));
    	};

        var userSearch = function(){
            $location.path(['', 'github', vm.text, ''].join('/'));
        };
    }

    function UserController($routeParams, GithubResource) {
    	var vm = this;

	    vm.info = GithubResource.get({user: $routeParams.user, repo: ''});
	    vm.repos = GithubResource.get({user: $routeParams.user});
		}

		function RepoController($routeParams, GithubResource){
			var vm = this;

			vm.info = GithubResource.get({
        'query': 'repos',
        'user': $routeParams.user,
        'repo': $routeParams.repo
    	});

    	vm.contributors = GithubResource.get({
        'query': 'repos',
        'user': $routeParams.user,
        'repo': $routeParams.repo,
        'spec': 'contributors'
    	});
		}

})(angular);