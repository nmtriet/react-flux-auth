import AppDispatcher from '../dispatchers/AppDispatcher';
import { Router, browserHistory } from 'react-router';

export default {
    loginUser: (username, password) => {
        console.log('Login action dispatches to Store');

        AppDispatcher.dispatch({
            actionType: 'LOGIN_USER',
            username: username,
            password: password
        });
    },
    
    logoutUser: () => {
        console.log('Logout action dispatches to Store');

        AppDispatcher.dispatch({
            actionType: 'LOGOUT_USER'
        });
    }
}