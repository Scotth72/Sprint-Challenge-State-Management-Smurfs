import React from "react";

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

export default SmurfCard;
