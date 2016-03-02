/**
 * Created by Bente on 02-03-2016.
 */

var jokes = [
    "A day without sunshine is like, night.",
    "At what age is it appropriate to tell my dog that he's adopted?",
    "I intend to live forever, or die trying"
];

module.exports = {
    allJokes : jokes,

    getRandomJoke : function() {
        var randomNumber = Math.floor(Math.random() * jokes.length +1);
        return jokes[randomNumber];
    },

    addJoke : function(newJoke){
        jokes.push(newJoke);
    }
};

