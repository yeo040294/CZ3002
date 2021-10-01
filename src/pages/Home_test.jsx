import React, { Component } from 'react'
import Card from '../components/Card'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import { fetchPosts } from '../Redux/Actions/TwitterAction'
import Navbar from '../components/share/Navbar'
import Footer from '../components/share/Footer'
import { useHistory, Redirect } from 'react-router-dom'

class Home extends Component {
    constructor(props) {
      super(props)   
      this.state = {
         username: '',
         password: ''
      }
      // this.handleSubmit = this.handleSubmit.bind(this);
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
      console.log(this.state.username)
      console.log(this.state.password)
      // let history = useHistory()      
      // history.push('/patient')
      if (1==1) {
        console.log("Ddfdf")
        return <Redirect to="/patient" />;
      }
      // event.preventDefault()
      fetch('http://34.87.71.156:8000/backend/user/login',{
        method:'POST',
        headers: {"Content-Type":"text/plain",
        // "Access-Control-Allow-Origin": "*",        
      },
        body: {
          "username":this.state.username,
          "password":this.state.password
          }
      })
      .then((data) => {
        console.log(data);
        // history.push('/'+ response.userType + '/' + response.userID)
      })
    }

    handleSubmit1 = (event) => {
      if (True) {
        console.log("Ddfdf")
        // return <Redirect to="/patient" />;
      }
    }
    render() {
      const {username, password} = this.state
        return (
          <MDBContainer>  
            <Navbar />  
            <h2>Flip flop mental rotational</h2>             
            <form onClick={this.handleSubmit}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={this.handleUsernameChange}
              />
              <label htmlFor="password">Password</label>
              <input
                type="text"
                className="form-control"
                value={password}
                onChange={this.handlePasswordChange}
              />
            <input type="submit" value="Submit" />
            </form>
          </MDBContainer>
        )
    }
}


export default Home
