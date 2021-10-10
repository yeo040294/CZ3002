import React, { Component } from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBFooter, MDBNavLink, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBIcon } from 'mdbreact';
import '../../styling/nav.css';
import Logo from '../../assets/FlipFlopLogo.png';

class Navbar extends Component {
  state = {
    collapseID: ''
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  closeCollapse = collID => () => {
    const { collapseID } = this.state;
    window.scrollTo(0, 0);
    collapseID === collID && this.setState({ collapseID: '' });
  };

  render() {
    const { collapseID } = this.state;
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.toggleCollapse('mainNavbarCollapse')}
      />
    );
    return (
      <div>
          <MDBNavbar className="nav" light expand='md' fixed='top' scrolling >
            <MDBNavbarBrand href='/' className='py-0 font-weight-bold'>
              <img src={Logo} height="30" alt="" />
            </MDBNavbarBrand>
          <MDBNavbarToggler
            onClick={this.toggleCollapse('mainNavbarCollapse')}
          />
          <MDBCollapse id='mainNavbarCollapse' isOpen={collapseID} navbar>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink
                  exact
                  to='/medical'
                  onClick={this.closeCollapse('mainNavbarCollapse')}
                >
                  <strong>Home</strong>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <MDBIcon icon="user" /> {"Profile"}
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default">
                    <MDBDropdownItem href="/profile">Profile</MDBDropdownItem>
                    <MDBDropdownItem href='/logout'>Logout</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>



      </div>
    )
  }
}

export default Navbar;