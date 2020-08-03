import React from "react";
import Button from "../index";
import { shallow } from "enzyme";

const props = {
  onClickHandler: jest.fn(),
  pageType: "admin",
  buttonType: "submit",
  buttonTitle: "Click me",
  isFull: false,
  isDisabled: true,
};
let container, containerProps;

it("should render without crash", () => {
  shallow(<Button />);
});

describe("<Button/> - render", () => {
  describe("<Button /> - no props", () => {
    const wrapper = shallow(<Button />);
    beforeEach(() => {
      container = wrapper.find("button");
      containerProps = container.props();
    });

    it("should render correctly with default props ", () => {
      expect(container.text()).toEqual("Click!");
      expect(containerProps.className).toContain(
        "Button-guess Button-guess--state-fulfill"
      );
      expect(containerProps.type).toEqual("button");
      expect(containerProps.disabled).toBeFalsy();
    });
  });

  describe("<Button /> - with props", () => {
    const wrapper = shallow(<Button {...props} />);
    beforeEach(() => {
      container = wrapper.find("button");
      containerProps = container.props();
    });

    it("should render correctly with passed props", () => {
      expect(container.text()).toEqual(props.buttonTitle);
      expect(containerProps.className).toContain(
        "Button-admin Button-admin--state-empty"
      );
      expect(containerProps.type).toEqual("submit");
      expect(containerProps.disabled).toBeTruthy();
    });
  });
});

describe("<Button/> - behavior", () => {
  const wrapper = shallow(<Button {...props} />);
  it("should call onClickHandler when button is clicked", () => {
    wrapper.simulate("click");
    expect(props.onClickHandler).toHaveBeenCalledTimes(1);
  });
});
