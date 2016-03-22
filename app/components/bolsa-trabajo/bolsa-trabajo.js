angular.module('bolsaTrabajo', [])        
       .controller('bolsaTrabajoController', ['$scope','$log', function ($scope,$log) {
           
        /*var file = $('#fileInput')[0].files[0]; 
        var reader = new FileReader(); 
        reader.onload = function(event) { 
        var fileResult = btoa(event.target.result); */

        var m=new mandrill.Mandrill('ohEjhPgs1DjrfDCwfRYliQ');

        $scope.sendMail=function sendMail(usuario){                       
            var params = {
            "message": {
                "from_email":"info@innovup.cc",
                "to":[{"email":"roberto.quintela@gmail.com"}],
                "subject": "Bolsa de trabajo agbformacion",
                "text": "El usuario: " + usuario.nombre + " " + usuario.apellidos + "(" + usuario.telefono + ") ha rellenado el formulario de bolsa de trabajo con estas observaciones." + usuario.observaciones + ".",
                "attachments":[
                    {
                        "type":"application/pdf",
                        "name":usuario.curri
                        //"content":usuario.list
                    }
                ]
            }
        };

            
            m.messages.send(params,function (res) {
                $log.log(res);
            },function (err) {
                $log.log(err);
            })
        };
        
        }]);