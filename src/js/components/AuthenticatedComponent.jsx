import React from 'react';
import LoginStore from '../stores/LoginStore';

export default function AuthenticatedComponent(ComposedComponent) {
    return class extends React.Component {
        static willTransitionTo(transition) {
            if (!LoginStore.isLoggedIn()) {
                transition.redirect('/login', {}, {'nextPath' : transition.path});
            }
        }

        constructor() {
            super();
            this.state = this._getLoginState();
        }

        _getLoginState() {
            return {
                loggedIn: LoginStore.isLoggedIn(),
                user: LoginStore.user,
                jwt: LoginStore.jwt
            };
        }

        componentDidMount() {
            this._loginListener = state => this.setState(this._getLoginState());
            LoginStore.addChangeListener(this._loginListener);
        }

        componentWillUnmount() {
            LoginStore.removeChangeListener(this._loginListener);
        }

        render() {
            return (
                <ComposedComponent {...this.props} user={this.state.user} jwt={this.state.jwt} loggedIn={this.state.loggedIn} />
            );
        }
    }
};