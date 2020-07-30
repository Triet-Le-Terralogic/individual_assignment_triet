import React from "react";
import LoadingSpinner from "../index";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const wrapper = shallow(<LoadingSpinner />);
let container, containerProps, loadingSpinnerItem;

describe("<LoadingSpinner/>", () => {
  beforeEach(() => {
    container = wrapper.find("[data-test='spinner']");
    containerProps = container.props();
    loadingSpinnerItem = container.find("[data-test='spinner-item']");
  });

  it("should render withour crash", () => {
    shallow(<LoadingSpinner />);
  });

  it("should render correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render a div.Loading-spinner container", () => {
    expect(container).toHaveLength(1);
    expect(containerProps.className).toContain("Loading-spinner");
  });

  it("should render a div.Loading-spinner__item inside container", () => {
    expect(loadingSpinnerItem).toHaveLength(1);
    expect(loadingSpinnerItem.props().className).toContain(
      "Loading-spinner__item"
    );
  });

  it("should contain 2 empty div", () => {
    expect(loadingSpinnerItem.children()).toHaveLength(2);
    expect(loadingSpinnerItem.childAt(0).text()).toMatch("");
    expect(loadingSpinnerItem.childAt(1).text()).toMatch("");
  });
});
