function registerController($scope, $state, $auth, Auth, toastr, Upload) {
  console.log('registerCtrl');
  const vm = $scope;
  vm.s3Image = '';
  const userObj = {
    Access: 'Not-Assigned',
    Username: '',
    _Password: '',
    Firstname: '',
    Lastname: '',
    Email: '',
    Bio: '',
    Avatar: '',
  };

  vm.registerNewUser = (registerObj, s3Image) => {
    console.log(registerObj, s3Image);
    if (registerObj.password !== registerObj._Password) {
      return console.error('ERROR: Passwords do not match.');
    }
    console.log(vm.s3Image);
    // build userObj from registerObj
    userObj.Username = registerObj.Username;
    userObj._Password = registerObj._Password;
    userObj.Email = registerObj.Email;
    userObj.Bio = registerObj.Bio;
    userObj.Avatar = registerObj.Avatar || vm.s3Image;
    registerObj.name.split(' ').forEach((name, i) => {
      if (i === 0) {
        userObj.Firstname = name;
      } else if (i === 1) {
        userObj.Lastname = name;
      }
      return null;
    });
    console.log('userObj.url ', userObj.Avatar);
    return Auth.registerUser(userObj)
    .then(() => {
      toastr.info('Please check your Email for a registration link.',
      'Registered!', { iconClass: 'toast-register' });
      $scope.$emit('loggedIn');
    })
    .catch(err => {
      console.error(err);
      $state.go('home');
    });
  };

  vm.submit = file => upload(file);

  function upload(file) {
    Upload.upload({
      url: '/api/images',
      data: { newFile: file },
    })
    .then(res => {
      console.log('image:', res.data.url);
      vm.s3Image = res.data.url;
      console.log('vm.s3Image: ', vm.s3Image);
    })
    .catch(err => {
      console.error(err);
    });
  }
}

angular.module('fullStackTemplate').controller('registerController', registerController);
