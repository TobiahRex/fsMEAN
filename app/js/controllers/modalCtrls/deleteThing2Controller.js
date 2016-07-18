function deleteThing2Controller($scope, $uibModalInstance, Photo, deletePhoto) {
  console.log('deletePhotoModalController');
  $scope.photo = deletePhoto.photo;

  $scope.deletePhoto = () => {
    let deletePhoto = $scope.photo
    $uibModalInstance.close(deletePhoto);
  };
  $scope.cancel = () => {
    $uibModalInstance.dismiss();
  };
}

angular.module('fullStackTemplate')
.controller('deletePhotoModalController', deleteThing2Controller);
