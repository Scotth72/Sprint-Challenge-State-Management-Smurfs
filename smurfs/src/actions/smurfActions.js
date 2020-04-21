import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL";

export const POST_SMURFS_SUCCESS = "POST_SMURFS_SUCCESS";
export const POST_SMURFS_FAIL = "POST_SMURFS_FAIL";

export const getSmurfData = () => (dispatch) => {
  dispatch({ type: FETCH_SMURFS_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then((response) => {
      console.log("FROM THE API", response.data);
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: response.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_SMURFS_FAIL, payload: err.response });
    });
};

export const handleNewSmurf = (newSmurf) => (dispatch) => {
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then((res) => {
      console.log("from the success api", res);
      dispatch({ type: POST_SMURFS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: POST_SMURFS_FAIL, payload: err.response });
    });
};
