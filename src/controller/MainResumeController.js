angular.module("resume", [])
    .controller("MainResumeController", MainResumeController);

function MainResumeController($scope, $http) {
    $http.get('./data/data.json').success(function (data, status, headers, config) {
        $scope.data = data;
    }).error(function (data, status, headers, config) {
        console.error(data)
    });
}