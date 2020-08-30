import { createClient } from '@/plugins/contentful.js'

const client = createClient()


export const state = ()=> ({
  posts: []
})

export const getters = {

}

export const mutations = {
  setPosts (state, payload) {
    state.posts = payload
  }
}

export const actions = {
	async getPosts ({ commit, env }) {
		await client.getEntries({
			// content_typeは、env.CTF_BLOG_POST_TYPE_IDの値（変更したらここを修正）
      content_type: 'blog',
      order: "-fields.date"
    }).then((response) => {
			commit('setPosts', response.items)
		}).catch(console.error)
	}
}