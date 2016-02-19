var mandrill = require('mandrill-api/mandrill');

var mandrill_client = new mandrill.Mandrill('ohEjhPgs1DjrfDCwfRYliQ');

function sendEmail(_name, _email, _subject,_message){
    mandrill('/messages/send',{
        message:{
            to: [{email: _email , name: _name}],
            from_email: 'info@innovup.cc',
            subject: _subject,
            text: _message
        }
    },function(error, message){
        if (error) console.log( error );
        else console.log(response);
    });
};

