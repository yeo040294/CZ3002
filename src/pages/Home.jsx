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
import flipfloplogo from '../assets/FlipFlopLogo_2.png'
import { LoginForm } from '../components/LoginForm'
import '../styling/home.css';
// import '../styling/index.css';

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
          // <MDBContainer className="bg">  
          //   <Navbar />  
          //   <MDBRow>
          //     <MDBCol  className="lForm" md="6">
          //       <MDBCard>
          //         <MDBCardBody className="mx-4">
          //           <h2 className="h4 text-center py-4">Flip Flop</h2>    
          //           <p className="title">Login</p>
          //           {/* <hr></hr> */}
          //           <form onClick={this.handleSubmit}>
          //             <label htmlFor="username">Username</label>
          //             <input
          //               type="text"
          //               className="form-control"
          //               value={username}
          //               onChange={this.handleUsernameChange}
          //             />
          //             <label className="pwd" htmlFor="password">Password</label>
          //             <input
          //               type="text"
          //               id="defaultFormCardNameEx"
          //               className="form-control"
          //               value={password}
          //               onChange={this.handlePasswordChange}
          //             />
          //           <div className="text-center mt-4">
          //             <MDBBtn className="mb-3" type="submit" value="Submit">Log In</MDBBtn>
          //           </div>
          //           </form>
          //         </MDBCardBody>
          //       </MDBCard>
          //     </MDBCol>
          //   </MDBRow>
          // </MDBContainer>
            <LoginForm onSubmit={this.handleSubmit}/>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
  result: state.user.data
});

export default connect(mapStateToProps, { logIn }) (Home);