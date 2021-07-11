<template>
	<div class="text-center">
		<main class="form-signin">
			<form 
				@submit.prevent="doSomething">
				<img class="mb-4" src="../assets/logo.png" alt="" width="72" height="57" />
				<h1 class="h3 mb-3 fw-normal">Please sign up</h1>

				<div class="form-floating">
					<input 
						type="text" 
						class="form-control"
						name="fullName"
						v-model="fullName"
						id="floatingName" />
					<label for="floatingName">Full Name</label>
				</div>
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
				<router-link to="/sign-in">Sign In</router-link>
				<button class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
				<p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
			</form>
		</main>
	</div>
</template>

<script>
export default {
	data() {
		return {
			fullName: '',
			email: '',
			password: ''
		}
	},
	methods: {
		doSomething: function() {
			console.log(this.fullName, this.email, this.password);
			this.$router.push("/");
		}
	}
}
</script>