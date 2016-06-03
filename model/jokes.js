/** Created by Bente on 02-03-2016. */

var jokes = [
    "A day without sunshine is like, night.",
    "At what age is it appropriate to tell my dog that he's adopted?",
    "I intend to live forever, or die trying",
    "Scooby Doo",
    "Jubiii, I am alive"
];

module.exports = {
    allJokes : jokes,

    getRandomJoke : function() {
        var randomNumber = Math.floor(Math.random() * jokes.length);
        // console.log(randomNumber);                                   tilføjet for at vise mocking af nock.
        return jokes[randomNumber];
    },

    addJoke : function(newJoke){
        jokes.push(newJoke);
    },

    deleteJoke : function(deletejoke) {
        for (var i = jokes.length - 1; i >= 0; i--) {
            if (jokes[i] === deletejoke) {
                jokes.splice(i, 1);
            }
        }
    },

    editJoke : function(jokeFind, jokeEdit){
        for (var i = jokes.length -1; i>=0; i--){
            if(jokes[i] === jokeFind){
                jokes.splice(i,1);
            }
        }
        jokes.push(jokeEdit);
    }
};

