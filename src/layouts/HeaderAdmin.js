import React from "react";
import PropTypes from "prop-types";

export default function HeaderAdmin({
	headerTitle = "default",
	headerInfo = "default",
}) {
	return (
		<header className="Header-admin">
			<div>
				<p>{headerTitle}</p>
				<span>{headerInfo}</span>
			</div>
		</header>
	);
}

HeaderAdmin.propTypes = {
	headerTitle: PropTypes.string.isRequired,
	headerInfo: PropTypes.string.isRequired,
};
