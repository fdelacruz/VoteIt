/** @jsx React.DOM */

var React = require('react'),
	MessageBox = require('./MessageBox');

var reactComponent = React.renderComponent(
  <MessageBox />,
  document.getElementById('app')
);
