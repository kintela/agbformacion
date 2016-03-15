 angular.module('carousel', ['ui.bootstrap'])        
       .controller('carouselController', ['$scope', function ($scope) {   
                                                                
        $scope.myInterval = 2000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        var slides = $scope.slides = [];
        var currIndex = 0;
        
        slides.push({
            image: 'img/fotos/risoterapia/outdoor-training sin agb-outdoor-training-bilbao-..globos.jpg',
            text:'Globos',
            id:currIndex++
        });
        
        slides.push({
            image: 'img/fotos/risoterapia/outdoor-training sin agb-outdoor-training-bilbao-..risas.jpg',
            text:'Risas',
            id:currIndex++
        });
        
        slides.push({
            image: 'img/fotos/risoterapia/outdoor-training sin agb-outdoor-training-bilbao-..abrazo.jpg',
            text:'Abrazo',
            id:currIndex++
        });     
        
        slides.push({
            image: 'img/fotos/risoterapia/outdoor-training sin agb-outdoor-training-bilbao-..calentamiento.jpg',
            text:'Calentamiento',
            id:currIndex++
        });        
           
        slides.push({
            image: 'img/fotos/risoterapia/outdoor-training sin agb-outdoor-training-bilbao-..espiga-2.jpg',
            text:'Espiga',
            id:currIndex++
        });        


        }]);