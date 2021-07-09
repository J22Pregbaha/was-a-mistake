<template>
	<div class="text-center">
		<main class="form-signin">
			<form>
				<img class="mb-4" src="../assets/logo.png" alt="" width="72" height="57" />
				<h1 class="h3 mb-3 fw-normal">Please sign In</h1>
				<div class="form-floating">
					<input 
						type="email" 
						class="form-control" 
						id="floatingInput" />
					<label for="floatingInput">Email address</label>
				</div>
				<div class="form-floating">
					<input 
						type="password" 
						class="form-control" 
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