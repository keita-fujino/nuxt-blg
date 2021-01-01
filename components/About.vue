<template>
  <section class="profile">
		<div class="profile-image"></div>
		<div class="prof">
			<div id="prof-title" clas="p-title">
			  <p class="about">About me</p>
			</div>
			<v-card
					class="profile-card"
					color="rgb(255, 255, 255, 0)"
					width="100%"
					flat
					>
					<h2 class="prof-title black--text">Profile</h2>
					<v-card-title class="name pd-2 justify-center black--text">
					  Keita.F
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
						<div class="explanation black--text">
							地方在住、今年30歳になる男です。30代を前に何かはじめようと思ってブログを作りました。ブログは、基本的に雑記ブログですが、仕事、投資、本、プログラミング（Python, Vue.js, Nuxt.js）などについて書いていこうと思います。
						</div>
						</v-col>
							<ul class="snsbtniti">
								<li><a href="https://twitter.com/K13938535" class="flowbtn10"><i class="fab fa-twitter"></i></a></li>
								<!--
								<li><a href="インスタのプロフィールURL" class="flowbtn10"><i class="fab fa-instagram"></i></a></li>
								<li><a href="FacebookページのURL" class="flowbtn10"><i class="fab fa-facebook-f"></i></a>
								<li><a href="https://feedly.com/i/subscription/feed/https://自分のサイトドメイン名/feed" class="flowbtn10"><i class="fas fa-rss"></i></a></li>
								<li><a href="https://getpocket.com/edit?url=https://自分のサイトドメイン名/" class="flowbtn10"><i class="fab fa-get-pocket"></i></a></li>
								-->
								<li><a href="https://github.com/keita-fujino" class="flowbtn10"><i class="fab fa-github"></i></a></li>
								<!--
								<li><a href="youtubeのプロフィールURL" class="flowbtn10"><i class="fab fa-youtube"></i></a>
								<li><a href="https://line.me/ti/p/%ライン＠のアカウント" class="flowbtn10"><i class="fab fa-line"></i></a>
								<li><a href="お問い合わせ先のURL" class="flowbtn10"><i class="far fa-envelope"></i></a></li>
								-->
							</ul>
					</v-row>
				</v-card>
		</div>
	</section>
</template>

<style>
/*----------------
 	Hero Section
----------------*/
.profile{
	position: relative;
	justify-content: center;
	min-height: 100vh;
	color: #fff;
  text-align: center;
  z-index: 0;
}

.profile-image{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
  background-size: cover;
  background-position: center;
	z-index: 1;
	opacity: 0.8;
}

.profile-image:after{
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0.75;
}
.p-title {
	font-size: 3rem;
	color: black;
}
.about  {
  font-family: 'Karla','Hiragino Kaku Gothic Pro',sans-serif;
	font-size: 2rem;
  text-align: left;
	color: black;
	font-style: italic;
}

.prof {
  position: relative;
	width: 38%;
  margin: 0 auto;
  padding-top: 250px;
	z-index: 2;
}

.profile h1{
  font-family: 'Karla','Hiragino Kaku Gothic Pro',sans-serif;
	margin-bottom: 15px;
}

.profile h3{
  font-family: 'Karla','Hiragino Kaku Gothic Pro',sans-serif;
	margin-bottom: 40px;
}

.profile a .btn{
	padding: 20px 46px;
}

@media (max-width: 960px){
  
	.profile {
		max-height: 600px;
		width: 100%;
	}

	.profile h1{
		font-size: 48px;
	}

	.profile h3{
		font-size: 24px;
	}

	.profile a.btn{
		padding: 15px 40px;
	}
  .logo {
    z-index: 3;
    width: 90%;
    margin: 0 auto;
    padding-top: 120px;
  }
  .profile-image {
    background-image: url("../static/profilep.jpg");
	}
	.prof {
		width: 90%;
		padding-top: 120px;
	}
	.about {
		font-size: 20px;
	}
}

@media (min-width: 961px){

	.profile-image {
		background-image: url("../static/profile.jpg");
	}
	.about {
		color: #fff;
	}
}

/* ボタン全体 */
.flowbtn10{
display:inline-block;	
font-size:30px;
text-decoration:none;
transition:.5s;
}
/* インスタ・pocket・ラインだけ少し大きく */
.flowbtn10 .fa-instagram,.flowbtn10 .fa-get-pocket,.flowbtn10 .fa-get-pocket,.flowbtn10 .fa-line{
font-size:38px;
}
/* Twitterマウスホバー時 */
.flowbtn10 .fa-twitter:hover{
color:#55acee;
}
/* Instagramマウスホバー時 */
.flowbtn10 .fa-instagram:hover{
color:#c6529a;
}
/* Facebookマウスホバー時 */
.flowbtn10 .fa-facebook-f:hover{
color:#3b5998;
}
/* Feedlyマウスホバー時 */
.flowbtn10 .fa-rss:hover{
color:#6cc655;
}
/* Pocketマウスホバー時 */
.flowbtn10 .fa-get-pocket:hover{
color:#ef3f56;
}
/* Githubマウスホバー時 */
.flowbtn10 .fa-github:hover{
color:#2d2e2e;	
}
/* YouTubeマウスホバー時 */
.flowbtn10 .fa-youtube:hover{
color:#fc0d1c;
}
/* LINEマウスホバー時 */
.flowbtn10 .fa-line:hover{
color:#00c300;
}
/* メールアイコンマウスホバー時 */
.flowbtn10 .fa-envelope:hover{
color:#f3981d;		
}
/* ulタグの内側余白を０にする */
ul.snsbtniti{
padding:0!important;
}
/* アイコン全体の位置 */
.snsbtniti{
display:flex;
flex-flow:row wrap;
justify-content:space-between;	
}
/* アイコン同士の余白 */
.snsbtniti li{
flex:0 0 20%;
text-align:center!important;
margin-right: 15px;
}
</style>
