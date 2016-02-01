import React from 'react';
import { render } from 'react-dom';

const Dashboard = React.createClass({
	render() {
	    return (
			<div>
				<h1>Dashboard</h1>
				{this.props.children}
			</div>
		)
  	}
});
module.exports = Dashboard;
