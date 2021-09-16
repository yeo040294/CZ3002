import React, { Component } from 'react'
import Card from '../components/Card'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBCardHeader } from "mdbreact"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchPosts } from '../Redux/Actions/TwitterAction'
import Navbar from '../components/share/Navbar'
import Footer from '../components/share/Footer'
import '../css/login.css'
import image from '../images/undraw_doctors_hwty.png'

class Home extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         passwprd: ''
      }
    }

    handleUsernameChange = (event) => {
      this.setState({
        username: event.target.value
      })
    }
    handlePasswordChange = (event) => {
      this.setState({
        password: event.target.value
      })
    }
    handleSubmit = event => {
      console.log(this.state.username)
      console.log(this.state.password)
      event.preventDefault()
    }
    render() {
      const {username, password} = this.state
        return (
          <MDBContainer>  
            <Navbar />  
              <MDBRow id="box" className="d-flex justify-content-center">
                <MDBCol md="10" className="shadow-box-example z-depth-5"> 
                <MDBRow>
                  <MDBCol md="5">
                    {/* <h2>Flip Flop Mental Rotation System</h2> */}
                    <img src={require('../images/undraw_doctors_hwty.png')} />
                  </MDBCol>
                  <MDBCol md="7">
                    <form onSubmit={this.handleSubmit}>
                      <h3><strong>Sign In</strong></h3>
                      <label htmlFor="username">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={this.handleUsernameChange}
                      />
                      <br/>
                      <label htmlFor="password">Password</label>
                      <input
                        type="text"
                        className="form-control"
                        value={password}
                        onChange={this.handlePasswordChange}
                      />
                      <div id="btnSub" className="text-center mt-4">
                        <MDBBtn  gradient="blue" rounded
                           className='btn-block z-depth-1' type="submit">Submit</MDBBtn> 
                      </div>
                    </form>
                  </MDBCol>
                </MDBRow>

                </MDBCol>
                </MDBRow>
          </MDBContainer>
        )
    }
}

Home.propTypes = {
    fetchPosts: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    twitter: state.twitter.items
});

export default connect(mapStateToProps, { fetchPosts })(Home)
