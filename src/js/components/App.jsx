import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import Nav from './Nav.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
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