import React from "react";
import CheckBox from "../index";
import { shallow } from "enzyme";

const props = {
  checkBoxTitle: "Remember password",
};
let container, containerProps, checkBoxLabel, checkBoxInPut, checkBoxSpan;

describe("<CheckBox/> - render", () => {
  it("should render without crash", () => {
    shallow(<CheckBox />);
  });

  describe("<Checkbox /> - no props", () => {
    const wrapper = shallow(<CheckBox />);
    beforeEach(() => {
      container = wrapper.find("div").first();
      containerProps = container.props();
      checkBoxInPut = container.find("input");
      checkBoxLabel = container.find("label");
      checkBoxSpan = container.find("span");
    });

    it("should render correctly with default props ", () => {
      expect(containerProps.className).toContain("Check-box");
    });

    it("should render checkbox label correctly", () => {
      expect(checkBoxLabel.text()).toEqual("Default");
      expect(checkBoxLabel.props().htmlFor).toEqual("isChecked");
    });

    it("should render checkbox input correctly", () => {
      expect(checkBoxInPut.props().type).toEqual("checkbox");
      expect(checkBoxInPut.props().name).toEqual("isChecked");
      expect(checkBoxInPut.props().value).toBeTruthy();
    });

    it("should render checkbox custom correctly", () => {
      expect(checkBoxSpan.props().className).toContain("Check-box--custom");
    });
  });

  describe("<CheckBox/> with props", () => {
    it("should render correctly with passed props", () => {
      const wrapper = shallow(<CheckBox {...props} />);
      checkBoxLabel = wrapper.find("label");
      expect(checkBoxLabel.text()).toEqual(props.checkBoxTitle);
    });
  });
});
