 angular.module('carouselRisoterapia', ['ui.bootstrap'])        
       .controller('carouselRisoterapiaController', ['$scope', function ($scope) {   
                                                                
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

        slides.push({
            image: 'img/fotos/risoterapia/outdoor-training sin agb-outdoor-training-bilbao-..estiramientos.jpg',
            text:'Estiramientos',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/outdoor-training sin agb-outdoor-training-bilbao-..estrella-de-mar.jpg',
            text:'Estrella de mar',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/outdoor-training sin agb-outdoor-training-bilbao-..globos-1.jpg',
            text:'Globos',
            id:currIndex++
        });        


        slides.push({
            image: 'img/fotos/risoterapia/outdoor-training sin agb-outdoor-training-bilbao-..globos-2.jpg',
            text:'Globos',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/outdoor-training sin agb-outdoor-training-bilbao-explotar-globo.jpg',
            text:'Explotar Globos',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/Vita-2011.jpg',
            text:'Vita 2011',
            id:currIndex++
        });        


        slides.push({
            image: 'img/fotos/risoterapia/outdoor-training sin agb-outdoor-training-bilbao-..pisar-globos-2.jpg',
            text:'Pisar Globos',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/outdoor-training sin agb-outdoor-training-bilbao-..peluqueria.jpg',
            text:'Pisar Globos',
            id:currIndex++
        });        


        slides.push({
            image: 'img/fotos/risoterapia/outdoor-training sin agb-outdoor-training-bilbao-..relax.jpg',
            text:'Relax',
            id:currIndex++
        });        


        slides.push({
            image: 'img/fotos/risoterapia/outdoor-training sin agb-outdoor-training-bilbao-..revolcones.jpg',
            text:'Revolcones',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/outdoor-training sin agb-outdoor-training-bilbao-..risas-2.jpg',
            text:'Risas',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/outdoor-training sin agb-outdoor-training-bilbao-..risas-3.jpg',
            text:'Risas',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/outdoor-training sin agb-outdoor-training-bilbao-..risas-4.jpg',
            text:'Risas',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/outdoor-training sin agb-outdoor-training-bilbao-..rodillo-humano.jpg',
            text:'Rodillo Humano',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/outdoor-training sin agb-outdoor-training-bilbao-..risoterapia-grupo-1.jpg',
            text:'Grupo',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/outdoor-training sin agb-outdoor-training-bilbao-..risoterapia-grupo-2.jpg',
            text:'Grupo',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/outdoor-training sin agb-outdoor-training-bilbao-..risoterapia-grupo-3.jpg',
            text:'Grupo',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/outdoor-training sin agb-outdoor-training-bilbao-..risoterapia-grupo-4.jpg',
            text:'Grupo',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/outdoor-training sin agb-outdoor-training-bilbao-..risoterapia-grupo-5.jpg',
            text:'Grupo',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/outdoor-training sin agb-outdoor-training-bilbao-..risoterapia-grupo-6.jpg',
            text:'Grupo',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/outdoor-training sin agb-outdoor-training-bilbao-..risoterapia-grupo-7.jpg',
            text:'Grupo',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/Haurreskola-2011.jpg',
            text:'Haureskola 2001',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/outdoor-training sin agb-outdoor-training-bilbao-..risoterapia-grupo-11.jpg',
            text:'Grupo',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/outdoor-training sin agb-outdoor-training-bilbao-..risoterapia-grupo-12.jpg',
            text:'Grupo',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/outdoor-training sin agb-outdoor-training-bilbao-..risoterapia-grupo-13.jpg',
            text:'Grupo',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/outdoor-training sin agb-outdoor-training-bilbao-..risoterapia-grupo-14.jpg',
            text:'Grupo',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/Pobena-2011.jpg',
            text:'Pobeña 2011',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/outdoor-training sin agb-outdoor-training-bilbao-..risoterapia-grupo-16.jpg',
            text:'Grupo',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/outdoor-training sin agb-outdoor-training-bilbao-..manzanares.jpg',
            text:'Manzanares',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/outdoor-training sin agb-outdoor-training-bilbao-..residencia-calzada.jpg',
            text:'Residencia Calzada',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/outdoor-training sin agb-outdoor-training-bilbao-..afades-2010.jpg',
            text:'Afades 2010',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/Manzanares-2011.jpg',
            text:'Manzanares 2011',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/outdoor-training sin agb-outdoor-training-bilbao-..aspace-zaragoza.jpg',
            text:'Aspace Zaragoza',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/outdoor-training sin agb-outdoor-training-bilbao-..ciudad-real.jpg',
            text:'Ciudad Real',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/outdoor-training sin agb-outdoor-training-bilbao-..ipace-mananas.jpg',
            text:'Ipace Mañanas',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/outdoor-training sin agb-outdoor-training-bilbao-..ipace-tardes.jpg',
            text:'Ipace Tardes',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/Ipace-mananas-2011.jpg',
            text:'Ipace Mañanas 2011',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/Ipace-tardes-2011.jpg',
            text:'Ipace Tardes 2011',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/Fislem-mananas-2011.jpg',
            text:'Fislem Mañanas 2011',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/Fislem-tardes-2011.jpg',
            text:'Fislem Tardes 2011',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/Scouts-2011.jpg',
            text:'Scouts 2011',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/Risoterapia-Aspace-Bilbao-2012.jpg',
            text:'Aspace Bilbao 2012',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/Risoterapia-Vita3-Vitoria.jpg',
            text:'Vita3 Vitoria',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/Risoterapia-Ipace-Mananas-2012.jpg',
            text:'Ipace Mañanas 2012',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/Risoterapia-Ipace-Tardes-2012.jpg',
            text:'Ipace Tardes 2012',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/Risoterapia-Cruz-Roja-Bizkaia-2012.jpg',
            text:'Cruz Roja Bizkaia 2012',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/Risoterapia-Ipace-2013-mananas.jpg',
            text:'Ipace Mañanas 2013',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/Risoterapia-Ipace-2013-Tardes.jpg',
            text:'Ipace Tardes 2013',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/Risoterapia-Despedida-Soltera-Monika.jpg',
            text:'Despedida Soltera Mónica',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/Risoterapia-Mas-Vision-2013.jpg',
            text:'Más Visión 2013',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/Risoterapia-Hegoalde-2013.jpg',
            text:'Hegoalde 2013',
            id:currIndex++
        });        

        slides.push({
            image: 'img/fotos/risoterapia/Risoterapia-Hegoalde-2013.jpg',
            text:'Hegoalde 2013',
            id:currIndex++
        });        

        }]);