import axios from "axios";
import * as actions from "./actions";

export const postRegisterData = (registerData) => {
	return async (dispatch) => {
		const respData = await axios({
			method: "POST",
			url: "http://api.terralogic.ngrok.io/api/register",
			body: {
				...JSON.stringify(registerData),
			},
		});

		await dispatch(actions.storeUserInfo(respData));
	};
};

export const postLoginData = (loginData) => {
	return async (dispatch) => {
		const respData = await axios({
			method: "POST",
			url: "http://api.terralogic.ngrok.io/api/login",
			body: {
				...JSON.stringify(loginData),
			},
		});

		await dispatch(actions.storeToken(respData));
	};
};
