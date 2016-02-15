import React from 'react';
import { render } from 'react-dom';
import jwt from 'jsonwebtoken';
import LoginStore from '../stores/LoginStore';

class User extends React.Component {
	render() {
		if (LoginStore.isLoggedIn()) {
			var user_info = LoginStore.isLoggedIn();
		}

		return (
			<div>
				<p><strong>Id:</strong> {this.props.params.id}</p>
				{user_info['name'] ? <p><strong>Username:</strong> {user_info['name']}</p> : ''}
				{user_info['email'] ? <p><strong>Email:</strong> {user_info['email']}</p> : ''}
			</div>
		);
	}
}
module.exports = User;