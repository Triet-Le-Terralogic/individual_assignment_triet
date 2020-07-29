import React, { useState, useRef } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions";
import { useDeepCompareEffect } from "use-deep-compare";

import { PublicRoute, PrivateRoute } from "./hoc";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ErrorPage from "./components/ErrorPage";
import Modal from "./layouts/Modal";

function App(props) {
	const { isAuth, serverMsg, userInfo } = props;
	const mounted = useRef(false);
	const [modalState, setModalState] = useState(false);
	useDeepCompareEffect(() => {
		if (mounted.current && serverMsg.length) {
			setModalState(true);
		} else {
			mounted.current = true;
		}
	}, [serverMsg, userInfo]);
	return (
		<>
			<Modal
				modalHeader="Notification"
				modalBody={serverMsg}
				modalType="nofi"
				isShow={modalState}
				denyFunc={() => setModalState(false)}
				acceptFunc={() => setModalState(false)}
			/>
			<Switch>
				<PublicRoute
					authenticated={isAuth}
					path="/login"
					component={Login}
					{...props}
				/>
				<PublicRoute
					authenticated={isAuth}
					path="/register"
					component={Register}
					{...props}
				/>
				<PrivateRoute
					authenticated={isAuth}
					path="/profile"
					component={Profile}
					{...props}
				/>
				<Redirect exact from="/" to="login" />
				<Route component={ErrorPage} />
			</Switch>
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		isAuth: state.isAuth,
		userInfo: state.userInfo,
		token: state.token,
		serverMsg: state.serverMsg,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onLoginHandler: (loginData) =>
			dispatch(actionCreators.postLoginData(loginData)),
		onRegisterHandler: (registerData) =>
			dispatch(actionCreators.postRegisterData(registerData)),
		onLogoutHandler: () => dispatch(actionCreators.onLogoutHandler()),
		onChangePasswordHandler: (changePassData) =>
			dispatch(actionCreators.changePassword(changePassData)),
		onUploadAvatarHandler: (fileData) =>
			dispatch(actionCreators.uploadAvatar(fileData)),
		onUploadUserInfo: (userData) =>
			dispatch(actionCreators.updateUserInfo(userData)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
