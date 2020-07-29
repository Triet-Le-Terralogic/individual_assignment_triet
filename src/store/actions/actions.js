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

export const onLoginFail = () => {
	return {
		type: actionTypes.LOGIN_FAIL,
		payload: {
			msg: "Your email or password is incorrect!",
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

export const onRegisterFail = () => {
	return {
		type: actionTypes.REGISTER_FAIL,
		payload: {
			msg: "Unable register at the moment, try again later!",
		},
	};
};

export const onLogoutHandler = () => {
	return {
		type: actionTypes.LOGOUT,
		payload: {
			overall: {
				isAuth: false,
				token: "",
				loading: false,
			},
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
		},
	};
};

export const onChangePassSuccess = (data) => {
	return {
		type: actionTypes.CHANGEPASS_SUCCESS,
		payload: {
			msg: data.msg,
		},
	};
};

export const onChangePassFail = () => {
	return {
		type: actionTypes.CHANGEPASS_FAIL,
		payload: {
			msg: "Something went wrong, try again later",
		},
	};
};

export const onUploadAvatarSuccess = (data) => {
	return {
		type: actionTypes.UPLOAD_AVATAR_SUCCESS,
		payload: {
			avatar: `http://api.terralogic.ngrok.io/${data.data}`,
			msg: data.msg,
		},
	};
};

export const onUploadAvatarFail = () => {
	return {
		type: actionTypes.UPLOAD_AVATAR_FAIL,
		payload: {
			msg: "Unable to upload avatar, try again later!",
		},
	};
};

export const onUpdateUserInfoSuccess = (data) => {
	return {
		type: actionTypes.UPDATE_USERINFO_SUCCESS,
		payload: {
			msg: data.msg,
			userInfo: {
				avatar: data.data.avatar,
				email: data.data.email,
				name: data.data.name,
				phone: data.data.phone,
			},
		},
	};
};

export const onUpdateUserInfoFail = () => {
	return {
		type: actionTypes.UPDATE_USERINFO_FAIL,
		payload: {
			msg: "Unable to update user infomation, try again later!",
		},
	};
};

export const onNotificationTrigger = (triggerData) => {
	const { header, body } = triggerData;
	return {
		type: actionTypes.TRIGGER_NOTIFICATION,
		payload: {
			msg: body,
			header: header,
		},
	};
};

export const onLoadingTrigger = (isLoading) => {
	return {
		type: actionTypes.TRIGGER_LOADING,
		payload: {
			loading: isLoading,
		},
	};
};
