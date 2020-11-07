import client from '@/plugins/contentful.js'

export const state = () => ({
  posts: [],
  categories: []
})

export const getters = {
  linkTo: () => (name, post) => {
    return { name: `${name}-slug`, params: { slug: post.fields.slug }}
  }
}

export const mutations = {
  setPosts (state, payload) {
    state.posts = payload
  },
  setCategories (state, payload) {
    state.categories = payload
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
  }//,
  //async getCategories({ commit }) {
  //  await client.getEntries({
  //    content_type: 'category',
  //    order: 'fields.sort'
  //  }).then (res => 
  //    commit('setCategories', res.items)
  //  ).catch(console.error)
  //}
}