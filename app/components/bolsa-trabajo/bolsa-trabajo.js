angular.module('bolsaTrabajo', [])        
       .controller('bolsaTrabajoController', ['$scope','$log', function ($scope,$log) {
           
        var m=new mandrill.Mandrill('ohEjhPgs1DjrfDCwfRYliQ');

        $scope.sendMail=function sendMail(){                       
            var params = {
            "message": {
                "from_email":"info@innovup.cc",
                "to":[{"email":"roberto.quintela@gmail.com"}],
                "subject": "Sending a text email from the Mandrill API",
                "text": "I'm learning the Mandrill API at Codecademy."
            }
        };

            
            m.messages.send(params,function (res) {
                $log.log(res);
            },function (err) {
                $log.log(err);
            })
        };
        
        }]);