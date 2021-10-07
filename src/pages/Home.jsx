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
import { LoginForm } from '../components/LoginForm'
import '../styling/home.css';
import '../styling/index.css';

class Home extends Component {    
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

    handleSubmit = (username, password) => {   
      // event.preventDefault()
      this.props.logIn(username, password)   

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
        else {
          alert("Wrong username or password")
        }
      } 
    render() {
        return (
            <LoginForm onSubmit={this.handleSubmit}/>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
  result: state.user.data
});

export default connect(mapStateToProps, { logIn }) (Home);