import React, { useState, Fragment } from "react";
import {MDBBtn} from 'mdbreact'
import {connect} from 'react-redux'
import {addWeekEndPassNotice} from '../action/requestAction'

const WeekEndPass = ({addWeekEndPassNotice,history}) => {

  const [pass, setPass] = useState("")
  const [residentName, setResidentName] = useState("")
  const [dateOfPass, setDateOfPass] = useState("")
  const [reason, setReason] = useState("")
  const [timeLeaving, setTimeLeaving] = useState("")
  const [returningDate, setReturningDate] = useState("")
  const [returningTime, setReturningTime] = useState("")
  const [nameOfVisitor, setNameOfVisitor] = useState("")
  const [numOfVisitor, setNumOfVisitor] = useState("")
  const [paroleOfficerName, setParoleOfficerName] = useState("")
  const [paroleOfficerNum, setParoleOfficerNum] = useState("")
  const [error, setError] = useState(undefined)

  const [data,setData] = useState({})

  const onSubmit = () => {

    if ( residentName == "" || dateOfPass == "" || returningDate == "" || nameOfVisitor == "" || numOfVisitor == ""){
      setError("You did not fill out the form correctly please try again.")
    }
    else {
      setData({
        residentName,
        pass,
        dateOfPass,
        reason,
        timeLeaving,
        returningDate,
        returningTime,
        nameOfVisitor,
        numOfVisitor,
        paroleOfficerName,
        paroleOfficerNum
      })

      addWeekEndPassNotice(data)

      history.push('/')
    }
  }

  const onCancel=() =>{
    history.push('/')
  }

  return (
    <div className="form-group w-50 m-auto">
      <h1>Pass for Weekend or Visitation</h1>

        <label>Request for : </label>
        <select 
        className="ml-3" 
        value={pass} 
        onChange={(e) => setPass(e.target.value)} 
        >
            <option value="pass">Pass</option>
            <option value="visit">Visit</option>
        </select> 

        <br />
        <label className="mt-4">Resident NAME : </label>
        <input 
        className="form-control text-center" 
        type="text" 
        value={residentName} 
        onChange={(e)=> setResidentName(e.target.value)} 
        placeholder="Your Name" 
        />

        <label>Date for Pass/visitation</label>
        <input 
        className="form-control text-center" 
        type="date" 
        value={dateOfPass} 
        onChange={(e) => setDateOfPass(e.target.value)} 
        placeholder="Date of your visit or pass" 
        />

        <label>Reason for Pass/Visitation : </label>
        <input 
        className="form-control text-center" 
        type="text" 
        value={reason} 
        onChange={(e) => setReason(e.target.value)} 
        placeholder="The reason for visit or pass" 
        />

        <label>Time leaving :</label>
        <input 
        className="form-control text-center" 
        type="time" 
        value={timeLeaving} 
        onChange={(e) => setTimeLeaving(e.target.value)} 
        placeholder="The time you are leaving" 
        />

        <label>Date of Returning : </label>
        <input 
        className="form-control text-center" 
        type="date" 
        value={returningDate} 
        onChange={(e) => setReturningDate(e.target.value)} 
        placeholder="The day you are returning" 
        />

        <label>Time of Returning : </label>
        <input 
        className="form-control text-center" 
        type="time" 
        value={returningTime} 
        onChange={(e) => setReturningTime(e.target.value)} 
        placeholder="The time you are returning" 
        />

        <label>Name of Person Visiting : </label>
        <input 
        className="form-control text-center"
        type="text" 
        value={nameOfVisitor} 
        onChange={(e) => setNameOfVisitor(e.target.value)} 
        placeholder="Name of the person visiting"
        /> 

        <label>Number of Person Visiting : </label>
        <input 
        className="form-control text-center" 
        type="tel" 
        value={numOfVisitor} 
        onChange={(e) => setNumOfVisitor(e.target.value)} 
        placeholder="Number of the person visiting" 
        />

        <label>Parole Officer's Name : </label>
        <input 
        className="form-control text-center" 
        type="text" 
        value={paroleOfficerName} 
        onChange={(e) => setParoleOfficerName(e.target.value)} 
        placeholder="Name of your parole officer" 
        />

        <label>Number of Parole Officer</label>
        <input 
        className="form-control text-center" 
        type="tel" 
        value={paroleOfficerNum} 
        onChange={(e) => setParoleOfficerNum(e.target.value)} 
        placeholder="Number of you parole officer" 
        />
        <br/>
        {error && <h2>{error}</h2>}
        <Fragment>
          <MDBBtn rounded color="" onClick={onCancel}>Cancel</MDBBtn>
          <MDBBtn rounded color="" onClick={onSubmit}>Submit</MDBBtn>
        </Fragment>
    </div>
  );
}

const mapDispatchToProps = {
  addWeekEndPassNotice
}

export default connect(undefined,mapDispatchToProps)(WeekEndPass);