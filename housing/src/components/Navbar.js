import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";


class NavBarApp extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (

      <MDBNavbar color="indigo darken-3" dark expand="md">

        <MDBNavbarBrand>
          <strong className="white-text">Transition House</strong>
        </MDBNavbarBrand>

        <MDBNavbarToggler onClick={this.toggleCollapse} />

        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav>

            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink to="#">Sign-Up</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink to="#">Sign-In</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle  color="blue accent">
                  House Requests
                </MDBDropdownToggle>

                <MDBDropdownMenu basic>

                  <MDBNavLink to="/weekend_pass_form"> 
                    <MDBDropdownItem>Visit or Weekend Pass</MDBDropdownItem> 
                  </MDBNavLink>

                  <MDBNavLink to="/moveout_list"> 
                    <MDBDropdownItem>Time Off</MDBDropdownItem> 
                  </MDBNavLink>

                  <MDBNavLink to="/moveout_request"> 
                    <MDBDropdownItem>Moving Out</MDBDropdownItem> 
                  </MDBNavLink>

                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>

          </MDBNavbarNav>

        </MDBCollapse>
      </MDBNavbar>
   
    );
  }
}

export default NavBarApp;