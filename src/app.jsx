import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import history from './js/utils/history';
import routes from './js/config/routes';

render(<Router history={history} routes={routes}/>, document.getElementById('content'));