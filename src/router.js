import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch } from 'react-router';
import Layouts from './layouts/layout';
import Index from './routes/Cockpit/index';

const RouterConfig = ({ history }) => (
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={Index}>
                {/* <Route path="/path" component={Path} /> */}
            </Route>
            <Route exact path="/home" component={Layouts}>
                {/* <Route path="/path" component={Path} /> */}
            </Route>
        </Switch>
    </Router>
);

RouterConfig.propTypes = {
    history: PropTypes.object.isRequired,
};

export default RouterConfig;
