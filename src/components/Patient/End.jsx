import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact'; 
import wellDone from '../../assets/WellDone.svg';

const End = ({result, total}) => {
    return(
        // <div id="container">
            <div id="end-body">
                <MDBContainer fluid>
                    <MDBRow>
                        <MDBCol className="end-content" md="8">
                            <MDBCard>
                                <MDBCardBody>
                                    <MDBRow id="end-first-content">
                                        <div className="wellDone-content">
                                            <img src={wellDone} className="wellDone-img" alt="img_logo"/>
                                        </div>
                                    </MDBRow>
                                    <MDBRow id="end-second-content">
                                        <p  className="h2 font-weight-bold">Thank you for your participation</p>
                                    </MDBRow>
                                    <MDBRow id="end-third-content">
                                        <p  className="h2 font-weight-bold">Your result is : {result}/{total} </p>
                                    </MDBRow>
                                    <MDBRow id="end-forth-content">
                                        <a href="/patient" class="btn homebtn"> Back to home page </a>
                                    </MDBRow> 
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        // </div>
    )
}

export default End