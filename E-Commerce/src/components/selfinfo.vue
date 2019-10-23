<template>
	<div class="selfinfo">
		<p>这是第二个组件</p>
		<p>接收到的参数{{$route.params.id}}</p>
	</div>
</template>
<script>
	export default{
		name:"selfinfo",
	}	
</script>
<style>
	.selfinfo>p{
		margin-left: 400px;
	}
</style>