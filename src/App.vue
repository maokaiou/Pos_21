<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import Home from './views/home/Home.vue';
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>
<style>
@import './assets/css/reset.css';
@import '/font/iconfont.css'
</style>
