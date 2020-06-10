// import { axiosWithAuth } from "../../utils/axiosWithAuth";

// ================DON'T NEED THIS STUFF (when BE is up)================
import axios from "axios";
import {
  userDetails,
  grantDetails,
} from "../../components/homepage/dummydata/data.jsx";

export const GET_USER_INFO_START = "GET_USER_INFO_START";
export const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAIL = "GET_USER_INFO_FAIL";

export const GET_GRANTS_START = "GET_GRANTS_START";
export const GET_GRANTS_SUCCESS = "GET_GRANTS_SUCCESS";
export const GET_GRANTS_FAILURE = "GET_GRANTS_FAILURE";

//==================UNCOMMENT THE SECTION BELOW===============================
/*



export const getUserInfo = (info) => (dispatch) => {
  dispatch({ type: GET_USER_INFO_START });
  axiosWithAuth()
    .get(`${userInfo}`)
    .then((res) => {
      console.log("getUserInfo>res: ", res);
      dispatch({ type: GET_USER_INFO_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("getUserInfo>err: ", err);
      dispatch({ type: GET_USER_INFO_FAIL, payload: { error: err.message } });
    });
};

*/
//

//
//==============REMOVE THIS SECTION WHEN THIS TO THE CORRECT LINK=============
// console.log(
//   "================\n-API DUMMY FOR TESTING HOMPAGE-\n================\n",
//   "===============\n-REMOVE SECTION WHEN BACKEND IS UP-\n================"
// );
const apiBase = "https://jsonplaceholder.typicode.com";
const userInfo = `${apiBase}/posts`;
const grantsInfo = `${apiBase}/posts`;
//
export const getUserInfo = (info) => (dispatch) => {
  dispatch({ type: GET_USER_INFO_START });
  axios
    .get(`${userInfo}`)
    .then((res) => {
      dispatch({ type: GET_USER_INFO_SUCCESS, payload: userDetails[1] });
    })
    .catch((err) => {
      dispatch({ type: GET_USER_INFO_FAIL, payload: { error: err.message } });
    });
};

export const getGrants = (info) => (dispatch) => {
  dispatch({ type: GET_GRANTS_START });
  axios
    .get(`${grantsInfo}`)
    .then((res) => {
      dispatch({
        type: GET_GRANTS_SUCCESS,
        payload: grantDetails.openGrants,
      });
    })
    .catch((err) => {
      console.log("getGrants>err: ", err);
      dispatch({ type: GET_GRANTS_FAILURE, payload: { error: err.message } });
    });
};
//==============REMOVE ABOVE ONCE BACKEND IS WORKING================
//
