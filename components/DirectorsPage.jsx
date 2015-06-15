var React = require('react/addons');
var DirectorsTable = require('./DirectorsTable.jsx');
var Base = require('./Base.jsx');


var Component = React.createClass({
  render: function() {
    return (
      <Base title='Directors' activeNav='Directors'>
        <div className='container'>
          <h1>Directors</h1>
          <DirectorsTable directors={ this.props.directors }/> 
        </div>
      </Base>
    );
  }
});


module.exports = Component;
