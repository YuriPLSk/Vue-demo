<template>
	<div class="sidebar">
		<div v-bind:class="{logo:isLogo}">
			<a href=""><div>a<span>STAR</span></div></a>
		</div>
		<div class="nav">
			<nav>
				<ul>
					<!-- items是循环时的对象   index为索引值 -->
					<li id="nav_list" v-for="(items,index) in navList" :key="index" ><a href="#" >{{items}}<span> ></span></a></li>
				</ul>
			</nav>
		</div>
		<div class="shopcar">
			<i class="fa fa-shopping-cart fa-2x" style="color:white;margin-left:30px;"><span style="font-size:12px;display:inline-block;width:10px;height:10px;color:red;">{{count}}</span></i>
			<span style="margin-left:30px;">BAG</span>
			<span style="margin-left:30px;">${{price}}</span>
		</div>
	</div>
</template>
<script>
	export default{
		name:"sidebar",
		data(){
			return{
				price:20,
				count:2,
				navList:["Home","Women","Man","LookBook","SelfInfomation"],
				isLogo:true,//v-bind属性绑定style/class
			}
		},
		methods:{
			// //导航动画
			// flash1:function  (a) {
			// 	var li=document.getElementById("nav_list")[a];
			// 	var a=li.children[0];
			// 	var span=a.children[0];
			// 	alert(span.innerHTML);
			// }
		}
	}
	
</script>
<style>
/* Logo */

	*{
		font-family: 'Open Sans', sans-serif;
		text-decoration: none;
		list-style: none;
	}
	.sidebar{
		min-width: 263px;
		width: 17%;
		height: 100%;
		position: fixed;
		background-color: #222;
		z-index: 999999999999;
		
	}
	.logo, .nav, .shopcar{
		width: 100%;
		/* border: 1px solid white; */
	}
	.sidebar .logo{
		position: relative;
		min-height: 254px;
		color: white;
		height:35%;
	}
	.sidebar .logo a{
		color: #BBe432;
		border: 2px solid #BBe432;
		display: block;
		height: 70px;
		width: 210px;
		position: absolute;
		margin: auto;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;

	}
	.sidebar .logo>a>div{
		font-size: 48px;
		font-weight: 700;
		color: #BBe432;
		text-align: center;
		line-height: 70px;
	}
	.sidebar .logo>a>div>span{
		color: white;
	}
	.nav{
		min-height: 327px;
		height: 45%;
	}
	.shopcar{
		min-height: 156px;
		height: 20%;
	}

/* 导航nav */
.nav nav>ul>li>a{
	color: white;
	font-size: 15px;
}
.nav>nav>ul{
	/* margin-top: 50px; */
	margin-left: 40px;
}
.nav>nav>ul>li{
	margin-top: 20px;
}
.nav>nav>ul>li>a:hover{
	color:#BBe432;
}
.nav>nav>ul>li>a{
	transition: all 0.6s;
}
.nav nav>ul>li>a>span{
	color: white;
	font-size: 15px;
}
/* ShopCar */
.shopcar{
	color: white;
	line-height: 40px;

}
</style>