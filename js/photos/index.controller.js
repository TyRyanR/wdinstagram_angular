"use strict";

(function() {
  angular
  .module("photos")
  .controller("PhotosIndexController", [
    PhotosIndexControllerCallback
  ])

  function PhotosIndexControllerCallback() {
    var vm = this;
    vm.photos = data;
    console.log(vm.photos);

    vm.create = function() {
      data.push(vm.newPhoto);
    }

    vm.delete = function() {
      data.so
          //this funtion would delete the selected photo
    }


  }
}());
