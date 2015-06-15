var Actor = require('../models/actor');
var React = require('react/addons');
var ActorsPage = React.createFactory(require('../components/ActorsPage.jsx'));
var ActorPage = React.createFactory(require('../components/ActorPage.jsx'));
var NotFoundPage = React.createFactory(require('../components/404Page.jsx'));

/**
 ** Load actor
 **/
exports.load = function (req, res, next, id) {
  'use strict';
  
  new Actor({ id: id })
  .fetch({ withRelated: ['movies'] })
  .then(function (model) {
    if (!model) {
      res.status(404);
      return res.send(React.renderToString(new NotFoundPage()));
    }

    req.actor = model;
    next();
  }).catch(function(err) {
    next(err);
  }); 
};


/**
 ** List actors
 **/
exports.index = function (req, res, next) {
  'use strict';
  
  new Actor().fetchAll()
  .then(function(actors) {
    res.send(React.renderToString(new ActorsPage({ actors: actors.toJSON() })));
  }).catch(function(err) {
    next(err);
  }); 
};


/**
 ** Show actor
 **/
exports.show = function (req, res) {
  'use strict';
  
  res.send(React.renderToString(new ActorPage({ actor: req.actor.toJSON() })));
};
