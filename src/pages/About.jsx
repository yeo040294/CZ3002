import React, { Component } from 'react'
import Navbar from '../components/share/Navbar'
import Footer from '../components/share/Footer'
import Medical from '../components/Medical/medical'

class About extends Component {
    render() {
        return (
            
            <div>
                <Navbar/>

               <Medical/>
                the About Page
                <Footer/>
            </div>
        )
    }
}
export default About