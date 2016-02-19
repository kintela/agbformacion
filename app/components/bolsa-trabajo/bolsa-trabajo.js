angular.module('bolsaTrabajo', [])        
       .controller('BolsaTrabajoController', ['$scope','$log', function ($scope,$log) {
           
        var mandrill = require('node-mandrill')('ohEjhPgs1DjrfDCwfRYliQ'); 
        
        $scope.sendMail=function(_name, _email, _subject,_message){
            mandrill('/messages/send',{
                message:{
                    to: [{email:_email, name:_name}],
                    from_email: 'info@innovup.cc',
                    subject: _subject,
                    text: _message
                }
            },function(error,response){
                if(error) $log(error);
                else $log(response);
            });
        };
        
        }]);