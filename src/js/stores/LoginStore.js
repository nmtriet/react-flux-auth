import jwt from 'jsonwebtoken';
import BaseStore from './BaseStore';
import history from '../utils/history';
import DataAPI from '../utils/DataAPI';
import {LOGIN_USER_ACTION, LOGOUT_USER_ACTION, LOGIN_SECRET_KEY} from '../constants/LoginConstants';

class LoginStore extends BaseStore {
    constructor() {
        super();

        // Register to Dispatcher
        // Povide callback function which receives the Action base on Action type
        this.subscribe(() => this.registerToActions.bind(this));

        // Initialize state of Login Store
        this._user = null;
        this._jwt = null;
    }

    registerToActions(action) {
        console.log(action);
        switch(action.actionType) {
            case LOGIN_USER_ACTION:
                var data = DataAPI.getData(action.username, action.password);

                if (data !== false) {
                    console.log('Log in successfully');

                    // Create token
                    var token = jwt.sign(data, LOGIN_SECRET_KEY, {
                        expiresIn: 1440 // expires in 24 hours
                    });

                    // Set token to localStorage to use for authenticated requests
                    localStorage.jwt = token;

                    // Set state
                    this._user = action.username;
                    this._jwt = token;
                }

                this.emitChange();
                break;

            case LOGOUT_USER_ACTION:
                console.log('Store receives Logout action');

                delete localStorage.jwt;
                this._user = null;
                this._jwt = null;

                this.emitChange();
                break;

            default:
                break;
        };
    }

    // Get Method
    get user() { 
        return this._user;
    }

    get jwt() { 
        return this._jwt;
    }

    // Set Method
    set user(user) {
        this._user = user;
    }

    set jwt(jwt) {
        this._jwt = jwt;
    }

    // Check user logged in
    isLoggedIn() {
        if (typeof localStorage.jwt != 'undefined') {
            try {
                var decoded = jwt.verify(localStorage.jwt, LOGIN_SECRET_KEY);
                return true;
            } catch (err) {
                console.log(err);
                return false;
            }
        }
        return false;
    }
}
export default new LoginStore();