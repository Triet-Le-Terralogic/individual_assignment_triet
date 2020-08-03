import React from "react";
import GuessLayout from "../GuessLayout";
import { shallow } from "enzyme";

const props = {
  children: "Abcd",
};

describe("<AdminLayout/> - Render", () => {
  it("should render without crash", () => {
    shallow(<GuessLayout />);
  });

  it("should render correctly with default props ", () => {
    const wrapper = shallow(<GuessLayout />);
    expect(wrapper.props().className).toContain("Guess-layout");
    expect(
      wrapper.find("[data-test='guess-layout-children']").props().children
    ).toEqual("default");
  });

  it("should render correctly with passed props ", () => {
    const wrapper = shallow(<GuessLayout {...props} />);
    expect(
      wrapper.find("[data-test='guess-layout-children']").props().children
    ).toEqual(props.children);
  });
});
