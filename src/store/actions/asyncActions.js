import axios from "axios";
import * as actions from "./actions";

export const postRegisterData = (registerData) => {
	return async (dispatch) => {
		try {
			const respData = await axios.request({
				method: "POST",
				url: "http://api.terralogic.ngrok.io/api/register",
				data: {
					...JSON.stringify(registerData),
				},
			});

			dispatch(actions.onRegisterSuccess(respData.data));
		} catch (error) {
			console.log(error);
		}
	};
};

export const postLoginData = (loginData) => {
	return async (dispatch) => {
		try {
			const respData = await axios.request({
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				url: "http://api.terralogic.ngrok.io/api/login",
				data: JSON.stringify(loginData),
			});
			dispatch(actions.onLoginSuccess(respData.data));
		} catch (error) {
			console.log(error);
		}
	};
};
