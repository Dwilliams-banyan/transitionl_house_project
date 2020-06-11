import React from 'react';
import { MDBCard, MDBCardTitle, MDBRow, MDBCol, MDBIcon } from 'mdbreact';


const MoveOutNotice = ({name,dayOfMove,address,yourState,zip,city}) => {
  return (
    <MDBRow>
      <MDBCol md='8'>
        <MDBCard>
          <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
            <div>
              <h5 className='pink-text'>
                <MDBIcon icon='chart-pie' /> {name}
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>Day planned to move out :  {dayOfMove}</strong>
              </MDBCardTitle>
              <p>Street of new address :  {address}</p>
              <p>City of new address :  {city}</p>
              <p>State of new address : {yourState}</p>
              <p>Zip code of new address : {zip} </p>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  )
}


export default MoveOutNotice;
