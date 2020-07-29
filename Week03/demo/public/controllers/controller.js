/*
 * @Author: Hanfan Wang
 * @Date: 2020-07-29 11:08:16
 * @LastEditTime: 2020-07-29 18:17:32
 */
function AppCtrl($scope, $http) {
  console.log("Hello world from controller");

  var refresh = function () {
    $http.get("/contactlist").success(function (response) {
      console.log("I got the data I requested");
      // console.log(response);
      $scope.contactlist = response;
      $scope.contact = "";
    });
  };
  refresh();
  $scope.addContact = function () {
    $http.post("/contactlist", $scope.contact).success(function (response) {
      refresh();
    });
  };

  $scope.remove = function (id) {
    console.log(id);
    $http.delete("/contactlist/" + id).success(function (response) {
      refresh();
    });
  };

  $scope.edit = function (id) {
    console.log(id);
    $http.get("/contactlist/" + id).success(function (response) {
      $scope.contact = response;
    });
  };

  $scope.update = function () {
    $http
      .put("/contactlist/" + $scope.contact._id, $scope.contact)
      .success(function (response) {
        refresh();
      });
  };

  $scope.clear = function () {
    $scope.contact = "";
  };
}
