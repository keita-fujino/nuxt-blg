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
        <div class="description">{{ post.fields.description}}</div>
      </div>
    </section>
    
    <hr class="divider1">
    <hr class="divider1">
    <div class="markdown-content">
      <div class="md-body line-numbers" v-html="$md.render(post.fields.body)"></div>
    </div>
    <hr class="divider1">
    
    <!--SNS share-->
    <div class="snsshare">
      <ul>
        <li><a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></li>
        <li><iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&layout=button&size=small&width=69&height=20&appId" width="69" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe></li>
        <li><div class="line-it-button" data-lang="ja" data-type="share-a" data-ver="3" data-url="https://social-plugins.line.me/ja/how_to_install#lineitbutton" data-color="default" data-size="small" data-count="true" style="display: none;"></div><script src="https://www.line-website.com/social-plugins/js/thirdparty/loader.min.js" async="async" defer="defer"></script></li>
        <li><a href="https://b.hatena.ne.jp/entry/" class="hatena-bookmark-button" data-hatena-bookmark-layout="basic-label" data-hatena-bookmark-lang="ja" title="このエントリーをはてなブックマークに追加"><img src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png" alt="このエントリーをはてなブックマークに追加" width="20" height="20" style="border: none;" /></a><script type="text/javascript" src="https://b.st-hatena.com/js/bookmark_button.js" charset="utf-8" async="async"></script></li>
      </ul>
    </div>

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
        {hid: 'og:site_name', property: 'og:site_name', content: this.post.fields.title + ' - Fujinote'},
        {hid: 'og:type', property: 'og:type', content: 'website'},
        {hid: 'og:url', property: 'og:url', content: 'https://Fujinote.netlify.app/posts/' + this.post.fields.slug },
        {hid: 'og:title', property: 'og:title', content: this.post.fields.title},
        {hid: 'og:description', property: 'og:description', content: this.post.fields.description},
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
  padding-top: 60px;
  width: 100%;
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
  top: 40%;
  color: #ffffff;
}
.post-sub > .post-title {
  color: #ffffff;
  font-size: 18px;
}
.post-sub > .post-category {
  display: inline-block;
  color: #ffffff;
}
/* TOCの設定 */
.table-of-contents {
  padding-left: 50px;
  max-width: 500px;
}
.table-of-contents > ul {
  padding-left: 0;
}

.table-of-contents > ul, ol {
  list-style: inherit;
  background: #fcfcfc;/*背景色*/
  padding: 0.5em 0.5em 0.5em 2rem;/*ボックス内の余白*/
  border: solid 3px gray;/*線の種類 太さ 色*/
}

.table-of-contents >ul, ol {
  line-height: 1.5; /*文の行高*/
  padding: 0.5em 0.5rem 0.5rem 1.5rem; /*前後の文との余白*/
}

/* SNS shareボタン*/
.snsshare > li {
}
.snsshare > ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

/* 1100px以下の時*/
@media (max-width: 1100px) {
  .post-content {
    width: 100%;
    padding-left: 18px;
    padding-right: 18px;
  }
  .main-img {
    width: 100%;
    height: 350px;
  }
  .post-sub > .post-title {
    color: #ffffff;
    font-size: 18px;
  }
  .post-sub > .post-category {
    display: inline-block;
    color: #ffffff;
    font-size: 12px;
  }
  .description {
    font-size: 12px;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .divider1 {
    margin: 10px 15px;
  }
  .table-of-contents {
    padding-left: 5px;
    max-width: 500px;
  }
}
/* 1100px以上の時*/
@media (min-width: 1101px) {
  .top-info {
    width: 80%;
    margin: 0 auto;
  }
  .main-img {
    width: 100%;
    height: auto;
    margin: 0 auto;
  }
  .post-sub {
    width: 100%;
  }
  .md-body {
    margin: 0 auto;
  }
  img {
    width: 100%;
    height: 450px;
    justify-content: center;
    padding: 10px;
  }
  .post-content {
    margin: 0 auto;
    padding: 3% 50px;
  }
  .divider1 {
    margin: 10px 15px;
  }
  /* TOCの設定 */
  .markdown-content {
    
  }
  .md-body > h1, h2, h3, h4, p {
  }
  .table-of-contents {
    padding-left: 10px;
    max-width: 400px;
  }
  .table-of-contents > ul, li {
    font-size: 12px;
  }
  .md-body {
    font-family: 'Montserrat','Noto Sans','Open Sans','Roboto',sans-serif;
    margin-left: 5.5rem;
    margin-right: 5.5rem;
  }

  /* SNS shareボタン*/
  .snsshare > li {
  }
  .snsshare > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

}
/*markdown-it内のスタイル適用*/
.md-body {
  font-family: 'Montserrat','Noto Sans','Open Sans','Roboto',sans-serif;
}
.md-body > h1 {
  font-size: 22px;
  margin-bottom: 1em;
  padding: 0.4em 0.5em;/*文字の上下 左右の余白*/
  color: #494949;/*文字色*/
  background: #f4f4f4;/*背景色*/
  border-left: solid 5px #7db4e6;/*左線*/
  border-bottom: solid 3px #d7d7d7;/*下線*/
}
.md-body > h2 {
  display: inline-block;
  font-size: 20px;
  background: linear-gradient(transparent 90%, #a7d6ff 70%);
}
.md-body > h3 {
  display: inline-block;
  font-size: 18px;
  background: linear-gradient(transparent 90%, #a7d6ff 70%);
}
.md-body > p {
  line-height: 200%;
  font-size: 16px;
}
</style>
