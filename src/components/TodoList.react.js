'use strict';

var React = require('react');

var TodoItem = require('./TodoItem.react');

var TodoList = React.createClass({
  getInitialState: function() {
    return {
      items: this.props.items
    };
  },

  render: function() {
    var items = this.props.items.map(function(item, index) {
      return <TodoItem key={index} item={item} />;
    })

    return <div>
      <ol>{items}</ol>
      <input id="todo-item" type="text" />
      <button onClick={this._onClickAddItem}>Add item</button>
    </div>;
  },

  _onClickAddItem: function(event) {
    var new_task_text = document.getElementById('todo-item').value;
    document.getElementById('todo-item').value = '';
    var new_items = this.state.items;
    new_items.push(new_task_text);
    this.setState({ items: new_items });
  }
});

module.exports = TodoList;
