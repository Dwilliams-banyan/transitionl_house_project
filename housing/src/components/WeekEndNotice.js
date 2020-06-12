import React from 'react';
import { MDBCard, MDBCardTitle, MDBRow, MDBCol, MDBIcon } from 'mdbreact';


const WeekEndNotice = ({pass, residentName, dateOfPass, reason, 
    timeLeaving, returningDate, 
    returningTime, nameOfVisitor, 
    numOfVisitor, paroleOfficerName, paroleOfficerNum}) => {
  return (
    <MDBRow>
      <MDBCol md='8'>
        <MDBCard>
          <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
            <div>
              <h5 className='pink-text'>
                <MDBIcon icon='chart-pie' /> {residentName}
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>Week-End or Visitor Pass :  {pass}</strong>
              </MDBCardTitle>
              <p>Date of {residentName} pass :  {dateOfPass}</p>
              <p>Reason for {residentName} pass :  {reason}</p>
              <p>The time of {residentName} departure : {timeLeaving}</p>
              <p>The date that {residentName} is returning : {returningDate} </p>
              <p>The time that {residentName} is retuning : {returningTime}</p>
              <p>The name of {residentName} visitor : {nameOfVisitor}</p>
              <p>The number of {residentName} : {numOfVisitor}</p>
              <p>The name of {residentName} parole officer : {paroleOfficerName}</p>
              <p>The number of {residentName} parole officer : {paroleOfficerNum}</p>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  )
}


export default WeekEndNotice;