import React from "react";
import FormWrapper from "./FormWrapper";
import PropTypes from "prop-types";

export default function AdminSection({
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
				<FormWrapper formData={sectionData} />
			</div>
		</div>
	);
}

AdminSection.propTypes = {
	sectionHeader: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
	sectionData: PropTypes.arrayOf(PropTypes.object),
};
