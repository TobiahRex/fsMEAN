function editThing2Controller($scope, $uibModalInstance, Photo, editPhoto) {
  console.log('editPhotoModalCtrl');

  $scope.urlCopy = angular.copy(editPhoto.photo.url);

  $scope.submitChanges = () => {
    const editedPhoto = $scope.photo;

    $uibModalInstance.close(editedPhoto);
  };
  $scope.cancel = () => {
    $uibModalInstance.dismiss();
  };
}
angular.module('fullStackTemplate').controller('editPhotoModalController', editThing2Controller);
