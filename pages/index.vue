<template>
  <section>
    <section class="hero">
      <hero/>
    </section>
    <section id="blog">
      <v-container fluid class="">
        <section id="blog-title" class="blog-title">
          <p>Blog (Latest 3 posts)</p>
        </section>

        <!-- トップ画面からの検索は後ほど⇒それまでは、検索ページへ
        <section class="searchform">
          <div>
            <search-form/>
          </div>
        </section>
        -->
        <section id="blog-contents">
          <v-row dense v-if="posts.length" class="postlist">
            <post-list v-for="(post, index) in displayLists" :key="index" :post="post"/>
          </v-row>
        </section>

        <div class="box17 text-center">
          <nuxt-link to="/allpostview" class="allpostview black--text">全ての記事を見る</nuxt-link>
        </div>
      </v-container>
    </section>
    <section id="about">
      <about/>
    </section>
  </section>
</template>

<script>
import Hero from '@/components/Hero'
import About from '@/components/About'
import PostList from "@/components/PostList.vue"
// import { createClient } from '@/plugins/contentful.js'　←削除の代わりにコメントアウト
// const client = createClient() ←削除の代わりにコメントアウト
import { mapState, mapGetters } from 'vuex'

export default {
  components: {},
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

  // pagination用のデータの書き込み
  data () {
    return {
      page: 1,
      length: 0,
      displayLists: [],
      pageSize: 3
    }
  },
  mounted: function () {
    this.posts,
    this.length = Math.ceil(this.posts.length/this.pageSize);
    this.displayLists = this.posts.slice(this.pageSize*(this.page - 1), this.pageSize*(this.page));
  },
  methods: {
    pageChange: function (pageNumber) {
      this.displayLists = this.posts.slice(this.pageSize*(pageNumber - 1), this.pageSize*(pageNumber));
    }
  }
}
</script>

<style>
.blog-title {
  padding-bottom: 1rem;
  font-family: 'Karla','Hiragino Kaku Gothic Pro',sans-serif;
  text-align: left;
}
.postlist {
  margin-right: 20px;
}
.blog-title > p {
  font-size: 1.5rem;
  text-align: left;
  display: inline-block;
  font-style: italic;
}
.items {
  margin-left: 12px;
	margin-right: 5px;
  background-color: rgba(255,255,255,0);
	vertical-align: middle;
}
.blog-logo {
	margin-top: 80px;
}
.searchform {
  padding-bottom: 1rem;
  font-family: 'Karla','Hiragino Kaku Gothic Pro',sans-serif;
  padding-left: 531px;
  margin-left: 388px;
  margin-right: 388px;
  text-align: left;
  width: 781px;
}

.box17{
  display: inline-block;
  margin:2em 0;
  position: relative;
  padding: 0.5em 1.5em;
  border-top: solid 2px rgb(82, 80, 80);
  border-bottom: solid 2px rgb(82, 80, 80);
  left: 45%;
}
.box17:before, .box17:after{
  content: '';
  position: absolute;
  top: -10px;
  width: 2px;
  height: -webkit-calc(100% + 20px);
  height: calc(100% + 20px);
  background-color: rgb(82, 80, 80);
}
.box17:before {left: 10px;}
.box17:after {right: 10px;}
.box17 p {
    margin: 0; 
    padding: 0;
}
.allpostview {
  color: black;
}
/* 1100px以下の時*/
@media (max-width: 1100px) {
  .blog-title {
    padding-top: 60px;
    padding-bottom: 1rem;
    font-family: 'Karla','Hiragino Kaku Gothic Pro',sans-serif;
    margin-left: 5px;
    margin-right: 5px;
  }
  .postlist {
    width: 100%;
    margin: 0 auto;
  }
  .blog-title > p {
    font-size: 10px;
    text-align: left;
    display: inline-block;
  }
  .blog-logo {
	  margin-left: 15px;
	  margin-right: 15px;
		width:auto;
    height:auto;
    max-width:100%;
    max-height:100%;
	}
  .searcform {
    font-size: 14px;
    padding-left: 95px;
    margin-left: 5px;
    margin-right: 5px;
    width: 341px;
  }
  .box17 {
    left: 20%;
  }
}
/* 1100px以上の時*/
@media (min-width: 1101px) {
  .blog-title, .blog-logo, .pagination {
    margin-top: 40px;
  }
}
</style>
