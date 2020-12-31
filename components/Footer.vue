<template>
<footer>
  <!--サイトロゴはここに配置-->
  <!--
  <nav class="footer-nav">
    <li>
      <v-btn
        v-for="(icon, index) in icons"
        :key="index"
        class="mx-4"
        dark
        icon
      >
        <a class="link" :href="icon.href">
          <v-icon class="mark" size="24px" color="#ffffff">
            {{ icon.icon }}
          </v-icon>
        </a>
      </v-btn>
    </li>
  </nav>
  <v-spacer></v-spacer>
  -->
  <div class="copyright">
    <nuxt-link to="/" class="white--text text-center">© Fujinote</nuxt-link>
  </div>
</footer>
<!--
  <v-footer
  color="#ffffff"
  height="auto"
  >
    <v-card
      class="flex"
      color="#FFFFFF"
      flat
      tile
    >
      <v-card-title>
        <v-spacer></v-spacer>
        <v-btn
          v-for="(icon, index) in icons"
          :key="index"
          class="mx-4"
          dark
          icon
        >
          <a class="link" :href="icon.href">
            <v-icon class="mark" size="24px" color="#2b2b2b">
              {{ icon.icon }}
            </v-icon>
          </a>
        </v-btn>
        <v-spacer></v-spacer>
      </v-card-title>
      <v-card-text class="copy-right py-2 text-center">
        <nuxt-link to="/" class="black--text text-center">© Self Update from Keita</nuxt-link>
      </v-card-text>
    </v-card>
  </v-footer>
  -->
</template>

<script>
export default {
  data: () => ({
    icons: [
      // { icon: 'mdi-facebook', href: '' },
      { icon: 'mdi-twitter', href: '' },
      { icon: 'mdi-github', href: 'https://github.com/keita-fujino' },
      // { icon: 'mdi-instagram', href: '' }
    ]
  })
}
</script>

<style>
/*-------------
 	footer
-------------*/

footer {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #fff;
	background-color: rgba(0, 0, 0, 0.9);
  padding: 12px 100px;
  height: 47.5px;
}

footer h2{
  font-family: 'Karla','Hiragino Kaku Gothic Pro',sans-serif;
}

footer nav{
	display: flex;
}

footer nav li{
	color: #fff;
}

footer nav li:first-child{
	margin-left: 0;	
}

footer nav li:last-child{
	margin-right: 0;	
}

footer > .footer-nav{
  list-style: none;
  justify-items: center;
  margin: 0 auto;
}
.footer-items {
	text-decoration: none;
	color: #ffffff;
	cursor: pointer;
	opacity: 0.9;
}
.footer-items:hover{
	opacity: 1;
}
.copyright {
  justify-items: center;
  margin: 0 auto;
}


@media (max-width: 960px){
	footer{
		padding: 12px 30px;
	}
}


@media (max-width: 700px){
	footer{
		flex-direction: column;
	}

	footer h2{
		margin-bottom: 15px;
	}
}



</style>
