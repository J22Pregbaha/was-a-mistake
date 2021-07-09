import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import Cookies from 'universal-cookie';

import Alert from "./Alert";

function SignUp(props) {
	let history = useHistory();
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [responseMessage, setResponseMessage] = useState("");
	const cookies = new Cookies();

	if (cookies.get('token')) {
		history.push("/home");
	}

	function resetForm() {
		fullName === "" && email === "" && password === ""
			? setResponseMessage("Please fill all entries")
			: fullName === ""
			? setResponseMessage("Please provide your full name")
			: email === ""
			? setResponseMessage("Please provide your email address")
			: password === ""
			? setResponseMessage("Please provide your password")
			: props.submitInfo(fullName, email, password);

		fullName !== "" && email !== "" && password !== "" && setSubmitted(true);
	}

	return (
		<div className="text-center">
			<main className="form-signin">
				{responseMessage !== "" && <Alert type="warning" output={responseMessage} />}
				<form 
					method="post"
					onSubmit={(e) => {
						e.preventDefault();

						resetForm();
					}}>
					<img className="mb-4" src="/logo192.png" alt="" width="72" height="57" />
					<h1 className="h3 mb-3 fw-normal">Please sign up</h1>

					<div className="form-floating">
						<input 
							type="text" 
							className="form-control" 
							id="floatingName"
							onChange={(e) => setFullName(e.target.value)}
							value={fullName} />
						<label htmlFor="floatingName">Full Name</label>
					</div>
					<div className="form-floating">
						<input 
							type="email" 
							className="form-control" 
							id="floatingInput"
							onChange={(e) => setEmail(e.target.value)}
							value={email} />
						<label htmlFor="floatingInput">Email address</label>
					</div>
					<div className="form-floating">
						<input 
							type="password" 
							className="form-control" 
							id="floatingPassword"
							onChange={(e) => setPassword(e.target.value)}
							value={password} />
						<label htmlFor="floatingPassword">Password</label>
					</div>
					<Link to="/sign-in">Sign In</Link>
					<button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
					<p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
				</form>
			</main>
			{submitted && <Redirect to="/confirmMail" />}
		</div>
	);
}

export default SignUp;