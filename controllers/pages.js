var React = require('react/addons');
var HomePage = React.createFactory(require('../components/HomePage.jsx'));
var NotFoundPage = React.createFactory(require('../components/404Page.jsx'));


/**
 ** Show Home Page
 **/
exports.home = function (req, res) {
  'use strict';
  
  res.send(React.renderToString(new HomePage()));
};


/**
 ** Show 404 Page
 **/
exports.notFound = function (req, res) {
  'use strict';
  
  res.status(404);
  res.send(React.renderToString(new NotFoundPage()));
};
