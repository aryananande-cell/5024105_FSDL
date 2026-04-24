var app = angular.module("myApp", []);

app.controller("myController", function($scope) {
    $scope.message = "Hello World using AngularJS";
    $scope.name = "";

    $scope.showMessage = function() {
        if ($scope.name) {
            alert("Welcome " + $scope.name + " 🎉");
        } else {
            alert("Please enter your name first 😊");
        }
    };
});