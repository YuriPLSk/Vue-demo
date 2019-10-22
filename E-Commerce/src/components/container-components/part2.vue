<template>
	<div class="part2">
		<div class="part2_nav">
			<nav>
				<ul>
					<li v-for="items in part1_navlist" :key="items"> <a href="">{{items}}</a><span>/</span></li>
				</ul> 
			</nav>
		</div>
	</div>
</template>
<script>
	export default{
		name:"part2",
		data(){
			return{
				part1_navlist:["NEW ARRIVALS","RECOMMENDED","BEST SELLERS"]
			}
		}
	}
</script>
<style>
a{
	color: black;
	text-decoration: none;
}
	.part2{
		width: 100%;
	
	}
	.part2>.part2_nav>nav{
		width: 100%;
		background-color: white;
		text-transform: uppercase;
		line-height: 100px;
	}
	.part2>.part2_nav nav ul{
		display: flex;
		width: 100%;
		height: 200px;
		justify-content: center;
		align-items: center;
	}
	.part2>.part2_nav nav ul li span:nth-child(3){
		display: none;	
	}
	.part2>.part2_nav nav ul li>a{
		transition: all 0.3s;
	}
	.part2>.part2_nav nav ul li>a:hover{
		color: #BBE432;
	}
</style>