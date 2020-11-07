<template>
    <div id="profile" class="profile">
      <v-container>
          <v-card
          class="profile-card"
          width="250px"
          flat
          >
          <v-card-title class="name pd-5 justify-center">
            けいちゃん
          </v-card-title>
          <v-row justify="center">
            <v-col cols="12" sm="12" md="12" align="center">
              <v-row
              justify="space-around"
              style="height:100%"
              >
                <v-avatar class="avatar" width="150px" height="150px">
                  <img
                    src="/profileimg.png"
                    alt="PROFILE"
                  >
                </v-avatar>
              </v-row>
            </v-col>
            <v-col cols="12" sm="12" md="12">
            <div class="explanation">
              地方在住のアラウンド30の男子です。アラサーを意識しはじめ、人生何か変えないと、と思い作ったブログです。プログラミングを勉強して技術ブログっぽくすることと、働き方に納得し、転職することが当面の目標です。ちなみに彼女募集中です。勉強は、Pythonを中心に頑張ろうと思います。このブログはNuxt.jsで作ったけど。
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
.profile-card {
  margin: 0 auto;
}
.name {
  font-size: 22px;
  font-weight: bold;
}
.explanation {
  font-size: 14px;
}
/* 1100px以下の時*/
@media (max-width: 1100px) {
}
/* 1100px以上の時*/
@media (min-width: 1101px) {
}
</style>