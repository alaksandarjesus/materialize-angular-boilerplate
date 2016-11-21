(function(){

    function MainController (){
        var vm = this;

        vm.test = "I am from main controller";


    }
    
    angular.module('mmApp').controller("MainController", MainController);


})(angular);