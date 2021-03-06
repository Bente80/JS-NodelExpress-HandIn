/** Created by Bente on 04-03-2016. --tester på en test server --- ænde ikke på programmmet*/

var request = require("request");
var expect = require("chai").expect;
var http = require("http");
var app = require('../app');
var server;
var TEST_PORT = 3456;
var jokes = require('../model/jokes.js')

before(function(done){
    var app = require('../app');
    server = http.createServer(app);
    server.listen(TEST_PORT,function(){
        done();
    });
})
after(function(done){
    server.close();
    done();
})

describe("Tests of the joke Api, 2 get, 2 post, 1 put & 1 delete ", function () {
    var post = {
        url: "http://localhost:" + TEST_PORT + "/api/newjoke",
        method: "POST",
        json: true,
        body: {joke: "Its better to be late than to arrive ugly"}
    };

    var post2 = {
        url: "http://localhost:" + TEST_PORT + "/api/newjoke",
        method: "POST",
        json: true,
        body: {joke: "Test"}
    };

    var put = {
        url: "http://localhost:" + TEST_PORT + "/api/editjoke",
        method: "PUT",
        json: true,
        body: {joke: "Scooby Doo", newjoke: "Ny joke"}
    };

    var del = {
        url: "http://localhost:" + TEST_PORT + "/api/deletejoke",
        method: "DELETE",
        json: true,
        body: {joke: "Test"}
    };

    it("should add a new joke", function (done) {
        request(post, function (error, res, body) {
            var addedJoke = body.joke;
            expect(addedJoke).to.be.equal("Its better to be late than to arrive ugly");
            //You should also check whether the joke actually was added to the Data-store
            done();
        });
    })

    it("should get a random joke", function(done){
        request('http://localhost:'+TEST_PORT+'/api/joke/random', function(error,res,body){
            var randomJoke = JSON.parse(body);
            expect(randomJoke.joke).to.be.a('string'),
            expect(res.statusCode).to.be.equal(200);
            done();
        })
    })

    it("should get a all jokes", function(done){
        request('http://localhost:'+TEST_PORT+'/api/jokes', function(error,res,body){
            var allJokes = JSON.parse(body);
            expect(allJokes.jokes).to.be.an('Array'),
                expect(res.statusCode).to.be.equal(200);
            done();
        })
    })

    it("should add jet another new joke", function (done) {
        request(post2, function (error, res, body) {
            var addedJoke = body.joke;
            expect(addedJoke).to.be.equal("Test");
            done();
        });
    })

    it("should delete a joke", function (done) {
        request(del, function (error, res, body) {
            var joke = body.joke;
            expect(joke).to.be.equal("Test");
            done();
        });
    })

    it("should edit a joke", function (done) {
        request(put, function (error, res, body) {
            var newjoke = body.newjoke;
            expect(newjoke).to.be.equal("Ny joke");
            done();
        });
    })

});