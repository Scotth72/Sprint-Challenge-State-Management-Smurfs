import React, { useState } from "react";
import { getSmurfData, handleNewSmurf } from "../actions";
import { connect } from "react-redux";

const SmurfForm = (props) => {
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
    handleNewSmurf(newSmurf);
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
        <button onClick={() => props.handleNewSmurf(newSmurf)}>
          View Smurf from the Village
        </button>
      </label>

      <div>
        {props.smurfs.map((smurf) => {
          console.log(smurf);
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
  };
};
export default connect(mapStateToProps, { getSmurfData, handleNewSmurf })(
  SmurfForm
);
