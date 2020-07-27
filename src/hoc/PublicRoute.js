import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PublicRoute = ({
	component: Component,
	authenticated,
	...rest
}) => {
	return (
		<Route
			render={(props) =>
				authenticated === false ? (
					<Component {...props} {...rest} />
				) : (
					<Redirect to="/profile" />
				)
			}
		/>
	);
};
