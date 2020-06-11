import React from 'react'
import MoveOutNotice from './MoveOutNotice'
import {connect} from 'react-redux'

const MoveOutList = (props) => {
    return (
        <div>
            <h1>Testing</h1>
            {props.request.map(item =>(
              item.request=="move out" && <MoveOutNotice key={item.id} {...item} />
            ))}
        </div>
    )
}

const mapStateToProps= (state) =>({
    request : state.request
})

export default connect(mapStateToProps)(MoveOutList)