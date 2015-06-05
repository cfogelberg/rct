'use strict';

var React = require('react');
var HelloWorld = require('./components/HelloWorld.react');
var TodoList = require('./components/TodoList.react');

var items = [
  'Learn stuff',
  'Play board games'
];

React.render(<HelloWorld who='Jimbob' />, document.getElementById('hello'));
React.render(<TodoList items={items} />, document.getElementById('todo'));
