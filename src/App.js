import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions";

import { PublicRoute, PrivateRoute } from "./hoc";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ErrorPage from "./components/ErrorPage";

function App({ isAuth }) {
	return (
		<Switch>
			<PublicRoute authenticated={isAuth} path="/login" component={Login} />
			<PublicRoute
				authenticated={isAuth}
				path="/register"
				component={Register}
			/>
			<PrivateRoute
				authenticated={isAuth}
				path="/profile"
				component={Profile}
			/>
			<Redirect exact from="/" to="login" />
			<Route component={ErrorPage} />
		</Switch>
	);
}

const mapStateToProps = (state) => {
	return {
		isAuth: state.isAuth,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onLoginHandler: (loginData) =>
			dispatch(actionCreators.postLoginData(loginData)),
		onRegisterHandler: (registerData) =>
			dispatch(actionCreators.postRegisterData(registerData)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
