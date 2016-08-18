"use strict";

(function() {
  angular
  .module("photos")
  .controller("PhotosIndexController", [
    "PhotosFactory",
    PhotosIndexControllerCallback
  ])

  function PhotosIndexControllerCallback( PhotosFactory ) {
    this.photos = PhotosFactory.query();
  }
}());
