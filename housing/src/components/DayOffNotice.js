import React from 'react';
import { MDBCard, MDBCardTitle, MDBIcon } from 'mdbreact';


const DayOffNotice = ({residentName, dateOfRequest, timeOffRequested, 
    theReason, comments, 
    }) => {
  return (

        <div className="mx-auto w-75 mb-3 pt-4">
            <MDBCard className="indigo">
          <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
            <div className="mx-auto">
              <h5 className='pink-text'>
                <MDBIcon icon='chart-pie' /> Time-Off Request Notice for {residentName}
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>Date :  {dateOfRequest}</strong>
              </MDBCardTitle>
              <p>Resident's Name : {residentName}</p>
              <p>Time Requsted Off : {timeOffRequested}</p>
              <p>Comments : {comments}</p>
              <p>Reason for time off : {theReason} </p>       
            </div>
          </div>
        </MDBCard>
        </div>
  )

}


export default DayOffNotice;