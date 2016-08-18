"use strict";

(function(){
  angular
  .module("wdinstagram", [
    "ui.router",
    "photos"
  ])
  .config([
    "$stateProvider",
    RouterCallback
  ])

  function RouterCallback($stateProvider) {
    $stateProvider
    .state("photosIndex", {
      url: "/photos",
      controller: "PhotosIndexController",
      controllerAs: "PhotosIndexViewModel",
      templateUrl: "js/photos/index.html"
    })
      }

})();
