(function () {

  angular.module('app')
    .controller('reposCtrl', reposCtrl);

    reposCtrl.$inject = ['$stateParams', '$scope', 'dataService'];
    function reposCtrl ($stateParams, $scope, dataService) {
      var vm = this;

      vm.repos = [];
      vm.q = $stateParams.search || null;
      vm.isLoading = false;
      vm.searchRepo = searchRepo;

      $scope.$watch('vm.q', function () {
        vm.searchRepo();
      });

      function searchRepo () {
        if (!vm.q) {
          return;
        }

        vm.isLoading = true;
        vm.repos = null;

        dataService.searchRepos(vm.q)
          .then(function (repos) {
            vm.repos = repos;
          })
          .finally(function () {
            vm.isLoading = false;
          });
      }
    }

})();
