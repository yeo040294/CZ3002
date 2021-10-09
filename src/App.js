import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBFooter, MDBNavLink, MDBIcon} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReactComponent as Logo } from './assets/logo.svg';
import Routes from './router/Routes';
import Store from './Redux/Store/Store';
import { Provider } from 'react-redux';
import '../src/styling/index.css';
import '../src/styling/footer.css';
import Footer from './components/share/Footer';
import FlipFlopLogo from '../src/assets/FlipFlopLogo.png';

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
        <div className="flyout">
              <br />
              <Routes />
              <br/>
                {/* <div className="footer-row">
                    <p className="content-phone">
                      <img src={FlipFlopLogo} className="footer-img-logo" alt="img_logo"/>
                      &nbsp;
                      &nbsp;
                      &nbsp;
                      &nbsp;
                      <MDBIcon icon="phone-alt" className="img-icon"/>   +65 6565 6565</p>
                    <p className="col-sm">
                      &copy; {new Date().getFullYear()} FLIP FLOP MENTAL ROTATION
                    </p>
                </div> */}
          </div>
        </Router>
      </Provider>


    );
  }
}

export default App;
