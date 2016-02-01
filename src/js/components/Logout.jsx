import React from 'react';
import { render } from 'react-dom';
import auth from '../utils/auth';

var Logout = React.createClass({
	componentDidMount() {
		auth.logout();
	},

	render() {
		return <p>You are now logged out</p>
	}
});
module.exports = Logout;