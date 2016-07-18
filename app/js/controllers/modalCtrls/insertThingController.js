function insertThingController($scope, $uibModalInstance, dbPhotos, album) {
  console.log('insertPhotoModalController');

  $scope.Photos = dbPhotos.data;
  const thisAlbum = album.album._id;

  $scope.insertPhoto = photo => {
    const addPhoto = angular.copy(photo);

    const idObj = {
      albumId: thisAlbum,
      photoId: addPhoto.photo._id,
    };
    $uibModalInstance.close(idObj);
  };

  $scope.cancel = () => {
    $uibModalInstance.dismiss();
  };
}

angular.module('fullStackTemplate').controller('insertPhotoModalController', insertThingController);
