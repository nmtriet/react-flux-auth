import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import history from './js/utils/history';
import routes from './js/config/routes';
import LoginAction from './js/actions/LoginAction';

let jwt = localStorage.getItem('jwt');
if (jwt) {
	LoginAction.checkLogin(jwt);
}

render(<Router history={history} routes={routes}/>, document.getElementById('content'));