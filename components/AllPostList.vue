<template>
	<v-col class="pb-2 mx-auto justify-center" cols="12" xs="12" sm="6" md="5" lg="4" xl="4">
		<v-card
			class="mx-1"
			height="500"
			max-width="400"
			outlined
		>
			<v-img
				v-if="post.fields.thumbnail"
				class="thumbnail align-end px-3"
				height="220px"
				width="100%"
				:src="post.fields.thumbnail.fields.file.url"
				alt="thumbnail"
			>
				<nuxt-link :to="linkTo('posts', post)" class="post">
					<v-card-title class="post-title pt-1 pb-0 pl-0 pr-0 mr-0">
						#{{post.fields.slug}} {{ post.fields.title }}
					</v-card-title>
				</nuxt-link>
			</v-img>
			<v-img
				v-else
				class="thumbnail align-end px-3"
				height="220px"
				src="https://baseball-feed.com/assets/themes/easymag-pro/images/no-image.png"
				alt="thumbnail"
      >
				<nuxt-link :to="linkTo('posts', post)" class="post">
					<v-card-title class="post-title pt-1 pb-0 pl-0 pr-0 mr-0">
						#{{post.fields.slug}} {{ post.fields.title }}
					</v-card-title>
				</nuxt-link>
			</v-img>

			<v-card-subtitle class="date pb-0">
				<div class="formatteddate">Date: {{ $getFormattedDate(post.fields.date) }}</div>
			</v-card-subtitle>

			<v-card-text class="text--primary post-description mt-2">
				<div>{{ post.fields.description }}</div>
			</v-card-text>

			<v-card-actions>
				<v-btn
					color="orange"
					text
					v-for="category in post.fields.category"
					:key="category.sys.id"
					class="category"
				>
					# {{ category.fields.name }}
				</v-btn>
			</v-card-actions>
			<v-btn
				text
				absolute
				right
				class="readmore pa-2"
			>
				<nuxt-link :to="linkTo('posts', post)">
					>> more
				</nuxt-link>
			</v-btn>
		</v-card>
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
  margin-right: 15px;
}
.post-title {
	font-size: 22px;
	color:#ffffff;
	display: inline-block;
}
.thumbnail {
	padding: 1rem;
}
.card {
  font-family: 'Montserrat','Noto Sans','Open Sans','Roboto',sans-serif;
}
.category {
	font-size: 10px;
  display: inline-block;
  color:#2b2b2b;
}
.formatteddate {
	font-size: 12px;
	display: inline-block;
	color:#2b2b2b;
}
.post-description {
	font-size: 12px;
	color:#2b2b2b;
	height: 120px;
}
.post-more {
	text-align: right;
}
.readmore {
	color:#2b2b2b;
	display: inline-block;
}

/* 960px以下の時*/
@media (max-width: 960px) {
}
/* 960px以上の時*/
@media (min-width: 961px) {
	.post-contents{
	  margin-right: 15px;
  }
	.divider {
	}
	.card-else {
		position: relative;
	}
	.post-title-else {
		position: absolute;
		top: 20px;
		left: 20px;
		font-size: 22px;
	  color:#ffffff;
	  display: inline-block;
	}
	.date-else {
		position: absolute;
		top: 20px;
		left: 40%;
	}
	.post-description-else {
		position: absolute;
		width: 60%;
		top: 60px;
		left: 40%;
	}
	.category-fields-else {
		position: absolute;
		top: 180px;
		left: 40%;
	}
	.readmore-else {
		position: absolute;
		bottom: 20px;
		right: -20px;
	}
}

</style>