import React, {useState, Fragment} from 'react';
import {MDBBtn} from 'mdbreact'
import {connect} from 'react-redux'
import {addMoveOutNotice} from '../action/requestAction'


const MoveOutForm = ({history,addMoveOutNotice}) => {

    const [name, setName] = useState("")
    const [dayOfMove,setDayOfMove] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [zip, setZip] = useState("")
    const [yourState,setYourState] = useState("")
    const [error, setError] = useState("")

    const onCancel=()=>{
        history.push('/')
    }

    const onSubmit = () =>{
        if ( name == "" || dayOfMove == "" || address == "" || city == "" || zip == "" || yourState == "") {
            setError("Something went wrong with your inputs, please try again")
        }
        else {
            addMoveOutNotice({
                name,
                dayOfMove,
                address,
                city,
                yourState,
                zip
            })
            
            history.push('/moveout_list')
        }

    }

        return (
            <div className="text-center m-auto">

                {error && <h3>{error}</h3>}

                <h1>Moving Out Form</h1>

                <br/>
                <p>Two week notice is required!</p>

                <div className="form-group m-auto w-50">
                    <label>Resident Name: </label>
                    <input 
                    className="form-control text-center" 
                    type="text" 
                    placeholder="Full Name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />

                    <label>Day of Move :</label>
                    <input 
                    className="form-control text-center" 
                    type="date" 
                    placeholder="At least two-weeks from today" 
                    value={dayOfMove}
                    onChange={(e) => setDayOfMove(e.target.value)}
                    />

                    <label>Street Address</label>
                    <input 
                    className="form-control text-center" 
                    type="text"  
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    />

                    <label>City</label>
                    <input 
                    className="form-control" 
                    type="text"
                    value={city}
                    onChange={(e)=> setCity(e.target.value)} 
                    />
                    <br/>

                    <label>State </label>
                    <select 
                    className="ml-2"
                    value={yourState} 
                    onChange={(e) => setYourState(e.target.value)}
                    >
                        <option value="al" >AL</option>
                        <option value="ak" >AK</option>
                        <option value="az" >AZ</option>
                        <option value="ar" >AR</option>
                        <option value="ca" >CA</option>
                        <option value="co" >CO</option>
                        <option value="ct" >CT</option>
                        <option value="de" >DE</option>
                        <option value="fl" >FL</option>
                        <option value="ga" >GA</option>
                        <option value="ct" >CT</option>
                        <option value="de" >DE</option>
                        <option value="fl" >FL</option>
                        <option value="ga" >GA</option>
                        <option value="hi" >HI</option>
                        <option value="id" >ID</option>
                        <option value="il" >IL</option>
                        <option value="in" >IN</option>
                        <option value="ia" >IA</option>
                        <option value="ks" >KS</option>
                        <option value="ky" >KY</option>
                        <option value="la" >LA</option>
                        <option value="me" >ME</option>
                        <option value="md" >MD</option>
                        <option value="ma" >MA</option>
                        <option value="mi" >MI</option>
                        <option value="mn" >MN</option>
                        <option value="ms" >MS</option>
                        <option value="mo" >MO</option>
                        <option value="mt" >MT</option>
                        <option value="ne" >NE</option>
                        <option value="nv" >NV</option>
                        <option value="nh" >NH</option>
                        <option value="nj" >NJ</option>
                        <option value="nm" >NM</option>
                        <option value="ny" >NY</option>
                        <option value="nc" >NC</option>
                        <option value="nd" >ND</option>
                        <option value="oh" >OH</option>
                        <option value="ok" >OK</option>
                        <option value="or" >OR</option>
                        <option value="pa" >PA</option>
                        <option value="ri" >RI</option>
                        <option value="sc" >SC</option>
                        <option value="sd" >SD</option>
                        <option value="tn" >TN</option>
                        <option value="tx" >TX</option>
                        <option value="ut" >UT</option>
                        <option value="vt" >VT</option>
                        <option value="va" >VA</option>
                        <option value="wa" >WA</option>
                        <option value="wv" >WV</option>
                        <option value="wi" >WI</option>
                        <option value="wy" >WY</option>
                    </select>

                    <label className="ml-5">Zip Code</label>
                    <input 
                    className="ml-2" 
                    type="text"
                    value={zip}
                    onChange={(e)=> setZip(e.target.value)} 
                    />

                    <br/>
                    <Fragment>
                        <MDBBtn className="mr-5" color="red" onClick={onCancel}>Cancel</MDBBtn>
                        <MDBBtn color="green" onClick={onSubmit}>Submit</MDBBtn>
                    </Fragment>
                </div>

            </div>
        )
}

const mapDispatchToProps={
    addMoveOutNotice
}

export default connect(undefined,mapDispatchToProps)(MoveOutForm)