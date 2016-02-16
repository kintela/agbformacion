angular.module('header', ['ui.bootstrap'])        
       .controller('DropdownController', ['$scope','$log','$location', function ($scope,$log,$location) {
           $scope.items = [
            'formación continua subvencionada',
            'formacion continua privada'
        ];

        $scope.status = {
            isopen: false
        };

        $scope.toggled = function(open) {
            $log.log('Dropdown is now: ', open);
            $location.path('/que-ofrecemos');
            
        };
        
         $scope.mostrar = function() {
            $location.path('/que-ofrecemos');
            
        };

        $scope.toggleDropdown = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.status.isopen = !$scope.status.isopen;
        };

        $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
         
        }]);