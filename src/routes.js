import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Products from './components/products'

const history = createBrowserHistory();
class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Products} />
                    {/* <Route path="/products/:id" component={ProductDetail} />
                            <Route path="/companies" component={Company} />
                            <Route path="*" component={NotFound} /> */}
                </Switch>
            </Router>
        )
    }
}

export default Routes;
