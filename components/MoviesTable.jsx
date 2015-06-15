var React = require('react/addons');
var MoviesRow = require('./MoviesRow.jsx');


var Component = React.createClass({
  render: function() {
    return (
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Genre</th>
            <th>Year</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          { this.props.movies.map(movie => <MoviesRow key={ movie.id } movie={ movie } />) }
        </tbody>
      </table>
    );
  }
});


module.exports = Component;
