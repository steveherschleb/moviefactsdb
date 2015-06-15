var Actor = require('../models/actor');
var React = require('react/addons')
var ActorsPage = React.createFactory(require('../components/ActorsPage.jsx'));
var ActorPage = React.createFactory(require('../components/ActorPage.jsx'));
var NotFoundPage = React.createFactory(require('../components/404Page.jsx'));

/**
 ** Load actor
 **/
exports.load = function (req, res, next, id) {
  new Actor({ id: id })
  .fetch({ withRelated: ['movies'] })
  .then(function (model) {
    if (!model) {
      res.status(404);
      return res.send(React.renderToString(NotFoundPage()));
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
  new Actor().fetchAll()
  .then(function(actors) {
    res.send(React.renderToString(ActorsPage({ actors: actors.toJSON() })));
  }).catch(function(err) {
    next(err);
  }); 
};


/**
 ** Show actor
 **/
exports.show = function (req, res) {
  res.send(React.renderToString(ActorPage({ actor: req.actor.toJSON() })));
};
