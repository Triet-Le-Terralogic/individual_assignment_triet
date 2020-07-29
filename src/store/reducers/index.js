import { actionTypes } from "../actions/actionTypes";

const initialState = {
	isAuth: false,
	modalData: {
		modalHeader: "Notification",
		msg: "",
	},
	userInfo: {
		avatar: "",
		email: "",
		name: "",
		phone: "",
	},
	token: "",
	loading: false,
};
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.LOGIN_SUCCESS:
			return {
				...state,
				isAuth: true,
				token: action.payload.token,
				modalData: {
					...state.modalData,
					modalHeader: "Notification",
					msg: action.payload.msg,
				},
				userInfo: {
					...state.userInfo,
					avatar: action.payload.userInfo.avatar
						? action.payload.userInfo.avatar
						: "",
					email: action.payload.userInfo.email,
					name: action.payload.userInfo.name,
					phone: action.payload.userInfo.phone,
				},
			};

		case actionTypes.LOGIN_FAIL:
		case actionTypes.REGISTER_SUCCESS:
		case actionTypes.REGISTER_FAIL:
		case actionTypes.CHANGEPASS_SUCCESS:
		case actionTypes.CHANGEPASS_FAIL:
		case actionTypes.UPLOAD_AVATAR_FAIL:
		case actionTypes.UPDATE_USERINFO_FAIL:
			return {
				...state,
				modalData: {
					...state.modalData,
					modalHeader: "Notification",
					msg: action.payload.msg,
				},
			};

		case actionTypes.LOGOUT:
			return {
				...state,
				...action.payload.overall,
				modalData: {
					...state.modalData,
					...action.payload.modalData,
				},
				userInfo: {
					...state.userInfo,
					...action.payload.userInfo,
				},
			};
		case actionTypes.UPLOAD_AVATAR_SUCCESS:
			return {
				...state,
				modalData: {
					...state.modalData,
					msg: action.payload.msg,
					modalHeader: "Avatar Changed",
				},
				userInfo: {
					...state.userInfo,
					avatar: action.payload.avatar,
				},
			};

		case actionTypes.UPDATE_USERINFO_SUCCESS:
			return {
				...state,
				modalData: {
					...state.modalData,
					msg: action.payload.msg,
					modalHeader: "Profile Updated",
				},
				userInfo: {
					...state.userInfo,
					...action.payload.userInfo,
				},
			};

		case actionTypes.TRIGGER_NOTIFICATION: {
			return {
				...state,
				modalData: {
					...state.modalData,
					msg: action.payload.msg,
					modalHeader: action.payload.header,
				},
			};
		}

		case actionTypes.TRIGGER_LOADING:
			return {
				...state,
				loading: action.payload.loading,
			};

		default:
			return state;
	}
};

export default reducer;
