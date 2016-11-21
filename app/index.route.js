
(function(){
    angular.module('mmApp').config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        .state('main', {
            abstract:true,
            templateUrl:'app/main/main.tpl.html',
            controller:'MainController',
            controllerAs:"main"     
        })
        .state('main.home', {
            url: '/home',
            templateUrl: 'app/home/home.tpl.html',
            controller:'HomeController',
            controllerAs:'home'
        })    
});

})(angular);
