<template>
  <v-app>
    <v-main>
      <v-container fluid class="pa-0 ma-0">
        <Header/>
        <nuxt />
        <About/>
        <Footer/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import About from '@/components/About'

export default {
  components: { Header, Footer }
}
</script>

<style>
</style>
