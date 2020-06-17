import React, {useState,Fragment} from 'react'
import {connect} from 'react-redux'
import {signIn} from '../action/userActions'
import {Link} from 'react-router-dom'
import { MDBBtn } from 'mdbreact'
import '../style/hover.css'

const SignIn = ({users,history,signIn}) => {

    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState()
    
    console.log(users[0],"!!!")
    const onSubmit = (users) =>{
        for (let i = 0; i < users.length; i++ ){
            if(userName === users[i].userName && password === users[i].password){
                alert("You have signed in successfully")
            }
                
            if(i === users.length){
                setError("You have entered the wrong userName or password")
            }
        }

          
       
    }

    const onCancel=()=>{
        history.push('/')
    }

    return (
        <div className="form-group m-auto w-50">
            <h2 className="mb-5 mt-5">Sign-In</h2>

            {error && <h3>{error}</h3>}

            <label className="mt-5">Enter your userName</label>
            <input 
            type="text" 
            className="form-control" 
            value={userName} onChange={(e) => setUserName(e.target.value)} />


            <label className="mt-5">Enter your password</label>
            <input 
            type="password" 
            className="form-control" 
            value={password} onChange={(e) => setPassword(e.target.value)} />

            <br/>
            <p className="mb-5">Don't have an account?
                <br/>
            <Link to="/sign-up_page"> Click here!</Link>
            </p>

            <br/>

            <Fragment>
                <MDBBtn onClick={onCancel} color="white" rounded className="mr-5">Cancel</MDBBtn>
                <MDBBtn onClick={onSubmit({users})} color="white" rounded >Sign-In</MDBBtn>
            </Fragment>
            
        </div>
    )
}

const mapStateToProps =(state) =>({
    users : state.users
})

const mapDisPatchToProps = {
    signIn
}
export default connect(mapStateToProps,mapDisPatchToProps)(SignIn)