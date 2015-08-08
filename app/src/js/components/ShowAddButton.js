/** @jsx React.DOM */

var React = require('react');

var ShowAddButton  = React.createClass({

		render: function() {

			var classString, buttonText;

			if (this.props.displayed) {
				classString = 'btn btn-defaut btn-block';
				buttonText = 'Cancel';
			} else {
				classString = 'btn btn-success btn-block';
				buttonText = 'Create new item';
			}

			return (
          		<button className={classString}
						onClick={this.props.onToggleForm}>
				   		{buttonText}
				</button>
			);
		}

});

module.exports = ShowAddButton;
