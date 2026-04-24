var app = angular.module("studentApp", []);

app.controller("studentController", function($scope) {
    $scope.student = {};
    $scope.students = [];
    $scope.submitted = false;
    $scope.searchText = "";

    $scope.submitForm = function() {
        if ($scope.studentForm.$valid) {
            $scope.students.push(angular.copy($scope.student));
            $scope.savedStudent = angular.copy($scope.student);
            $scope.submitted = true;
            alert("Student Record Submitted Successfully 🎉");
            $scope.student = {};
            $scope.studentForm.$setPristine();
            $scope.studentForm.$setUntouched();
        } else {
            $scope.submitted = false;
            alert("Please fill all fields correctly");
        }
    };

    $scope.resetForm = function() {
        $scope.student = {};
        $scope.submitted = false;
        if ($scope.studentForm) {
            $scope.studentForm.$setPristine();
            $scope.studentForm.$setUntouched();
        }
    };

    $scope.removeStudent = function(index) {
        $scope.students.splice(index, 1);
    };

    $scope.averageGpa = function() {
        if (!$scope.students.length) {
            return 0;
        }

        var total = 0;
        angular.forEach($scope.students, function(student) {
            total += parseFloat(student.gpa) || 0;
        });
        return total / $scope.students.length;
    };

    $scope.youngestAge = function() {
        if (!$scope.students.length) {
            return "-";
        }

        var ages = $scope.students.map(function(student) {
            return parseInt(student.age, 10) || 0;
        });
        return Math.min.apply(null, ages);
    };

    $scope.recordFilter = function(record) {
        if (!$scope.searchText) {
            return true;
        }
        var query = $scope.searchText.toLowerCase();
        return record.name.toLowerCase().indexOf(query) !== -1 ||
               record.course.toLowerCase().indexOf(query) !== -1 ||
               record.year.toLowerCase().indexOf(query) !== -1;
    };
});
