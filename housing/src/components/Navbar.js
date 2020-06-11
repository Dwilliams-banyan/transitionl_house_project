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
              <MDBNavLink to="/weekend_pass">Sign-Up</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink to="/aboutus">Sign-In</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle dark color="blue accent">
                  House Requests
                </MDBDropdownToggle>

                <MDBDropdownMenu basic>
                  <MDBDropdownItem>Visit or Weekend Pass</MDBDropdownItem>
                  <MDBDropdownItem>Time Off</MDBDropdownItem>
                  <MDBDropdownItem>Moving Out</MDBDropdownItem>
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