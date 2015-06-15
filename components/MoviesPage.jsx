var React = require('react/addons');
var Base = require('./Base.jsx');
var MoviesTable = require('./MoviesTable.jsx');


var Component = React.createClass({
  render: function() {
    return (
      <Base title='Movies' activeNav='Movies'>
        <div className='container'>
          <h1>Movies</h1>
          <MoviesTable movies={ this.props.movies }/> 
        </div>
      </Base>
    );
  }
})


module.exports = Component;
