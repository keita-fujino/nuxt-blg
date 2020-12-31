<template>
	<header>
		<!--サイトロゴはここに配置-->
		<h1>
			<nuxt-link to="/" class="header-items black--text">
				Fujinote
			</nuxt-link>
		</h1>
		<nav>
			<li>
				<nuxt-link to="/" class="header-items black--text">Home</nuxt-link>
			</li>
			<li>
				<nuxt-link v-scroll-to="'#blog'" to class="header-items black--text">Blog</nuxt-link>
			</li>
			<li>
				<nuxt-link v-scroll-to="'#prof-title'" to class="header-items black--text">About</nuxt-link>
			</li>
			<li>
				<nuxt-link to="" class="header-items black--text">Contacts</nuxt-link>
			</li>
		</nav>
	</header>
</template>

<script>
export default {
}
</script>

<style>
/*-------------
 	Header
-------------*/

header {
	top: 0;
	left: 0;
	z-index: 10;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.2);
	padding: 12px 100px;
}

header h2{
  font-family: 'Karla','Hiragino Kaku Gothic Pro',sans-serif;
}

header nav{
	display: flex;
}

header nav li{
	margin: 0 15px;
}

header nav li:first-child{
	margin-left: 0;	
}

header nav li:last-child{
	margin-right: 0;	
}

ul, nav{
	list-style: none;
}
.header-items {
	text-decoration: none;
	cursor: pointer;
	opacity: 0.9;
}
.header-items:hover{
	opacity: 1;
}



@media (max-width: 1000px){
	header{
		padding: 20px 50px;
	}
}


@media (max-width: 700px){
	header{
		flex-direction: column;
		display: none;
	}

	header h2{
		margin-bottom: 15px;
	}
}



</style>
