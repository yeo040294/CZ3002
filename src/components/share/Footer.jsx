import React, { Component } from 'react'
import { MDBFooter, MDBIcon} from 'mdbreact';
import '../../styling/footer.css';
import FlipFlopLogo from '../../assets/FlipFlopLogo.png';

export default class Footer extends Component {
    render() {
        return (
            <div className="main-footer">
              <div className="container">
                <div className="row">
                <div className="col">
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
                  </div>
                </div>
              </div>
            </div>
        )
    }
}