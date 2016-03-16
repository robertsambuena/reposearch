(function () {
  /* convention is based on john papa's repo of best practices */

  angular.module('app', ['ui.router'])
    .config(config)
    .controller('mainController', mainController);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function config ($stateProvider, $urlRouterProvider) {
        var baseUrl = '/templates/';

        $urlRouterProvider.otherwise('/');

        $stateProvider
          .state('repos', {
                url: '/?search',
                views: {
                    "main": {
                        controller: 'reposCtrl',
                        controllerAs: 'vm',
                        templateUrl: baseUrl + '/repos.html'
                    }
                },
                data: {}
          })
          .state('issues', {
                url: '/issues?repo',
                views: {
                    "main": {
                        controller: 'issuesCtrl',
                        controllerAs: 'vm',
                        templateUrl: baseUrl + '/issues.html'
                    }
                },
                data: {}
          });
      }

    mainController.$inject = ['$state'];
    function mainController ($state) {
      console.log('mainController');
    }
})();
