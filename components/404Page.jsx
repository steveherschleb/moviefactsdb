var React = require('react/addons');
var Base = require('./Base.jsx');


var Component = React.createClass({
  render: function() {
    return (
      <Base title='Not Found'>
        <div className='container' id='notFound'>
          <h1>404</h1>
          <p>Yikes! We couldn't find the resource you're looking for.</p>
        </div>
      </Base>
    );
  }
})


module.exports = Component;
