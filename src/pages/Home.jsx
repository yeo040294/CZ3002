
import { MDBContainer} from "mdbreact"
import Navbar from '../components/share/Navbar'
import { useHistory, Redirect } from 'react-router-dom'
import React, {useState} from 'react';

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
      
      fetch("http://34.87.71.156:8000/backend/user/login", requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result.role == 0) {
            history.push('/patient/' + result.userid)
          }
          else if (result.role == 1){
            history.push('/medical/' + result.userid)
          }
          else if (result.role == 2){
            history.push('/admin/' + result.userid)
          }
        })
        .catch(error => console.log('error', error));
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
                type="text"
                className="form-control"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            <input type="submit" value="Submit" />
            </form>
        </MDBContainer>
    )
}
export default Home;