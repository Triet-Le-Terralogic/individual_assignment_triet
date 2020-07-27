import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions";

import { PublicRoute, PrivateRoute } from "./hoc";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ErrorPage from "./components/ErrorPage";

function App(props) {
	const { isAuth } = props;
	return (
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
	);
}

const mapStateToProps = (state) => {
	return {
		isAuth: state.isAuth,
		userInfo: state.userInfo,
		token: state.token,
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
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
