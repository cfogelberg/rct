'use strict';

var React = require('react');

var TodoItem = React.createClass({
  render: function() {
    return <li>{this.props.item}</li>;
  }
});

module.exports = TodoItem;
