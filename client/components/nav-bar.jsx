import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar style={{ backgroundColor: '#A9A9A9' }} light expand="md" className="text-white">
          <NavbarBrand className="navButton">
            <Link to="/">
              <img src="/images/transparentLogo.png" style={{ width: 45 }} />
            </Link>Clean Stride
          </NavbarBrand>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto text-white" navbar>
              <NavItem>
                <Link to="/">
                  <NavLink className="navButton text-white">Search Recovery</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/meetings">
                  <NavLink className="navButton text-white" >Meeting Directory</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/favorites">
                  <NavLink className="navButton text-white">Favorite Meetings</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/calendar">
                  <NavLink className="navButton text-white" >Calendar</NavLink>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}
