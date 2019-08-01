import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

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
          <NavbarBrand className="navButton" onClick={() => this.props.setView('landing', {})}>
            <img src="./images/transparentLogo.png" style={{ width: 40 }} />Clean Stride
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto text-white" navbar>
              <NavItem>
                <NavLink className="navButton text-white" onClick={() => this.props.setView('landing', {})}>Search Recovery</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navButton text-white" onClick={() => this.props.setView('meetings', {})}>Meeting Directory</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navButton text-white" onClick={() => this.props.setView('favorites', {})}>Favorited Meetings</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navButton text-white" onClick={() => this.props.setView('calendar', {})} >Calendar</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}
