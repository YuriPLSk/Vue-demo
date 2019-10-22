<template>
	<div class="part1">
			<div class="goodsList1">
				<img src="../../assets/box_1.jpg" alt="">
				<a href="">SUMMER COLLECTION</a>
			</div>
			<div class="goodsList1">
				<img src="../../assets/box_2.jpg" alt="">
				<a href="">eyewear COLLECTION</a>
			</div>
			<div class="goodsList1">
				<img src="../../assets/box_3.jpg" alt="">
				<a href="">basic pieces	</a>
			</div>
		</div>
</template>
<script>
	export default{
		name:"part1",
		
	}
</script>
<style>
	.part1{
		width: 100%;
		height: 276px;
		background-color: white;
		display: flex;
		padding-top:100px;
		align-items: center;
		justify-content: space-around;
		flex-wrap: wrap;

		/* flex: 3; */
	}
	.part1>.goodsList1{
		position: relative;
		width: 26%;
		height: 170px; 
	}
	.part1>.goodsList1>img{
		height: 100%;
		width: 100%;
	}
	.part1>.goodsList1>a{
		text-transform: uppercase;
		font-size: 14px;
		color: black;
		font-weight: 700;
		display: inline-block;
		width:70%;
		height:50px;
		line-height:50px;
		text-align: center;
		background-color: white;
		position: absolute;
		margin-top: -11.5%;
		margin-left: 15%;
	}
</style>