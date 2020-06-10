import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavBarApp from '../components/Navbar'
import Home from "../components/Home"

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <NavBarApp />
            <Switch>
                <Route path="/" exact={true} component={Home} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter