import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignUp from "./SignUp";
import SignIn from "./SignIn";
import ConfirmMail from "./ConfirmMail";

function App() {
	useEffect(() => {
		fetch("/mail/about")
			.then(res => res.json())
			.then(result => console.log(result));
	}, []);

	const sendEmail = async (fullName, email, password) => {
		console.log(`Send Email to ${email}`);

		const signUpPostRequestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				name: fullName,
				email: email,
				password: password
			})
		};

		const signUpResponse = await fetch("/auth/signUp", signUpPostRequestOptions);
		const signUpData = await signUpResponse.json();
		if (signUpData.encrypted_key) {
			const emailPostRequestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					email: email,
					subject: "Please confirm your email",
					text: "Good day, \n\n Please, we would like you to confirm your e-mail by clicking the link below"
				})
			};
			const response = await fetch("/mail/sendEmail", emailPostRequestOptions);
			const data = await response.json();
			console.log("Email sent", data);
		}
	}

	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/">
						<SignUp submitInfo={sendEmail} />
					</Route>
					<Route path="/sign-in">
						<SignIn />
					</Route>
					<Route path="/confirmMail">
						<ConfirmMail />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
