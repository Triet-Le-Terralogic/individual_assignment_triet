import axios from "axios";
import * as actions from "./actions";

export const postRegisterData = (registerData) => {
	return async (dispatch) => {
		const respData = await axios.request({
			method: "POST",
			url: "http://api.terralogic.ngrok.io/api/register",
			data: {
				...JSON.stringify(registerData),
			},
		});

		console.log(respData);
		// await dispatch(actions.storeUserInfo(respData));
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

			// decode token to store user info
		} catch (error) {
			console.log(error);
		}
	};
};
