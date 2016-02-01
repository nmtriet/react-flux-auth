import React from 'react';
import { render } from 'react-dom';
import auth from '../utils/auth';

class Logout extends React.Component {
	componentDidMount() {
		auth.logout();
	}

	render() {
		return <p>You are now logged out</p>;
	}
}
module.exports = Logout;