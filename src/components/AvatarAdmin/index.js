import React from "react";
import PropTypes from "prop-types";
import penIcon from "../../assets/img/pen_icon.svg";

export default function AvatarAdmin({
  avatarTitle = "default",
  avatarImg = "",
  onChangeAvatar = () => {},
}) {
  return (
    <div className="Avatar-admin">
      <div
        className="Avatar-admin__image"
        test-data="avatar-admin-image-wrapper"
      >
        <img
          test-data="avatar-admin-image"
          src={avatarImg}
          className="img-fluid rounded-circle"
          alt="Your avatar"
        />
      </div>
      <label htmlFor="file-input" test-data="avatar-admin-label">
        <img className="img-fluid" src={penIcon} alt="pen icon" />
      </label>
      <input
        test-data="avatar-admin-input"
        id="file-input"
        type="file"
        onChange={(event) => onChangeAvatar(event.target.files[0])}
      />
      <p className="Avatar-admin__title" test-data="avatar-admin-title">
        {avatarTitle}
      </p>
    </div>
  );
}

AvatarAdmin.propTypes = {
  avatarTitle: PropTypes.string,
  avatarImg: PropTypes.string, // 'http://api.terralogic.ngrok.io/${tokenformAPI}'
  onChangeAvatar: PropTypes.func,
};
