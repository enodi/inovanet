import actionTypes from "./actionTypes";
import { Api as api } from "../helpers/utils";

export const listNodes = () => {
  return (dispatch) => {
    return api.get("/api/iotnodes")
      .then(response => {
        return dispatch({
          type: actionTypes.LIST_NODES,
          payload: response.data
        })
      }).catch(error => console.log(error))
  }
}