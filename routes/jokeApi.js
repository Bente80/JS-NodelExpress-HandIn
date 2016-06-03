/** Created by Bente on 03-03-2016. */

var express = require('express');
var jokes = require('../model/jokes');
var router = express.Router();
var cluster = require('cluster');       //_________________________________Nyt for at få tråde/cluster til at virke_____________________________

// Here is one way of making a get method in REST:
router.get("/joke/random",function(req,res, next){
    res.json({joke: jokes.getRandomJoke()});   /// You can also:
});

// Here is another way of making a get method in REST:
router.get("/jokes",function(req,res, next){
    res.json({jokes: jokes.allJokes});                 /// You can also:  res.end(JSON.stringify(jokes.allJokes));
});

router.post("/newjoke",function(req,res, next){
    var newjoke = req.body.joke;
    jokes.addJoke(newjoke);
    res.json({joke: newjoke});
});

router.delete("/deletejoke", function(req,res,next){
  var deletedJoke = req.body.joke;
    jokes.deleteJoke(deletedJoke);
    res.json({joke: deletedJoke});
});

router.put("/editjoke", function(req,res, next){
    var incommingJoke = req.body.joke;
    var editedJoke = req.body.newjoke;
    jokes.editJoke(incommingJoke, editedJoke);
    res.json({newjoke: editedJoke});
});

router.get('/test',function(req,res){             //_________________________________Nyt for at få tråde/cluster til at virke_____________________________
    res.send ({worker:cluster.worker.id});
});

module.exports = router;

