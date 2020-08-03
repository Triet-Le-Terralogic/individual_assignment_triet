import React from "react";
import AvatarAdmin from "../index";
import { shallow } from "enzyme";

const props = {
  avatarTitle: "test title",
  avatarImg: "test source",
  onChangeAvatar: jest.fn(),
};
let container, containerProps, image, imageWrapper, label, input, title;

describe("<AvatarAdmin /> - Render", () => {
  it("should render without crash", () => {
    shallow(<AvatarAdmin />);
  });

  describe("<AvatarAdmin/> - no props", () => {
    const wrapper = shallow(<AvatarAdmin />);
    beforeEach(() => {
      container = wrapper.find("div").first();
      containerProps = container.props();
      imageWrapper = wrapper.find("[test-data='avatar-admin-image-wrapper']");
      image = wrapper.find("[test-data='avatar-admin-image']");
      label = wrapper.find("[test-data='avatar-admin-label']");
      input = wrapper.find("[test-data='avatar-admin-input']");
      title = wrapper.find("[test-data='avatar-admin-title']");
    });

    it("should render a div with class Avatar-admin", () => {
      expect(containerProps.className).toContain("Avatar-admin");
    });

    it("should render an image wrapper with class Avatar-admin__image ", () => {
      expect(imageWrapper.props().className).toContain("Avatar-admin__image");
    });

    it("should render an image with default src ", () => {
      expect(image.props().src).toEqual("");
    });

    it("should render a label with default props ", () => {
      expect(label.find("img")).toHaveLength(1);
      expect(label.props().htmlFor).toEqual("file-input");
    });

    it("should render a file input with default props ", () => {
      expect(input.props().type).toEqual("file");
      expect(input.props().id).toEqual("file-input");
    });

    it("should render a paragraph with default props ", () => {
      expect(title.props().className).toEqual("Avatar-admin__title");
      expect(title.text()).toEqual("default");
    });
  });

  describe("<AvatarAdmin /> - with props", () => {
    const wrapper = shallow(<AvatarAdmin {...props} />);
    beforeEach(() => {
      container = wrapper.find("div").first();
      containerProps = container.props();
      image = wrapper.find("[test-data='avatar-admin-image']");
      label = wrapper.find("[test-data='avatar-admin-label']");
      input = wrapper.find("[test-data='avatar-admin-input']");
      title = wrapper.find("[test-data='avatar-admin-title']");
    });

    it("should render avatar image correctly with passed props", () => {
      expect(image.props().src).toEqual(props.avatarImg);
    });
    it("should render avatar title correctly with passed props", () => {
      expect(title.text()).toEqual(props.avatarTitle);
    });
  });
});

describe("<AvatarAdmin /> - Behavior", () => {
  it("should call onChangeAvatar func when file changed", () => {
    input.simulate("change", { target: { files: ["avatar.svg", "avatar"] } });
    expect(props.onChangeAvatar).toHaveBeenCalled();
  });
});
