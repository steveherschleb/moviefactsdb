var app = require('../app.js');
var request = require('supertest')(app);


describe('The directors controller', function () {
  'use strict';

  it('should respond to the directors list', function (done) {
    request
    .get('/directors')
    .end(function (err, res) {
      expect(res.statusCode).toBe(200);
      done(err);
    });
  });
  
  it('should respond to the director show', function (done) {
    request
    .get('/directors/1')
    .end(function (err, res) {
      expect(res.statusCode).toBe(200);
      done(err);
    });
  });
  
  it('should respond to the director show for an invalid string director ID', function (done) {
    request
    .get('/directors/invalid-id')
    .end(function (err, res) {
      expect(res.statusCode).toBe(404);
      done(err);
    });
  });
  
  it('should respond to the director show for an invalid numeric director ID', function (done) {
    request
    .get('/directors/999')
    .end(function (err, res) {
      expect(res.statusCode).toBe(404);
      done(err);
    });
  });
});
