<template>
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
footer{
  width: 100%;
  height: 100px;
  text-align: center;
  margin-top: auto;
}
.link {
  text-decoration: none;
}
.mark {
  text-decoration: none;
}
.copy-right {
  text-decoration: none;
  color:#2b2b2b;
}
</style>