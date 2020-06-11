import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavBarApp from '../components/Navbar'
import Home from "../components/Home"
import WeekEndPass from '../components/WeekEndPass'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <NavBarApp />
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/weekend_pass" component={WeekEndPass} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter