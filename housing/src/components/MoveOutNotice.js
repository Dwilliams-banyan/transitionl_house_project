import React from 'react';
import { MDBCard, MDBCardTitle, MDBIcon } from 'mdbreact';
import '../style/hover.css'


const MoveOutNotice = ({name,dayOfMove,address,yourState,zip,city}) => {
  return (
    
       <div className="mx-auto w-50 mb-3 pt-4">
          <MDBCard className="test">
          <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
            <div className="mx-auto">
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
       </div>

  )
}



// <div class="container d-flex h-100">
//     <div class="row justify-content-center align-self-center">
//      I'm vertically centered
//     </div>
// </div>


export default MoveOutNotice;
