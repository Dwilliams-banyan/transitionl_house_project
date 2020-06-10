import React from "react";

const WeekEndPass = () => {
  return (
    <div className="form-group">

        <label>Request for : </label>
        <select>
            <option value="pass">Pass</option>
            <option value="visit">Visit</option>
        </select> 

        
        <label>Participant NAME : </label>
        <input type="text" className="form-control" placeholder="Name" />
        <label>Date for Pass/visitation</label>
        <input type="number" className="form-control" />

        <label>Reason for Pass/Visitation : </label>
        <input type="text" className="form-control" />

        <label>Time leaving :</label>
        <input type="time" className="form-control" />

        <label>Time and Date Returning : </label>
        <input type="time" className="form-control" />
    </div>
  );
}

export default WeekEndPass;