var React = require('react/addons');


var Component = React.createClass({
  render: function() {
    return (
      <tr>
        <td>
          <a href={ '/actors/' + this.props.actor.id }>
            { this.props.actor.fullName }
          </a>
        </td>
        <td>{ this.props.actor.age }</td>
      </tr>
    );
  }
});


module.exports = Component;
