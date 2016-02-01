import React from 'react';
import { render } from 'react-dom';
import LoginStore from '../stores/LoginStore';

const Welcome = React.createClass({
	render() {
		var user_info = JSON.parse(localStorage.user);
		return <span>Welcome {user_info['username']}</span>
	}
})

module.exports = Welcome;
