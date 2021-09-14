import React, { Component } from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBDropdown, MDBIcon, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBFooter, MDBNavLink } from 'mdbreact';

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
                <MDBNavbar color='indigo' dark expand='md' fixed='top' scrolling>
                    <MDBNavbarBrand href='/' className='py-0 font-weight-bold'>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler
                        onClick={this.toggleCollapse('mainNavbarCollapse')}
                    />
                    <MDBCollapse id='mainNavbarCollapse' isOpen={collapseID} navbar>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBNavLink
                                    exact
                                    to='/patientGamepage'
                                    onClick={this.closeCollapse('mainNavbarCollapse')}
                                >
                                    <strong>Game</strong>
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink
                                    onClick={this.closeCollapse('mainNavbarCollapse')}
                                    to='/results'
                                >
                                    <strong>Results</strong>
                                </MDBNavLink>
                            </MDBNavItem>

                            <MDBNavItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle nav caret>
                                        <MDBIcon icon="user" /> {"username"}
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu className="dropdown-default">
                                        <MDBDropdownItem href="/">Profile</MDBDropdownItem>
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