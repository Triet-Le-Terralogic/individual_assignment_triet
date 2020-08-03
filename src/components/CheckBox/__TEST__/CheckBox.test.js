import React from "react";
import CheckBox from "../index";
import { shallow } from "enzyme";

const props = {
  checkBoxTitle: "Remember password",
};
let container, containerProps;

it("should render without crash", () => {
  shallow(<CheckBox />);
});

describe("<CheckBox/> - no props", () => {
  const wrapper = shallow(<CheckBox />);
  beforeEach(() => {
    container = wrapper.find("div").first();
    containerProps = container.props();
  });

  it("should render correctly with default props ", () => {
    const checkBoxInPut = container.find("input");
    const checkBoxlabel = container.find("label");
    const checkBoxSpan = container.find("span");

    expect(containerProps.className).toContain("Check-box");

    expect(checkBoxlabel.text()).toEqual("Default");
    expect(checkBoxlabel.props().htmlFor).toEqual("isChecked");

    expect(checkBoxInPut.props().type).toEqual("checkbox");
    expect(checkBoxInPut.props().name).toEqual("isChecked");
    expect(checkBoxInPut.props().value).toBeTruthy();

    expect(checkBoxSpan.props().className).toContain("Check-box--custom");
  });
});

describe("<CheckBox/> with props", () => {
  const wrapper = shallow(<CheckBox {...props} />);
  beforeEach(() => {
    container = wrapper.find("div").first();
    containerProps = container.props();
  });

  it("should render correctly with passed props", () => {
    const checkBoxLabel = container.find("label");
    expect(checkBoxLabel.text()).toEqual(props.checkBoxTitle);
  });
});
