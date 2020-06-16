import React, {useState, Fragment} from 'react';
import {connect} from 'react-redux'
import {addUser} from '../action/userActions'
import { MDBBtn } from 'mdbreact';


const SignUp = ({history,addUser}) =>{
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [number,setNumber] = useState("")
    const [userName,setUserName] = useState("")
    const [password,setPassword]= useState("")
    const [thePassword,setThePassword] = useState("")
    const [error, setError] = useState("")

    const onSubmit = () =>{
        let data = {firstName,lastName,number,userName,password,thePassword}

        if(firstName == "" || lastName == "" || number == "" || userName == "" ) {
            setError("please correctly fill out the form.")
        }else if (!password === thePassword){
            setError("Your password must match try again")
        }
        addUser(data)
    }

    const onCancel = ()=>{
        history.push('/')
    }


    return(
        <div className="form-group text-center w-50 m-auto">
            <h3>Signing Up</h3>
            {error && <h4>{error}</h4>}
            <label className="mt-5">First Name</label>
            <input className="form-control text-center" type="text" value={firstName} onChange={(e) => setFirstName(e.target.vakue)} />

            <label>Last Name</label>
            <input className="form-control text-center" type="text" value={lastName} onChange={(e) => setLastName(e.target.vakue)} />

            <label>Phone Number</label>
            <input className="form-control m-auto w-50 text-center" type="number" value={number} onChange={(e) => setNumber(e.target.vakue)} />

            <label>UserName</label>
            <input className="form-control text-center" type="text" value={userName} onChange={(e) => setUserName(e.target.vakue)} />

            <labe>Password</labe>
            <input className="form-control text-center" type="password" value={password} onChange={(e) => setPassword(e.target.vakue)} />

            <label>Re-enter Password</label>
            <input className="form-control text-center" type="passwprd" value={thePassword} onChange={(e) => setThePassword(e.target.vakue)} />
            <br/>
            <Fragment>
                <MDBBtn color="white" className="mr-5" rounded onClick={onCancel}>Cancel</MDBBtn>
                <MDBBtn color="white" rounded onClick={onSubmit}>Submit</MDBBtn>
            </Fragment>

        </div>
    )
}

const mapDispatchToProps = {
    addUser
}

export default connect(undefined,mapDispatchToProps)(SignUp)