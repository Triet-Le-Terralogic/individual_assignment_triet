import React from "react";
import AvatarAdmin from "../index";
import { shallow } from "enzyme";

const props = {
  avatarTitle: "test title",
  avatarImg: "test source",
  onChangeAvatar: jest.fn(),
};
let container, containerProps, image, imageWrapper, label, input, title;

it("should render without crash", () => {
  shallow(<AvatarAdmin />);
});

describe("<AvatarAdmin /> - no props", () => {
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

  it("should render correctly with defautl props ", () => {
    expect(containerProps.className).toContain("Avatar-admin");

    expect(imageWrapper.props().className).toContain("Avatar-admin__image");

    expect(image.props().src).toEqual("");

    expect(label.find("img")).toHaveLength(1);
    expect(label.props().htmlFor).toEqual("file-input");

    expect(input.props().id).toEqual("file-input");
    expect(input.props().type).toEqual("file");

    expect(title.text()).toEqual("default");
    expect(title.props().className).toEqual("Avatar-admin__title");
  });
});

describe.skip("<AvatarAdmin /> with props", () => {
  const wrapper = shallow(<AvatarAdmin {...props} />);
  beforeEach(() => {
    container = wrapper.find("div").first();
    containerProps = container.props();
    image = wrapper.find("[test-data='avatar-admin-image']");
    label = wrapper.find("[test-data='avatar-admin-label']");
    input = wrapper.find("[test-data='avatar-admin-input']");
    title = wrapper.find("[test-data='avatar-admin-title']");
  });

  it("should render correctly with passed props", () => {
    expect(image.props().src).toEqual(props.avatarImg);
    expect(title.text()).toEqual(props.avatarTitle);
    expect(label.find("img")).toHaveLength(1);
  });

  it("should call onChangeAvatar func when file changed", () => {
    input.simulate("change");
    expect(props.onChangeAvatar).toHaveBeenCalled();
  });
});
