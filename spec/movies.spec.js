var app = require('../app.js');
var request = require('supertest')(app);


describe('The movies controller', function () {
  'use strict';

  it('should respond to the movies list', function (done) {
    request
    .get('/movies')
    .end(function (err, res) {
      expect(res.statusCode).toBe(200);
      done(err);
    });
  });
  
  it('should respond to the movie show', function (done) {
    request
    .get('/movies/1')
    .end(function (err, res) {
      expect(res.statusCode).toBe(200);
      done(err);
    });
  });
  
  it('should respond to the movie show for an invalid string movie ID', function (done) {
    request
    .get('/movies/invalid-id')
    .end(function (err, res) {
      expect(res.statusCode).toBe(404);
      done(err);
    });
  });
  
  it('should respond to the movie show for an invalid numeric movie ID', function (done) {
    request
    .get('/movies/9999')
    .end(function (err, res) {
      expect(res.statusCode).toBe(404);
      done(err);
    });
  });
});
