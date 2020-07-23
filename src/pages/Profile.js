import React from "react";
import AvatarAdmin from "../components/AvatarAdmin";
import trumpAvatar from "../assets/img/test_avatar.jpg";
// import FormWrapper from "../components/FormWrapper";
// import { transformToArr } from "../helper";

export default function Profile() {
	return (
		<div className="Profile container text-center text-sm-left">
			{/* <FormWrapper
        formTitle="Login your account"
        formData={transformToArr(formData)}
        buttonData={transformToArr(buttonData)}
      /> */}
			{/* FormWrapper */}
			{/* FormWrapper */}
			{/* ButtonList */}
			<AvatarAdmin avatarTitle="donald trump" avatarImg={trumpAvatar} />
			<h1>Hello</h1>
		</div>
	);
}
