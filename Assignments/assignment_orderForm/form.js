let app = angular.module("app", [])
    .controller("myController", ['$scope', function ($scope) {
        let services = [
            {
                name: "Web Development",
                price: 300,
                isSelected: false
            },
            {
                name: "Design",
                price: 400,
                isSelected: false
            },
            {
                name: "Integration",
                price: 250,
                isSelected: false
            },
            {
                name: "Training",
                price: 220,
                isSelected: false
            },
        ]

        $scope.totalPrice = 0;
        $scope.changeColor = function (service) {
            service.isSelected = !service.isSelected;
            $scope.totalPrice = services
                .filter((item => item.isSelected === true))
                .reduce((acc, cur) => acc + cur.price, 0);
        }

        $scope.services = services;
    }])
