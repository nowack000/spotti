import React, { Component } from 'react';
import Home from './pages/Home.jsx'
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';




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
