var app = angular.module('app', []);

app.controller('emp', ['$scope', function ($scope) {

    $scope.emps = [
        {empno: '101', ename: 'John'},
        {empno: '102', ename: 'Jill'},
        {empno: '103', ename: 'Jim'},
        {empno: '104', ename: 'Mary'},
    ]

    $scope.addEmp = function () {
        var newEmpNo = 100 + $scope.emps.length + 1;
        var newName = "ename" + newEmpNo;

        $scope.emps.push({empno: newEmpNo, ename: newName})
    }

    $scope.modify3rdEmp = function () {
        $scope.emps[2].ename = "Test";
    }

    // $scope.$watchCollection('emps', function (newVal, oldVal) {
    //     console.log("No. of employees: " + $scope.emps.length)
    // })

    $scope.$watch('emps', function (newVal, oldVal) {
        console.log("No. of employees: " + $scope.emps.length)
    }, true)

    // $scope.o = {
    //     a: 1,
    //     b: 2,
    //     c: 3
    // }
    //
    // $scope.$watchGroup(['o.a', 'o.b'], function (newVal, oldVal) {
    //     if (newVal !== oldVal) {
    //         $scope.o.c = $scope.o.a * $scope.o.b;
    //     }
    // }, true)

    // $scope.a = 1;
    // $scope.b = 2;
    // $scope.c = 3;
    // $scope.d = 4;

    // $scope.updateC = function () {
    //     $scope.c = $scope.c * 4;
    // }

    // $scope.$watchGroup(["a","b"], function (newVal, oldVal) {
    //     if (newVal != oldVal) {
    //         $scope.c = $scope.a * $scope.b;
    //     }
    // })

    // $scope.$watch("b", function (newVal, oldVal) {
    //     if (newVal != oldVal) {
    //         // console.log("Update C to " + newVal);
    //         $scope.c = $scope.b * 4;
    //     }
    // })

    // manually watch
    // $scope.$watch("c", function (newVal, oldVal) {
    //     if (newVal != oldVal) {
    //         console.log("Update C to " + newVal);
    //     }
    // })
}])
