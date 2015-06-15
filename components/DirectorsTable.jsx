var React = require('react/addons');
var DirectorsRow = require('./DirectorsRow.jsx');


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
          { this.props.directors.map(director => <DirectorsRow key={ director.id } director={ director } />) }
        </tbody>
      </table>
    );
  }
});


module.exports = Component;
