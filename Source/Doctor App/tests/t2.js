describe('EmployeeIndexCtrl',function() {
    beforeEach(module('directory'));
    
    var $controller;
    
    beforeEach(inject(function(_$controller_){
            $controller=_$controller_;
    }));
    describe('invalichars',function (){
        it('Tests login function of my controller',function() {
            var $scope = {};
            var controller = $controller('EmployeeIndexCtrl', {$scope: $scope });
			var docname = 'rajiv';
           expect($scope.invalichars(docname)).toEqual(false);
           
   
            
                   });
        });
    
    });