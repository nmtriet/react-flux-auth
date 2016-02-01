import React from 'react';
import { render } from 'react-dom';

const Profile = React.createClass({
	render() {
		return (
			<div>
				<h2>Profile</h2>
				{this.props.children}
			</div>
		)
	}
})

module.exports = Profile;
