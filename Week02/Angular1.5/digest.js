var app = angular.module("app", []);

app.controller("emp", ['$scope','$rootScope', function ($scope,$rootScope) {
    $scope.a = 1;
    $scope.b = 1;


    // $scope.c = 1;
    //
    // $scope.$watch('a', function (newVal, oldVal) {
    //     if (newVal !== oldVal) {
    //         console.log("a modified to " + newVal)
    //     }
    // })
    // $scope.$watch('b', function (newVal, oldVal) {
    //     if (newVal !== oldVal) {
    //         console.log("b modified to " + newVal)
    //     }
    // })
    // $scope.$watch('c', function (newVal, oldVal) {
    //     if (newVal !== oldVal) {
    //         console.log("c modified to " + newVal)
    //     }
    // })
    //
    // $rootScope.$watch(function () {
    //     console.log("--digest iteration started--")
    // })

}]);
