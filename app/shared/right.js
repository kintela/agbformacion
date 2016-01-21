angular.module('right', [])        
       .controller('rightController', ['$scope', '$location', function ($scope, $location) {

           $scope.mostrarRisoterapia = function (project) {
               //$location.path('/proyecto/' + project.node.Codigo + '/' + project.node.Descripcion);
               alert("Hola");
           };
        }]);