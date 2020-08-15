const defaultState = {
	email: "",
	uid: ""
}

function reducer(state = defaultState, {type, payload}){
	switch (type) {
		case "updateUserData":
			return payload
		default:
			return state
	}
}

export default reducer