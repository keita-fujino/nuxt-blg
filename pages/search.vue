<template>
  <v-container class="searchresult">
    <h1>【キーワード検索】</h1>
    <v-form
      @submit.prevent="getPosts"
    >
      <v-row
        align="center"
      >
        <v-col
          cols="12"
          sm="10"
          md="8"
        >
          <v-text-field
            v-model="query"
            outlined
            hide-details
            placeholder="キーワードを入力"
            autofocus
          />
        </v-col>
        <v-col
          cols="12"
          sm="2"
          md="4"
        >
          <v-btn
            color="primary"
            @click="getPosts"
          >
            検索する
          </v-btn>
        </v-col>
        <v-col
          cols="12"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                [検索結果{{ posts.length }}件]
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <template v-if="loading">
            <div class="text-center">
              <v-progress-circular
                indeterminate
                color="grey"
              />
            </div>
          </template>
          <template v-else>
            <v-list class="py-0">
              <template v-if="posts.length">
                <v-list-item
                  v-for="(post, i) in posts"
                  :key="i"
                  :to="$store.getters.linkTo('posts', post)"
                >
                  <v-list-item-content>
                    <v-list-item-title class="title">
                      Title：{{ post.fields.title }}
                      <div class="date">
					              <div class="formatteddate">Date: {{ $getFormattedDate(post.fields.date) }}</div>
			                </div>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </template>
              <template v-else>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item>キーワードが入力されていない、または、キーワードに一致する投稿がありません。</v-list-item>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
          </template>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import client from '@/plugins/contentful'

export default {
  data() {
    return {
      query: '',
      posts: [],
      loading: false
    }
  },
  computed: {
    isRequired() {
      return !!this.query && !/^\s+$/.test(this.query)
    }
  },
  watch: {
    '$route.query.q': {
      handler(newVal) {
        this.query = newVal
        this.getPosts()
      },
      immediate: true
    }
  },
  methods: {
    async getPosts() {
      if (this.isRequired) {
        this.loading = true
        await client.getEntries({
          content_type: process.env.CTF_BLOG_POST_TYPE_ID,
          query: this.query
        })
          .then(({ items }) => (this.posts = items))
          .catch(console.error)
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.searchresult {
	margin-top: 80px;
}
.title {
  font-size:20px;
}
.formatteddate {
  font-size:16px;
}
.message {
}
.text-center {
  text-align: center;
}
@media (max-width: 1100px) {
}
@media (min-width: 1101px) {
  .searchresult {
	  margin-top: 80px;
    margin-left: 388px;
    margin-right: 388px;
  }
  .message {
    margin-left: 388px;
    margin-right: 388px;
  }
}
</style>
