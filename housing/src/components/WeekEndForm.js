import React, { useState, Fragment } from "react";
import {MDBBtn} from 'mdbreact'
import {connect} from 'react-redux'
import {addWeekEndPassNotice} from '../action/requestAction'

const WeekEndForm = ({addWeekEndPassNotice,history}) => {

  const [pass, setPass] = useState("")
  const [residentName, setResidentName] = useState("")
  const [dateOfPass, setDateOfPass] = useState("")
  const [reason, setReason] = useState("")
  const [timeLeaving, setTimeLeaving] = useState("")
  const [returningDate, setReturningDate] = useState("")
  const [returningTime, setReturningTime] = useState("")
  const [nameOfVisitor, setNameOfVisitor] = useState("")
  const [numOfVisitor, setNumOfVisitor] = useState("")
  const [parole,setParole] = useState("")
  const [paroleOfficerName, setParoleOfficerName] = useState("")
  const [paroleOfficerNum, setParoleOfficerNum] = useState("")
  const [error, setError] = useState(undefined)
  // const [data, setData] = useState({})
  

  const onSubmit = () => {
    let data = {residentName,pass,dateOfPass,reason,timeLeaving,returningDate,returningTime,nameOfVisitor,numOfVisitor,parole,paroleOfficerName,paroleOfficerNum}
   
    switch(parole){
      case "yes":

        switch(pass){
          case "weekend":
            if(residentName == "" || dateOfPass == "" || returningDate == "" || paroleOfficerName== "" || paroleOfficerNum == ""){
              setError("Error:1:63 You did not fill enough information try again.")
              }
              addWeekEndPassNotice(data)
              history.push('/weekend_pass_list')
            break;
          
          case "visit":
            if(residentName == "" || dateOfPass == "" || nameOfVisitor == "" || numOfVisitor == "" || paroleOfficerName == "" || paroleOfficerNum == ""){
              setError("Error:2:71 You did not put your name, or date you are leaving, or date your coming back")
              }
              addWeekEndPassNotice(data)
              history.push('/weekend_pass_list')
            break;

          default:
            setError("Error:3:78 I need to know what type of pass you are requesting")
            }

      case "no":

        switch(pass){
          case "weekend":
            if(residentName == "" || dateOfPass == "" || returningDate == ""){
              setError("Error:4:86 you did not fill enough information please try again")
              }
              addWeekEndPassNotice(data)
              history.push('/weekend_pass_list')
            break;

          case "visit":
            if(residentName == "" || dateOfPass == "" || nameOfVisitor == "" || numOfVisitor == ""){
              setError("Error:5:94 Need more information before we can submit your request")
              }
              addWeekEndPassNotice(data)
              history.push('/weekend_pass_list')
            break;

          default:
            setError("Error: I need to know what type of pass you are requesting")
            }

      default:
       setError("ERROR:6:105 I need to know if you have a parole Officer")
      }


  }
  


  const onCancel=() =>{
    history.push('/')
  }

  return (
    <div className="form-group w-50 m-auto">
      <h1>Pass for Weekend or Visitation</h1>
      {error && <h3>{error}</h3>}


        <label>Type of request : </label>
        <select 
        className="ml-3 browser-default" 
        value={pass} 
        onChange={(e) => setPass(e.target.value)} 
        >
          <option value="">Select one</option>
          <option value="weekend">Week End</option>
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

        <label>Time you are leaving :</label>
        <input 
        className="form-control text-center" 
        type="time" 
        value={timeLeaving} 
        onChange={(e) => setTimeLeaving(e.target.value)} 
        placeholder="The time you are leaving" 
        />

        <label>Date of your Return : </label>
        <input 
        className="form-control text-center" 
        type="date" 
        value={returningDate} 
        onChange={(e) => setReturningDate(e.target.value)} 
        placeholder="The day you are returning" 
        />

        <label>Time you are Returning : </label>
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

        <br/>

        <label> <h6>Are you on parole?</h6></label>
        <select 
        className="ml-3 browser-default" 
        value={parole} 
        onChange={(e) => setParole(e.target.value)} 
        >
          <option value="">Select one</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select> 

        <br/>
      
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
        <div className="text-center">
        <Fragment>
          <MDBBtn className="mr-5" rounded color="red" onClick={onCancel}>Cancel</MDBBtn>
          <MDBBtn rounded color="green" onClick={onSubmit}>Submit</MDBBtn>
        </Fragment>
        </div>
    </div>
  );
}

const mapDispatchToProps = {
  addWeekEndPassNotice
}

export default connect(undefined,mapDispatchToProps)(WeekEndForm);