var React = require('react/addons');
var Director = require('../models/director');
var DirectorsPage = React.createFactory(require('../components/DirectorsPage.jsx'));
var DirectorPage = React.createFactory(require('../components/DirectorPage.jsx'));
var NotFoundPage = React.createFactory(require('../components/404Page.jsx'));


/**
 ** Load director
 **/
exports.load = function (req, res, next, id) {
  new Director({ id: id })
  .fetch({ withRelated: ['movies'] })
  .then(function (model) {
    if (!model) {
      res.status(404);
      return res.send(React.renderToString(NotFoundPage()));
    }
    
    req.director = model;
    next();
  }).catch(function(err) {
    next(err);
  }); 
};


/**
 ** List director
 **/
exports.index = function (req, res, next) {
  new Director().fetchAll()
  .then(function(directors) {
    res.send(React.renderToString(DirectorsPage({ directors: directors.toJSON() })));
  }).catch(function(err) {
    next(err);
  }); 
};


/**
 ** Show director
 **/
exports.show = function (req, res, next) {
  res.send(React.renderToString(DirectorPage({ director: req.director.toJSON() })));
};
