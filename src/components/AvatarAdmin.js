import React from "react";
import PropTypes from "prop-types";
import penIcon from "../assets/img/pen_icon.svg";

export default function AvatarAdmin({
	avatarTitle = "default",
	avatarImg = "",
}) {
	return (
		<div className="Avatar-admin">
			<div className="Avatar-admin__image">
				<img
					src={avatarImg}
					className="img-fluid rounded-circle"
					alt="Your avatar"
				/>
			</div>
			<span>
				<img className="img-fluid" src={penIcon} alt="pen icon" />
			</span>
			<p className="Avatar-admin__title">{avatarTitle}</p>
		</div>
	);
}

AvatarAdmin.propTypes = {
	avatarTitle: PropTypes.string.isRequired,
	avatarImg: PropTypes.string.isRequired, //should be Base64 picture
};
