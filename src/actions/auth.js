import actionTypes from "./actionTypes";
import { Api as api } from "../helpers/utils";

export const signup = (data) => {
  return (dispatch) => {
    return api.post("/api/users", data)
      .then(response => {
        setToken(response.data.token);
        return dispatch({
          type: actionTypes.SIGNUP,
          payload: response.data.token
        })
      }).catch(error => console.log(error))
  };
};

export const startSignin = (data) => {
  return (dispatch) => {
    return api.post("/auth/local", data)
      .then(response => {
        setToken(response.data.token);
        return dispatch({
          type: actionTypes.SIGNIN,
          payload: response.data.token
        })
      }).catch(error => console.log(error))
  };
};

const setToken = data => localStorage.setItem('token', data);

export const signin = (token) => ({
  type: actionTypes.SIGNIN,
  payload: token
});

export const logout = () => ({
  type: actionTypes.LOGOUT
});

export const startLogout = () => {
  return (dispatch) => {
    localStorage.clear();
    return dispatch({
      type: actionTypes.LOGOUT
    })
  }
}
