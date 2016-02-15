import jwt from 'jsonwebtoken';
import BaseStore from './BaseStore';
import history from '../utils/history';
import DataAPI from '../utils/DataAPI';
import {LOGIN_SECRET_KEY} from '../constants/LoginConstants';

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

                var data = DataAPI.getData(action.username, action.password);

                if (data !== false) {
                    console.log('Log in successfully');

                    this._user = action.username;

                    var token = jwt.sign(data, LOGIN_SECRET_KEY, {
                        expiresInMinutes: 1440 // expires in 24 hours
                    });
                    localStorage.token = token;

                    history.replaceState(null, '/');
                }

                this.emitChange();
                break;

            case 'LOGOUT_USER':
                console.log('Store receives Logout action');

                this._user = null;
                delete localStorage.token;

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
        if (typeof localStorage.token != 'undefined') {
            try {
                var decoded = jwt.verify(localStorage.token, LOGIN_SECRET_KEY);
                return decoded;
            } catch (err) {
                console.log(err);
                return false;
            }
        }
        return false;
    }
}
export default new LoginStore();