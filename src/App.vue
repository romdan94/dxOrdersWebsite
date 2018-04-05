<template>
  <div id="app">
    <app-menu-bar></app-menu-bar>
    <h1>DxOrders</h1>
    <router-view></router-view>

  </div>
</template>

<script>
import MenuBar from './components/MenuBar.vue'
import Body from './components/AppBody.vue'
import MeetTheTeam from './components/MeetTheTeam.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'app-menu-bar': MenuBar,
    'app-body': Body,
    'app-meet-the-team': MeetTheTeam
  }
}
</script>

<style>


h1, h2 {
  font-weight: normal;
  text-align: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

body{
  background-color: #DCDCDC;
}



</style>
