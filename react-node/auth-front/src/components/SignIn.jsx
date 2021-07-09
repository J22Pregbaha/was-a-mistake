import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Cookies from 'universal-cookie';

import Alert from "./Alert";

function SignIn() {
	let history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [responseMessage, setResponseMessage] = useState("");
	const cookies = new Cookies();

	if (cookies.get('token')) {
		history.push("/home");
	}

	async function signIn(email, password) {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email: email,
				password: password
			})
		};
		const response = await fetch("/auth/signIn", requestOptions);
		const data = await response.json();
		cookies.set('token', data.token, { path: '/' });
		
		// setTimeout(() => history.push("/home"), 1000);
		history.push("/home")
	}

    function resetForm() {
		email === "" && password === ""
			? setResponseMessage("Please fill all entries")
			: email === ""
			? setResponseMessage("Please provide your email address")
			: password === ""
			? setResponseMessage("Please provide your password")
			: signIn(email, password);
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
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

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
                    <Link to="/">Sign Up</Link>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign In</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                </form>
            </main>
        </div>
	);
}

export default SignIn;