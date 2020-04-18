import React from "react";
import { connect } from "react-redux";
import { getSmurfData } from "../actions";

const SmurfCard = (props) => {
  console.log({ props }, "props from smurfcard");
  return (
    <div className="smurfCard">
      <h3>Name: {props.smurf.name}</h3>
      <h3>Age: {props.smurf.age}</h3>
      <h3>Height: {props.smurf.height}</h3>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    addingSmurf: state.addingSmurf,
  };
};
export default connect(mapStateToProps, { getSmurfData })(SmurfCard);
