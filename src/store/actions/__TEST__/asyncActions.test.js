import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as asyncActions from "../asyncActions";
import { actionTypes } from "../actionTypes";
import moxious from "moxios";
import decoder from "jwt-decode";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Async action", () => {
  beforeEach(() => {
    moxious.install();
  });

  afterEach(() => {
    moxious.uninstall();
  });

  it("should create REGISTER_SUCCESS action when post register data success", () => {
    const data = {
      email: "anonymous@terralogic.com",
      password: "@Triet124",
      name: "anonymous",
      phone: "0987654321",
    };

    moxious.wait(() => {
      const request = moxious.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { msg: "test_msg" },
      });
    });

    const expectedActions = [
      { type: actionTypes.TRIGGER_LOADING, payload: { loading: true } },
      { type: actionTypes.REGISTER_SUCCESS, payload: { msg: "test_msg" } },
      { type: actionTypes.TRIGGER_LOADING, payload: { loading: false } },
    ];

    const store = mockStore({ msg: "" });

    return store.dispatch(asyncActions.postRegisterData(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should create REGISTER_FAIL action when post register data success", () => {
    const data = {
      email: "anonymous@terralogic.com",
      password: "@Triet124",
      name: "anonymous",
      phone: "0987654321",
    };

    moxious.wait(() => {
      const request = moxious.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: null,
      });
    });

    const expectedActions = [
      { type: actionTypes.TRIGGER_LOADING, payload: { loading: true } },
      {
        type: actionTypes.REGISTER_FAIL,
        payload: { msg: "Unable register at the moment, try again later!" },
      },
      { type: actionTypes.TRIGGER_LOADING, payload: { loading: false } },
    ];

    const store = mockStore({ msg: "" });

    return store.dispatch(asyncActions.postRegisterData(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should create LOGIN_SUCCESS action when post login data success", () => {
    const data = {
      email: "anonymous@terralogic.com",
      password: "@Triet124",
    };

    moxious.wait(() => {
      const request = moxious.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          msg: "test_msg",

          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ii1NRERGbGtJS0VnMnNpRmdUOTZUIiwiYXZhdGFyIjoiaHR0cDovL2FwaS50ZXJyYWxvZ2ljLm5ncm9rLmlvLy1NRERGbGtJS0VnMnNpRmdUOTZUXzE1OTU5ODg5NzE1NTVfVGVzdGluZ19weXJhbWlkLmpwZyIsImVtYWlsIjoiYW5vbnltb3VzQHRlcnJhbG9naWMuY29tIiwibmFtZSI6ImFub255bW91cyIsInBob25lIjoiMDkxNDQyNTU5NSIsImRpc3BsYXlOYW1lIjoiYW5vbnltb3VzIiwiaWF0IjoxNTk2NTE0MjYzfQ.KF8DGx6GU9Ss1MoeJj_U9HL7kbZvIoy23bQ-KmyksiQ",
        },
      });
    });

    const expectedActions = [
      { type: actionTypes.TRIGGER_LOADING, payload: { loading: true } },
      {
        type: actionTypes.LOGIN_SUCCESS,
        payload: {
          msg: "test_msg",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ii1NRERGbGtJS0VnMnNpRmdUOTZUIiwiYXZhdGFyIjoiaHR0cDovL2FwaS50ZXJyYWxvZ2ljLm5ncm9rLmlvLy1NRERGbGtJS0VnMnNpRmdUOTZUXzE1OTU5ODg5NzE1NTVfVGVzdGluZ19weXJhbWlkLmpwZyIsImVtYWlsIjoiYW5vbnltb3VzQHRlcnJhbG9naWMuY29tIiwibmFtZSI6ImFub255bW91cyIsInBob25lIjoiMDkxNDQyNTU5NSIsImRpc3BsYXlOYW1lIjoiYW5vbnltb3VzIiwiaWF0IjoxNTk2NTE0MjYzfQ.KF8DGx6GU9Ss1MoeJj_U9HL7kbZvIoy23bQ-KmyksiQ",
          userInfo: decoder(
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ii1NRERGbGtJS0VnMnNpRmdUOTZUIiwiYXZhdGFyIjoiaHR0cDovL2FwaS50ZXJyYWxvZ2ljLm5ncm9rLmlvLy1NRERGbGtJS0VnMnNpRmdUOTZUXzE1OTU5ODg5NzE1NTVfVGVzdGluZ19weXJhbWlkLmpwZyIsImVtYWlsIjoiYW5vbnltb3VzQHRlcnJhbG9naWMuY29tIiwibmFtZSI6ImFub255bW91cyIsInBob25lIjoiMDkxNDQyNTU5NSIsImRpc3BsYXlOYW1lIjoiYW5vbnltb3VzIiwiaWF0IjoxNTk2NTE0MjYzfQ.KF8DGx6GU9Ss1MoeJj_U9HL7kbZvIoy23bQ-KmyksiQ"
          ),
        },
      },
      { type: actionTypes.TRIGGER_LOADING, payload: { loading: false } },
    ];

    const store = mockStore({ msg: "", token: "", userInfo: {} });

    return store.dispatch(asyncActions.postLoginData(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should create LOGIN_FAIL action when post login data fail", () => {
    const data = {
      email: "anonymous@terralogic.com",
      password: "@Triet124",
    };

    moxious.wait(() => {
      const request = moxious.requests.mostRecent();
      request.respondWith({ status: 500, response: null });
    });

    const expectedActions = [
      { type: actionTypes.TRIGGER_LOADING, payload: { loading: true } },
      {
        type: actionTypes.LOGIN_FAIL,
        payload: {
          msg: "Your email or password is incorrect!",
        },
      },
      { type: actionTypes.TRIGGER_LOADING, payload: { loading: false } },
    ];

    const store = mockStore({ msg: "" });

    return store.dispatch(asyncActions.postLoginData(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should create CHANGEPASS_SUCCESS action when change password success", () => {
    const data = {
      data: {
        password: "@Triet123",
        currentPassword: "@Triet123",
      },
      token: "test_token",
    };

    moxious.wait(() => {
      const request = moxious.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          msg: "test_msg",
        },
      });
    });

    const expectedActions = [
      { type: actionTypes.TRIGGER_LOADING, payload: { loading: true } },
      {
        type: actionTypes.CHANGEPASS_SUCCESS,
        payload: {
          msg: "test_msg",
        },
      },
      { type: actionTypes.TRIGGER_LOADING, payload: { loading: false } },
    ];

    const store = mockStore({ msg: "" });

    return store.dispatch(asyncActions.changePassword(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should create CHANGEPASS_FAIL action when change password fail", () => {
    const data = {
      data: {
        newPassword: "@Triet123",
        currentPassword: "@Triet123",
      },
      token: "test_token",
    };

    moxious.wait(() => {
      const request = moxious.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: null,
      });
    });

    const expectedActions = [
      { type: actionTypes.TRIGGER_LOADING, payload: { loading: true } },
      {
        type: actionTypes.CHANGEPASS_FAIL,
        payload: {
          msg: "Something went wrong, try again later",
        },
      },
      { type: actionTypes.TRIGGER_LOADING, payload: { loading: false } },
    ];

    const store = mockStore({ msg: "" });

    return store.dispatch(asyncActions.changePassword(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should create UPLOAD_AVATAR_SUCCESS action when upload avatar success", () => {
    const data = {
      avatarFile: "test_link",
      token: "test_token",
    };

    moxious.wait(() => {
      const request = moxious.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          data: `test_link`,
          msg: "test_msg",
        },
      });
    });

    const expectedActions = [
      { type: actionTypes.TRIGGER_LOADING, payload: { loading: true } },
      {
        type: actionTypes.UPLOAD_AVATAR_SUCCESS,
        payload: {
          avatar: `http://api.terralogic.ngrok.io/test_link`,
          msg: "test_msg",
        },
      },
      { type: actionTypes.TRIGGER_LOADING, payload: { loading: false } },
    ];

    const store = mockStore({ msg: "", avatar: "" });

    return store.dispatch(asyncActions.uploadAvatar(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should create UPLOAD_AVATAR_FAIL action when upload avatar fail", () => {
    const data = {
      avatarFile: "test_link",
      token: "test_token",
    };

    moxious.wait(() => {
      const request = moxious.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: null,
      });
    });

    const expectedActions = [
      { type: actionTypes.TRIGGER_LOADING, payload: { loading: true } },
      {
        type: actionTypes.UPLOAD_AVATAR_FAIL,
        payload: {
          msg: "Unable to upload avatar, try again later!",
        },
      },
      { type: actionTypes.TRIGGER_LOADING, payload: { loading: false } },
    ];

    const store = mockStore({ msg: "", avatar: "" });

    return store.dispatch(asyncActions.uploadAvatar(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should create UPDATE_USERINFO_SUCCESS action when update user info success", () => {
    const data = {
      data: {
        name: "test_name",
        phone: "test_phone",
      },
      token: "test_token",
    };

    moxious.wait(() => {
      const request = moxious.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          msg: "test_msg",
          data: {
            avatar: "test_avatar",
            email: "test_email",
            name: "test_name",
            phone: "test_phone",
          },
        },
      });
    });

    const expectedActions = [
      { type: actionTypes.TRIGGER_LOADING, payload: { loading: true } },
      {
        type: actionTypes.UPDATE_USERINFO_SUCCESS,
        payload: {
          msg: "test_msg",
          userInfo: {
            avatar: "test_avatar",
            email: "test_email",
            name: "test_name",
            phone: "test_phone",
          },
        },
      },
      { type: actionTypes.TRIGGER_LOADING, payload: { loading: false } },
    ];

    const store = mockStore({ msg: "", avatar: "", userInfo: {} });

    return store.dispatch(asyncActions.updateUserInfo(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should create UPDATE_USERINFO_FAIL action when update user info fail", () => {
    const data = {
      data: {
        name: "test_name",
        phone: "test_phone",
      },
      token: "test_token",
    };

    moxious.wait(() => {
      const request = moxious.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: null,
      });
    });

    const expectedActions = [
      { type: actionTypes.TRIGGER_LOADING, payload: { loading: true } },
      {
        type: actionTypes.UPDATE_USERINFO_FAIL,
        payload: {
          msg: "Unable to update user infomation, try again later!",
        },
      },
      { type: actionTypes.TRIGGER_LOADING, payload: { loading: false } },
    ];

    const store = mockStore({ msg: "", avatar: "", userInfo: {} });

    return store.dispatch(asyncActions.updateUserInfo(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
