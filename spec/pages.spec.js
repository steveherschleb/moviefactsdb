var app = require('../app.js');
var request = require('supertest')(app);


describe('The pages controller', function () {
  'use strict';

  it('should respond to the home page', function (done) {
    request
    .get('/')
    .end(function (err, res) {
      expect(res.statusCode).toBe(200);
      done(err);
    });
  });
  
  it('should respond with the 404 page for an invalid route', function (done) {
    request
    .get('/invalid-route')
    .end(function (err, res) {
      expect(res.statusCode).toBe(404);
      done(err);
    });
  });

});
