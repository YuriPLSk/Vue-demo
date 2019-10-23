<template>
  <div id="app">
    <SideBar/>
    <router-link to="/container" style="margin-left: 400px;">Container</router-link>
    <router-link :to="{name:'another',params:{id:1123}}" style="margin-left: 200px;">Selfinfo</router-link>

    <router-view></router-view> 
    <!-- <Container/> -->
  </div>
</template>
<script>
import SideBar from "./components/sidebar"
import Container from "./components/container"
import Selfinfo from "./components/selfinfo"
  console.log('一点错也没有可真是太棒了！')


export default {
  name: 'App',
  components:{
    SideBar,
    Container,
    Selfinfo
  },

}

</script>
  
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

</style>
