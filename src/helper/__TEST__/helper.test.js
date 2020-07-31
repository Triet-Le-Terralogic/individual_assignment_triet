import * as helper from "../index";
const validInputCase = [
  {
    inputType: "email",
    userInput: "anonymous@terralogic.com",
  },
  {
    inputType: "password",
    userInput: "@Terralogic123",
  },
  {
    inputType: "currentPassword",
    userInput: "@Terralogic123",
  },
  {
    inputType: "newPassword",
    userInput: "@Terralogic123",
  },
  {
    inputType: "confirmPassword",
    userInput: "@Terralogic123",
  },
  {
    inputType: "phone",
    userInput: "0123456789",
  },
  {
    inputType: "name",
    userInput: "anonymous",
  },
];
const invalidInputCase = [
  {
    inputType: "email",
    userInput: "anonymousterralogic.com",
  },
  {
    inputType: "password",
    userInput: "trerralogic123",
  },
  {
    inputType: "currentPassword",
    userInput: "trerralogic123",
  },
  {
    inputType: "newPassword",
    userInput: "trerralogic123",
  },
  {
    inputType: "confirmPassword",
    userInput: "trerralogic123",
  },
  {
    inputType: "phone",
    userInput: "01234567899",
  },
  {
    inputType: "name",
    userInput: "test_test",
  },
];

const validLoginCase = [
  {
    email: "anonymous@terralogic.com",
    password: "@Triet123",
  },
  {
    email: "triet.le@terralogic.com",
    password: "Triet*123",
  },
];
const invalidLoginCase = [
  {
    email: "anonymous@terralogiccom",
    password: "@Triet123",
  },
  {
    email: "triet.le@terralogic.com",
    password: "et123",
  },
];

const validRegisterCase = [
  {
    email: "anonymous@terralogic.com",
    password: "@Triet123",
    confirmPassword: "@Triet123",
    name: "anonymous",
    phone: "0987654321",
  },
];
const invalidRegisterCase = [
  {
    email: "anonymousterralogic.com",
    password: "@Triet123",
    confirmPassword: "@Triet123",
    name: "anonymous",
    phone: "0987654321",
  },
  {
    email: "anonymous@terralogic.com",
    password: "Triet123",
    confirmPassword: "Triet123",
    name: "anonymous",
    phone: "0987654321",
  },
  {
    email: "anonymous@terralogic.com",
    password: "@Triet1234",
    confirmPassword: "@Triet123",
    name: "anonymous",
    phone: "0987654321",
  },
  {
    email: "anonymous@terralogic.com",
    password: "@Triet123",
    confirmPassword: "@Triet123",
    name: "*anonymous",
    phone: "0987654321",
  },
  {
    email: "anonymous@terralogic.com",
    password: "@Triet123",
    confirmPassword: "@Triet123",
    name: "*anonymous",
    phone: "09876431",
  },
];

const validChangePasswordCase = [
  {
    newPassword: "@Triet123",
    confirmPassword: "@Triet123",
  },
];
const invalidChangePasswordCase = [
  {
    newPassword: "Triet123",
    confirmPassword: "Triet123",
  },
  {
    newPassword: "@Triet123",
    confirmPassword: "Triet123",
  },
];

const validChangeUserInfoCase = [
  {
    email: "anonymous@terralogic.com",
    name: "anonymous",
    phone: "0987654321",
    avatar: "http://api.terralogic.ngrok.io/someimage.svg",
  },
];
const invalidChangeUserInfoCase = [
  {
    email: "anonymousterralogic.com",
    name: "anonymous",
    phone: "0987654321",
    avatar: "http://api.terralogic.ngrok.io/someimage.svg",
  },
  {
    email: "anonymous@terralogic.com",
    name: "*anonymous",
    phone: "0987654321",
    avatar: "http://api.terralogic.ngrok.io/someimage.svg",
  },
  {
    email: "anonymous@terralogic.com",
    name: "anonymous",
    phone: "09876521",
    avatar: "http://api.terralogic.ngrok.io/someimage.svg",
  },
  {
    email: "anonymous@terralogic.com",
    name: "anonymous",
    phone: "0987654321",
    avatar: "http://api.terralogic/someimage.svg",
  },
];

describe("Helper.js", () => {
  const {
    inputValidator,
    loginValidator,
    registerValidator,
    changePasswordValidator,
    changeUserInfoValidator,
    uploadAvatarValidator,
  } = helper;

  it("inputValidator", () => {
    validInputCase.map((testCase) => {
      expect(inputValidator(testCase)).toEqual("");
    });

    invalidInputCase.map((testCase) => {
      expect(inputValidator(testCase).length).toBeGreaterThan(0);
    });

    expect(inputValidator({ inputType: "124", userInput: "sdf" })).toEqual(""),
      expect(inputValidator({ inputType: "email", userInput: "" })).toEqual("");
    expect(inputValidator({})).toEqual("");
  });

  it("loginValidator", () => {
    validLoginCase.map((testCase) => {
      expect(loginValidator(testCase)).toBeTruthy();
    });

    invalidLoginCase.map((testCase) => {
      expect(loginValidator(testCase)).toBeFalsy();
    });

    expect(loginValidator({})).toBeFalsy();
  });

  it("registerValidator", () => {
    validRegisterCase.map((testCase) => {
      expect(registerValidator(testCase)).toBeTruthy();
    });

    invalidRegisterCase.map((testCase) => {
      expect(registerValidator(testCase)).toBeFalsy();
    });

    expect(registerValidator({})).toBeFalsy();
  });

  it("changePasswordValidator", () => {
    validChangePasswordCase.map((testCase) => {
      expect(changePasswordValidator(testCase)).toBeTruthy();
    });

    invalidChangePasswordCase.map((testCase) => {
      expect(changePasswordValidator(testCase)).toBeFalsy();
    });

    expect(changePasswordValidator({})).toBeFalsy();
  });

  it("changeUserInfoValidator", () => {
    validChangeUserInfoCase.map((testCase) => {
      expect(changeUserInfoValidator(testCase)).toBeTruthy();
    });

    invalidChangeUserInfoCase.map((testCase) => {
      expect(changeUserInfoValidator(testCase)).toBeFalsy();
    });

    expect(helper.changeUserInfoValidator({})).toBeFalsy();
  });

  it("uploadAvatarValidator", () => {
    expect(uploadAvatarValidator("image.svg")).toBeTruthy();
    expect(uploadAvatarValidator("image.jpg")).toBeTruthy();
    expect(uploadAvatarValidator("image.jpeg")).toBeTruthy();
    expect(uploadAvatarValidator("image.png")).toBeTruthy();
    expect(uploadAvatarValidator("image.gif")).toBeTruthy();

    expect(uploadAvatarValidator("image.text")).toBeFalsy();
  });
});
