import React from "react";
import Modal from "../Modal";
// import ButtonListWrapper from "../../components/ButtonListWrapper"
import { shallow } from "enzyme";

const props = {
  isShow: true,
  modalType: "save",
  modalBody: "test body",
  modalHeader: "test header",
  acceptFunc: jest.fn,
  denyFunc: jest.fn,
};

let wrapper, container, modalWrapper, modalHeader, modalBody, modalFooter;

it("should render without crash", () => {
  shallow(<Modal />);
});

describe("<Modal/> - no props", () => {
  it("should render correctly with defautl props ", () => {
    const wrapper = shallow(<Modal />);
    container = wrapper.find("Popup");
    modalWrapper = container.find("[data-test='modal-wrapper']");
    modalHeader = container.find("[data-test='modal-header']");
    modalBody = container.find("[data-test='modal-body']");
    modalFooter = container.find("[data-test='modal-footer']");

    expect(container.props().isShow).toBeFalsy();
    expect(modalHeader.text()).toEqual("default");
    expect(modalBody.text()).toEqual("default");
    expect(modalFooter.find("ButtonListWrapper")).toHaveLength(1);
    expect(modalFooter.find("ButtonListWrapper").props().pageType).toEqual(
      "modal"
    );
    expect(
      modalFooter.find("ButtonListWrapper").props().buttonData[1].config.title
    ).toEqual("ok");
  });

  it("should render correctly with passed props ", () => {
    const wrapper = shallow(<Modal {...props} />);
    container = wrapper.find("Popup");
    modalWrapper = container.find("[data-test='modal-wrapper']");
    modalHeader = container.find("[data-test='modal-header']");
    modalBody = container.find("[data-test='modal-body']");
    modalFooter = container.find("[data-test='modal-footer']");

    expect(container.props().isShow).toBeTruthy();
    expect(modalHeader.text()).toEqual("test header");
    expect(modalBody.text()).toEqual("test body");
    expect(
      modalFooter.find("ButtonListWrapper").props().buttonData[1].config.title
    ).toEqual("save");
  });
});
