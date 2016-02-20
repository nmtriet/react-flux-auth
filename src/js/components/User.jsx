import React from 'react';
import { render } from 'react-dom';
import jwt from 'jsonwebtoken';
import LoginStore from '../stores/LoginStore';
import AuthenticatedComponent from './AuthenticatedComponent.jsx';
import {LOGIN_SECRET_KEY} from '../constants/LoginConstants';

class User extends React.Component {
	render() {
		var user_info = jwt.verify(this.props.jwt, LOGIN_SECRET_KEY);

		return (
			<div>
				<p><strong>Id:</strong> {this.props.params.id}</p>
				{user_info['name'] ? <p><strong>Username:</strong> {user_info['name']}</p> : ''}
				{user_info['email'] ? <p><strong>Email:</strong> {user_info['email']}</p> : ''}
			</div>
		);
	}
}
module.exports = AuthenticatedComponent(User);