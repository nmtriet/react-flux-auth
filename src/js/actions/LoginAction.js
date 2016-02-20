import AppDispatcher from '../dispatchers/AppDispatcher';
import { Router, browserHistory } from 'react-router';
import history from '../utils/history';

export default {
    login: (username, password) => {
        console.log('Login action dispatches to Store');

        AppDispatcher.dispatch({
            actionType: 'LOGIN_USER',
            username: username,
            password: password
        });

        history.replaceState(null, '/');
    },

    checkLogin: (jwt) => {
        console.log('Login action dispatches to Store');

        AppDispatcher.dispatch({
            actionType: 'LOGIN_USER',
            jwt: jwt
        });

        history.replaceState(null, '/');
    },
    
    logout: () => {
        console.log('Logout action dispatches to Store');

        AppDispatcher.dispatch({
            actionType: 'LOGOUT_USER'
        });

        history.replaceState(null, '/');
    }
}