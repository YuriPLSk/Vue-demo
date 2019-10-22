<template>
	<div class="container-footer">
		<footer class="footer-content">
			<div class="footer-section1">
				<div class="logo">
					<a href=""><div>a<span>STAR</span></div></a>
				</div>
				<p>Donec vitae purus nunc. Morbi faucibus erat sit amet congue mattis. Nullam fringilla faucibus urna, id dapibus erat iaculis ut. Integer ac sem.</p>
			</div>
			<div class="footer-section2">
				<h2>Question</h2>
				<ul>
					<li v-for="items in questions" :key="items">{{items}}</li>
				</ul>
			</div>
			<div class="footer-section3">
				<h2>BLOG</h2>
				<section>
					<img src="../../assets/footer_blog_1.jpg" alt="">
					<div>What Shoes To Wear? <p>JUNE 06.02 2018</p></div>
					
				</section>
				<section>
					<img src="../../assets/footer_blog_2.jpg" alt="">
					<div>trends this year <p>JUNE 06.02 2018</p></div>
					
				</section>
			</div>
			<div class="footer-section4">
				<h2>CONTACT</h2>
				<ul>
					<li v-for="a in contactlist" :key="a">{{a}}</li>
				</ul>
			</div>
		</footer>
		<div class="website_info">
			<p>Copyright ©2019 - Colorlib All rights reserved | More Templates-<span> Created By GROUP1</span></p>
		</div>
	</div>
</template>
<script>
	export default{
		name:"container-footer",
		data(){
			return{
				questions:["About us","Track Orders","Returns","Jobs","Shipping","Blog","Partners","Bloggers","Support","Terms of Use","Press"],
				contactlist:["Your Company Ltd","1481 Creekside Lane Avila Beach, CA 93424, P.O. BOX 68","+53 345 7953 32453","office@youremail.com"]
			}
		}
	}
</script>
<style>
	.container-footer{
		width: 100%;
		height: 467px;
		background-color: white;
		padding: 0 0 15% 0;
	}
	.container-footer>.footer-content{
		width: 100%;
		height: 85%;
		padding: 5% 8%;
		background-color: #F8F8F8;
	}
	.logo{
		margin: 0 auto;
		color: white;
		width: 210px;
		height: 70px;
	}
	.logo a{
		color: #BBe432;
		border: 2px solid #BBe432;
		display: block;
		height: 70px;
		width: 210px;
	}
	.logo>a>div{
		font-size: 48px;
		font-weight: 700;
		color: #BBe432;
		text-align: center;
		line-height: 70px;
	}
	.logo>a>div>span{
		color: black;
	}
	.footer-section1,
	.footer-section2,
	.footer-section3,
	.footer-section4{
		float: left;
		margin-left: 20px;
		margin-right: 20px;
		width: 20%;
		height: 316px;
	}
	.footer-section1 p{
		font-size: 14px;
		color: #8F8F8F;
		width: 100%;
		margin-top: 60px;
	}
	.footer-section2>h2,
	.footer-section3>h2,
	.footer-section4>h2
	{
		text-align: left;
		margin-bottom: 80px;
	}
	.footer-section3>h2{
		margin-bottom: 90px;
	}
	.footer-section2 ul li{
		float: left;
		display: block;
		width:120px;
		margin-top: 10px;
		color: #8f8f8f;
		font-size: 14px;
	}
	.footer-section3 img{
	
	}
	.footer-section3 div{
		width: 50%;
		display: inline-block;
		vertical-align: top;
		margin-left: 30px;
		font-size: 14px;
		font-weight: 700;
		text-transform: uppercase;
		margin-bottom: 50px;
	}
	.footer-section3 div>p{
		font-weight: normal;
		color: #8f8f8f;
		font-size: 12px;
		margin-top: 13px;
	}
	.footer-section4 ul li{
		margin-top: 30px;
		list-style-type:square;
		color: #8f8f8f; 
	}
	.container-footer>.website_info{
		width: 100%;
		height: 132px;
		background-color: #333;
		color: #b0b0b0;
		text-align: center;
		line-height:132px; 
		font-size: 14px;
	}
	.container-footer>.website_info>p>span{
		color: red;
	}

</style>