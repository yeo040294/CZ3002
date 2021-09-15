import React, { Component } from 'react'
import Card from '../../components/Card';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
//import { fetchPosts } from '../Redux/Actions/TwitterAction'
import Navbar from '../../components/Medical/Navbar';
import Footer from '../../components/share/Footer'
import PatientList from '../../components/Medical/PatientList';


class MedicalHome extends Component {
    // componentDidMount() {
    //     this.props.fetchPosts();
    // }
    state= {
        patient: [
            {
                username: "Adam111",
                name: "Adam",
            },
            {
                username: "Ben222",
                name: "Ben",
            },
            {
                username: "Cindy333",
                name: "Cindy",
            }
        ]
    }

    assign = (username) => {
        this.props.history.push("/"+ username + "/assign");
    }

    view = (username) => {
        this.props.history.push("/"+ username + "/view");
    }

    render() {
        return (
            <div>
                <Navbar/> 
                <MDBContainer>
                    Medical home page (with patient list)

                <PatientList data={this.state.patient} assign = {this.assign} view = {this.view}/>
                </MDBContainer>
                <Footer/>;
            </div>
        )
    }
}
// Home.propTypes = {
//     fetchPosts: PropTypes.func.isRequired
// }

// const mapStateToProps = state => ({
//     twitter: state.twitter.items
// });

// export default connect(mapStateToProps, { fetchPosts })(Home)
export default MedicalHome;