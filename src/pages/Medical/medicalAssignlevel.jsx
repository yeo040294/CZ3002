import React, { Component } from 'react'
import Navbar from '../../components/share/Navbar'
import Medical from '../../components/Medical/Navbar'
import Footer from '../../components/share/Footer';

export default class medicalAssignlevel extends Component {
    render() {
        return (
            <div>
                <Navbar />
                
                <Medical/>
                <Footer/>
            </div>
        )
    }
}
