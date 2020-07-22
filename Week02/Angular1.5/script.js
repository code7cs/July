/*
 * @Author: Hanfan Wang
 * @Date: 2020-07-21 15:08:55
 * @LastEditTime: 2020-07-21 15:44:28
 */

// 1. create a module
var myApp = angular.module("myModule", []);

// 2. create controller
var myController1 = function ($scope) {
  $scope.message = "AngularJS from controller1";
  $scope.id = 1234;
};

myApp.controller("myController1", myController1);

myApp.controller("myController2", function ($scope) {
  var employee = {
    firstName: "John",
    lastName: "Wick",
    city: "NJ",
    falg: "flag.jpg",
  };

  $scope.emp = employee;
  $scope.message = "AngularJS from controller2";
  $scope.id = 1234;
});

// $rootScope
