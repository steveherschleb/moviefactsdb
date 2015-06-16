var React = require('react/addons');


var Component = React.createClass({
  render: function() {
    var element;
    if (this.props.link) {
      element = <span className='value'><a href={ this.props.link }>{ this.props.value }</a></span>;
    } else {
      element = <span className='value'>{ this.props.value }</span>;
    }
            
    return (
      <div className='descriptor'>
        { this.props.label + ': ' }
        { element }
      </div>
    );
  }
});


module.exports = Component;
