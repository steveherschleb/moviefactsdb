var React = require('react/addons');
var Base = require('./Base.jsx');
var Descriptor = require('./Descriptor.jsx');
var ActorsTable = require('./ActorsTable.jsx');


var Component = React.createClass({
  render: function() {
    return (
      <Base title={ this.props.movie.name } activeNav='Movies'>
        <div className='container'>
          <h1>Movie: { this.props.movie.name }</h1>
          <Descriptor label='Year' value={ this.props.movie.releaseYear } />
          <Descriptor label='Genre' value={ this.props.movie.genre } />
          <Descriptor label='Rating' value={ this.props.movie.rating } />
          <Descriptor label='Director' value={ this.props.movie.director.fullName } link={ '/directors/' + this.props.movie.director.id }/>

          <h3>Actors</h3>
          <ActorsTable actors={ this.props.movie.actors }/> 
        </div>
      </Base>
    );
  }
})


module.exports = Component;
