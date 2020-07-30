import React from "react";
import ErrorPage from "../index";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("<ErrorPage/>", () => {
  const wrapper = shallow(<ErrorPage />);
  it("should render without crash", () => {
    shallow(<ErrorPage />);
  });

  it("should render correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
