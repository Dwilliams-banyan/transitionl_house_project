import React from "react";
import { MDBCard, MDBIcon, MDBCardTitle } from "mdbreact";

const ResidentInfo = ({name, age , relaseDate, moveInDate}) => (
    <div className="mx-auto w-75 mb-3 pt-4">
        <MDBCard className="indigo">
          <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
            <div className="mx-auto">
              <h5 className='pink-text'>
                  <MDBIcon icon="chart-pie" />
                  Resident {name}
              </h5>
              <MDBCardTitle tag="h3" className="pt-2">
                  <strong>Date of Release : {relaseDate}</strong>
              </MDBCardTitle>
              <p>{name}'s age : {age}</p>
              <p>{name}'s Date of arrival : {moveInDate}</p>
            </div>
          </div>
        </MDBCard>
       
    </div>
)

export default ResidentInfo