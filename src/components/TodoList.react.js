'use strict';

var React = require('react');

var TodoItem = require('./TodoItem.react');

var TodoList = React.createClass({
  render: function() {
    var items = this.props.items.map(function(item) {
      return <TodoItem item={item} />;
    })

    return <ol>{items}</ol>;
  }
});

module.exports = TodoList;
