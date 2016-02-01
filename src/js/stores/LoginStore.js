import BaseStore from './BaseStore';
import history from '../utils/history';

class LoginStore extends BaseStore {
    constructor() {
        super();
        this.subscribe(() => this.registerToActions.bind(this));
        this._user = null;
    }

    registerToActions(action) {
        console.log(action);
        switch(action.actionType) {
            case 'LOGIN_USER':
                console.log('Store receives Login action with username: ' + action.username + ' and password: ' + action.password);
                if (action.username === 'trietnguyen308@gmail.com' && action.password === '123456') {
                    console.log('Log in successfully');

                    this._user = action.username;

                    var user_info = {};
                    user_info['username'] = action.username;
                    localStorage.user = JSON.stringify(user_info);

                    history.replaceState(null, '/');
                }

                this.emitChange();
                break;

            case 'LOGOUT_USER':
                console.log('Store receives Logout action');

                this._user = null;
                delete localStorage.user;

                history.replaceState(null, '/');

                this.emitChange();
                break;

            default:
                break;
        };
    }

    set user(user) {
        this._user = user;
    }
    get user() { 
        return this._user;
    }

    isLoggedIn() {
        if (typeof localStorage.user != 'undefined') {
            return true;
        }
        return false
    }
}
export default new LoginStore();