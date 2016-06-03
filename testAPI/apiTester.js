/** Created by Bente on 03-03-2016.  */

var request = require("request");

var testOfPost = {
    url: "http://localhost:3000/api/newjoke",
    method: "POST",
    json : true,
    body : {joke : "This is a test joke hippopotamus"}
}
var testOfPut = {
    url: "http://localhost:3000/api/editjoke",
    method: "PUT",
    json : true,
    body : {joke : "This is a test joke hippopotamus", newjoke: "Jeg er en ny joke"}
}
var testOfDelete = {
    url: "http://localhost:3000/api/deletejoke",
    method: "DELETE",
    json : true,
    body : {joke : "Jubiii, I am alive"}
}

request(testOfPost,function(error,res,body){ // Here I test the post method.
    console.log("Test af post: "+body.joke); //Assume the service returns the new Joke
})

// Edit joke
request(testOfPut,function(error,res,body){ // Here I test the put method.
    if (!error && res.statusCode == 200) {
        console.log("Test af put: " + body.newjoke); //Assume the service returns the edited joke
    }
})

// DELETE joke
request(testOfDelete,function(error,res,body){ // Here I test the put method.
    if (!error && res.statusCode == 200) {
        console.log("Test af delete: " + body.joke); //Assume the service returns the edited joke
    }
})

// GET random joke
request("http://localhost:3000/api/joke/random", function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var randomjoke = JSON.parse(body);
        console.log("Test af get random joke: "+randomjoke.joke) // Show the HTML for the random joke homepage.
    }
})

// GET all jokes
request("http://localhost:3000/api/jokes", function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var alljokes = JSON.parse(body);               // we have to define that it is json format in order to use the body, and thereby remove the {}
        console.log("Test af jokes: "+alljokes.jokes) // Show the HTML for all the joke homepage.
    }
})
