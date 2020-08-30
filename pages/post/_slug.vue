<template>
  <v-container fluid ma-0 pa-0>
    <v-container fluid class="pa-0 ma-0">
      <v-img
			v-if="post.fields.thumbnail"
      class="main-img"
      style=""
      height = "350"
      :src="post.fields.thumbnail.fields.file.url"
      >
        <v-container>
          <header>
            <v-row nav dence class="nav d-flex flex-row-reverse mx-2">
              <nuxt-link to="/post/PostList" class="items white--text">Articles</nuxt-link>
              <nuxt-link to="/" class="items white--text text-center">Home</nuxt-link>
            </v-row>
            <h1 class="title white--text">{{ post.fields.title }}</h1>
          </header>
        </v-container>
      </v-img>
			<v-img
			v-else
			class="white--text align-end"
			height="280"
			src="https://baseball-feed.com/assets/themes/easymag-pro/images/no-image.png"
			alt="thumbnail"
			>
			  <v-container>
          <header>
            <v-row nav dence class="nav d-flex flex-row-reverse mx-2">
              <nuxt-link to="/post/PostList" class="items white--text">Articles</nuxt-link>
              <nuxt-link to="/" class="items white--text text-center">Home</nuxt-link>
            </v-row>
            <h1 class="title white--text">{{ post.fields.title }}</h1>
          </header>
        </v-container>
			</v-img>
      <v-container class="container">
				<p><small>{{ getFormattedDate(post.fields.date) }}</small></p>
        <hr class="divider my-5">
				<v-container class="post-body">
          <main lang="md">
					  <div v-html="$md.render(post.fields.body)"></div>
          </main>
				</v-container>
        <hr class="divider my-5">
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
import { createClient } from '@/plugins/contentful.js'

const client = createClient()

export default {
	props: {
		body: {
      type: String,
    }
	},
	computed: {
		post() {
			return this.posts.find(
				post => post.fields.slug === this.$route.params.slug
			)
		}
	},
	async asyncData({ env }) {
    let posts = []
    await client.getEntries({
      content_type: env.CTF_BLOG_POST_TYPE_ID,
      order: "-fields.date"
    }).then((response) => {
      posts = response.items
    }).catch(console.error)
    return { posts }
	},
	methods: {
		getFormattedDate (date) {
      const originDate = new Date(date)
      const year = originDate.getFullYear()
      const month = originDate.getMonth() + 1
      const day = originDate.getDate()
      return `${year}年${month}月${day}日`
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
h1 h2 h3 h4 h5 h6 {
  border: 1px solid #69F0AE;
}
.logo {
  text-decoration: none;
}
img {
	width: 100%;
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
