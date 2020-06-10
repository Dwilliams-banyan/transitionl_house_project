import React from 'react'
import ResidentInfo from './ResidentInfo'
import {connect} from 'react-redux'

const ResidentsList =({resident}) => (
    <div>
        {resident.map(item => {
          return  <ResidentInfo {...item} key={item.id}/>
        })}
    </div>
)

const mapStateToProps=(state) =>({
    resident : state.resident
})

export default connect(mapStateToProps)(ResidentsList)