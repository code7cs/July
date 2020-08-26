var app = angular.module("mgcrea.ngStrp", [
  "ngAnimate",
  "ngSanitize",
  "mgcrea.ngStrap",
]);

app.controller("MainCtrl", function ($scope, $alert) {
  $scope.modal = {
    title: "Modal Title",
    content: "Hello Modal<br />This is a multiline message!",
  };
  $scope.tooltip = {
    title: "Tooltip Title",
  };
  $scope.popover = {
    title: "Popover Title",
    content: "Hello Modal<br />This is a multiline message!",
  };
  $scope.alert = {
    title: "Alert Title",
    content: "Alert Content",
    type: "success",
  };
  var alert = $alert({
    title: "Alert Title!",
    content: "Here's some content.",
    type: "danger",
    container: "#alertContainer",
    show: false,
  });
  $scope.showAlert = alert.show;
});
