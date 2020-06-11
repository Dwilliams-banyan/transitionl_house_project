import React from "react";

const WeekEndPass = () => {
  return (
    <div className="form-group w-75 m-auto text-center">
      <h1>Pass for Weekend or Visitation</h1>

        <label>Request for : </label>
        <select className="ml-3">
            <option value="pass">Pass</option>
            <option value="visit">Visit</option>
        </select> 

        <br />
        <label className="mt-4">Participant NAME : </label>
        <input type="text" className="form-control" placeholder="Your Name" />

        <label>Date for Pass/visitation</label>
        <input type="number" placeholder="Date of your visit or pass" className="form-control" />

        <label>Reason for Pass/Visitation : </label>
        <input type="text" placeholder="The reason for visit or pass" className="form-control" />

        <label>Time leaving :</label>
        <input type="time" placeholder="The time you are leaving" className="form-control" />

        <label>Time and Date Returning : </label>
        <input type="time" placeholder="The day and time you are returning" className="form-control" />

        <label>Name of Person Visiting : </label>
        <input type="text" placeholder="Nae of the person visiting" className="form-control" />

        <label>Number of Person Visiting : </label>
        <input type="tele" placeholder="Number of the person visiting" className="form-control" />

        <label>Parole Officer's Name : </label>
        <input type="text" placeholder="Name of your parole officer" className="form-control" />

        <label>Number of Parole Officer</label>
        <input type="tele" placeholder="Number of you parole officer" className="form-control" />
    </div>
  );
}

export default WeekEndPass;