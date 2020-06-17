import React from 'react'
import { MDBRow, MDBCol, MDBContainer, MDBCard, MDBIcon, MDBCardTitle } from 'mdbreact'
import {Link} from "react-router-dom"

const AfterSignUp = ()=>{
    return (
        <div className="text-center mt-5">
            <h1>What would you like to do today?</h1>
            <MDBContainer className="mt-5">
                <MDBRow>
                    <MDBCol>
                        <Link to="/weekend_pass_list">
                            <MDBCard
                            className="card-image"
                            style={{backgroundImage:"url('https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg')" }}
                            >
                                <div
                                className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4"
                                >
                                    <div>
                                        <h5 className="green-text">
                                            <MDBIcon icon="chart-pie"/> Resdient's Visit Requests
                                        </h5>

                                        <MDBCardTitle tag="h3" className="pt-2">
                                            <strong>To see any visit your residents has requested</strong>
                                        </MDBCardTitle>
                                    </div>

                                </div>
                            </MDBCard>
                        </Link>
                    </MDBCol>

                    <MDBCol className="">
                        <Link to="/weekend_pass_list">
                            <MDBCard
                            className="card-image"
                            style={{backgroundImage:"url('https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg')" }}
                            >
                                <div
                                className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4"
                                >
                                    <div>
                                        <h5 className="green-text">
                                            <MDBIcon icon="chart-pie"/> Resident's Week-end Requests 
                                        </h5>

                                        <MDBCardTitle tag="h3" className="pt-2">
                                            <strong>To see any week-end pass your residents has requested</strong>
                                        </MDBCardTitle>
                                    </div>

                                </div>
                            </MDBCard>
                        </Link>
                    </MDBCol>
                </MDBRow>

                    <br/>

                <MDBRow>
                <MDBCol>
                        <Link to="/day-off_request_list">
                            <MDBCard
                            className="card-image"
                            style={{backgroundImage:"url('https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg')" }}
                            >
                                <div
                                className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4"
                                >
                                    <div>
                                        <h5 className="green-text">
                                            <MDBIcon icon="chart-pie"/> Resident's Time Off Requests
                                        </h5>

                                        <MDBCardTitle tag="h3" className="pt-2">
                                            <strong>To see any time-off your residents has requested</strong>
                                        </MDBCardTitle>
                                    </div>

                                </div>
                            </MDBCard>
                        </Link>
                    </MDBCol>

                    <MDBCol className="">
                        <Link to="/moveout_list">
                            <MDBCard
                            className="card-image"
                            style={{backgroundImage:"url('https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg')" }}
                            >
                                <div
                                className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4"
                                >
                                    <div>
                                        <h5 className="green-text">
                                            <MDBIcon icon="chart-pie"/> Resident's two-week notice
                                        </h5>

                                        <MDBCardTitle tag="h3" className="pt-2">
                                            <strong>To see if any residents has put in a two-week move out notice</strong>
                                        </MDBCardTitle>
                                    </div>

                                </div>
                            </MDBCard>
                        </Link>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default AfterSignUp
