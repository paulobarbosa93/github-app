(function(angular) {
    'use strict';

    angular
    .module('githubApp.modules.GitHub.services', [])
    .factory('GithubResource', GithubResource);

    GithubResource.$inject = ['$resource'];

    function GithubResource($resource){
    	return $resource('https://api.github.com/:query/:user/:repo/:spec', {
        'query': 'users',
        'user': 'angular',
        'repo': 'repos',
        'spec': '',
        'callback': 'JSON_CALLBACK',
        'per_page': 100
    	}, {
        'get': {
        	'method': 'JSONP'
        }
    	});
    }

})(angular);