<template>
    <div id="profile" class="profile">
      <v-container>
          <v-card
          class="profile-card"
          width="280px"
          outlined
          flat
          >
          <div class="plof">
            <p>Profile</p>
          </div>
          <v-card-title class="name pd-5 justify-center">
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
      </v-container>
    </div>
</template>

<script>
export default {}
</script>

<style>
.profile {
  width: 100%;
}
.plof {
  text-align: center;
  font-size: 16px;
  margin-top: 20px;
}
.profile-card {
  margin: 0 auto;
}
.name {
  font-size: 22px;
  font-weight: bold;
}
.explanation {
  font-size: 14px;
  margin: 18px;
}
.avatar-space {
  width: 270px;
}

/* 1100px以下の時*/
@media (max-width: 1100px) {
}
/* 1100px以上の時*/
@media (min-width: 1101px) {
}
</style>