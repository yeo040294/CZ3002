import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBFooter, MDBNavLink } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReactComponent as Logo } from './assets/logo.svg';
import Routes from './router/Routes';
import Store from './Redux/Store/Store';
import { Provider } from 'react-redux';
import '../src/styling/index.css';

class App extends Component {
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
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.toggleCollapse('mainNavbarCollapse')}
      />
    );

    const { collapseID } = this.state;

    return (
      <Provider store={Store}>
        <Router>
        <div className='flyout'>
              <br />
              <Routes />
              <br/>
            {/* <MDBFooter color="#F7FEFF;">
              <div className='footer-copyright mb-0 py-3 text-center'>
                &copy; {new Date().getFullYear()} Copyright:
              <a href='https://www.MDBootstrap.com'> MDBootstrap.com </a>
              </div>
            </MDBFooter> */}
          </div>
        </Router>
      </Provider>


    );
  }
}

export default App;
