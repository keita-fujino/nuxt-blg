<template>
  <section class="hero">
		<div class="background-image"></div>
	</section>
</template>

<style>

/*----------------
 	Hero Section
----------------*/
.hero{
	position: relative;
	justify-content: center;
	min-height: 100vh;
	color: #fff;
  text-align: center;
  z-index: 0;
}
.background-image {
  background-image: url("../static/Fujinote.png");
}

.background-image{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
  background-size: cover;
  background-position: center;
	z-index: 1;
}

.background-image:after{
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0.75;
}
.logo {
  position: relative;
  width: 50%;
  margin: 0 auto;
  padding-top: 100px;
  z-index: 2;
}

.hero h1{
  font-family: 'Karla','Hiragino Kaku Gothic Pro',sans-serif;
	margin-bottom: 15px;
}

.hero h3{
  font-family: 'Karla','Hiragino Kaku Gothic Pro',sans-serif;
	margin-bottom: 40px;
}

.hero a.btn{
	padding: 20px 46px;
}

@media (max-width: 960px){
  
	.hero {
		min-height: 600px;
		width: 100%;
	}

	.hero h1{
		font-size: 48px;
	}

	.hero h3{
		font-size: 24px;
	}

	.hero a.btn{
		padding: 15px 40px;
	}
  .logo {
    z-index: 3;
    width: 80%;
    margin: 0 auto;
    padding-top: 120px;
	}
	.background-image {
    background-image: url("../static/Fujinotep.png");
	}

}

</style>
