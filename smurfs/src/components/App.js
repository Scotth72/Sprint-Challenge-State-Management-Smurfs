import React, { useEffect } from "react";
import "./App.css";
import SmurfForm from "./SmurfForm";
import SmurfCard from "./SmurfCard";
import { connect } from "react-redux";
import { getSmurfData } from "../actions";

const App = (props) => {
  useEffect(() => {
    props.getSmurfData();
  }, []);
  return (
    <div className="App">
      <h1>SMURF Redux SIGN UP</h1>
      <SmurfForm />
      {props.smurfs.map((smurf) => smurf && <SmurfCard smurf={smurf} />)}
    </div>
  );
};

const mapToStateProps = (state) => {
  return {
    smurfs: state.smurfs,
  };
};
export default connect(mapToStateProps, { getSmurfData })(App);
