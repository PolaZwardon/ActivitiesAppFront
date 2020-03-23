import React from 'react';
import { Router,
    Switch,
    Redirect,
    Route} from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import { EventPage } from '../EventPage';
import { ContactPage } from '../ContactPage';
import {CreateEventpage} from "../CreateEventPage";
import {ProfilesManagerPage} from "../ProfilesManagerPage";


class App extends React.Component {

    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();

        });

    }

    render() {
        const { user, users } = this.props;
        const { alert } = this.props;
            return (

                <div className="main-container">
                    {alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
                    <Router history={history}>

                        <Switch>
                            <PrivateRoute exact path="/" component={EventPage}/>
                            <Route path="/login" component={LoginPage} />
                            <Route path="/register" component={RegisterPage} />
                            <Route path="/events" component={EventPage} />
                            <Route path="/contact" component={ContactPage} />
                            <Route path="/profile" component={HomePage} />
                            <Route path="/profiles" component={ProfilesManagerPage} />
                            <Route path="/CreateEventPage" component={CreateEventpage} />
                            <Redirect from="*" to="/" />
                        </Switch>
                    </Router>
                </div>
            );
        }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };