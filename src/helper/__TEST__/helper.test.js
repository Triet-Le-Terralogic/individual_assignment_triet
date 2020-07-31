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

describe("Helper.js", () => {
  const { inputValidator, loginValidator } = helper;

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
});
