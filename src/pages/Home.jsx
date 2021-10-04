
import { MDBContainer} from "mdbreact"
import Navbar from '../components/share/Navbar'
import { useHistory, Redirect } from 'react-router-dom'
import React, {useState} from 'react';
import Cookies from 'js-cookie';
function Home() {
    let history = useHistory()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(event) {
      event.preventDefault()
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "text/plain");
      
      let data = {
        "username": username,
        "password": password
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
          Cookies.set('userid',result.userid, {path: '/'})
          Cookies.set('sessionid',result.sessionid, {path: '/'})
          Cookies.set('role',result.role, {path: '/'})
          if (result.role == 0) {
            history.push('/patient')
          }
          else if (result.role == 1){
            history.push('/medical')
          }
          else if (result.role == 2){
            history.push('/admin')
          }
        })
        .catch(e => console.log(e));
    }
    
    return (
        <MDBContainer>  
            <Navbar />  
            <h2>Flip flop mental rotational</h2>             
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <br></br>
            <input type="submit" className="btn blue" value="Submit" />
            </form>
        </MDBContainer>
    )
}
export default Home;