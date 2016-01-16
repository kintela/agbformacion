var agbApp = angular.module('app', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

agbApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/components/home/home.html',
            title: 'Inicio'
        })        

        .otherwise({
            redirectTo: '/'
        });
}]);

    
agbApp.run(['$rootScope', '$location', '$http', function ($rootScope, $location, $http) {

}]);
