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

        slides.push({
            image: 'img/fotos/outdoor-training/agb-outdoor-training-Bilbao-Vitoria-Donosti-Pais-Vasco-bandera.jpg',
            text:'Bandera',
            id:currIndex++
        });

        slides.push({
            image: 'img/fotos/outdoor-training/agb-outdoor-training-Bilbao-Vitoria-Donosti-Pais-Vasco-calentamiento.jpg',
            text:'Calentamiento',
            id:currIndex++
        });

        slides.push({
            image: 'img/fotos/outdoor-training/agb-outdoor-training-Bilbao-Vitoria-Donosti-Pais-Vasco-casa-confianza.jpg',
            text:'Confianza',
            id:currIndex++
        });

        slides.push({
            image: 'img/fotos/outdoor-training/agb-outdoor-training-Bilbao-Vitoria-Donosti-Pais-Vasco-esquis.jpg',
            text:'Esquís',
            id:currIndex++
        });

        slides.push({
            image: 'img/fotos/outdoor-training/agb-outdoor-training-Bilbao-Vitoria-Donosti-Pais-Vasco-meteoritos.jpg',
            text:'Meteoritos',
            id:currIndex++
        });

        slides.push({
            image: 'img/fotos/outdoor-training/agb-outdoor-training-Bilbao-Vitoria-Donosti-Pais-Vasco-puente.jpg',
            text:'Puente',
            id:currIndex++
        });

        slides.push({
            image: 'img/fotos/outdoor-training/agb-outdoor-training-Bilbao-Vitoria-Donosti-Pais-Vasco-rio-acido.jpg',
            text:'Rio Acido',
            id:currIndex++
        });

        slides.push({
            image: 'img/fotos/outdoor-training/agb-outdoor-training-Bilbao-Vitoria-Donosti-Pais-Vasco-sacos-de-gulliver.jpg',
            text:'Sacos de Gulliver',
            id:currIndex++
        });

        slides.push({
            image: 'img/fotos/outdoor-training/agb-outdoor-training-Bilbao-Vitoria-Donosti-Pais-Vasco-telarana.jpg',
            text:'Telaraña',
            id:currIndex++
        });

        slides.push({
            image: 'img/fotos/outdoor-training/agb-outdoor-training-Bilbao-Vitoria-Donosti-Pais-Vasco-travesia-lago.jpg',
            text:'Travesía del lago',
            id:currIndex++
        });

        slides.push({
            image: 'img/fotos/outdoor-training/agb-outdoor-training-Bilbao-Vitoria-Donosti-Pais-Vasco-aula.jpg',
            text:'Aula',
            id:currIndex++
        });

        slides.push({
            image: 'img/fotos/outdoor-training/agb-outdoor-training-Bilbao-Vitoria-Donosti-Pais-Vasco-catapultas.jpg',
            text:'Catapulta',
            id:currIndex++
        });

        slides.push({
            image: 'img/fotos/outdoor-training/agb-outdoor-training-Bilbao-Vitoria-Donosti-Pais-Vasco-equipo-rescata.jpg',
            text:'Equipo de rescate',
            id:currIndex++
        });

        slides.push({
            image: 'img/fotos/outdoor-training/agb-outdoor-training-Bilbao-Vitoria-Donosti-Pais-Vasco-puente-humano.jpg',
            text:'Puente humano',
            id:currIndex++
        });

        slides.push({
            image: 'img/fotos/outdoor-training/campo-de-minas.jpg',
            text:'Campo de Minas',
            id:currIndex++
        });

        slides.push({
            image: 'img/fotos/outdoor-training/precision-multiple.jpg',
            text:'Precisión múltiple',
            id:currIndex++
        });

        slides.push({
            image: 'img/fotos/outdoor-training/Outdoor-Team-Building-Bilbao-Vitoria-Donosti-Poligono-Ciego.jpg',
            text:'Polígono Ciego',
            id:currIndex++
        });

        slides.push({
            image: 'img/fotos/outdoor-training/Outdoor-Team-Building-Bilbao-Vitoria-Donosti-Puzzle-Loco.jpg',
            text:'Puzzle Loco',
            id:currIndex++
        });

        slides.push({
            image: 'img/fotos/outdoor-training/Outdoor--Team-Building-Bilbao-Vitoria-Donosti-Telarana-Vertical.jpg',
            text:'Telaraña vertical',
            id:currIndex++
        });




        }]);