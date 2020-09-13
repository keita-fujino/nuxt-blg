<template>
  <v-container class="post-content">
    <section class="top-info">
      <v-img
      class="main-img"
      style=""
      max-width=""
      :src="post.fields.thumbnail.fields.file.url"
      >
      </v-img>
      <section class="post-sub">
        <h1 class="post-title black--text">{{ post.fields.title }}</h1>
        <div>{{ $getFormattedDate(post.fields.date) }}</div>
        <v-card-subtitle class="category gray--text ml-4 pl-8 pr-1 py-1">{{ post.fields.category }}</v-card-subtitle>
        <br>
        <div>{{ post.fields.description}}</div>
      </section>
    </section>
    <hr class="divider my-5">
    <div class="md-body line-numbers" v-html="$md.render(post.fields.body)"></div>
    <hr class="divider my-5">
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
	props: {
		body: {
      type: String,
    }
	},
	computed: {
		...mapState(['posts']),
// 		post() {
//			return this.posts.find(
//				post => post.fields.slug === this.$route.params.slug
//			)
//		}
	},
	// async asyncData({ env }) {
  //   let posts = []
  //   await client.getEntries({
  //     content_type: env.CTF_BLOG_POST_TYPE_ID,
  //     order: "-fields.date"
  //   }).then((response) => {
  //     posts = response.items
  //   }).catch(console.error)
  //   return { posts }
  // },
  async asyncData({ payload, store, params, error }) {
    const post = payload || await store.state.posts.find(post => post.fields.slug === params.slug)
    if (post) {
      return { post }
    } else {
      return error ({ statusCode: '404', message: 'お探しのページは見つかりませんでした'})
    }
  },
  mounted () {
    Prism.highlightAll()
  },
  head () {
		return {
      title: this.post.fields.title,
      meta: [
        {hid: 'body', name: 'body', content: this.post.fields.body},
        {hid: 'og:site_name', property: 'og:site_name', content: this.post.fields.title + ' - Wander, Wonder'},
        {hid: 'og:type', property: 'og:type', content: 'website'},
        { hid: 'og:url', property: 'og:url', content: 'https://wander-wonder.netlify.app/posts/' + this.post.fields.slug },
        {hid: 'og:title', property: 'og:title', content: this.post.fields.title},
        {hid:'og:description', property: 'og:description', content: this.post.fields.description},
        {hid: 'og:thumbnail', property: 'og:thumbnail', content: "https:" + this.post.fields.thumbnail.fields.file.url},
        {hid: 'twitter:card', name: 'twitter:card', content: "summary"},
        {hid: 'twitter:site', name: 'twitter:site', content: ""}
      ],
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
img {
	width: 100%;
}
.post-sub > .category {
  top: 50px;
  color: black;
}
/* 1100px以下の時*/
@media (max-width: 1100px) {
  .main-img {
    position: relative;
    width: 100%;
    height: 350px;
  }
  .post-sub {
    position: absolute;
    background-color: #ffffff;
    height: 186px;
    width: 300px;
    top: 176px;
  }
}
/* 1100px以上の時*/
@media (min-width: 1101px) {
  .top-info {
    margin-left: 50px;
    margin-right: 50px;
  }
  .main-img {
    margin-left: auto;
    width: 400px;
    height: 600px;
    margin-right: 100px;
  }
  .md-body {
    font-family: 'Oswald', sans-serif;
    margin-left: 100px;
    margin-right: 100px;
  }
  .post-content {
    padding-top: 148px;
  }
  .post-sub {
    position: absolute;
    background-color: #ffffff;
    height: 200px;
    width: 400px;
    margin-left: 100px;
    top: 298px;
  }
}
/*markdown-it内のスタイル適用*/
.md-body {
  font-family: 'Oswald', sans-serif;
}
.md-body > h1 {
  padding: 5px 5px;
  border-left: 2px solid aquamarine;
  display: inline-block;
}
.md-body > h1:first-letter {
  font-size: 150%;
  color: aquamarine;
}
.md-body > h2 {
  border-left: 2px solid aquamarine;
}
.md-body > h3 {
  border-bottom: 2px solid aquamarine;
}
.md-body > p {
  font-size: 20px;
}
</style>
