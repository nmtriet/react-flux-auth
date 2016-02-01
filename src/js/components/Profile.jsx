import React from 'react';
import { render } from 'react-dom';

class Profile extends React.Component {
	render() {
		return (
			<div>
				<h2>Profile</h2>
				{this.props.children}
			</div>
		);
	}
}
module.exports = Profile;
