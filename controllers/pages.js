var React = require('react/addons')
var HomePage = React.createFactory(require('../components/HomePage.jsx'));
var NotFoundPage = React.createFactory(require('../components/404Page.jsx'));


/**
 ** Show Home Page
 **/
exports.home = function (req, res, next) {
  res.send(React.renderToString(HomePage()));
};


/**
 ** Show 404 Page
 **/
exports.notFound = function (req, res, next) {
  res.status(404);
  res.send(React.renderToString(NotFoundPage()));
};
