app.controller('ShowsController', ['$scope', 'ShowsService', function($scope, ShowsService) {
  $scope.shows = ShowsService.list();
}]);