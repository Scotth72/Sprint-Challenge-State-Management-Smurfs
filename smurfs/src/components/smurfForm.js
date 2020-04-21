import React, { useState, useEffect } from "react";
import { getSmurfData, handleNewSmurf } from "../actions/smurfActions";
import { connect } from "react-redux";
// import axios from "axios";

const SmurfForm = (props) => {
  //   console.log(props, "this is a smurf props");

  const [newSmurf, setnewSmurf] = useState({
    name: "",
    age: "",
    height: "",
    id: Date.now(),
  });

  const handleChanges = (e) => {
    setnewSmurf({
      ...newSmurf,
      [e.target.name]: e.target.value,
      [e.target.age]: e.target.value,
      [e.target.height]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.getSmurfData();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name"> Name</label>
      <input
        onChange={handleChanges}
        name="name"
        type="text"
        value={newSmurf.name}
      />{" "}
      <br />
      <label htmlFor="age"> Age</label>
      <input
        onChange={handleChanges}
        name="age"
        type="number"
        value={newSmurf.age}
      />{" "}
      <br />
      <label htmlFor="height"> Height</label>
      <input
        onChange={handleChanges}
        name="height"
        type="text"
        value={newSmurf.height}
      />{" "}
      <br />
      <label>
        <button type="submit" onClick={() => props.handleNewSmurf(newSmurf)}>
          View Smurf from the Village
        </button>
      </label>
    </form>
  );
};
const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    addingSmurf: state.addingSmurf,
  };
};
export default connect(mapStateToProps, { getSmurfData, handleNewSmurf })(
  SmurfForm
);
