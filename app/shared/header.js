angular.module('header', ['ui.bootstrap'])        
       .controller('DropdownController', ['$scope', function ($scope) {
            $scope.items = [
                'The first choice!',
                'And another choice for you.',
                'but wait! A third!'
            ];

          
        }]);