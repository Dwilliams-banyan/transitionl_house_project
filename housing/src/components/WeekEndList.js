import React from 'react';
import WeekEndNotice from './WeekEndNotice'
import { connect } from 'react-redux'

const WeekEndList = (props) => {
    return (
        <div>
            <h1>DeMarcus Tests</h1>
            {props.request.map(item => (
                item.request == "weekend pass" && <WeekEndNotice key={item.id} {...item} />
            ))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    request: state.request
})

export default connect(mapStateToProps)(WeekEndList)