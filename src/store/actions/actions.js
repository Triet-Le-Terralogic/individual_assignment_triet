import { actionTypes } from "./actionTypes";

export const storeUserInfo = (respData) => {
	return {
		type: actionTypes.STORE_USER,
		payload: {
			userInfo: respData.data,
			msg: respData.msg,
		},
	};
};

export const storeToken = (respData) => {
	return {
		type: actionTypes.STORE_USER,
		payload: {
			token: respData.token,
			msg: respData.msg,
		},
	};
};
