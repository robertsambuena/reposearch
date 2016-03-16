(function () {

  angular.module('app')
    .service('dataService', dataService);

    dataService.$inject = ['$http', '$state'];
    function dataService ($http, $state) {
      var ds = {
        searchRepos: searchRepos,
        getIssues: getIssues
      };

      return ds;

      function searchRepos (q) {
        var options = {
          method: 'GET',
          url: 'https://api.github.com/search/repositories',
          params: {
            q: q
          }
        };

        return $http(options).then(function (repos) {
          return repos.data;
        });
      }

      function getIssues (fullname) {

        var options = {
          method: 'GET',
          url: 'https://api.github.com/search/issues?',
          params: {
            q: 'repo:' + fullname
          }
        };
        return $http(options).then(function (issues) {
          return issues.data;
        });
      }
    }

})();
