import React from "react";
import { Link } from "react-router-dom";

function Unauthorized() {
	return (
		<div className="text-center">
			<h1>Sorry, you're not authorized. <Link to="/sign-in">Sign in</Link></h1>
		</div>
	);
}

export default Unauthorized;