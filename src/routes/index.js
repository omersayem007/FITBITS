import React from 'react';
import {Router,Route,Switch} from 'react-router';
import App from '../App';
import Login from '../components/login'
import Profile from '../components/profile'

//https://teamtreehouse.com/community/warning-you-should-not-use-route-component-and-route-children-in-the-same-route-route-children-will-be-ignored
//https://reacttraining.com/react-router/core/api/Router
//https://github.com/omersayem007/React-movie-rater/blob/master/src/App.js
//https://github.com/ReactTraining/react-router

const createRoute=()=>{

    return(
        <Router>
            <App>
                <Switch>
                    <Route
                exact  path="/"
                component={App}
                />

                <Route
                path="/login"
                component={Login}
                />

                <Route
                path="/profile"
                component={Profile}
                />

                </Switch>

            </App>
        </Router>
        
        
    )

}

export default createRoute ;