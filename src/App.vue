<template>
  <div id="app">
    <app-menu-bar></app-menu-bar>






    <h1>DxOrders</h1>
    <div id="app" class="component">

    </div>
    <router-view></router-view>

  </div>
</template>

<script>
import MenuBar from './components/MenuBar.vue'
import Body from './components/AppBody.vue'
import MeetTheTeam from './components/MeetTheTeam.vue'
import Mailchimp from './components/Mailchimp.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome'
    }
  },
  components: {
    'app-menu-bar': MenuBar,
    'app-body': Body,
    'app-meet-the-team': MeetTheTeam,
    'app-mail-chimp': Mailchimp
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
