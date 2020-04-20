import axios from "axios";
import { bindActionCreators } from "redux";

export const FETCH_SMURFS = "FETCH_SMURFS";
export const GOT_SMURFS = "GOT_SMURFS";
export const ADD_SMURFS = "ADD_SMURFS";

export const fetchSmurfs = () => (dispatch) => {
  dispatch({
    type: FETCH_SMURFS,
  });
  axios
    .get("http://localhost:3333/smurfs")
    .then((resp) => {
      const newSmurfs = resp.data.map((smurf) => {
        return {
          name: smurf.name,
          age: smurf.age,
          height: smurf.height,
          id: smurf.id,
        };
      });
      dispatch({ type: GOT_SMURFS, payload: [...newSmurfs] });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const addSmurfs = (smurf) => (dispatch) => {
  axios.post("http://localhost:3333/smurfs", smurf).then((response) => {
    dispatch({ type: ADD_SMURFS, payload: smurf });
  });
};
