'use strict';

var React = require('react');
var HelloWorld = require('./components/HelloWorld.react');

React.render(<HelloWorld who='Jimbob' />, document.getElementById('app'));
