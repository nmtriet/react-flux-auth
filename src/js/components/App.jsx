import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import auth from '../utils/auth';
import LoginStore from '../stores/LoginStore';
import Nav from './Nav.jsx';

function getLoginState() {
    return {
        loggedIn: LoginStore.isLoggedIn(),
    };
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = getLoginState();
    }

    componentDidMount() {
        LoginStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        LoginStore.removeChangeListener(this.changeListener);
    }

    _onChange() {
        this.setState(getLoginState());
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Nav/>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
module.exports = App;