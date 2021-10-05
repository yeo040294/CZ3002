import Cookies from 'js-cookie'
import React, { Component } from 'react'

export default class Logout extends Component {
    componentDidMount(){
        Cookies.remove('role');
        Cookies.remove('sessionid');
        Cookies.remove('userid')
        this.props.history.push('/')
    }

    /**
     * Logout page
     * @returns Logout page
     */
    render() {
        return (
            <div>
                
            </div>
        )
    }
}