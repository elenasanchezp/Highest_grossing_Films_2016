var distributorControllers = angular.module('distributorControllers', ['ngAnimate']);

distributorControllers.controller('ListController', ['$scope', '$http', function ($scope, $http) {
    $http.get('/content/json/distributorsData.json').success(function (data) {
    $scope.distributors = data;
    $scope.distributorOrder = 'name';
  });
}]);

distributorControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $http.get('/content/json/distributorsData.json').success(function (data) {
    $scope.distributors = data;
    $scope.whichItem = $routeParams.itemId;

    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId)-1;
    } else {
        $scope.prevItem = $scope.distributors.length - 1;
    }

    if ($routeParams.itemId < $scope.distributors.length - 1) {
      $scope.nextItem = Number($routeParams.itemId)+1;
    } else {
      $scope.nextItem = 0;
    }

  });
}]);

