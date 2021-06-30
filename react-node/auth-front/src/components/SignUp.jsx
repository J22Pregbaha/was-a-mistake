import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isAuthor, setIsAuthor] = useState(false);

	return (
		<div className="text-center">
			<main className="form-signin">
				<form>
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
					<div className="checkbox mb-3">
						<label>
							<input 
								type="checkbox"
								checked={(e) => setIsAuthor(true)}
								value={isAuthor} /> Remember me
						</label>
					</div>
					<Link to="/sign-in">Sign In</Link>
					<button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
					<p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
				</form>
			</main>
		</div>
	);
}

export default SignUp;