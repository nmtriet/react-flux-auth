import React from 'react';
import { render } from 'react-dom';
import LoginAction from '../actions/LoginAction';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false
        };
    }

    _handleSubmit(event) {
        event.preventDefault();

        const email = this.refs.email.value;
        const password = this.refs.password.value;

        LoginAction.login(email, password);
    }

    render() {
        return (
            <form onSubmit={this._handleSubmit.bind(this)}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input ref="email" placeholder="email" id="email" className="form-control" defaultValue="trietnguyen308@gmail.com" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input ref="password" placeholder="password" id="password" className="form-control" />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-default">Login</button>
                </div>
                {this.state.error && (
                    <p>Bad login information</p>
                )}
            </form>
        )
    }
};
module.exports = Login;