import { combineReducers } from "redux";
import iotnodesReducer from "./iotnodesReducer";
import authReducer from "./authReducer";

export default combineReducers({
  nodesList: iotnodesReducer,
  auth: authReducer
})