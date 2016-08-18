"use strict";

(function() {
  angular
  .module("photos")
  .controller("PhotosShowController", [
    "PhotosFactory",
    "$stateParams",
    PhotosShowControllerCallback
  ])

  function PhotosShowControllerCallback(PhotosFactory, $stateParams) {
    this.photo = PhotosFactory.get({id: $stateParams.id})
  }

}());
