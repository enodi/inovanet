import actionTypes from "../actions/actionTypes";

export default (state = {}, action) => {
  switch(action.type) {
    case actionTypes.LIST_NODES:
      return { ...state, items: action.payload }
    default:
      return state;
  }
}