import React from "react";
import FormWrapper from "./FormWrapper";
import PropTypes from "prop-types";

export default function AdminSection({
	onUserInputHandler = () => {},
	formInputstate = {},
	sectionHeader = "default",
	sectionData = [],
}) {
	const headerColor =
		typeof sectionHeader === "string" ? "Admin-section__header--color" : "";
	return (
		<div className="Admin-section">
			<div className={`Admin-section__header ${headerColor}`}>
				{sectionHeader}
			</div>
			<div className="Admin-section__form-list">
				<FormWrapper
					formData={sectionData}
					onUserInputHandler={onUserInputHandler}
					formInputstate={formInputstate}
				/>
			</div>
		</div>
	);
}

AdminSection.propTypes = {
	onUserInputHandler: PropTypes.func,
	formInputstate: PropTypes.object,
	sectionHeader: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	sectionData: PropTypes.arrayOf(PropTypes.object),
};
