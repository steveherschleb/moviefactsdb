var React = require('react/addons');
var ActorsRow = require('./ActorsRow.jsx');


var Component = React.createClass({
  render: function() {
    return (
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          { this.props.actors.map(actor => <ActorsRow key={ actor.id } actor={ actor } />) }
        </tbody>
      </table>
    );
  }
});


module.exports = Component;
