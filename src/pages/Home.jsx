import React, { Component } from 'react'
import Card from '../components/Card'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logIn } from '../Redux/Actions/UsersAction'
import Navbar from '../components/share/Navbar'
// import Footer from '../components/share/Footer'
import { useHistory, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'

import '../styling/home.css';
import '../styling/index.css';

class Home extends Component {
    constructor(props) {
      super(props)   
      this.state = {
         username: '',
         password: '',    
      }
    }
    
    componentDidMount() {
      let role = Cookies.get('role')
      let sessionid = Cookies.get('sessionid')
      if (sessionid) {
          if (role == 0) {
            this.props.history.push('/patient')
          }
          else if (role == 1){
            this.props.history.push('/medical')
          }
          else if (role == 2){
            this.props.history.push('/admin')
          }
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
    handleSubmit = (event) => {   
      event.preventDefault()
      this.props.logIn(this.state.username, this.state.password)   

    }
    componentDidUpdate(prevProps){
      if(this.props.result.status == 'success'){
          let role = Cookies.get('role')
          if (role == 0) {
            this.props.history.push('/patient')
          }
          else if (role == 1){
            this.props.history.push('/medical')
          }
          else if (role == 2){
            this.props.history.push('/admin')
          }
        } 
      }
    render() {
      const {username, password} = this.state
        return (
          <MDBContainer className="bg">  
            {/* <Navbar />   */}
            <MDBRow>
              <MDBCol  className="lForm" md="6">
                <MDBCard>
                  <MDBCardBody className="mx-4">
                    <h2 className="h4 text-center py-4">Flip Flop</h2>    
                    <p className="title">Login </p>
                    {/* <hr></hr> */}
                    <form onClick={this.handleSubmit}>
                      <label htmlFor="username">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={this.handleUsernameChange}
                      />
                      <label className="pwd" htmlFor="password">Password</label>
                      <input
                        type="password"
                        id="defaultFormCardNameEx"
                        className="form-control"
                        value={password}
                        onChange={this.handlePasswordChange}
                      />
                    <div className="text-center mt-4">
                    <input type="submit" className="btn blue" value="Submit" />
                    </div>
                    </form>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
  result: state.user.data
});

export default connect(mapStateToProps, { logIn }) (Home);