var React = require('react/addons');
var Base = require('./Base.jsx');
var Descriptor = require('./Descriptor.jsx');
var MoviesTable = require('./MoviesTable.jsx');


var Component = React.createClass({
  render: function() {
    return (
      <Base title={ this.props.director.fullName } activeNav='Directors'>
        <div className='container'>
          <h1>Director: { this.props.director.fullName }</h1>
          <Descriptor label='Age' value={ this.props.director.age } />

          <h3>Movies</h3>
          <MoviesTable movies={ this.props.director.movies }/> 
        </div>
      </Base>
    );
  }
})


module.exports = Component;
