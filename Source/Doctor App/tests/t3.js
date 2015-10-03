describe('EmployeeIndexCtrl',function() {
    beforeEach(module('directory'));
    
    var $controller;
    
    beforeEach(inject(function(_$controller_){
            $controller=_$controller_;
    }));
    describe('thirdtest',function (){
        it('Tests login function of my controller',function() {
            var $scope = {};
            var controller = $controller('EmployeeIndexCtrl', {$scope: $scope });
			var docname = 'rajiv';
           expect($scope.thirdtest(docname)).toEqual(false);
                   });
        });
    
    });