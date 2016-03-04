/**
 * Created by Bente on 03-03-2016.
 */

var express = require('express');
var jokes = require('../model/jokes');
var router = express.Router();

// Here is one way of making a get method in REST:
router.get("/joke/random",function(req,res, next){
    res.send({joke: jokes.getRandomJoke()});   /// You can also:
});

// Here is another way of making a get method in REST (Mikkels way):
router.get("/jokes",function(req,res, next){
    res.send({jokes: jokes.allJokes});                 /// You can also:  res.end(JSON.stringify(jokes.allJokes));
});

router.post("/joke",function(req,res, next){
    var newjoke = req.body.joke;
    jokes.addJoke(newjoke);
    res.send({joke: newjoke});                        /// I tried another way, but did not work: res.end(JSON.stringify(jokes.addJoke(newjoke)));
});

module.exports = router;

