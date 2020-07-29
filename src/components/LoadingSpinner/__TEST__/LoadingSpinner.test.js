import React from "react";
import LoadingSpinner from "../index";
import { shallow } from "enzyme";

describe("<LoadingSpinner/>", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<LoadingSpinner />);
	});

	it("should includes a div.Loading-spinner", () => {
		expect(wrapper.find("div.Loading-spinner")).toHaveLength(1);
	});

	it("should includes a div.Loading-spinner__item", () => {
		expect(wrapper.find("div.Loading-spinner__item")).toHaveLength(1);
	});

	it("div.Load-spinner__item should contain 2 empty div", () => {
		expect(wrapper.find("div.Loading-spinner__item").children()).toHaveLength(
			2
		);
		expect(wrapper.find("div.Loading-spinner__item").childAt(0).text()).toMatch(
			""
		);
		expect(wrapper.find("div.Loading-spinner__item").childAt(1).text()).toMatch(
			""
		);
	});
});
