import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavBarApp from '../components/Navbar'
import Home from "../components/Home"
import WeekEndForm from '../components/WeekEndForm'
import MoveOutForm from '../components/MoveOutForm'
// import MoveOutNotice from '../components/MoveOutNotice'
import MoveOutList from '../components/MoveOutList'
import WeekEndList from '../components/WeekEndList'
 
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <NavBarApp />
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/weekend_pass_form" component={WeekEndForm} />
                <Route path="/moveout_request" component={MoveOutForm} />


                {/* only adminsters will be able to see pages under here */}
                <Route path="/moveout_list" component={MoveOutList} />
                <Route path="/weekend_pass_list" compomemet={WeekEndList} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter