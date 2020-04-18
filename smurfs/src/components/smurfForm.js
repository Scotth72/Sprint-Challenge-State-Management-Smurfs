import React, { useState } from "react";
import { getSmurfData } from "../actions";
import { connect } from "react-redux";
import axios from "axios";

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
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then((res) => {
        getSmurfData();
      })
      .catch((err) => {
        // console.log(err.response, "why error ,why");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name"> Name</label>
      <input
        onChange={handleChanges}
        name="name"
        type="text"
        value={newSmurf.name}
      />
      <label htmlFor="age"> Age</label>
      <input
        onChange={handleChanges}
        name="age"
        type="number"
        value={newSmurf.number}
      />
      <label htmlFor="height"> Height</label>
      <input
        onChange={handleChanges}
        name="height"
        type="text"
        value={newSmurf.height}
      />

      <label>
        <button type="submit">View Smurf from the Village</button>
      </label>

      <div>
        {props.smurfs.map((smurf) => {
          console.log(smurf, "testing");
          return (
            <>
              <h2>Name: {smurf.name}</h2>
              <h2>Age: {smurf.age}</h2>
              <h2>Height: {smurf.height}</h2>
            </>
          );
        })}
      </div>
    </form>
  );
};
const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    addingSmurf: state.addingSmurf,
  };
};
export default connect(mapStateToProps, { getSmurfData })(SmurfForm);
