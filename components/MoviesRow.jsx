var React = require('react/addons');


var Component = React.createClass({
  render: function() {
    return (
      <tr>
        <td>
          <a href={ '/movies/' + this.props.movie.id }>
            { this.props.movie.name }
          </a>
        </td>
        <td>{ this.props.movie.genre }</td>
        <td>{ this.props.movie.releaseYear }</td>
        <td>{ this.props.movie.rating }</td>
      </tr>
    );
  }
});


module.exports = Component;
