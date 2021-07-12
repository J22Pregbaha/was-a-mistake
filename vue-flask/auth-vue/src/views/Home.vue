<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" v-if="isTrue"/>
    {{ isTrue ? "Hey" : "Nope" }}
  </div>
</template>

<script>
// @ is an alias to /src
const isTrue = true;
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  created() {
    fetch("/mail")
			.then(res => res.json())
			.then(result => console.log(result.name));
  },
  data() {
		return {
			isTrue: isTrue
		}
	},
  components: {
    HelloWorld
  }
}
</script>
