import React from 'react';
import { render } from 'react-dom';

class Dashboard extends React.Component {
	render() {
	    return (
			<div>
				<h1>Dashboard</h1>
				{this.props.children}
			</div>
		);
  	}
}
module.exports = Dashboard;
