import React from 'react';
import { render } from 'react-dom';
import LoginStore from '../stores/LoginStore';
import AuthenticatedComponent from './AuthenticatedComponent.jsx';

class Welcome extends React.Component {
	render() {
		return (
			<span>Welcome {this.props.user}</span>
		);
	}
}
module.exports = AuthenticatedComponent(Welcome);