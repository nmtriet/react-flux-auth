import React from 'react';
import { render } from 'react-dom';

class User extends React.Component {
	render() {
		if (typeof localStorage.user != 'undefined') {
			var user_info = JSON.parse(localStorage.user);
		}
		return (
			<div>
				<p><strong>Id:</strong> {this.props.params.id}</p>
				{user_info['username'] ? <p><strong>Username:</strong> {user_info['username']}</p> : ''}
			</div>
		)
	}
}
module.exports = User;