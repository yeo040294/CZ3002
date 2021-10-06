import React, { Component } from 'react'
import Card from '../components/Card'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logIn } from '../Redux/Actions/UsersAction'
import Navbar from '../components/share/Navbar'
import Footer from '../components/share/Footer'
import { useHistory, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'

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
                type="password"
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
const mapStateToProps = (state, ownProps) => ({
  data: state.quest.results,
});

export default connect(mapStateToProps, { logIn }) (Home);
