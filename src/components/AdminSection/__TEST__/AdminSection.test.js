import React from "react";
import { shallow } from "enzyme";
import AdminSection from "../index";
import AvatarAdmin from "../../AvatarAdmin";

const props = {
  onUserInputHandler: jest.fn,
  formInputstate: { test: "test" },
  sectionHeader: <AvatarAdmin />,
  sectionData: [{ test1: "test1" }, { test: "test2" }, { test3: "test3" }],
};
let container, containerProps, header, formList;

it("should render without crash", () => {
  shallow(<AdminSection />);
});

describe("<AdminSection /> - no props", () => {
  const wrapper = shallow(<AdminSection />);
  beforeEach(() => {
    container = wrapper.find("div").first();
    containerProps = container.props();
    header = wrapper.find("[data-test='section-header']");
    formList = wrapper.find("[data-test='section-form']");
  });

  it("should render correctly with default props ", () => {
    expect(containerProps.className).toContain("Admin-section");
    expect(header.props().className).toContain("Admin-section__header--color");
    expect(header.text()).toEqual("default");
    expect(formList.find("FormWrapper")).toHaveLength(1);
  });

  it("should pass default props to FormWrapper", () => {
    expect(formList.find("FormWrapper").props().formData).toEqual([]);
    expect(formList.find("FormWrapper").props().formInputstate).toEqual({});
    expect(
      typeof formList.find("FormWrapper").props().onUserInputHandler
    ).toEqual("function");
  });
});

describe("<AdminSection /> - with props", () => {
  const wrapper = shallow(<AdminSection {...props} />);
  beforeEach(() => {
    container = wrapper.find("div").first();
    containerProps = container.props();
    header = wrapper.find("[data-test='section-header']");
    formList = wrapper.find("[data-test='section-form']");
  });

  it("should render correctly with passed props ", () => {
    expect(header.props().className).not.toContain(
      "Admin-section__header--color"
    );
    expect(header.find(AvatarAdmin)).toHaveLength(1);
  });

  it("should pass props correctly to FormWrapper", () => {
    expect(formList.find("FormWrapper").props().formData).toEqual(
      props.sectionData
    );
    expect(formList.find("FormWrapper").props().formInputstate).toEqual(
      props.formInputstate
    );
    expect(formList.find("FormWrapper").props().onUserInputHandler).toEqual(
      props.onUserInputHandler
    );
  });
});
