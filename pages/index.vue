<template>
  <v-container fluid ma-0 pa-0>
    <v-container fluid class="pa-0 ma-0">
      <v-img
      class="main-img"
      style=""
      src = "https://crownscaffold.com.au/wp-content/uploads/2018/08/beach-dawn-dusk-1144176.jpg"
      >
        <v-container>
        <header>
          <v-row nav dence class="nav d-flex flex-row-reverse mx-2">
            <nuxt-link to="/posts/PostList" class="items white--text">Articles</nuxt-link>
            <nuxt-link to="/" class="items white--text text-center">Home</nuxt-link>
          </v-row>
          <h1 class="title white--text">Life Log.</h1>
        </header>
      </v-container>
      </v-img>
      <section>
        <v-container class="profile mt-8">
          <div justify="center">
            <h1 style="color: #69F0AE;" class="text--center my-4">Keita Fujino</h1>
            <hr class="title-under-name">
            <p style="" class="gray--text">Live in Iwate</p>
            <h3 style="color: #69F0AE;" class="text--center my-4">Job</h3>
            <hr class="title-under">
            <p style="" class="gray--text">Civil servant in Iwate (2014~)</p>
            <h3 style="color: #69F0AE;" class="text--center my-4">Education</h3>
            <hr class="title-under">
            <p style="" class="gray--text">Graduate from Senmaya high School (2010)</p>
            <p style="" class="gray--text">Graduate from Iwate University (2014)</p>
            <h3 style="color: #69F0AE;" class="text--center my-4">Contact</h3>
            <hr class="title-under">
            <p style="" class="gray--text">Email: irori@gmail.com</p>
            <p style="" class="gray--text">or</p>
            <p style="" class="gray--text">↓ From icons ↓</p>
          </div>
        </v-container>
      </section>
    </v-container>
  </v-container>
</template>

<script>
export default {
}
</script>

<style>
.items {
  margin-left: 12px;
  background-color: rgba(255,255,255,0);
}
a {
  text-decoration: none;
}
.logo {
  text-decoration: none;
}
.profile {
  text-align: center;
}
.title-under{
  border: #69F0AE solid 1px;
  width: 35px;
  margin: 0 auto;
  margin-bottom: 15px;
}
.title-under-name {
  border: #69F0AE solid 1px;
  width: 300px;
  margin: 0 auto;
  margin-bottom: 15px;
}
/* 600px以下の時*/
@media (max-width: 600px) {
  .main-img {
    height: 200px;
    width: 100%;
  }
  .post-main {
    margin: 0 auto;
  }
}
/* 600px以上の時*/
@media (min-width: 601px) {
  .main-img {
    height: 400px;
  }
}
</style>