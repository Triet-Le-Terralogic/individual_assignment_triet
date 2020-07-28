import { actionTypes } from "../actions/actionTypes";

const initialState = {
	isAuth: false,
	serverMsg: "",
	userInfo: {
		avatar: "",
		email: "",
		name: "",
		phone: "",
		id: "",
	},
	token: "",
};
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.LOGIN_SUCCESS:
			return {
				...state,
				isAuth: true,
				serverMsg: action.payload.msg,
				token: action.payload.token,
				userInfo: {
					...state.userInfo,
					avatar: action.payload.userInfo.avatar
						? action.payload.userInfo.avatar
						: "",
					email: action.payload.userInfo.email,
					name: action.payload.userInfo.name,
					phone: action.payload.userInfo.phone,
					id: action.payload.userInfo.id,
				},
			};

		case actionTypes.LOGIN_FAIL:
			return {
				...state,
				serverMsg: action.payload.msg,
			};
		case actionTypes.REGISTER_SUCCESS:
		case actionTypes.REGISTER_FAIL:
		case actionTypes.CHANGEPASS_SUCCESS:
		case actionTypes.CHANGEPASS_FAIL:
		case actionTypes.UPLOAD_AVATAR_FAIL:
			return {
				...state,
				serverMsg: action.payload.msg,
			};

		case actionTypes.LOGOUT:
			return {
				...state,
				...action.payload.overall,
				userInfo: {
					...state.userInfo,
					...action.payload.userInfo,
				},
			};
		case actionTypes.UPLOAD_AVATAR_SUCCESS:
			return {
				...state,
				serverMsg: action.payload.msg,
				userInfo: {
					...state.userInfo,
					avatar: action.payload.avatar,
				},
			};

		default:
			return state;
	}
};

export default reducer;
