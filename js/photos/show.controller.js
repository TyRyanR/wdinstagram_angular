"use strict";

(function() {
  angular
  .module("photos")
  .controller("PhotosShowController", [
    "$stateParams",
    PhotosShowControllerCallback
  ])

  function PhotosShowControllerCallback($stateParams) {
    this.photo = data[$stateParams.id];
  }

}());
