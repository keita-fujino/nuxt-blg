<template>
  <container>
    <article>
      <post-content :content="post.content"/>
    </article>
  </container>
</template>

<script>
// import  from ''

export default {
	components: {  },
	computed: {
		post() {
			return this.posts.find(post => post.slug = params.slug)
		}
	}
}
</script>