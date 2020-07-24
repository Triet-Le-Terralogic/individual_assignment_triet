import React from "react";
// import GuessLayout from "./layouts/GuessLayout";
import AdminLayout from "./layouts/AdminLayout";
import Profile from "./pages/Profile";
// import Login from "./pages/Login";
// import Register from "./pages/Register";

function App() {
	return (
		// <GuessLayout>
		// 	// 	<Login />
		// 	// <Register />
		// </GuessLayout>
		<AdminLayout>
			<Profile />
		</AdminLayout>
	);
}

export default App;
