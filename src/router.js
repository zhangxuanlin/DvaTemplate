import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch } from 'react-router';
import Index from './routes/Index';

const RouterConfig = ({ history }) => (
    <Router history={history}>
        <Switch>
            <Route path="/" component={Index} />
        </Switch>
    </Router>
);

RouterConfig.propTypes = {
    history: PropTypes.object,
};

export default RouterConfig;
