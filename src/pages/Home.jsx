import React, { Component } from 'react'
import Card from '../components/Card'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchPosts } from '../Redux/Actions/TwitterAction'

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
            <h2>Flip flop mental rotational</h2>             
            <form onSubmit={this.handleSubmit}>
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
              <button type="submit">Submit</button> 
            </form>
          </MDBContainer>
        )
    }
}


// const InputPage = () => {
//   return (
//     <div className="form-group">
//       <label htmlFor="username">Username</label>
//       <input
//         type="text"
//         className="form-control"
//         value={this.state.username}
//         onChange={this.handleUsernameChange}
//       />
//       <label htmlFor="password">Password</label>
//       <input
//         type="text"
//         className="form-control"
//         id="password"
//       />
//     <label htmlFor="userType">User type</label>
//       <div>
//         <select className="browser-default custom-select">
//           <option value="1">Patient</option>
//           <option value="2">Medical Staff</option>
//           <option value="3">Administrator</option>
//         </select>
//       </div>
//     </div>
//   );
// }

Home.propTypes = {
    fetchPosts: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    twitter: state.twitter.items
});

export default connect(mapStateToProps, { fetchPosts })(Home)
