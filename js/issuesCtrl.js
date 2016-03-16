(function () {

  angular.module('app')
    .controller('issuesCtrl', issuesCtrl);

    issuesCtrl.$inject = ['$stateParams', '$scope', 'dataService'];
    function issuesCtrl ($stateParams, $scope, dataService) {
      var vm = this;

      vm.issues = [];
      vm.isLoading = false;
      vm.repo = $stateParams.repo;

      start();

      function start () {
        if (!vm.repo) {
          return;
        }

        vm.isLoading = true;
        vm.issues = null;

        dataService.getIssues(vm.repo)
          .then(function (issues) {
            vm.issues = issues;
          })
          .finally(function () {
            vm.isLoading = false;
          });
      }
    }

})();
