"use strict";

(function() {
  angular
  .module("photos")
  .factory("PhotosFactory", [
    "$resource",
    PhotosFactoryCallback
  ])

  function PhotosFactoryCallback($resource) {
    return $resource("http://localhost:3000/entries/:id", {}, {
      update: {method: "PUT"}
    });
  }
}());
