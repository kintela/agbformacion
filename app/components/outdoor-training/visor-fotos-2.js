angular.module('carouselOutdoor', ['ui.bootstrap'])        
       .controller('carouselOutdoorController', ['$scope', function ($scope) {   
                                                                
        $scope.myInterval = 2000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        var slides = $scope.slides = [];
        var currIndex = 0;
        
        slides.push({
            image: 'img/fotos/outdoor-training/agb-outdoor-training-Bilbao-Vitoria-Donosti-Pais-Vasco-equilibrio.jpg',
            text:'Equilibrio',
            id:currIndex++
        });
        
        slides.push({
            image: 'img/fotos/outdoor-training/agb-outdoor-training-Bilbao-Vitoria-Donosti-Pais-Vasco-escalada.jpg',
            text:'Escalada',
            id:currIndex++
        });

        slides.push({
            image: 'img/fotos/outdoor-training/agb-outdoor-training-Bilbao-Vitoria-Donosti-Pais-Vasco-apoyo.jpg',
            text:'Apoyo',
            id:currIndex++
        });


        }]);