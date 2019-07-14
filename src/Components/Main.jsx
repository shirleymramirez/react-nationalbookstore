import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Client from './Client';
import Admin from './Admin';

class Main extends React.Component {
    render() {
        return (
            // {/* needs router to switch from client page to admin and vice versa */}
            <Router>
                <Switch>
                    <Route exact path="/" component={Client}/>
                    <Route exact path="/admin" component={Admin} />
                </Switch>
            </Router>
        )
    }
}

export default Main;