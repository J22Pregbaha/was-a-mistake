import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Cookies from 'universal-cookie';

function Home(props) {
	let history = useHistory();
	const cookies = new Cookies();

	console.log(props);

	if (!cookies.get('token')) {
		history.push("/");
	}

	useEffect(() => {
		getHome();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.token]);

	async function getHome () {
		const myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');
		myHeaders.append('Authorization', `Bearer ${props.token}`);

		const response = await fetch("/content/home", {headers: myHeaders});
		const data = await response.json();
		console.log(data);
	}

	function logout() {
		cookies.remove('token', { path: '/' });
		history.push("/sign-in");
	}

	return (
		<div className="text-center">
			<h1>Hello World! Welcome Home.</h1>
			<button onClick={logout}>Logout</button>
		</div>
	);
}

export default Home;