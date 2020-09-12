<template>
	<v-container fluid class="header mb-4">
		<header>
			<v-row nav dence class="nav d-flex flex-row-reverse mx-2">
				<nuxt-link to="/about" class="items black--text">About</nuxt-link>
				<nuxt-link to="/" class="items black--text text-center">Blog</nuxt-link>
			</v-row>
				<nuxt-link to="/" class="items black--text">
				  <h1 class="blog-name black--text pb-1">Wonder,Wander</h1>
				</nuxt-link>
		</header>
	</v-container>
</template>

<script>
export default {
	head () {
		return {
			link: [
				{
					rel: 'stylesheet',
					href:'https://fonts.googleapis.com/css?family=Oswald:700'}
			]
		}
	}
}
</script>

<style>
.header {
	position: fixed;
	padding: 28px 100px 28px 100px;
	z-index: 1;
	font-family: 'Oswald', sans-serif;
}
.items {
  margin-left: 12px;
  background-color: rgba(255,255,255,0);
}
a {
  text-decoration: none;
}
.blog-name {
  display: inline-block;
}
.nav {
	font-size: 20px;
}
</style>
