import React from 'react';
import { render } from 'react-dom';

const Home = React.createClass({
	render() {
		return (
			<div>
				<h1>Homepage</h1>
				<p>Welcome to Javascript World !</p>
			</div>
		)
	}
});

module.exports = Home;