import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';

const RouterConfig = ({ history }) => (
    <Router history={history}>
        <Switch>
            <Route path="/" exact component={IndexPage} />
        </Switch>
    </Router>
);

export default RouterConfig;

RouterConfig.propTypes = {
    history: PropTypes.object,
};
