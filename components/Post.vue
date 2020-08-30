<template>
  <v-container fluid ma-0 pa-0>
    <v-container fluid class="pa-0 ma-0">
      <v-img
      class="main-img"
      style=""
      height = "400"
      :src="post.fields.thumbnail"
      >
        <v-container>
          <header>
            <v-row nav dence class="nav d-flex flex-row-reverse mx-2">
							<nuxt-link to="/post/postlist" class="items white--text">Articles</nuxt-link>
							<nuxt-link to="/" class="items white--text text-center">Home</nuxt-link>
            </v-row>
            <h1 class="title white--text">{{ post.fields.title }}</h1>
          </header>
        </v-container>
       </v-img>
      <v-container class="container">
        <p>カテゴリー ：<span class="post-category" >{{post.fields.category}}</span></p>
        <h1 class="post-title">{{post.fields.title}}</h1>
        <hr class="divider my-5">
        <main lang="md">
          <div id="post-main" ref="text" v-html="$md.render(content)"></div>
        </main>
        <hr class="divider my-5">
        <nav id="top"><a @click="scrollTop" title="一番上まで戻る"><img src=""></a></nav>
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: 'post',
  props: {
		id: {
      type: Number
    },
		content: {
			type: String,
      required: true
    }
  },
  methods: {
    scrollTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    goBack () {
      if (this.hasBefore) {
        this.$router.go(-1) // サイト内履歴があれば前ページへ戻る
      } else {
        this.$router.push({ name: 'posts' }) // 履歴がなければトップページへ戻る
      }
    }
  }
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
div > h1 h2 h3 h4 h5 h6 {
  border: 1px solid #69F0AE;
}
.logo {
  text-decoration: none;
}
@media (max-width: 600px) {
  .main-img {
    height: 200px;
    width: 100%;
  }
}
@media (min-width: 601px) {
  .main-img {
    height: 350px;
  }
  container {
    margin-left: 300px;
    margin-right: 300px;
  }
}
</style>