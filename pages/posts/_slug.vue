<template>
  <v-container class="post-content">
    <section class="top-info">
      <v-img
      class="main-img"
      style=""
      :src="post.fields.thumbnail.fields.file.url"
      >
      </v-img>
      <div class="post-sub">
        <h1 class="post-title">{{ post.fields.title }}</h1>
        <div>{{ $getFormattedDate(post.fields.date) }}</div>
        <div 
				v-for="category in post.fields.category"
				:key="category.sys.id"
				class="post-category ml-2">
				  # {{ category.fields.name }}
				</div>
        <br>
        <div>{{ post.fields.description}}</div>
      </div>
    </section>
    <hr class="divider my-5">
    <!--後からここに、TOC追加する予定（markdownit系のファイルはコピペで作成済み）-->
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
        {hid: 'og:site_name', property: 'og:site_name', content: this.post.fields.title + ' - Wonder, Wander'},
        {hid: 'og:type', property: 'og:type', content: 'website'},
        { hid: 'og:url', property: 'og:url', content: 'https://wonder-wander.netlify.app/posts/' + this.post.fields.slug },
        {hid: 'og:title', property: 'og:title', content: this.post.fields.title},
        {hid:'og:description', property: 'og:description', content: this.post.fields.description},
        {hid: 'og:thumbnail', property: 'og:thumbnail', content: "https:" + this.post.fields.thumbnail.fields.file.url},
        {hid: 'twitter:card', name: 'twitter:card', content: "summary"},
        {hid: 'twitter:site', name: 'twitter:site', content: ""}
      ]
		}
	}
}
</script>

<style>
.post-content {
  margin-top: 80px;
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
.top-info {
  position: relative;
}
.post-sub {
  position: absolute;
  text-align: center;
  width: 100%;
  top: 35%;
  color: #ffffff;
}
.post-sub > .post-title {
  color: #ffffff;
}
.post-sub > .post-category {
  display: inline-block;
  color: #ffffff;
}
/* 1100px以下の時*/
@media (max-width: 1100px) {
  .post-content {
    margin-top: 80px;
    padding-left: 18px;
    padding-right: 18px;
  }
  .main-img {
    width: 100%;
    height: 350px;
  }
  .post-sub {
  }
}
/* 1100px以上の時*/
@media (min-width: 1101px) {
  .top-info {
    margin-left: 150px;
    margin-right: 150px;
  }
  .main-img {
    width: 100%;
    height: auto;
  }
  .md-body {
    margin-left: 150px;
    margin-right: 150px;
  }
  .post-content {
  }
  .post-sub {
  }
}
/*markdown-it内のスタイル適用*/
.md-body {
  font-family: 'Montserrat','Noto Sans','Open Sans','Roboto',sans-serif;
}
.md-body > h1 {
  font-size: 22px;
  padding: 5px 5px;
  display: inline-block;
}
.md-body > h1:first-letter {
  font-size: 130%;
  color: #80DEEA;
}
.md-body > h2 {
  font-size: 18px;
}
.md-body > h3 {
  font-size: 16px;
  border-bottom: 2px solid #80DEEA;
}
.md-body > p {
  line-height: 200%;
  font-size: 14px;
}
</style>
