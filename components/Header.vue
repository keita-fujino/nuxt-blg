<template>
		<header>
      <v-app-bar
        absolute
				color="#FFFFFF"
				height="80px"
				width="100%"
				elevation=0
				hide-on-scroll
				>
				<nuxt-link to="/" class="title black--text">Self Update</nuxt-link>
				<v-spacer></v-spacer>
					<nuxt-link to="/" class="items black--text">Blog</nuxt-link>
					<nuxt-link to="/search" class="items black--text">Search</nuxt-link>
			</v-app-bar>
		</header>
</template>

<script>
export default {
}
</script>

<style>
.header {
	position: fixed;
	padding: 50px 100px 50px 100px;
  font-family: 'Montserrat','Noto Sans','Open Sans','Roboto',sans-serif;
	background-color: #ffffff;
	color:#2b2b2b;
}
.title {
	font-size: 35px;
	font-weight: bold;
	margin-left: 12px;
	margin-right: 5px;
  background-color: rgba(255,255,255,0);
	vertical-align: middle;

}
.items {
  margin-left: 12px;
	margin-right: 5px;
  background-color: rgba(255,255,255,0);
	vertical-align: middle;
}
a {
  text-decoration: none;
}
.nav {
	font-size: 20px;
}
/* 1100px以下の時*/
@media (max-width: 1100px) {
}
/* 1100px以上の時*/
@media (min-width: 1101px) {
}

</style>
