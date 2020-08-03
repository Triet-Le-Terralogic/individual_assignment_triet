import React from "react";
import FormCell from "../index";
import { shallow, mount } from "enzyme";

const props = {
  onUserInputHandler: jest.fn,
  pageType: "admin",
  inputID: "password",
  inputValue: "123",
  inputType: "password",
  inputLabel: "Password",
  inputPlaceholder: "Enter you password",
  inputIcon: "keyIcon.svg",
  customStyle: "offset-lg-1",
};
let container,
  containerProps,
  label,
  errMsg,
  eyeIconWrapper,
  eyeIcon,
  leftIconWrapper,
  leftIcon,
  input;

describe("<FormCell /> - render", () => {
  it("should render without crash", () => {
    shallow(<FormCell />);
  });

  describe("<FormCell/> - no props", () => {
    const wrapper = shallow(<FormCell />);
    beforeEach(() => {
      container = wrapper.find("div").first();
      containerProps = container.props();
      label = container.find("label");
      input = container.find("[data-test='input']");
      leftIconWrapper = container.find("[data-test='left-icon-wrapper']");
      leftIcon = container.find("[data-test='left-icon']");
      eyeIconWrapper = container.find("[data-test='eye-icon-wrapper']");
      eyeIcon = container.find("[data-test='eye-icon']");
    });

    it("should render component wrapper correctly with default props ", () => {
      expect(containerProps.className).toContain("Form-cell Form-cell-guess");
    });

    it("should not render eyeIconWrapper correctly with default props", () => {
      expect(eyeIconWrapper).toHaveLength(0);
    });

    it("should render left icon correctly with default props", () => {
      expect(leftIconWrapper).toHaveLength(1);
      expect(leftIcon).toHaveLength(1);
      expect(leftIcon.props().src).toEqual("");
    });

    it("should render label correctly with default props", () => {
      expect(label.text()).toEqual("");
    });

    it("should not render input field correctly with default props", () => {
      expect(input.props().value).toEqual("");
      expect(input.props().placeholder).toEqual("");
      // expect(input.props().className).toContain("border-right-0");
    });
  });

  describe("<FormCell /> with props", () => {
    const wrapper = shallow(<FormCell {...props} />);
    beforeEach(() => {
      container = wrapper.find("div").first();
      containerProps = container.props();
      label = container.find("label");
      input = container.find("[data-test='input']");
      leftIconWrapper = container.find("[data-test='left-icon-wrapper']");
      leftIcon = container.find("[data-test='left-icon']");
      eyeIconWrapper = container.find("[data-test='eye-icon-wrapper']");
      eyeIcon = container.find("[data-test='eye-icon']");
    });

    it("should render component wrapper correctly with default props ", () => {
      expect(containerProps.className).toContain("Form-cell Form-cell-admin");
    });

    it("should not render eyeIconWrapper correctly with default props", () => {
      expect(eyeIconWrapper).toHaveLength(1);
      expect(eyeIconWrapper.props().className).toContain(
        "Form-cell-admin__icon-right"
      );
    });

    it("should render left icon correctly with default props", () => {
      expect(leftIconWrapper).toHaveLength(0);
      expect(leftIcon).toHaveLength(0);
    });

    it("should render label correctly with default props", () => {
      expect(label.text()).toEqual("Password");
    });

    it("should not render input field correctly with default props", () => {
      expect(input.props().value).toEqual(props.inputValue);
      expect(input.props().placeholder).toEqual(props.inputPlaceholder);
      // expect(input.props().className).toContain("border-right-0");
    });
  });
});

describe("<FormCell /> - behavior", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<FormCell {...props} />);
    container = wrapper.find("div").first();
    errMsg = container.find("span");
    eyeIconWrapper = container.find("[data-test='eye-icon-wrapper']");
    eyeIcon = container.find("[data-test='eye-icon']");
    input = container.find("[data-test='input']");
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("should render correctly with initialState hook", () => {
    expect(eyeIconWrapper).toHaveLength(1);
    expect(eyeIcon).toHaveLength(1);
    expect(eyeIcon.props().src).toEqual("eye_icon.svg");
    expect(eyeIconWrapper.props().className).toContain(
      "Form-cell-admin__icon-right"
    );
    expect(errMsg.props().className).toContain("d-none");
    expect(errMsg.text()).toEqual("");
  });

  // it("should change input type to text when user click on eyeIcon", () => {
  //   eyeIconWrapper.simulate("click");
  //   wrapper.update();
  //   expect(input.props().type).toEqual("text");
  // });

  // it("should render error message when user input is invalid", () => {
  //   input.simulate("change", { target: { value: "@123" } });
  //   container.update();
  // expect(errMsg.text().length).toBeGreaterThan(0);
  // expect(errMsg.props().className).toContain("d-block");
  // });
});
