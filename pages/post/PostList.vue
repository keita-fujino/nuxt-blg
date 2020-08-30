<template>
  <section>
    <v-container fluid class="pa-0 ma-0">
      <v-img
      class="main-img"
      style=""
      src = "https://static.retrip.jp/article/2211/images/2211a6df34db-9ee0-4a80-8353-9b6ca231b8db_l.jpg"
      >
        <v-container>
          <header>
            <v-row nav dence class="nav d-flex flex-row-reverse mx-2">
              <nuxt-link to="/post/PostList" class="items white--text">Articles</nuxt-link>
              <nuxt-link to="/" class="items white--text text-center">Home</nuxt-link>
            </v-row>
            <h1 class="title white--text">Articles</h1>
          </header>
        </v-container>
      </v-img>
      <post-card v-for="(post, index) in posts" :key="index" :post="post"/>
    </v-container>
  </section>
</template>

<script>
import PostCard from '@/components/PostCard.vue'
import { createClient } from '@/plugins/contentful.js'

const client = createClient()

export default {
  components: { PostCard },
	async asyncData({ env }) {
    let posts = []
    await client.getEntries({
      content_type: env.CTF_BLOG_POST_TYPE_ID,
      order: "-fields.date"
    }).then((response) => {
      posts=response.items
    }).catch(console.error)
    return { posts }
  }
}
</script>

<style>
.mx-auto {
  display: inline-block;
}
.readnext {
  text-decoration: none;
}
.pagination{
  text-decoration: none;
}
.leadtext{
  text-overflow: ellipsis; /*はみ出たテキストを自動的に省略 */
  white-space:nowrap;
  overflow: hidden;
}
.post {
  text-decoration: none;
}
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
/* 600px以下の時*/
@media (max-width: 600px) {
  .main-img {
    height: 350px;
    width: 100%;
  }
  .postlist {
    margin: 0 auto;
  }
}
/* 600px以上の時*/
@media (min-width: 601px) {
  .main-img {
    height: 350px;
  }
  .postlist {
    margin-right: 150px;
    margin-left: 150px;
  }
}
</style>
