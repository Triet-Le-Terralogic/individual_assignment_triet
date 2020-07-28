import React from "react";
import PropTypes from "prop-types";

import ButtonListWrapper from "../components/ButtonListWrapper";
import Popup from "./Popup";
import { modalButtonDataCreator } from "../helper";

export default function Modal({
	isShow = false,
	modalType = "nofi",
	modalBody = "",
	modalHeader = "",
	acceptFunc = () => {},
	denyFunc = () => {},
}) {
	// Modal button should only have 2 button
	const nofiButtonData = {
		btn1: { title: "cancel", func: denyFunc },
		btn2: { title: "ok", func: acceptFunc },
	};
	const saveButtonData = {
		btn1: { title: "cancel", func: denyFunc },
		btn2: { title: "save", func: acceptFunc },
	};
	let buttonData;
	if (modalType === "nofi") {
		buttonData = nofiButtonData;
	}
	if (modalType === "save") {
		buttonData = saveButtonData;
	}
	return (
		<Popup isShow={isShow}>
			<div className="Modal">
				<div className="Modal__header">{modalHeader}</div>
				<div className="Modal__body">{modalBody}</div>
				<div className="Modal__footer">
					<ButtonListWrapper
						buttonData={modalButtonDataCreator(buttonData)}
						pageType="modal"
					/>
				</div>
			</div>
		</Popup>
	);
}

Modal.propTypes = {
	isShow: PropTypes.bool.isRequired,
	modalType: PropTypes.oneOf(["nofi", "save"]),
	modalHeader: PropTypes.string,
	modalBody: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
