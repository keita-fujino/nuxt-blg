<template>
  <v-container fluid class="aboutpage pa-0 ma-0">
    <v-img
    class="bg-img"
    style="height: 100%;"
    src = "https://crownscaffold.com.au/wp-content/uploads/2018/08/beach-dawn-dusk-1144176.jpg"
    >
      <v-container class="profile pa-6">
        <section id="blog-title" class="about-title">
          <h2><span>A</span>bout</h2>
        </section>
        <div justify="center">
          <h1 style="" class="gray--text text--center my-4">Keita</h1>
          <hr class="title-under-name">
          <p class="white--text text--center my-4">Wonder,Wanderというブログを開設しました。よろしくお願いします。</p>
          <p class="white--text text--center my-4">日々思うこと、学んだことなど少しずつ書いていく、雑記ブログです。</p>
          <!--
          <p>「Wonder」には、「知りたいと思う」気持ちを込めました。</p>
          <p>今の自分にはないもの、知らないこと、経験したことのないものに興味をもっていけるように。</p>
          <p>そしてこのブログで発信したいと思い、選びました。</p>
          <p>また、「Wander」には、「彷徨う」という意味があります。</p>
          <p>今の自分の状態に近いことと、ここで何か行動を起こさないと何も変われないという気持ちから、決意も込めて決めました。</p>
          -->
          <p style="" class="white--text">Live in Iwate</p>
          <h3 style="" class="white--text text--center my-4">Job</h3>
          <hr class="title-under">
          <p style="" class="white--text">Civil servant in Iwate (2014~)</p>
          <h3 style="" class="white--text text--center my-4">Education</h3>
          <hr class="title-under">
          <p style="" class="white--text">Graduate from Senmaya high School (2010)</p>
          <p style="" class="white--text">Graduate from Iwate University (2014)</p>
          <h3 style="" class="white--text text--center my-4">Contact</h3>
          <hr class="title-under">
          <p style="" class="white--text">Email: wonder.wander@gmail.com</p>
          <!--2020/9/6現在、Gmailアドレスはまだありません。ご了承ください。-->
          <p style="" class="white--text">or</p>
          <p style="" class="white--text">↓ From icons ↓</p>
        </div>
        <div class="icons">
          <ul class="footer-menu">
            <li>
              <v-btn
                  v-for="icon in icons"
                  :key="icon.icon"
                  class="mx-4"
                  dark
                  icon
                >
                <a class="link" :href="icon.href">
                  <v-icon class="mark white--text" size="24px" color="aquamarine">{{ icon.icon }}</v-icon>
                </a>
              </v-btn>
            </li>
          </ul>
        </div>
      </v-container>
    </v-img>
  </v-container>
</template>

<script>
export default {
  layout: 'aboutdefault',
  data: () => ({
    icons: [
      { icon: 'mdi-facebook', href: '' },
      { icon: 'mdi-twitter', href: '' },
      { icon: 'mdi-github', href: 'https://github.com/keita-fujino' },
      { icon: 'mdi-instagram', href: '' }
    ]
  }),
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
.aboutpage {
  font-family: 'Oswald', sans-serif;
}
.items {
  margin-left: 12px;
  background-color: rgba(255,255,255,0);
}
a {
  text-decoration: none;
}
.logo {
  text-decoration: none;
}
.profile {
  text-align: center;
  margin-top: 128px;
}
.title-under{
  border: #69F0AE solid 1px;
  width: 35px;
  margin: 0 auto;
  margin-bottom: 5px;
}
.title-under-name {
  border: #69F0AE solid 1px;
  width: 300px;
  margin: 0 auto;
  margin-bottom: 5px;
}
.about-title > h2 {
  position: relative;
  padding: 4rem 2rem 0rem 95px;
  font-size: 3rem;
  text-align: center;
  display: inline-block;
}
h2 span {
  font-family: 'Oswald', sans-serif;
  font-size: 9rem;
  line-height: 1;
  position: absolute;
  bottom: 0.2rem;
  left: 0;
  padding-left: 15px;
  text-align: center;
}
/* 1100px以下の時*/
@media (max-width: 1100px) {
  .bg-img {
    /*height: 200px;*/
    height: 100%;
    margin: 0 auto;
  }
  .post-main {
    margin: 0 auto;
  }
}
/* 1100px以上の時*/
@media (min-width: 1101px) {
  .bg-img {
    height: 100%;
    /*height: 400px;*/
    margin: 0 auto;
    height: 100%;
  }
}
</style>