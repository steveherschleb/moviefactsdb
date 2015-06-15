var app = require('../app.js');
var request = require('supertest')(app);


describe('The actors controller', function () {
  'use strict';

  it('should respond to the actors list', function (done) {
    request
    .get('/actors')
    .end(function (err, res) {
      expect(res.statusCode).toBe(200);
      done(err);
    });
  });
  
  it('should respond to the actor show', function (done) {
    request
    .get('/actors/1')
    .end(function (err, res) {
      expect(res.statusCode).toBe(200);
      done(err);
    });
  });
  
  it('should respond to the actor show for an invalid string actor ID', function (done) {
    request
    .get('/actors/invalid-id')
    .end(function (err, res) {
      expect(res.statusCode).toBe(404);
      done(err);
    });
  });
  
  it('should respond to the actor show for an invalid numeric actor ID', function (done) {
    request
    .get('/actors/9999')
    .end(function (err, res) {
      expect(res.statusCode).toBe(404);
      done(err);
    });
  });
});
