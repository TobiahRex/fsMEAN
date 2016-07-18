function editThing1Controller($scope, $uibModalInstance, editThing) {
  console.log('editThing1ModalCtrl');
  const vm = $scope;
  vm.thing = editThing.thing;
  console.log('vm.thing: ', vm.thing);
  vm.submitChanges = () => {
    const editedThing = vm.thing;
    $uibModalInstance.close(editedThing);
  };
  vm.cancel = () => $uibModalInstance.dismiss();
}

angular.module('fullStackTemplate').controller('editThing1Controller', editThing1Controller);
