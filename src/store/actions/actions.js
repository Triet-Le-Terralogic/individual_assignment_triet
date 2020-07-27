import { actionTypes } from "./actionTypes";
import decoder from "jwt-decode";

export const onLoginSuccess = (data) => {
	return {
		type: actionTypes.LOGIN_SUCCESS,
		payload: {
			msg: data.msg,
			token: data.token,
			userInfo: decoder(data.token),
		},
	};
};

export const onRegisterSuccess = (data) => {
	return {
		type: actionTypes.REGISTER_SUCCESS,
		payload: {
			msg: data.msg,
		},
	};
};
export const onLogoutHandler = (data) => {
	return {
		type: actionTypes.LOGOUT,
		payload: {
			overall: {
				isAuth: false,
				serverMsg: "",
				token: "",
			},
			userInfo: {
				email: "",
				name: "",
				phone: "",
				id: "",
			},
		},
	};
};
