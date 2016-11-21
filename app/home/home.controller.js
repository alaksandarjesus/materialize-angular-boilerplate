(function(){

    function HomeController (){
        var vm = this;

        vm.test = "I am from home controller";


    }
    
 
 
    angular.module('mmApp').controller("HomeController", HomeController);


})(angular);