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
			dispatch(actions.onRegisterFail());
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
			dispatch(actions.onLoginFail());
			console.log(error);
		}
	};
};

export const changePassword = ({ passwordData, token }) => {
	return async (dispatch) => {
		const data = {
			password: passwordData.newPassword,
			currentPassword: passwordData.currentPassword,
		};
		try {
			const respData = await axios.request({
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				url: "http://api.terralogic.ngrok.io/api/changePassword",
				data: JSON.stringify(data),
			});

			dispatch(actions.onChangePassSuccess(respData.data));
		} catch (error) {
			console.log(error);
		}
	};
};

export const upLoadAvatar = ({ avatarFile, token }) => {
	return async (dispatch) => {
		const dataFile = new FormData();
		dataFile.append("key", "image");
		dataFile.append("type", "file");
		dataFile.append("src", avatarFile);

		try {
			const respData = await axios.request({
				method: "POST",
				headers: {
					key: "Content-Type",
					value: "multipart/form-data",
					type: "text",
					Authorization: `Bearer ${token}`,
				},
				url: "http://api.terralogic.ngrok.io/api/upload",
				data: dataFile,
			});
			console.log(respData);

			dispatch(actions.onUploadAvatarSuccess(respData.data));
		} catch (error) {
			console.log(error);
			dispatch(actions.onUploadAvatarFail());
		}
	};
};
