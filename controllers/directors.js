var React = require('react/addons');
var Director = require('../models/director');
var DirectorsPage = React.createFactory(require('../components/DirectorsPage.jsx'));
var DirectorPage = React.createFactory(require('../components/DirectorPage.jsx'));
var NotFoundPage = React.createFactory(require('../components/404Page.jsx'));


/**
 ** Load director
 **/
exports.load = function (req, res, next, id) {
  'use strict';

  new Director({ id: id })
  .fetch({ withRelated: ['movies'] })
  .then(function (model) {
    if (!model) {
      res.status(404);
      return res.send(React.renderToString(new NotFoundPage()));
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
  'use strict';
  
  new Director().fetchAll()
  .then(function(directors) {
    res.send(React.renderToString(new DirectorsPage({ directors: directors.toJSON() })));
  }).catch(function(err) {
    next(err);
  }); 
};


/**
 ** Show director
 **/
exports.show = function (req, res) {
  'use strict';
  
  res.send(React.renderToString(new DirectorPage({ director: req.director.toJSON() })));
};
