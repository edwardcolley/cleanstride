import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Link, ButtonDropdown } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true,
      dropdownOpen: false
    };

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.toggle = this.toggle.bind(this);
    this.setViewToMeetings = this.setViewToMeetings.bind(this);
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  setViewToMeetings(){
    this.props.setView("meetings", {});
  }
  setViewToCalendar(){
    this.props.setView("calendar", {});
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">
            <img src="./images/cleanStrideLogo.png" style={{width: 100}}/>
          </NavbarBrand>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret className="mr-2"><i className="fas fa-bars"></i></DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header>Navigation</DropdownItem>
              <NavItem>
                <NavLink href="#" onClick={this.setViewToMeetings}>Meetings</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={this.setViewToCalendar}>Calendar</NavLink>
              </NavItem>
            </DropdownMenu>
          </Dropdown>
        </Navbar>
      </div>
    );
  }
}