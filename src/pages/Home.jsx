
import { MDBContainer } from "mdbreact"
import Navbar from '../components/share/Navbar'
import { useHistory, Redirect } from 'react-router-dom'
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
}
export default Home;