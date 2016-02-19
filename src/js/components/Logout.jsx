import React from 'react';
import { render } from 'react-dom';
import LoginAction from '../actions/LoginAction';

class Logout extends React.Component {
	componentDidMount() {
		LoginAction.logout();
	}

	render() {
		return <p>You are now logged out</p>;
	}
}
module.exports = Logout;