const defaultState = false

function loggedInReducer(state = defaultState, {type, payload}){
	switch (type) {
		case "SignIn": {
			return payload
		}
		case "SignOut": {
			return payload
		}
		default:
			return state
	}
}

export default loggedInReducer