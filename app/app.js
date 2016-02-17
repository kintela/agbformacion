var agbApp = angular.module('app', ['ngRoute', 'ngAnimate','ui.bootstrap','right','header']);

agbApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/components/home/home.html',
            title: 'Inicio'
        }) 
        .when('/risoterapia', {
            templateUrl: 'app/components/risoterapia/risoterapia.html',
            title: 'Inicio'
        })    
         .when('/que-ofrecemos', {
            templateUrl: 'app/components/que-ofrecemos/que-ofrecemos.html',
            title: 'Inicio'
        })   
        .when('/formacion-continua-privada', {
            templateUrl: 'app/components/que-ofrecemos/formacion-continua-privada.html',
            title: 'Inicio'
        })  
         .when('/formacion-continua-subvencionada', {
            templateUrl: 'app/components/que-ofrecemos/formacion-continua-subvencionada.html',
            title: 'Inicio'
        })    
        .when('/clientes', {
            templateUrl: 'app/components/clientes/clientes.html',
            title: 'Inicio'
        })       
        .when('/equipo', {
                    templateUrl: 'app/components/equipo/equipo.html',
                    title: 'Inicio'
                }) 
        .when('/alianzas', {
                    templateUrl: 'app/components/alianzas/alianzas.html',
                    title: 'Inicio'
                }) 
        .when('/bolsa-trabajo', {
                    templateUrl: 'app/components/bolsa-trabajo/bolsa-trabajo.html',
                    title: 'Inicio'
                }) 
        .when('/contacto', {
                    templateUrl: 'app/components/contacto/contacto.html',
                    title: 'Inicio'
                }) 

        .otherwise({
            redirectTo: '/'
        });
}]);

    
agbApp.run(['$rootScope', '$location', '$http', function ($rootScope, $location, $http) {

}]);
