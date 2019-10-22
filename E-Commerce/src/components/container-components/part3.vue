<template>
	<div class="part3">
		<div class="goods3" v-for="(items,key,index) in goods3List" :key="index">
			<div class="goods_img">
				<!-- <img src="../../assets/product_1.jpg" alt=""> -->
				<img v-bind:src="items.imgsrc" alt="" height="100%" width="100%">
			</div>
			<div class="goods_info">
				<p>{{items.name}}</p>
				<h2>${{items.price}}</h2>
				<div class="join">Add To cart</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:"part3",
		data(){
			return{
			goods3List:[
			{imgsrc:require("../../assets/product_1.jpg"),price:"11.11",name:"裤子"},
			{imgsrc:require("../../assets/product_2.jpg"),price:"11.11",name:"裤子"},
			{imgsrc:require("../../assets/product_3.jpg"),price:"11.11",name:"裤子"},
			{imgsrc:require("../../assets/product_4.jpg"),price:"11.11",name:"裤子"},
			{imgsrc:require("../../assets/product_5.jpg"),price:"11.11",name:"裤子"},
			{imgsrc:require("../../assets/product_6.jpg"),price:"11.11",name:"裤子"},
			{imgsrc:require("../../assets/product_7.jpg"),price:"11.11",name:"裤子"},
			{imgsrc:require("../../assets/product_8.jpg"),price:"11.11",name:"裤子"},
			]
		}
	},
	}
</script>
<style>
	.part3{
		width: 100%;
		padding: 0 9%;
		height: 1287px;
		background-color: white;
	}
	.part3>.goods3{
		height:548px;
		width: 236px;
		float: left;
		margin: 0px 14px 0px 13px;
		/* background-color: #b0b0b0; */
	}
	.part3>.goods3>.goods_info{
		text-align: center;
		
	}
	.part3>.goods3>.goods_info p,.part3>.goods3>.goods_info h2{
		margin-top: 20px;
	}
	.part3>.goods3>.goods_img{
		width: 100%;
		height: 326.3px;
	}
	.part3>.goods3 .join{
		height: 50px;
		width: 55%;
		background-color: #EDEDED;
		margin: 20px auto;
		line-height: 50px;
		text-transform: uppercase;
		transition: all 0.3s;
	}
	.part3>.goods3 .join:hover{
		background-color: #bbe432;
		color: white;
	}
</style>