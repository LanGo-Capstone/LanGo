import React from 'react';
import './App.css';
import LoginScreen from "./components/LoginScreen";
import DashboardPage from './components/dashboard/DashboardPage';
import ProfilePage from './components/profile/ProfilePage';
import NavbarLoggedOut from "./components/common/NavbarLoggedOut";
import NavbarLoggedIn from "./components/common/NavbarLoggedIn";
import {HashRouter, Route, Switch} from "react-router-dom";

class App extends React.Component {

    render() {
        return (
            <HashRouter>
                <NavbarLoggedIn/>
                <NavbarLoggedOut/>
                <Switch>
                    <Route path={"/dashboard"}>
                        <DashboardPage/>
                    </Route>
                    <Route path={"/login"}>
                        <LoginScreen/>
                    </Route>
                    <Route path={"/profile"}>
                        <ProfilePage/>
                    </Route>
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
