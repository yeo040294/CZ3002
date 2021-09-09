import React, { Component } from 'react'
import Card from '../components/Card'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchPosts } from '../Redux/Actions/TwitterAction'
import Navbar from '../components/share/Navbar'
import Footer from '../components/share/Footer'


class Home extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {
        return (
            <div>
                <Navbar/> 
                <MDBContainer>
               
                   

                    <MDBRow>
                    <medicalassign/>
                        {this.props.twitter && this.props.twitter.map(x => {
                            return (
                                <MDBCol lg="4">
                                    <Card post={x} />
                                </MDBCol>
                            )
                        })}

                    </MDBRow>
                </MDBContainer>
                <Footer/>;
            </div>
        )
    }
}
Home.propTypes = {
    fetchPosts: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    twitter: state.twitter.items
});

export default connect(mapStateToProps, { fetchPosts })(Home)
