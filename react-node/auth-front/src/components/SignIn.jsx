import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

	return (
        <div className="text-center">
            <main className="form-signin">
                <form>
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