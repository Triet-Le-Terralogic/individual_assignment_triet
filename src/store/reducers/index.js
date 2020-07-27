import { actionTypes } from "../actions/actionTypes";

const initialState = {
	isAuth: false,
	serverMsg: "",
	userInfo: {
		email: "anonymous@terralogic.com",
		name: "anonymous",
		phone: "0123456789",
		id: "-MDDFlkIKEg2siFgT96T",
	},
	token: "",
};
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.STORE_USER:
			return {
				...state,
				serverMsg: action.payload.msg,
				userInfo: {
					...state.userInfo,
					...action.payload.userInfo,
				},
			};

		case actionTypes.STORE_TOKEN:
			return {
				...state,
				msg: action.payload.msg,
				token: action.payload.token,
			};

		default:
			break;
	}
	return state;
};

export default reducer;
