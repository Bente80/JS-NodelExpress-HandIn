var express = require('express');
var jokes = require('../model/jokes'); // My own implementation.
var router = express.Router();

///* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function (req, res, next) {
  res.render('login');
});

router.get('/random', function(req, res, next){
  if(req.session.jokeCount){
  req.session.jokeCount++;
  }
  else{
    req.session.jokeCount =1;
  }
  console.log("*** Du har set en ny joke "+req.session.jokeCount+" gange");

  res.render('randomjoke',{   // the jade file name (randomjoke)
    random: jokes.getRandomJoke() // the variable in the file (random)
  });
});

router.get('/jokes', function(req, res, next){
  if(req.session.jokesCount){
    req.session.jokesCount++;
  }
  else{
    req.session.jokesCount =1;
  }
  console.log("*** Du har nu set alle jokes "+req.session.jokesCount+" gange");

  res.render('all',{   // the jade file name (all)
    jokesArray: jokes.allJokes
  });
});

router.get('/addJoke', function(req, res, next){
  if(req.session.StoreJokeCount){
    req.session.StoreJokeCount++;
  }
  else{
    req.session.StoreJokeCount =1;
  }
  console.log("**Du har nu været inde og tilføje en ny joke "+req.session.StoreJokeCount+" gange");

  res.render('addJoke'  // the jade file name (addJoke)
  );
});

router.post('/storeJoke', function(req, res, next) {
  var newJoke = req.body.writejoke;
  jokes.addJoke(newJoke);
  res.redirect('/addJoke')
});

module.exports = router;



