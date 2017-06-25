/**
 * Created by Shiv on 25/06/17.
 */
angular.module("app",[])
    .controller('ctrl', function($scope, $http){
        $scope.hello = "dd"

        $http.get('./data.json').
        success(function(data, status, headers, config) {
            $scope.records = data;
        }).
        error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });


    });
