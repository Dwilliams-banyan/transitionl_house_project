import React from 'react';
import DayOffNotice from './DayOffNotice'
import { connect } from 'react-redux'

const DayOffRequestList = (props) => {
    return (
        <div>
            <h1>DeMarcus Tests TOO</h1>
            {props.request.map(item => (
                item.request == "day off" && <DayOffNotice key={item.id} {...item} />
            ))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    request: state.request
})

export default connect(mapStateToProps)(DayOffRequestList)