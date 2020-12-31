<template>
  <v-app>
    <div id="main" :class="[{'collapsed' : collapsed}, {'onmobile' : isOnMobile}]">
      <v-container fluid class="pa-0 ma-0">
        <nuxt />
        <Footer />
        <!--vue-sidebar-menuはhttps://www.npmjs.com/package/vue-sidebar-menuから-->
        <sidebar-menu
          class="v-sidebar-menu vsm_expanded"
          :menu="menu"
          :collapsed="collapsed"
          :show-one-child="true"
          @toggle-collapse="onToggleCollapse"
          @item-click="onItemClick"
        />
        <div
          v-if="isOnMobile && !collapsed"
          class="sidebar-overlay"
          @click="collapsed = true"
        />
      </v-container>
    </div>
  </v-app>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  components: { Footer },
  data () {
    return {
      menu: [
        {
          header: true,
          title: 'Fujinote',
          hiddenOnCollapse: true
        },
        {
          href: '/',
          title: 'Home',
          icon: 'fa fa-home'
        },
        {
          href: '#blog',
          title: 'Blog',
          icon: 'fa fa-blog',
        },
        {
          href: '#about',
          title: 'About',
          icon: 'fa fa-user',
        },
        {
          href: 'https://github.com/keita-fujino',
          title: 'Git hub',
          icon: 'fab fa-github'
        },
        {
          href: 'https://twitter.com/K13938535',
          title: 'Twitter',
          icon: 'fab fa-twitter'
        }
      ],
      collapsed: false,
      isOnMobile: false
    }
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    onToggleCollapse (collapsed) {
      console.log(collapsed)
      this.collapsed = collapsed
    },
    onItemClick (event, item, node) {
      console.log('onItemClick')
      // console.log(event)
      // console.log(item)
      // console.log(node)
    },
    onResize () {
      if (window.innerWidth <= 767) {
        this.isOnMobile = true
        this.collapsed = true
      } else {
        this.isOnMobile = false
        this.collapsed = false
      }
    }
  }
}
</script>

<style>
html{
  scroll-behavior: smooth;
}
.main {
  padding-left: 50px;
}
#main {
  padding-left: 350px;
  transition: 0.3s ease;
}
#main.collapsed {
  padding-left: 50px;
}
#main.onmobile {
  padding-left: 50px;
}
.v-sidebar-menu .vsm_expanded {
  background-color: rgba(0,0,0,0.2);
}
.v-sidebar-menu .vsm--mobile-bg {
  background-color: rgba(0,0,0,0.2);
}
</style>
