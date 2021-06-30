import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignUp from "./SignUp";
import SignIn from "./SignIn";

function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/">
						<SignUp />
					</Route>
					<Route path="/sign-in">
						<SignIn />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
