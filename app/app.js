var agbApp = angular.module('app', ['ngRoute', 'ngAnimate','right','header','bolsaTrabajo']);

agbApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/components/home/home.html',
            title: 'Inicio'
        }) 
        .when('/risoterapia', {
            templateUrl: 'app/components/risoterapia/risoterapia.html',
            title: 'risoterapia'
        })   
        .when('/risoterapia-visor-fotos', {
            templateUrl: 'app/components/risoterapia/visor-fotos2.html',
            title: 'risoterapia-visor-fotos'
        })     
        .when('/risoterapia-en-organizaciones', {
            templateUrl: 'app/components/risoterapia/risoterapia.html#Risoterapia-en-organizaciones',
            title: 'risoterapia-en-organizaciones'
        })             
        .when('/risoterapia-que-es', {
            templateUrl: 'app/components/risoterapia/risoterapia.html#Risoterapia-que-es',
            title: 'risoterapia-que-es'
        })             
                
         .when('/que-ofrecemos', {
            templateUrl: 'app/components/que-ofrecemos/que-ofrecemos.html',
            title: 'que-ofrecemo'
        })   
        .when('/formacion-continua-privada', {
            templateUrl: 'app/components/que-ofrecemos/formacion-continua-privada.html',
            title: 'formacion-continua-privad'
        })  
         .when('/formacion-continua-subvencionada', {
            templateUrl: 'app/components/que-ofrecemos/formacion-continua-subvencionada.html',
            title: 'formacion-continua-subvencionada'
        })   
         .when('/fondo-social-europeo', {
            templateUrl: 'app/components/que-ofrecemos/fondo-social-europeo.html',
            title: 'fondo-social-europeo'
        })    
        .when('/hobetuz', {
            templateUrl: 'app/components/que-ofrecemos/hobetuz.html',
            title: 'hobetuz'
        })     
        .when('/nuevo-modelo', {
            templateUrl: 'app/components/que-ofrecemos/nuevo-modelo.html',
            title: 'nuevo-modelo'
        })    
        .when('/clientes', {
            templateUrl: 'app/components/clientes/clientes.html',
            title: 'clientes'
        })       
        .when('/equipo', {
            templateUrl: 'app/components/equipo/equipo.html',
            title: 'equipo'
        }) 
        .when('/alianzas', {
            templateUrl: 'app/components/alianzas/alianzas.html',
            title: 'alianzas'
        }) 
        .when('/bolsa-trabajo', {
            templateUrl: 'app/components/bolsa-trabajo/bolsa-trabajo.html',
            title: 'bolsa-trabajo'
        }) 
        .when('/contacto', {
            templateUrl: 'app/components/contacto/contacto.html',
            title: 'contacto'
        }) 
        .when('/outdoor-training', {
            templateUrl: 'app/components/outdoor-training/outdoor-training.html',
            title: 'outdoor-training'
        }) 
        .when('/outdoor-visor-fotos', {
            templateUrl: 'app/components/outdoor-training/visor-fotos.html',
            title: 'outdoor-visor-fotos'
        }) 
        .when('/outdoor-training-video', {
            templateUrl: 'app/components/outdoor-training/video.html',
            title: 'outdoor-training-video'
        }) 
        
        .when('/crecimiento-personal', {
            templateUrl: 'app/components/crecimiento-personal/crecimiento-personal.html',
            title: 'crecimiento-personal'
        }) 

        .otherwise({
            redirectTo: '/'
        });
}]);

    
agbApp.run(['$rootScope', '$location', '$http', function ($rootScope, $location, $http) {

}]);
