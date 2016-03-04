/**
 * Created by Bente on 03-03-2016.
 */

var request = require("request");

var testOfPost = {
    url: "http://localhost:3000/api/joke",
    method: "POST",
    json : true,
    body : {joke : "This is a test joke you stupid hippopotamus"}
}
request(testOfPost,function(error,res,body){ // Here I test the post method.
    console.log("Test af post: "+body.joke); //Assume the service returns the new Joke
})

// Here is one way of dooing a test method with get:
request("http://localhost:3000/api/joke/random", function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var randomjoke = JSON.parse(body);
        console.log("Test af get random joke: "+randomjoke.joke) // Show the HTML for the random joke homepage.
    }
})

// Here is another way of dooing a test method with get (Mikkels way):
request("http://localhost:3000/api/jokes", function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var alljokes = JSON.parse(body);               // we have to define that it is json format in order to use the body, and thereby remove the {}
        console.log("Test af jokes: "+alljokes.jokes) // Show the HTML for all the joke homepage.
    }
})
