angular.module('directory.controllers', ['ngCordova'])

    .controller('EmployeeIndexCtrl', function ($scope, EmployeeService,$cordovaCapture) {

        $scope.searchKey = "";
       $scope.captureVideo = function() {
    var options = { limit: 3, duration: 15 };

        $cordovaCapture.captureVideo(options).then(function(videoData) {
      alert(videoData);
    }, function(err) {
    });
  }

        $scope.clearSearch = function () {
            $scope.searchKey = "";
            findAllEmployees();
        }

        $scope.search = function (searchkey) {
            EmployeeService.findByName(searchkey).then(function (employees) {
                $scope.employees = employees;
                if(employees.length < 0){
                return false;}else return true;                
            });
        }
         $scope.searchname = function (searchkey) {
            
                if(searchkey.length < 0){
                return false;}else return true;                
            
        }
          $scope.invalichars = function (searchkey) {
            if( searchkey.match(/[\<\>!@#\$%^&\*,]+/i) ) {
                return true;
            }             else{
                return false;
            }  
            
        }
           $scope.thirdtest = function (searchkey) {
            
                if(searchkey.length > 2){
                return false;}else return true;                
            
        }
        
        
        
        var findAllEmployees = function() {
            EmployeeService.findAll().then(function (employees) {
                $scope.employees = employees;
            });
        }

        findAllEmployees();

    })

    .controller('EmployeeDetailCtrl', function ($scope, $stateParams, EmployeeService) {
        EmployeeService.findById($stateParams.employeeId).then(function(employee) {
            $scope.employee = employee;
        });
    })

    .controller('EmployeeReportsCtrl', function ($scope, $stateParams, EmployeeService) {
        EmployeeService.findByManager($stateParams.employeeId).then(function(employees) {
            $scope.employees = employees;
        });
    });
