import Cookies from 'js-cookie'
import React, { Component } from 'react'

export default class patientReadypage extends Component {
    componentDidMount(){

    }

    /**
     * Logout page
     * @returns Logout page
     */
    render() {
        return (
            <div>
                Are you ready to start the game?

                <a href="/patientGamepage"> I'm ready </a>
            </div>
        )
    }
}