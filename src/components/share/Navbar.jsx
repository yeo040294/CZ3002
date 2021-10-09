import React, { Component } from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBFooter, MDBNavLink } from 'mdbreact';
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
                      to='/'
                      onClick={this.closeCollapse('mainNavbarCollapse')}
                    >
                      <strong>Home</strong>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      onClick={this.closeCollapse('mainNavbarCollapse')}
                      to='/about'
                    >
                      <strong>About</strong>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      onClick={this.closeCollapse('mainNavbarCollapse')}
                      to='/patient'
                    >
                      <strong>Patient Home</strong>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      onClick={this.closeCollapse('mainNavbarCollapse')}
                      to='/medical'
                    >
                      <strong>Medical Home</strong>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      onClick={this.closeCollapse('mainNavbarCollapse')}
                      to='/admin'
                    >
                      <strong>Admin Home</strong>
                    </MDBNavLink>
                  </MDBNavItem>
                  {/* <MDBNavItem>
                    <MDBNavLink
                      onClick={this.closeCollapse('mainNavbarCollapse')}
                      to='/medicalAssignlevel'
                    >
                      <strong>medicalAssignlevel</strong>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      onClick={this.closeCollapse('mainNavbarCollapse')}
                      to='/patient'
                    >
                      <strong>patientHome</strong>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      onClick={this.closeCollapse('mainNavbarCollapse')}
                      to='/patientGamepage'
                    >
                      <strong>patientGamepage</strong>
                    </MDBNavLink>
                  </MDBNavItem> */}
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
           
           
            
            </div>
        )
    }
}

export default Navbar;