import { combineReducers } from "redux";
import loggedIn from "./loggedIn";
import signInDialog from "./signInDialog";
import updateUserData from "./updateUserData";

export default combineReducers({
	loggedIn,
	signInDialog,
	updateUserData
});
