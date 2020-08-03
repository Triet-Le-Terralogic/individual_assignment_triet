import React from "react";
import FormWrapper from "../index";
import { shallow } from "enzyme";

const props = {
  onUserInputHandler: jest.fn,
  formInputState: { Email: "test" },
  formTitle: "",
  formData: [
    {
      pageType: "guess",
      id: "Email",
      config: {
        icon: "test.svg",
        label: "Email",
        placeholder: "Enter your email",
        type: "email",
      },
    },
  ],
};
let container, containerProps, title, formListWrapper, formList;

describe("<FormWrapper /> - render", () => {
  it("should render without crash", () => {
    shallow(<FormWrapper />);
  });

  describe("<FormWrapper/> - no props", () => {
    const wrapper = shallow(<FormWrapper />);
    beforeEach(() => {
      container = wrapper.find("div").first();
      containerProps = container.props();
      title = container.find("[data-test='form-title']");
      formListWrapper = container.find("[data-test='form-list-wrapper']");
      formList = container.find("[data-test='form-list']");
    });

    it("should render component wrapper correctly with default props ", () => {
      expect(containerProps.className).toContain("Form-wrapper");
    });

    it("should render title with default props", () => {
      expect(title).toHaveLength(1);
      expect(title.text()).toEqual("");
      expect(title.props().className).toContain("Form-wrapper__title");
    });

    it("should render form list wrapper with default props", () => {
      expect(formListWrapper).toHaveLength(1);
      expect(formListWrapper.props().className).toContain("container");
    });

    it("should render form list with default props", () => {
      expect(formList).toHaveLength(1);
      expect(formList.props().className).toContain("row");
      expect(formList.find("FormCell")).toHaveLength(0);
    });
  });

  describe("<FormWrapper /> - with props", () => {
    const wrapper = shallow(<FormWrapper {...props} />);
    beforeEach(() => {
      container = wrapper.find("div").first();
      title = container.find("[data-test='form-title']");
      formList = container.find("[data-test='form-list']");
    });

    it("should render title correctly with passed props", () => {
      expect(title.text()).toEqual(props.formTitle);
    });

    it("should render form list correctly with passed props", () => {
      expect(formList.find("FormCell")).toHaveLength(props.formData.length);
    });
  });
});
