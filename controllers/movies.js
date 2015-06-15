var React = require('react/addons')
var Movie = require('../models/movie');
var MoviesPage = React.createFactory(require('../components/MoviesPage.jsx'));
var MoviePage= React.createFactory(require('../components/MoviePage.jsx'));
var NotFoundPage = React.createFactory(require('../components/404Page.jsx'));


/**
 ** Load movie
 **/
exports.load = function (req, res, next, id) {
  new Movie({ id: id })
  .fetch({ withRelated: ['director','actors'] })
  .then(function (model) {
    if (!model) {
      res.status(404);
      return res.send(React.renderToString(NotFoundPage()));
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
  new Movie().fetchAll()
  .then(function(movies) {
    res.send(React.renderToString(MoviesPage({ movies: movies.toJSON() })));
  }).catch(function(err) {
    next(err);
  }); 
};


/**
 ** Show movie
 **/
exports.show = function (req, res) {
  res.send(React.renderToString(MoviePage({ movie: req.movie.toJSON() })));
};
