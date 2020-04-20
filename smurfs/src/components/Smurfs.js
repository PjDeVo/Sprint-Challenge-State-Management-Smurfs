import React from "react";

import { connect } from "react-redux";

import { fetchSmurfs } from "../actions/index";

const Smurfs = (props) => {
  return (
    <div>
      <button onClick={() => props.fetchSmurfs()}> LET'S GET DEM SMURFS</button>
      <div>
        {props.smurfs.map((smurf) => {
          return (
            <div>
              <h1> {smurf.name}</h1>
              <h2> {smurf.height}</h2>
              <h3> {smurf.age}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(Smurfs);
