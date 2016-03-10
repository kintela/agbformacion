angular.module('right', [])        
       .controller('rightController', ['$scope', '$location','$anchorScroll', function ($scope, $location,$anchorScroll) {

           $scope.mostrarRisoterapiaOLD = function (project) {
               //$location.path('/proyecto/' + project.node.Codigo + '/' + project.node.Descripcion);
               alert("Hola");
           };
           
           $scope.mostrarRisoterapia=function mostrarRisoterapia(){
                var elemento=document.getElementById('subMenusRisoterapia');

                if(elemento.style.display=="none"){
                    document.getElementById('subMenusRisoterapia').style.display = 'block';
                }
                else{
                    document.getElementById('subMenusRisoterapia').style.display = 'none';
                }
            };
            
            $scope.mostrarOutdoor=function mostrarOutdoor(){
                var elemento=document.getElementById('subMenusOutdoor');

                if(elemento.style.display=="none"){
                    document.getElementById('subMenusOutdoor').style.display = 'block';
                }
                else{
                    document.getElementById('subMenusOutdoor').style.display = 'none';
                }
            };
            
            $scope.goto = function(name) {
                var isOutDoor = name.indexOf('Outdoor') > -1;
                
                if(isOutDoor)
                {
                  $location.path("/outdoor-training");  
                }
                else
                {
                    $location.path("/risoterapia");
                }                
                $location.hash(name);
                $anchorScroll();
      };


        }]);