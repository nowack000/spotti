import React, { Component } from 'react';
import Home from './pages/Home.jsx'
import Facebook from './pages/Facebook.js';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

import NavBar from './pages/NavBar.jsx'
import styles from './App.css';


class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/blog" component={Home} />
                        <Route path="/blog/us" component={Home} />
                        <Route path="/pricing" component={Home} />
                    </Switch>
                </div>
            </HashRouter>

        );
    }
}

export default App;
