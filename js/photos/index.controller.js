"use strict";

(function() {
  angular
  .module("photos")
  .controller("PhotosIndexController", [
    "PhotosFactory",
    PhotosIndexControllerCallback
  ])

  function PhotosIndexControllerCallback( PhotosFactory ) {
    var vm = this;

    vm.photos = PhotosFactory.query();

    vm.newPhoto = new PhotosFactory(); /* why??? */

    vm.create = function() {
      vm.newPhoto.$save().then(function(response) {
        vm.photos.push(response);
        console.log(vm.photos);
        vm.newPhoto = new EntriesFactory();
      })
    }
  }
}());
