import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import LoginStore from '../stores/LoginStore';

class Nav extends React.Component {
	render() {
		var pathname = document.location.pathname;

		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" href="#">React Flux Auth Demo</a>
					</div>

					<div className="collapse navbar-collapse">
						<ul className="nav navbar-nav">
							<li className={pathname == '/' ? 'active' : ''}><Link to="/">Home</Link></li>
							<li className={pathname == '/about' ? 'active' : ''}><Link to="/about">About</Link></li>
							{LoginStore.isLoggedIn() ? ( <li className={pathname == '/profile/user/1' ? 'active' : ''}><Link to="/profile/user/1">Profile</Link></li> ) : '' }
							<li className={pathname == '/login' ? 'active' : ''}>{LoginStore.isLoggedIn() ? ( <Link to="/logout">Log out</Link> ) : ( <Link to="/login">Log in</Link> )}</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}
module.exports = Nav;