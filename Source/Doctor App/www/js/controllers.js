angular.module('directory.controllers', ['ngCordova'])

    .controller('EmployeeIndexCtrl', function ($scope, EmployeeService,$cordovaCamera) {

        $scope.searchKey = "";
       $scope.takePicture = function() {
        var options = { 
            quality : 75, 
            destinationType : Camera.DestinationType.DATA_URL, 
            sourceType : Camera.PictureSourceType.CAMERA, 
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };
           
        $cordovaCamera.getPicture(options).then(function(imageData) {
            $scope.imgURI = "data:image/jpeg;base64," + imageData;
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
