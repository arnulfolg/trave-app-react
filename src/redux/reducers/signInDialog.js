const defaultState = false

function reducer(state = defaultState, {type}){
	switch (type) {
		case "openSignInDialog": {
			return true
		}
		case "closeSignInDialog": {
			return false
		}
		default:
			return state
	}
}

export default reducer