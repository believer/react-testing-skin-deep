var React = require('react');
var PropTypes = React.PropTypes;

var Post = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <div />
    );
  }

});

module.exports = Post;
