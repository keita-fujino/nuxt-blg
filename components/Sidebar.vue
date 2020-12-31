<template>
  <section>
    <div v-if="$vuetify.breakpoint.smAndDown">
        <v-app-bar
          class="mx-auto overflow-hidden"
          color="accent-4"
          dark
          fixed
          flat
        >
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <nuxt-link to="/" class="items white--text">
            Self Update
          </nuxt-link>
          <v-spacer></v-spacer>
          <v-btn icon>
            <a href="">
              <v-icon
              color="white">
                mdi-twitter
              </v-icon>
            </a>
          </v-btn>

          <v-btn icon>
            <a href="https://github.com/keita-fujino">
              <v-icon
              color="white">
                mdi-github
              </v-icon>
            </a>
          </v-btn>
        </v-app-bar>

        <v-navigation-drawer
          v-model="drawer"
          absolute
          left
          temporary
        >
          <v-list
            nav
            dense
          >
            <v-list-item-group
              v-model="group"
              active-class="deep-purple--text text--accent-4"
            >
              <v-list-item>
                <v-list-item-title>
                  <nuxt-link to="/" class="items black--text">Home</nuxt-link>
                </v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>
                  <nuxt-link to="/" class="items black--text">Blog</nuxt-link>
                </v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>
                  <nuxt-link to="/search" class="items black--text">Search</nuxt-link>
                </v-list-item-title>
              </v-list-item>
              <!--
              <v-list-item>
                <v-list-item-title>
                  <nuxt-link to="/contact" class="items black--text">Contact</nuxt-link>
                </v-list-item-title>
              </v-list-item>
              -->
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
    </div>
      <div v-else>
      <div id="global-head">
        <nuxt-link to="/" class="items black--text">
          Self Update
        </nuxt-link>
      </div> 
      <div id="nav-toggle">
        <div>
            <span></span>
            <span></span>
            <span></span>
        </div>
      </div>
      <div id="sidebar">
        <nav id="global-nav">
          <ul>
            <li><nuxt-link to="/" class="items black--text">Home</nuxt-link></li>
            <li><nuxt-link to="/" class="items black--text">Blog</nuxt-link></li>
            <li><nuxt-link to="/search" class="items black--text">Search</nuxt-link></li>
            <li><a href="#">Contact</a></li>
            <li>
              <div id="profile" class="about">
                <v-card
                class="profile-card"
                width="260px"
                flat
                >
                  <div class="plof">
                    <p>Profile</p>
                  </div>
                  <v-card-title class="name pd-2 justify-center">
                    <p>けいちゃん</p>
                  </v-card-title>
                  <v-row justify="center">
                    <v-col cols="12" sm="12" md="12" align="center">
                      <v-row
                      class="avatar-space"
                      justify="space-around"
                      style="height:100%"
                      >
                        <v-avatar class="avatar" height="150px" width="150px">
                          <v-img
                            class="plof-img"
                            src="/profileimg.png"
                            alt="PROFILE"
                          />
                        </v-avatar>
                      </v-row>
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                    <div class="explanation">
                      地方在住のアラウンド30の男子です。アラサーを意識し始めて作ったブログです。働き方に納得し、転職することが当面の目標です。ブログは、基本的に雑記ブログになりますが、PythonやVue.js,Nuxt.jsを勉強して技術ブログっぽくしたり、仕事や投資について書いていければいいと思っています。よろしくお願いします。
                    </div>
                    </v-col>
                  </v-row>
                </v-card>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
  watch: {
    group () {
      this.drawer = false
    },
  }
}
</script>

<style>
#global-head {
  padding-top: 60px;
  position: fixed;
  color: #033560;
  width: 30%;
  text-align: center;
  z-index: 100;
}

#sidebar {
  font-size: 15px;
  padding-top: 120px;
  width: 30%;
  height: 100%;
  position: fixed;
  color: #033560;
  background: #fff;
  text-align: center;
}

#global-nav ul {
  list-style: none;
  margin-left: 0;
}
#global-nav > ul > li {
  position: relative;
}

#global-nav a {
  color: #033560;
  text-decoration: none;
  display: block;
  padding: 25px 0 15px 0;
  transition: background-color .3s linear;
}

/* sub-menu */
#global-nav .sub-menu-nav {
  position: fixed;
  background: #033560;
  color: #fff;
  top: 0;
  padding-top: 90px;
  left: 260px;
  width: 0;
  height: 100%;
  overflow: hidden;
  transition: width .2s ease-out;
}
#global-nav .sub-menu-nav a,
#global-nav .sub-menu:hover .sub-menu-nav {
  width: 230px;
}

/* nav-toggle */
#nav-toggle {
  display: none;
  position: fixed;
  top: 15px;
  right: 15px;
  height: 32px;
}

#overlay {
  display: none;
  position: fixed;
  background: rgba(0,0,0,.6);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}


@media screen and (max-width: 1100px) {
  #main-in {
      padding-left: 0;
  }

  #global-head {
      width: 100%;
      padding: 10px;
      background: rgba(255,255,255,.8);
      display: flex;
  }

  #sidebar {
      position: fixed;
      right: -300px;
      top: 0;
      height: 100%;
      width: 300px;
      color: #333;
      background: #fff;
      transition: .35s ease-in-out;
  }

  /* サブメニューは開けない */
  #global-nav .sub-menu-head:after,
  #global-nav .sub-menu-nav {
      display: none;
  }
  #nav-toggle {
      display: block;
  }
  span {
    color: #033560;
  }


  /* nav open */
  .open {
      overflow: hidden;
  }
  .open #overlay {
      display: block;
  }
  .open #sidebar  {
      transform: translate3d(-300px,0,0);
  }

  /* #nav-toggle close */
  .open #nav-toggle span:nth-child(1) {
      top: 11px;
      transform: rotate(45deg);
  }
  .open #nav-toggle span:nth-child(2) {
      width: 0;
      left: 50%;
  }
  .open #nav-toggle span:nth-child(3) {
      top: 11px;
      transform: rotate(-45deg);
  }

  /* z-index */
  #overlay {
      z-index: 200;
  }
  #sidebar {
      z-index: 300;
  }
  #nav-toggle {
      z-index: 400;
  }
}
</style>