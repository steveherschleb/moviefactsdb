var React = require('react/addons');


var Component = React.createClass({
  render: function() {
    return (
      <tr>
        <td>
          <a href={ '/directors/' + this.props.director.id }>
            { this.props.director.fullName }
          </a>
        </td>
        <td>{ this.props.director.age }</td>
      </tr>
    );
  }
});


module.exports = Component;
