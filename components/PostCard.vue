<template>
	<v-container class="pa-2" :key="getkey">
	<section id="postlist" class="">
		<v-row dense class="postlist" justify="center">
				<v-col class="pa-0 my-3 mx-2" cols="12" sm="12" md="12" lg="7" xl="7">
					<v-hover>
						<template v-slot:default="{ hover }">
							<!--GridSystemで横幅を決めているため、max-widthは指定しない-->
							<v-card
							class="ma-0"
							height="380"
							width=""
							>
								<v-img
								v-if="post.fields.thumbnail"
								class="white--text align-end"
								height="280"
								:src="post.fields.thumbnail.fields.file.url"
								alt="thumbnail"
								>
								</v-img>
								<v-img
								v-else
								class="white--text align-end"
								height="280"
								src="https://baseball-feed.com/assets/themes/easymag-pro/images/no-image.png"
								alt="thumbnail"
								>
								</v-img>
								<v-card-title>{{ post.fields.title }}</v-card-title>
								<v-card-subtitle class="pb-0">{{ post.fields.category }}</v-card-subtitle>
								<v-card-text class="text--primary">
									<div class="date" >
										<div>{{ getFormattedDate(post.fields.date) }}</div>
									</div>
									<div class="tags">
										<span class="tag" v-for="(tag, i) in tags" :key="i">{{ tag }}</span>
									</div>
								</v-card-text>
								<v-fade-transition>
									<v-overlay
										v-if="hover"
										absolute
										color="#424242"
									>
									<nuxt-link to="" class="post">
										<v-btn class="readnext gray--text" color="#69F0AE">続きを読む</v-btn>
									</nuxt-link>
									</v-overlay>
								</v-fade-transition>
							</v-card>
						</template>
					</v-hover>
				</v-col>
		</v-row>
	</section>
</v-container>
</template>

<script>
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
	data () {
		return {
			overlay: false
		}
	},
	methods: {
		getFormattedDate (date) {
			const originDate = new Date(date)
			const year = originDate.getFullYear()
			const month = originDate.getMonth() + 1
			const day = originDate.getDate()
			return `${year}年${month}月${day}日`
		}
  }
}
</script>
