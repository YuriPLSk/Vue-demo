<template>
	<div class="container">
		<div class="img">
			<img src="../assets/home_slider_1.jpg" width="100%" height="100%">
		</div>
		<Part1/>
		<Part2/>
		<Part3/>
		<Footer/>
	</div>
</template>
<script>
import Part1 from './container-components/part1'
import Part2 from './container-components/part2'
import Part3 from './container-components/part3'
import Footer from './container-components/footer'
import $ from "jquery"
	export default{
		name:"container",
		components:{
			Part1,
			Part2,
			Part3,
			Footer
		},
		  mounted:function(){
     var top1 = $('.part1').offset().top;
   var top2 = $('.part2').offset().top;
   var top3 = $('.part3').offset().top;
   var top4 = $('.container-footer').offset().top;
 $('.sidebar>.nav>nav>ul>li').first().click(function () {
            $('html,body').animate({scrollTop:0},300);
        })
  $('.sidebar>.nav>nav>ul>li').eq(1).click(function () {
            $('html,body').animate({scrollTop:top1},300);
        })
  $('.sidebar>.nav>nav>ul>li').eq(2).click(function () {
            $('html,body').animate({scrollTop:top2},300);
        })
  $('.sidebar>.nav>nav>ul>li').eq(3).click(function () {
            $('html,body').animate({scrollTop:top3},300);
        })
    $('.sidebar>.nav>nav>ul>li').eq(4).click(function () {
            $('html,body').animate({scrollTop:top4},300);
        })

  }
	}
</script>
<style>
*{
	margin:0px;
}
	.container{
		margin-left:17.3%;
		width: 82.7%;
		background-color: pink;
		/* height: 2000px; */
		overflow: hidden;
	}
	.container>.img{
		height: 720px;
	}
	.container>.img>img{
		position: relative;
		margin-left:-16%;
		width:1657px;
	}

</style>