import React from "react";
import PropTypes from "prop-types";
import penIcon from "../assets/img/pen_icon.svg";

export default function AvatarAdmin({
	avatarTitle = "default",
	avatarImg = "",
	onChangeAvatar = () => {},
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
			<label htmlFor="file-input">
				<img className="img-fluid" src={penIcon} alt="pen icon" />
			</label>
			<input
				id="file-input"
				type="file"
				onChange={(event) => onChangeAvatar(event.target.files[0])}
			/>
			<p className="Avatar-admin__title">{avatarTitle}</p>
		</div>
	);
}

AvatarAdmin.propTypes = {
	avatarTitle: PropTypes.string.isRequired,
	avatarImg: PropTypes.string.isRequired, // 'http://api.terralogic.ngrok.io/${tokenformAPI}'
	onChangeAvatar: PropTypes.func,
};
