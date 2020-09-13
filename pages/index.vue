<template>
  <section id="blog">
    <v-container fluid class="">
      <section id="blog-title" class="blog-title">
        <h2><span>B</span>log</h2>
      </section>
      <section id="blog-contents">
        <v-row dense class="postlist mx-6 justify-center">
          <post-card v-for="(post, index) in posts" :key="index" :post="post"/>
        </v-row>
      </section>
    </v-container>
  </section>
</template>

<script>
import PostCard from '@/components/PostCard.vue'
// import { createClient } from '@/plugins/contentful.js'　←削除の代わりにコメントアウト
// const client = createClient() ←削除の代わりにコメントアウト

import { mapState, mapGetters } from 'vuex'

export default {
  components: { PostCard },
  computed: {
    ...mapState(['posts'])
  },
  //　以下、コメントアウトで備忘のため残す
	//async asyncData({ env }) {
  //  let posts = []
  //  await client.getEntries({
  //    content_type: env.CTF_BLOG_POST_TYPE_ID,
  //    order: "-fields.date"
  //  }).then((response) => {
  //    posts=response.items
  //  }).catch(console.error)
  //  return { posts }
  //}
  head () {
		return {
			link: [
				{
					rel: 'stylesheet',
					href:'https://fonts.googleapis.com/css?family=Oswald:700'}
			]
		}
	}
}
</script>

<style>
.blog-title {
  padding-bottom: 1rem;
  font-family: 'Oswald', sans-serif;
  margin-left: 50px;
  margin-right: 50px;
  text-align: center;
}
.blog-title > h2 {
  position: relative;
  padding: 10rem 2rem 0rem 100px;
  /*border-bottom: 3px solid #ffffff;*/
  font-size: 3rem;
  text-align: center;
  display: inline-block;
}
h2 span {
  font-family: 'Oswald', sans-serif;
  font-size: 9rem;
  line-height: 1;
  position: absolute;
  bottom: -1.6rem;
  left: 0;
  padding-left: 15px;
}
/* 1100px以下の時*/
@media (max-width: 1100px) {
  .blog-title {
    padding-bottom: 1rem;
    font-family: 'Oswald', sans-serif;
    margin-left: 5px;
    margin-right: 5px;
  }
  .main-img {
    height: 350px;
    width: 100%;
  }
  .postlist {
    margin: 0 auto;
  }
}
/* 1100px以上の時*/
@media (min-width: 1101px) {
  .main-img {
    height: 350px;
  }
  .postlist {
    margin-right: 150px;
    margin-left: 150px;
  }
}
</style>
