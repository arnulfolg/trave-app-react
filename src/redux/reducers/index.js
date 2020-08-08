import { combineReducers } from "redux";
import loggedIn from "./loggedIn";
import singInDIalog from "./singInDIalog";
import updateUserData from "./updateUserData";

export default combineReducers({
	loggedIn,
	singInDIalog,
	updateUserData
});
