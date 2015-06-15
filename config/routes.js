var pages = require('../controllers/pages');
var movies = require('../controllers/movies');
var actors = require('../controllers/actors');
var directors = require('../controllers/directors');


module.exports = function (app) {
  'use strict';
  
  //pages routes
  app.get('/', pages.home);

  //Movie routes
  app.param('movie', movies.load);
  app.get('/movies', movies.index);
  app.get('/movies/:movie', movies.show);

  //Director routes
  app.param('director', directors.load);
  app.get('/directors', directors.index);
  app.get('/directors/:director', directors.show);

  //Actor routes
  app.param('actor', actors.load);
  app.get('/actors', actors.index);
  app.get('/actors/:actor', actors.show);

  //404
  app.use(pages.notFound);

  //error handler
  app.use(function(err, req, res) {
    res.status(err.status || 500);
    res.send(err.stack);
  });
};

