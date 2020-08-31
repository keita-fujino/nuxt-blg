import client from '@/plugins/contentful.js'

export const state = () => ({
  posts: []
})

export const getters = {
  linkTo: () => (name, post) => {
    return { name: `${name}-slug`, params: { slug: post.fields.slug }}
  }
}

export const mutations = {
  setPosts (state, payload) {
    state.posts = payload
  }
}

export const actions = {
	async getPosts ({ commit }) {
		await client.getEntries({
      content_type: process.env.CTF_BLOG_POST_TYPE_ID,
      order: "-fields.date"
    }).then(res =>
			commit('setPosts', res.items)
    ).catch(console.error)
  }
}