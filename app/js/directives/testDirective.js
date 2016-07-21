function testDirective() {
  console.log('testDirective');
  const directive = {
    controller: 'testCtrl',
    templateUrl: 'js/directives/testDirective.html',
    scope: {
      avengers: '@data',
      avenger_villains: '=villains',
    },
    controllerAs: 'vm',
    bindToController: true,
  };
  return directive;
}

function customForm() {
  return {
    restrict: 'E',
    scope: {
      fields: '<',
      onSubmit: '<submit'
    },
  };
}

angular.module('fullStackTemplate')
.directive('testDir', testDirective)
.directive('myCustomForm', customForm);
