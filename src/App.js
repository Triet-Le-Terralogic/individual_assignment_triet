import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function App() {
	return (
		<div>
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path="/profile" component={Profile} />
				<Redirect from="/" to="login" />
			</Switch>
		</div>
	);
}

export default App;
