let app = angular.module("app", []);

app.controller("myController", ['$scope', function ($scope) {

    let items = [{
        img: 'img/1.jpg',
        describe: "50 Must-have plugins for extending Twitter Bootstrap"
    }, {
        img: 'img/2.jpeg',
        describe: "Making a Super Simple Registration System With Php and MySQL"
    }, {
        img: 'img/3.jpeg',
        describe: "Create a slide-out footer with this neat z-index trick"
    }, {
        img: 'img/4.jpeg',
        describe: "How to Make a Digital  Clock with JQuery and CSS3"
    }];

    $scope.items = items;
    $scope.$watch('searchWord', function (newValue, oldValue) {
        console.log("newValue: " + newValue)
        console.log("oldValue: " + oldValue)
        if (newValue !== oldValue) {
            $scope.items = items
                .filter((item => item.describe.toLowerCase().indexOf(("" + newValue).toLowerCase()) !== -1));
        }

    });

}])
