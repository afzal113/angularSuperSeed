describe('myController', function () {
  var createController, scope;
  beforeEach(module('myApp'));
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    $controller('MainController as mc', {
      $scope: scope
    });
  }));
  describe('Defined', function () {
    it('should have name', function () {
      expect(scope.mc.name).toEqual('hello world!');
    });
  });
});
