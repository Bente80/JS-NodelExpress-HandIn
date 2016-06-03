/** Created by Bente on 04-03-2016.*/

var expect = require("chai").expect;
var jokes = require("../model/jokes");
var nock = require("nock");
var testJoke = {"id": 1234, "joke": "Sunshine reggae....jubiii", "reference": "unknown"};

var n = nock('http://localhost:3000');

describe('Jokes API Get', function () {
    before(function (done) {
        n.get('/api/joke/random')
            .reply(200,testJoke );
        done();
    });

    it('should fetch the "Sunshine reggae....jubiii" joke', function () {
        jokes.getRandomJoke(function (err, joke) {
            if (err) {
                throw err;
            }
            expect(joke.reference).to.be.equal("unknown");
            expect(joke).to.be.eql(testJoke);
        })
    });
});
