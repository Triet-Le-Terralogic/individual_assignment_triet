import React from "react";
import AdminLayout from "../AdminLayout";
import { shallow } from "enzyme";

const props = {
  children: "Abcd",
};

describe("<AdminLayout/> - Render", () => {
  it("should render without crash", () => {
    shallow(<AdminLayout />);
  });

  it("should render correctly with default props ", () => {
    const wrapper = shallow(<AdminLayout />);
    expect(wrapper.props().className).toContain("Admin-layout");
    expect(wrapper.find("HeaderAdmin")).toHaveLength(1);
    expect(wrapper.props().children[1].props.children).toEqual("default");
  });

  it("should render correctly with passed props ", () => {
    const wrapper = shallow(<AdminLayout {...props} />);
    expect(wrapper.props().children[1].props.children).toEqual(props.children);
  });
});
