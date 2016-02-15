import React from 'react';
import { render } from 'react-dom';
import jwt from 'jsonwebtoken';
import LoginStore from '../stores/LoginStore';

class Welcome extends React.Component {
	render() {
		if (LoginStore.isLoggedIn()) {
			var user_info = LoginStore.isLoggedIn();
		}
		return (
			<span>Welcome {user_info['name'] ? user_info['name'] : ''}</span>
		);
	}
}
module.exports = Welcome;
