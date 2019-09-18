import React, { Component, Suspense, lazy, } from 'react';
import {
    Router,
    Route,
    Switch,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ErrorBoundary from "./components/errorBoundary";

const ProductDetail = lazy(() => import("./components/productDetail"));
const Products = lazy(() => import("./components/products"));
const Login = lazy(() => import("./components/login"));
const Cart = lazy(() => import("./components/cart"));

const history = createBrowserHistory();
class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <ErrorBoundary>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route exact path="/" component={Products} />
                            <Route exact path="/products" component={Products} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/products/:id" component={ProductDetail} />
                            <Route exact path="/cart" component={Cart} />
                            {/* <Route path="/companies" component={Company} />
                            <Route path="*" component={NotFound} /> */}
                        </Switch>
                    </Suspense>
                </ErrorBoundary>
            </Router>
        )
    }
}

export default Routes;
