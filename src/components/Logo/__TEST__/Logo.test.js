import React from "react";
import Logo from "../index";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const wrapper = shallow(<Logo />);
let container, containerProps;

describe("<Logo/>", () => {
  beforeEach(() => {
    container = wrapper.find("div");
    containerProps = container.props();
  });

  it("should render without crash", () => {
    shallow(<Logo />);
  });

  it("should render correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render a div with class: Logo", () => {
    const container = wrapper.find("div");
    expect(container).toHaveLength(1);
    expect(containerProps.className).toContain("Logo");
  });

  it("should render a img with default imported src", () => {
    const image = container.find("img");
    expect(image).toHaveLength(1);
    expect(image.props().src).toEqual("brand_logo.svg");
  });
});
