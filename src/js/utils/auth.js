import LoginAction from '../actions/LoginAction';
import LoginStore from '../stores/LoginStore';

module.exports = {
    login(username, password) {
        LoginAction.loginUser(username, password);
    },

    logout(cb) {
        LoginAction.logoutUser();
    },

    getToken() {
        return localStorage.token;
    },

    loggedIn() {
        return LoginStore.isLoggedIn();
    },

    onChange() {}
}