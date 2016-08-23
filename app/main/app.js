(function () {
  'use strict';

  function MainController ($parse) {
    this.refresh = function () {
      this.fnstring = $parse(this.enter).toString();
    };
    this.name = 'hello world!';
  }
  angular.module('myApp', [])
    .controller('MainController', MainController);
}());
