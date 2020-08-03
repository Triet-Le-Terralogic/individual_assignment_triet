import React from "react";
import HeaderAdmin from "../HeaderAdmin";
import { shallow } from "enzyme";

const props = {
  headerTitle: "test title",
  headerInfo: "test info",
};

it("should render without crash", () => {
  shallow(<HeaderAdmin />);
});

describe("<HeaderAdmin/> - no props", () => {
  it("should render correctly with default props ", () => {
    const wrapper = shallow(<HeaderAdmin />);
    expect(wrapper.props().className).toContain("Header-admin");
    expect(wrapper.find("div")).toHaveLength(1);
    expect(wrapper.find("p")).toHaveLength(1);
    expect(wrapper.find("p").text()).toEqual("default");
    expect(wrapper.find("span")).toHaveLength(1);
    expect(wrapper.find("span").text()).toEqual("default");
  });

  it("should render correctly with passed props ", () => {
    const wrapper = shallow(<HeaderAdmin {...props} />);
    expect(wrapper.find("p").text()).toEqual(props.headerTitle);
    expect(wrapper.find("span").text()).toEqual(props.headerInfo);
  });
});
