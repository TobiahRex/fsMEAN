function testCtrl($scope) {
  const vm = this;
  console.log('vm: ', vm);
  console.log('testCtrl');
  $scope.avengers = ['iron-man', 'spiderman', 'thor', 'hulk'];
  $scope.avenger_villains = [{
    name: 'Loki',
    power: 'magic',
  },
  {
    name: 'Dr. Doom',
    power: 'Magic & Energy',
  },
  {
    name: 'Thanos',
    power: 'Cosmic Cube',
  }];

  $scope.onSubmit = data => {
    console.log('submit stuff: ', data);
  };
}

angular.module('fullStackTemplate').controller('testCtrl', testCtrl);
