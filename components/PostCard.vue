<template>
	<v-col class="pa-0 mx-4 justify-center" cols="12" sm="6" md="5" lg="3" xl="3">
		<v-hover
		v-slot:default="{ hover }"
    open-delay="100"
		>
		  <nuxt-link :to="linkTo('posts', post)" class="post">
				<!--GridSystemで横幅を決めているため、max-widthは指定しない-->
				<v-card
				:elevation="hover ? 16 : 2"
				class="card my-6"
				height="400"
				width=""
				color=""
				outlined
				>
					<div class="article-thumbnail">
						<v-img
							v-if="post.fields.thumbnail"
							class="thumbnail align-end px-3"
							height="400"
							width="100%"
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
					<section class="subinfo mr-10 pa-2">
						<nuxt-link :to="linkTo('posts', post)" class="post">
							<v-card-title class="black--text pt-1 pb-0 pl-0 pr-0 mr-0">
								<div class="post-title">{{ post.fields.title }}</div>
							</v-card-title>
							<v-card-title class="black--text pt-1 pb-0 pl-0 pr-0 mr-0">
								<small class="post-description">{{ post.fields.description }}</small>
							</v-card-title>
						</nuxt-link>
					</section>
					<v-card-subtitle class="category gray--text ml-4 pl-8 pr-1 py-1">{{ post.fields.category }}</v-card-subtitle>
					<v-card-text class="text--primary px-0">
						<div class="date">
							<div class="formatteddate">{{ $getFormattedDate(post.fields.date) }}</div>
						</div>
					</v-card-text>
				</v-card>
			</nuxt-link>
		</v-hover>
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
      type: Array,
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
	},
	head () {
		return {
			link: [
				{
					rel: 'stylesheet',
					href:'https://fonts.googleapis.com/css?family=Oswald:700'}
			]
		}
	}
}
</script>

<style>
.postcard {
}
.post-title {
	border-bottom: aquamarine solid ;
}
.thumbnail {
	padding: 1rem;
}
.date {
	text-align: right;
}
.card {
	position: relative;
	font-family: 'Oswald', sans-serif;
}
.category {
	position: absolute;
  display: inline-block;
  padding: 1rem 2rem 1rem 4rem;
  color: #fff;
  border-radius: 100vh 0 0 100vh;
  background: aquamarine;
	top:-15px;
	left: -16px;
	z-index: 1;
}
.category:before {
  position: absolute;
  top: calc(50% - 7px);
  left: 10px;
  width: 14px;
  height: 14px;
  content: '';
  border-radius: 50%;
  background: #ffffff;
}
.formatteddate {
	display: inline-block;
	position: absolute;
	top: -20px;
	right: -1px;
}
.subinfo {
	display: inline-block;
	position: absolute;
	width: 260px;
	height: 190px;
	top: 210px;
	background-color: #ffffff;
	border-top-right-radius: 10px;
}
.post-description {
	font-size: 12px;
}
</style>