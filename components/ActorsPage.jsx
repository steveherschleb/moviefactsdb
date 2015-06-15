var React = require('react/addons');
var Base = require('./Base.jsx');
var ActorsTable = require('./ActorsTable.jsx');


var Component = React.createClass({
  render: function() {
    return (
      <Base title='Actors' activeNav='Actors'>
        <div className='container'>
          <h1>Actors</h1>
          <ActorsTable actors={ this.props.actors }/> 
        </div>
      </Base>
    );
  }
})


module.exports = Component;
