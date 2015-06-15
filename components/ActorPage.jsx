var React = require('react/addons');
var Base = require('./Base.jsx');
var Descriptor = require('./Descriptor.jsx');
var MoviesTable = require('./MoviesTable.jsx');


var Component = React.createClass({
  render: function() {
    return (
      <Base title={ this.props.actor.fullName } activeNav='Actors'>
        <div className='container'>
          <h1>Actor: { this.props.actor.fullName }</h1>
          <Descriptor label='Age' value={ this.props.actor.age } /> 

          <h3>Movies</h3>
          <MoviesTable movies={ this.props.actor.movies }/> 
        </div>
      </Base>
    );
  }
});


module.exports = Component;
