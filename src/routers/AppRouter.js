import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { DashBoardRouter } from './DashBoardRouter';

export const AppRouter = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/login" component={LoginScreen}/>

                    <Route path="/" component={DashBoardRouter}/>

                    <Redirect to="/login"/>
                </Switch>
            </Router>
        </div>
    )
}
