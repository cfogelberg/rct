'use strict';

var React = require('react');

var HelloWorld = React.createClass({
  render: function() {
    var message = 'I am reacting very quickly';
    var urgent = true;
    if(urgent) {
      var foo = <b>{message}</b>;
    }
    else {
      var foo = <sub>{message}</sub>;
    }
    return <div>
      <div>
        {foo}
      </div>
      <div>
        Hello {this.props.who}!
      </div>
    </div>;
  }
});

module.exports = HelloWorld;
