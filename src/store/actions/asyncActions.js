import axios from "axios";
import * as actions from "./actions";

export const postRegisterData = (registerData) => {
  return async (dispatch) => {
    dispatch(actions.onLoadingTrigger(true));
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
    }
    dispatch(actions.onLoadingTrigger(false));
  };
};

export const postLoginData = (loginData) => {
  return async (dispatch) => {
    dispatch(actions.onLoadingTrigger(true));
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
    }
    dispatch(actions.onLoadingTrigger(false));
  };
};

export const changePassword = ({ data, token }) => {
  return async (dispatch) => {
    const dataSend = {
      password: data.newPassword,
      currentPassword: data.currentPassword,
    };
    dispatch(actions.onLoadingTrigger(true));
    try {
      const respData = await axios.request({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        url: "http://api.terralogic.ngrok.io/api/changePassword",
        data: JSON.stringify(dataSend),
      });

      dispatch(actions.onChangePassSuccess(respData.data));
    } catch (error) {
      dispatch(actions.onChangePassFail());
    }
    dispatch(actions.onLoadingTrigger(false));
  };
};

export const uploadAvatar = ({ avatarFile, token }) => {
  return async (dispatch) => {
    const dataFile = new FormData();
    dataFile.append("key", "image");
    dataFile.append("type", "file");
    dataFile.append("src", avatarFile);
    dispatch(actions.onLoadingTrigger(true));

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

      dispatch(actions.onUploadAvatarSuccess(respData.data));
    } catch (error) {
      dispatch(actions.onUploadAvatarFail());
    }
    dispatch(actions.onLoadingTrigger(false));
  };
};

export const updateUserInfo = ({ data, token }) => {
  return async (dispatch) => {
    dispatch(actions.onLoadingTrigger(true));
    try {
      const respData = await axios.request({
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        url: "http://api.terralogic.ngrok.io/api/update",
        data: data,
      });

      dispatch(actions.onUpdateUserInfoSuccess(respData.data));
    } catch (error) {
      console.log(error);
      dispatch(actions.onUpdateUserInfoFail());
    }
    dispatch(actions.onLoadingTrigger(false));
  };
};
