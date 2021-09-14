import React, { Component } from 'react'
import Navbar from '../../components/Patient/Navbar'
import Footer from '../../components/share/Footer';

export default class patientHome extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                Patient Home page
                <Footer/>
            </div>
        )
    }
}
