<<<<<<< HEAD

import { MDBContainer } from "mdbreact"
=======
import React, { Component } from 'react'
import Card from '../components/Card'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logIn } from '../Redux/Actions/UsersAction'
>>>>>>> e7e1060ff06cb2dfabf673aa4fc8d3f6444d71d6
import Navbar from '../components/share/Navbar'
import Footer from '../components/share/Footer'
import { useHistory, Redirect } from 'react-router-dom'
<<<<<<< HEAD
import Cookies from 'js-cookie';
import React, { Component } from 'react'
class Home extends Component {
  state = {
    username: '',
    password: ''
  }
  componentDidMount(){
    if (Cookies.get('sessionid') !== undefined){
      let role = Cookies.get('role');
      if (role === '0') {
        this.props.history.push('/patient')
      }
      else if (role === '1') {
        this.props.history.push('/medical')
      }
      else if (role === '2') {
        this.props.history.push('/admin')
      }
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");

    let data = {
      "username": this.state.username,
      "password": this.state.password
    }
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: 'follow'
    };

    fetch("http://35.247.159.114:8000/backend/user/login", requestOptions)
      .then(response => response.json())
      .then(result => {
        Cookies.set('userid', result.userid, { path: '/' })
        Cookies.set('sessionid', result.sessionid, { path: '/' })
        Cookies.set('role', result.role, { path: '/' })
        if (result.role == 0) {
          this.props.history.push('/patient')
        }
        else if (result.role == 1) {
          this.props.history.push('/medical')
        }
        else if (result.role == 2) {
          this.props.history.push('/admin')
        }
      })
      .catch(e => {
        alert('Wrong username or password')
        console.log(e)
      });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    return (
      <MDBContainer>
        <Navbar />
        <h2>Flip flop mental rotational</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            value={this.state.username}
            id="username"
            onChange={e => this.handleChange(e)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            value={this.state.password}
            id="password"
            onChange={e => this.handleChange(e)}
          />
          <br></br>
          <input type="submit" className="btn blue" value="Submit" />
        </form>
      </MDBContainer>
    )
  }
=======
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
>>>>>>> e7e1060ff06cb2dfabf673aa4fc8d3f6444d71d6
}
const mapStateToProps = (state, ownProps) => ({
  data: state.quest.results,
});

export default connect(mapStateToProps, { logIn }) (Home);
