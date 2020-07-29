import React from "react";
import Logo from "../index";
import { shallow } from "enzyme";

describe("<Logo/>", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Logo />);
	});

	it("should render correctly", () => {
		expect(wrapper).toMatchSnapshot();
	});
	it("should render imported img with default src", () => {
		expect(wrapper.find("img").props().src).toEqual("brand_logo.svg");
	});
});
