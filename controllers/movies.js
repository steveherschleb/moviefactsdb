var React = require('react/addons');
var Movie = require('../models/movie');
var MoviesPage = React.createFactory(require('../components/MoviesPage.jsx'));
var MoviePage= React.createFactory(require('../components/MoviePage.jsx'));
var NotFoundPage = React.createFactory(require('../components/404Page.jsx'));


/**
 ** Load movie
 **/
exports.load = function (req, res, next, id) {
  'use strict';

  new Movie({ id: id })
  .fetch({ withRelated: ['director','actors'] })
  .then(function (model) {
    if (!model) {
      res.status(404);
      return res.send(React.renderToString(new NotFoundPage()));
    }

    req.movie = model;
    next();
  }).catch(function(err) {
    next(err);
  }); 
};


/**
 ** List movies
 **/
exports.index = function (req, res, next) {
  'use strict';
  
  new Movie().fetchAll()
  .then(function(movies) {
    res.send(React.renderToString(new MoviesPage({ movies: movies.toJSON() })));
  }).catch(function(err) {
    next(err);
  }); 
};


/**
 ** Show movie
 **/
exports.show = function (req, res) {
  'use strict';
  
  res.send(React.renderToString(new MoviePage({ movie: req.movie.toJSON() })));
};
