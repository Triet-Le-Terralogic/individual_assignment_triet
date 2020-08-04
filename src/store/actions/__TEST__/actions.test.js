import * as actions from "../actions";
import { actionTypes } from "../actionTypes";
import decoder from "jwt-decode";

describe("Action", () => {
  it("should create an action when login success", () => {
    const data = {
      msg: "test_msg",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ii1NRERGbGtJS0VnMnNpRmdUOTZUIiwiYXZhdGFyIjoiaHR0cDovL2FwaS50ZXJyYWxvZ2ljLm5ncm9rLmlvLy1NRERGbGtJS0VnMnNpRmdUOTZUXzE1OTU5ODg5NzE1NTVfVGVzdGluZ19weXJhbWlkLmpwZyIsImVtYWlsIjoiYW5vbnltb3VzQHRlcnJhbG9naWMuY29tIiwibmFtZSI6ImFub255bW91cyIsInBob25lIjoiMDkxNDQyNTU5NSIsImRpc3BsYXlOYW1lIjoiYW5vbnltb3VzIiwiaWF0IjoxNTk2NTE0MjYzfQ.KF8DGx6GU9Ss1MoeJj_U9HL7kbZvIoy23bQ-KmyksiQ",
    };
    const expectedAction = {
      type: actionTypes.LOGIN_SUCCESS,
      payload: {
        msg: "test_msg",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ii1NRERGbGtJS0VnMnNpRmdUOTZUIiwiYXZhdGFyIjoiaHR0cDovL2FwaS50ZXJyYWxvZ2ljLm5ncm9rLmlvLy1NRERGbGtJS0VnMnNpRmdUOTZUXzE1OTU5ODg5NzE1NTVfVGVzdGluZ19weXJhbWlkLmpwZyIsImVtYWlsIjoiYW5vbnltb3VzQHRlcnJhbG9naWMuY29tIiwibmFtZSI6ImFub255bW91cyIsInBob25lIjoiMDkxNDQyNTU5NSIsImRpc3BsYXlOYW1lIjoiYW5vbnltb3VzIiwiaWF0IjoxNTk2NTE0MjYzfQ.KF8DGx6GU9Ss1MoeJj_U9HL7kbZvIoy23bQ-KmyksiQ",
        userInfo: decoder(data.token),
      },
    };
    expect(actions.onLoginSuccess(data)).toEqual(expectedAction);
  });

  it("should create action when login fail", () => {
    const expectedAction = {
      type: actionTypes.LOGIN_FAIL,
      payload: {
        msg: "Your email or password is incorrect!",
      },
    };
    expect(actions.onLoginFail()).toEqual(expectedAction);
  });

  it("should create action when register success", () => {
    const data = { msg: "test" };

    const expectedAction = {
      type: actionTypes.REGISTER_SUCCESS,
      payload: {
        msg: "test",
      },
    };
    expect(actions.onRegisterSuccess(data)).toEqual(expectedAction);
  });

  it("should create action when register fail", () => {
    const expectedAction = {
      type: actionTypes.REGISTER_FAIL,
      payload: {
        msg: "Unable register at the moment, try again later!",
      },
    };
    expect(actions.onRegisterFail()).toEqual(expectedAction);
  });

  it("should create action when user logout", () => {
    const expectedAction = {
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
    expect(actions.onLogoutHandler()).toEqual(expectedAction);
  });

  it("should create action when change password success", () => {
    const data = { msg: "test_msg" };
    const expectedAction = {
      type: actionTypes.CHANGEPASS_SUCCESS,
      payload: {
        msg: "test_msg",
      },
    };
    expect(actions.onChangePassSuccess(data)).toEqual(expectedAction);
  });

  it("should create action when change password fail", () => {
    const expectedAction = {
      type: actionTypes.CHANGEPASS_FAIL,
      payload: {
        msg: "Something went wrong, try again later",
      },
    };
    expect(actions.onChangePassFail()).toEqual(expectedAction);
  });

  it("should create action when upload avatar success", () => {
    const data = { msg: "test_msg", data: "test_avatar" };
    const expectedAction = {
      type: actionTypes.UPLOAD_AVATAR_SUCCESS,
      payload: {
        avatar: "http://api.terralogic.ngrok.io/test_avatar",
        msg: "test_msg",
      },
    };
    expect(actions.onUploadAvatarSuccess(data)).toEqual(expectedAction);
  });

  it("should create action when upload avatar fail", () => {
    const expectedAction = {
      type: actionTypes.UPLOAD_AVATAR_FAIL,
      payload: {
        msg: "Unable to upload avatar, try again later!",
      },
    };
    expect(actions.onUploadAvatarFail()).toEqual(expectedAction);
  });

  it("should create action when update user info success", () => {
    const data = {
      msg: "test_msg",
      data: {
        avatar: "http://api.terralogic.ngrok.io/test_avatar",
        email: "anonymous@terralogic.com",
        name: "anonymous",
        phone: "0987654321",
      },
    };
    const expectedAction = {
      type: actionTypes.UPDATE_USERINFO_SUCCESS,
      payload: {
        msg: "test_msg",
        userInfo: {
          avatar: "http://api.terralogic.ngrok.io/test_avatar",
          email: "anonymous@terralogic.com",
          name: "anonymous",
          phone: "0987654321",
        },
      },
    };
    expect(actions.onUpdateUserInfoSuccess(data)).toEqual(expectedAction);
  });

  it("should create action when update user info fail", () => {
    const expectedAction = {
      type: actionTypes.UPDATE_USERINFO_FAIL,
      payload: {
        msg: "Unable to update user infomation, try again later!",
      },
    };
    expect(actions.onUpdateUserInfoFail()).toEqual(expectedAction);
  });

  it("should create action when trigger notification", () => {
    const data = {
      header: "test_header",
      body: "test_body",
    };
    const expectedAction = {
      type: actionTypes.TRIGGER_NOTIFICATION,
      payload: {
        msg: "test_body",
        header: "test_header",
      },
    };
    expect(actions.onNotificationTrigger(data)).toEqual(expectedAction);
  });

  it("should create action when trigger loading screen", () => {
    const expectedAction = {
      type: actionTypes.TRIGGER_LOADING,
      payload: {
        loading: true,
      },
    };
    expect(actions.onLoadingTrigger(true)).toEqual(expectedAction);
  });
});
