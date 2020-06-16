import React, {Fragment, useState} from 'react'
import {MDBBtn} from 'mdbreact'
import {connect} from 'react-redux'
import {addResident} from '../action/creatingActions'


const AddResidentForm = ({history,addResident}) => {

    const [name, setName] = useState("")
    const [dayOfBirth, setDayOfBirth] = useState("")
    const [age,setAge] = useState("")
    const [releaseDate, setReleaseDate] = useState("")
    const [parole,setParole] = useState("")
    const [moveInDate,setMoveInDate] = useState("")
    const [error, setError] = useState("")

    const onSubmit= () => {
        let data = {name,dayOfBirth,age,releaseDate,parole,moveInDate}

        if(name == "" || dayOfBirth == "" || age == "" || releaseDate == "" || parole == "" || moveInDate == ""){
            setError("There are some errors in your form please check your data.")
        }
        else{
            addResident(data)
        }


    }

    const onCancel = () => {
        history.push('/')
    }


    return (
        <div className="form-group w-50 m-auto">
            <h3>Adding to the transition house</h3>

            {error && <h4>{error}</h4>}
            <label>Name :</label>
            <input
            className="form-control text-center"
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} />

            <label>D.O.B : </label>
            <input
            className="form-control text-center"
            type="date" 
            value={dayOfBirth} 
            onChange={(e) => setDayOfBirth(e.target.value)} />

            <label>Age : </label>
            <input
            className="form-control text-center"
            type="number" min="18" 
            value={age} 
            onChange={(e) => setAge(e.target.value)} />

            <label>releaseDate : </label>
            <input
            className="form-control text-center"
            type="date" 
            value={releaseDate} 
            onChange={(e) => setReleaseDate(e.target.value)} />

            <label>On Parole : </label>
            <select
            className="form-control w-50 mx-auto text-center"
            value={parole} 
            onChange={(e) => setParole(e.target.value)} >
                <option value="">Please choose one</option>
                <option value="yes">Yes I am</option>
                <option value="no">No I'm not</option>
            </select>

            <label>Move in Date : </label>
            <input
            className="form-control text-center"
            type="date" 
            value={moveInDate} 
            onChange={(e) => setMoveInDate(e.target.value)} />
            
            <br/>
            <div className="text-center">
                <Fragment>
                    <MDBBtn className="mr-5" rounded color="white" onClick={onCancel}>Cancel</MDBBtn>
                    <MDBBtn rounded color="white" onClick={onSubmit}>Submit</MDBBtn>
                </Fragment>
            </div>

        </div>
    )
}

const mapDispatchToProps = {
    addResident
}

export default connect(undefined,mapDispatchToProps)(AddResidentForm)