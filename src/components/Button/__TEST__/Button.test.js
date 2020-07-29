import React from "react";
import Button from "../index";
import { shallow } from "enzyme";

describe("<Button/>", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Button />);
	});
	const props = {};
	it("should render input props without error ", () => {
		console.log(wrapper.debug());
		expect(true).toBeTruthy();
	});
});
