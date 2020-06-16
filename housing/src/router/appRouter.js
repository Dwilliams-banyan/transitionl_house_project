import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavBarApp from '../components/Navbar'
import Home from "../components/Home"
import WeekEndForm from '../components/WeekEndForm'
import MoveOutForm from '../components/MoveOutForm'
import DayOffForm from '../components/DayOffForm'
import DayOffRequestList from '../components/DayOffRequestList'
import MoveOutList from '../components/MoveOutList'
import WeekEndList from '../components/WeekEndList'
import Footer from '../components/Footer'
import AddResidentForm from "../components/AddResidentForm"
import SignUp from '../components/Sign_up'
 
const AppRouter = () => (
    <BrowserRouter>
        <div className="peach-gradient">
            <NavBarApp />
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/weekend_pass_form" component={WeekEndForm} />
                <Route path="/moveout_form" component={MoveOutForm} />
                <Route path="/day-off_form" component={DayOffForm} />
                <Route path='/sign-up_page' component={SignUp} />


                {/* only adminsters will be able to see pages under here */}
                <Route path="/moveout_list" component={MoveOutList} />
                <Route path="/weekend_pass_list" component={WeekEndList} />
                <Route path="/day-off_request_list" component={DayOffRequestList} />
                <Route path="/addresident" component={AddResidentForm} />
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
)

export default AppRouter