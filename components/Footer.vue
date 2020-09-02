<template>
  <!--スマホ用レスポンシブ対応は後から実装-->
  <footer>
    <ul class="footer-menu">
     <li>
       <v-btn
          v-for="icon in icons"
          :key="icon.icon"
          class="mx-4"
          dark
          icon
        >
        <a class="link" :href="icon.href">
          <v-icon class="mark" size="24px" color="#69F0AE">{{ icon.icon }}</v-icon>
        </a>
        </v-btn></li>
    </ul>
    <nuxt-link to="/" class="copy-right white--text text-center">© Eureka</nuxt-link>
  </footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      { icon: 'mdi-facebook', href: '' },
      { icon: 'mdi-twitter', href: '' },
      { icon: 'mdi-github', href: 'https://github.com/keita-fujino' },
      { icon: 'mdi-instagram', href: '' }
    ]
  })
}
</script>

<style>
footer{
    width: 100%;
    height: 100px;
    background-color: rgba(255,255,255,0);
    text-align: center;
    margin-top: auto;
}
.link {
  text-decoration: none;
}
ul.footer-menu li {
display: inline;
}
.mark {
  text-decoration: none;
}
.copy-right {
  text-decoration: none;
  color: #69F0AE;
}
</style>