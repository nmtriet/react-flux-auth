import React from 'react';
import { render } from 'react-dom';
import auth from '../utils/auth';
import { createHistory, useBasename } from 'history';

const Login = React.createClass({
    getInitialState() {
        return {
            error: false
        }
    },

    handleSubmit(event) {
        event.preventDefault();

        const email = this.refs.email.value;
        const password = this.refs.password.value;

        auth.login(email, password);
    },

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label for="email">Email</label>
                    <input ref="email" placeholder="email" id="email" className="form-control" defaultValue="trietnguyen308@gmail.com" />
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
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
});
module.exports = Login;