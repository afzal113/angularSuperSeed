(function () {
  'use strict';

  function MainController () {
    this.name = 'hello world!';
  }
  angular.module('myApp', [])
    .controller('MainController', MainController);
}());
