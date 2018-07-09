import {Component} from "react";
import React from 'react';
import classNames from 'classnames';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

class NavBar extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <h1>to zwraca maincomponent</h1>
                <ul>
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to="/login"> Zaloguj </Link></li>
                    <li><Link to="/register"> Zarejestruj się </Link></li>
                </ul>
            </div>

        )
    }
}

export default NavBar