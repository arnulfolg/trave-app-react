const defaultState = {
	email: ""
}

function reducer(state = defaultState, {type, payload}){
	switch (type) {
		case "updateUserData":
			console.log(payload)
			return payload
		default:
			return state
	}
}

export default reducer