import React from "react";
import Popup from "../Popup";
import { shallow } from "enzyme";

const props = {
  isShow: true,
  children: <h1>Test</h1>,
};

it("should render without crash", () => {
  shallow(<Popup />);
});

describe("<Popup/> - no props", () => {
  it("should render correctly with defautl props ", () => {
    const wrapper = shallow(<Popup />);
    expect(wrapper.props().className).toContain("Popup Popup--hide");
    expect(wrapper.props().children).toBeUndefined();
  });

  it("should render correctly with passed props ", () => {
    const wrapper = shallow(<Popup {...props} />);
    expect(wrapper.props().className).toContain("Popup Popup--show");
    expect(wrapper.props().children).toEqual(props.children);
  });
});
