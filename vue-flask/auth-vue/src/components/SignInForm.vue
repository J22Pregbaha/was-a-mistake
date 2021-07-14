<template>
	<div class="text-center">
		<main class="form-signin">
			<form @submit.prevent="signIn">
				<img class="mb-4" src="../assets/logo.png" alt="" width="72" height="57" />
				<h1 class="h3 mb-3 fw-normal">Please sign In</h1>
				<div class="form-floating">
					<input 
						type="email" 
						class="form-control" 
						name="email"
						v-model="email"
						id="floatingInput" />
					<label for="floatingInput">Email address</label>
				</div>
				<div class="form-floating">
					<input 
						type="password" 
						class="form-control" 
						name="password"
						v-model="password"
						id="floatingPassword" />
					<label for="floatingPassword">Password</label>
				</div>
				<router-link to="/sign-up">Sign Up</router-link>
				<button class="w-100 btn btn-lg btn-primary" type="submit">Sign In</button>
				<p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
			</form>
		</main>
	</div>
</template>

<script>
export default {
	data() {
		return {
			email: '',
			password: ''
		}
	},
	methods: {
		signIn: async function() {
			console.log(this.email, this.password);
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					email: this.email,
					password: this.password
				})
			};
			const response = await fetch("/auth/login", requestOptions);
			const data = await response.json();
			this.$cookies.set("token", data.access_token, "31d");
			this.$cookies.set("user", data.account_dets, "31d");
			console.log(data);
			this.$router.push("/")
		}
	}
}
</script>