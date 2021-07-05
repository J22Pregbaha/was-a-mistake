import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignUp from "./SignUp";
import SignIn from "./SignIn";
import ConfirmMail from "./ConfirmMail";
import ConfirmedEmail from "./ConfirmedEmail";

function App() {
	useEffect(() => {
		fetch("/mail/about")
			.then(res => res.json())
			.then(result => console.log(result));
	}, []);

	const signUp = async (fullName, email, password) => {
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
			const confirmURL = `http://localhost:3000/confirmEmail/${signUpData.insertId}/${signUpData.encrypted_key}`;
			const emailPostRequestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					email: email,
					subject: "Please confirm your email",
					text: `Good day ${fullName}, \n\n Please, we would like you to confirm your e-mail by clicking the link below: \n\n ${confirmURL} \n\n Thank, have a lovely day.`
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
						<SignUp submitInfo={signUp} />
					</Route>
					<Route path="/sign-in">
						<SignIn />
					</Route>
					<Route path="/confirmMail">
						<ConfirmMail />
					</Route>
					<Route path="/confirmEmail/:userId/:encryptedKey">
						<ConfirmedEmail />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
