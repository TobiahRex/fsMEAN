function thingService() {
  this.getThings = () => console.log('getThings: ');

  this.addThing = thing => console.log('addThing: ', thing);

  this.editThing = (userObj, id) => console.log('editThing: ', userObj);

  this.deleteThing = (thing, id) => console.log('deleteThing: ', thing);
}

angular.module('fullStackTemplate').service('thingService', thingService);
