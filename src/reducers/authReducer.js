import actionTypes from "../actions/actionTypes";

export default (state = {}, action) => {
  switch(action.type) {
    case actionTypes.SIGNUP: 
      return { ...state, token: action.payload };
    case actionTypes.SIGNIN:
      return { ...state, token: action.payload };
    case actionTypes.LOGOUT:
      return {};
    default:
      return state;
  }
}