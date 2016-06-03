/**
 * Created by Bente on 27-05-2016.
 */

var request = require('request');

for(var i = 0; i < 5000;i++){
    request('http://localhost:3000/api/test', function (error, response, body) {
        if (!error && response.statusCode == 200) {

            console.log("jeg er i test "+ body)
        }else {
            console.log("lille fejl")
        }
    });

}