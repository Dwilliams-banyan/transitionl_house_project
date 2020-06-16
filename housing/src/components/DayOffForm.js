import React, {useState, Fragment} from 'react'
import {MDBBtn} from 'mdbreact'
import {connect} from 'react-redux'
import {addDayOffNotice} from '../action/requestAction'
import '../style/hover.css'

const DayOffForm = ({addDayOffNotice, history}) => {
    
    const [residentName,setResidentName] = useState("")
    const [dateOfRequest,setDateOfRequest] = useState("")
    const [numOfDays,setNumOfDays] = useState(0)
    const [startTimeOff,setStartTimeOffRequested] = useState("")
    const [theReason,setTheReason] = useState("")
    const [comments,setComments] = useState("")
    const [error, setError] = useState("")

    const onSubmit = () => {
        let data = {residentName,dateOfRequest, startTimeOff, theReason, comments}

        if(residentName == "" || dateOfRequest == "" || startTimeOff == "" || theReason == "" || numOfDays <= 0 ){
            setError("Please fill out the form propertly")
        }else {
            addDayOffNotice(data)
            history.push('/day_off_request_list')
        }


    }

    const onCancel = () =>{
        history.push("/")
    }


    return (
        <div className="form-group w-50 m-auto">
            <h1> Time-Off Request Form </h1>
            {error && <h2>{error}</h2>}
            <label>Resident's name : </label>
            <input 
            type="text" 
            value={residentName} 
            onChange={(e) => setResidentName(e.target.value)}
            className="form-control" 
            />

            <label>Date : </label>
            <input 
            type="date" 
            value={dateOfRequest} 
            onChange={(e) => setDateOfRequest(e.target.value)}
            className="form-control" 
            />

            <label>The number of day's requested :</label>
            <input 
            type="number"
            value={numOfDays}
            onChange={(e) => setNumOfDays(e.target.value)}
            className="form-control"
            />

            <label>Start date of time off if approved : </label>
            <input 
            type="date" 
            value={startTimeOff} 
            onChange={(e) => setStartTimeOffRequested(e.target.value)}
            className="form-control" 
            />


            <label> Your reason for time off : </label>
            <select 
            className="ml-3 browser-default"
            value={theReason}
            onChange={(e) => setTheReason(e.target.value)}
            className="form-control"
            >
                <option value="">Please choose one</option>
                <option value="vacation">Vacation leave</option>
                <option value="sick_leave">Sick Leave</option>
                <option value="other">Other</option>
            </select>
            <label> Comments : </label>
            <textarea 
            value={comments} 
            onChange={(e) => setComments(e.target.value)} 
            className="form-control"/>
            
            <br/>        
            <div className="text-center">
                <Fragment>
                    <MDBBtn className='mr-5' color="white" rounded  onClick={onCancel}>Cancel</MDBBtn>
                    <MDBBtn rounded color="white" onClick={onSubmit}>Submit</MDBBtn>
                </Fragment>
            </div>

        </div>
    )
}

const mapDispatchToProps = {
    addDayOffNotice
}

export default connect(undefined,mapDispatchToProps)(DayOffForm)