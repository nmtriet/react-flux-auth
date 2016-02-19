import LoginAction from '../actions/LoginAction';
import LoginStore from '../stores/LoginStore';

module.exports = {
    getToken() {
        return localStorage.token;
    },

    loggedIn() {
        return LoginStore.isLoggedIn();
    },

    onChange() {}
}