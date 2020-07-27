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
