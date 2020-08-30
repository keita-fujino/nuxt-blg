<template>
  <v-app dark>
    <v-main>
      <v-container fluid class="pa-0">
        <nuxt />
        <Footer/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Footer from '@/components/Footer'
export default {
  components: { Footer }
}
</script>
