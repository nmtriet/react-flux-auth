import React from 'react';
import { render } from 'react-dom';
import LoginStore from '../stores/LoginStore';

class Welcome extends React.Component {
	render() {
		var user_info = JSON.parse(localStorage.user);
		return <span>Welcome {user_info['name']}</span>
	}
}
module.exports = Welcome;
