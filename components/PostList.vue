<template>
	<v-col class="pa-0 mr-4 justify-center" cols="12" sm="12" md="12" lg="12" xl="12">
		<!--GridSystemで横幅を決めているため、max-widthは指定しない-->
		<section class="article">
			<div class="post-contents">
				<nuxt-link :to="linkTo('posts', post)" class="post">
					<v-card-title class="post-title pt-1 pb-0 pl-0 pr-0 mr-0">
						<div class="post-title">#{{post.fields.slug}} {{ post.fields.title }}</div>
					</v-card-title>
				</nuxt-link>
				<div class="date">
					<div class="formatteddate">{{ $getFormattedDate(post.fields.date) }}</div>
				</div>
				<div class="article-thumbnail">
					<v-img
						v-if="post.fields.thumbnail"
						class="thumbnail align-end px-3"
						height="auto"
						width="500px"
						:src="post.fields.thumbnail.fields.file.url"
						alt="thumbnail"
						>
						</v-img>
						<v-img
						v-else
						class="thumbnail align-end px-3"
						height="400"
						src="https://baseball-feed.com/assets/themes/easymag-pro/images/no-image.png"
						alt="thumbnail"
						>
						</v-img>
				</div>
				<div class="post-description mt-2">{{ post.fields.description }}</div>
				<div 
				v-for="category in post.fields.category"
				:key="category.sys.id"
				class="category ml-2">
				  # {{ category.fields.name }}
				</div>
				<br>
				<div class="post-more">
				  <nuxt-link :to="linkTo('posts', post)">
					  <div class="readmore">>> more</div>
    		  </nuxt-link>
				</div>
			</div>
			<hr class="divider">
		</section>
	</v-col>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	props: {
		title: {
		type: String,
		required: true
		},
		category: {
		type: String,
		required: true
		},
		tags: {
		type: String,
		required: true
		},
		date: {
		type: String,
		required: true
		},
		slug: {
		type: String,
		required: true
		},
		thumbnail: {
		required: true
		},
		post: {
		type: Object,
		reqire: true,
		}
	},
	//methods: {
	//	linkTo(post) {
	//		return { name: 'post-slug', params: { slug: post.fields.slug }}
	//	}
	//}
	computed: {
		...mapGetters([ 'linkTo' ]) 
	}
}
</script>

<style>
.post {
	color:#2b2b2b;
}
.post-contents{
	margin-left: px;
	margin-right: 15px;
}
.post-title {
	font-size: 22px;
	color:#2b2b2b;
	display: inline-block;
}
.thumbnail {
	padding: 1rem;
	height: 300px;
	width: 500px;
}
.divider {
	margin-top: 25px;
	margin-bottom: 25px;
	width: 100%;
	height: 1px;
	border: none;
	background-color: #ccc;
}
.card {
	position: relative;
  font-family: 'Montserrat','Noto Sans','Open Sans','Roboto',sans-serif;
}
.category {
	font-size: 14px;
  display: inline-block;
  color:#2b2b2b;
	padding: 3px 10px 3px 3px;
	background-color: #80DEEA;
}
.formatteddate {
	font-size: 14px;
	display: inline-block;
	color:#2b2b2b;
}
.post-description {
	font-size: 14px;
	color:#2b2b2b;
}
.post-more {
	text-align: right;
}
.readmore {
	color:#2b2b2b;
	display: inline-block;
}

/* 1100px以下の時*/
@media (max-width: 1100px) {
	.thumbnail {
	}
}
/* 1100px以上の時*/
@media (min-width: 1101px) {
}

</style>