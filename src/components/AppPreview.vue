<template>
  <div >
    <br>
    <table style="width:100%">
      <tr>
        <th><img src="../assets/shot_health.png"></th>
        <th style="padding-left: 300px; ">{{managePrescriptions}}</th>
    </tr>
    </table>

    <table style="width:100%">
      <tr>
        <th>{{manageMeds}}</th>
        <th style="display: block; padding-left: 300px;"><img src="../assets/shot_meds.png"></th>
      </tr>
    </table>



  </div>
</template>

<script>
export default {
  name: 'apppreview',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      managePrescriptions: 'Managing a bunch of medicine is a pain. when do I take them? Did I forget to take one this morning? Do I need to get a refill? Manage everything right on your phone to make sure youre doing everything you need to',
      manageMeds: 'With our app managing your prescriptions is a breeze! You can see exactly what medicine you have prescribed to you and what date it was prescribed on as well as who prescribed it to you'

    }
  }
}
</script>

<style scoped>





img{
  height: 500px;
  width: 300px;
}



div{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin-left: 100px;
  margin-right: 100px;
}
</style>
