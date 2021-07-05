import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function ConfirmedMail() {
	const { userId, encryptedKey } = useParams();
	const [userExists, setUserExists] = useState(true);

	useEffect(() => {
		confirmUser();
	});

	const confirmUser = async () => {
		const confirm = await fetch(`/auth/confirmEmail/${userId}/${encryptedKey}`);
		const response = await confirm.json();
		typeof response != "object" && setUserExists(false);
		console.log(response);
	}

	if (userExists) {
		return (
			<div className="text-center">
				<h1>You have now confirmed your mail. You can now <Link to="/sign-in">Sign In</Link></h1>
			</div>
		);
	} else {
		return (
			<div className="text-center">
				<h1>Oops! This account either doesn't exist or has already been verified.</h1>
			</div>
		);
	}
}

export default ConfirmedMail;