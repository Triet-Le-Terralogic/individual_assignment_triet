import React from "react";
import ButtonListWrapper from "../index";
import { shallow } from "enzyme";

const props = {
  buttonData: [
    {
      id: "save",
      buttonType: "button",
      pageType: "admin",
      config: {
        title: "Save",
        isFull: true,
        onClickHandler: jest.fn(),
      },
    },
    {
      id: "logout",
      buttonType: "button",
      pageType: "admin",
      config: {
        title: "Logout",
        isFull: false,
        onClickHandler: jest.fn(),
      },
    },
  ],
  pageType: "admin",
};
let container, containerProps;

it("should render without crash", () => {
  shallow(<ButtonListWrapper />);
});

describe("<ButtonListWrapper/> - no props", () => {
  const wrapper = shallow(<ButtonListWrapper />);
  beforeEach(() => {
    container = wrapper.find("div").first();
    containerProps = container.props();
  });

  it("should render correctly with defautl props ", () => {
    expect(containerProps.className).toContain(
      "Button-list-wrapper Button-list-wrapper-guess"
    );
  });
  it("should'nt render any button with default dataButton = []", () => {
    expect(container.children()).toHaveLength(0);
  });
});

describe("<ButtonListWrapper /> with props", () => {
  const wrapper = shallow(<ButtonListWrapper {...props} />);
  beforeEach(() => {
    container = wrapper.find("div").first();
    containerProps = container.props();
  });

  it("should render correctly with passed props", () => {
    expect(containerProps.className).toContain(
      "Button-list-wrapper Button-list-wrapper-admin"
    );
  });

  it("should render buttonData.length button ", () => {
    expect(container.find("Button")).toHaveLength(props.buttonData.length);
  });
});
