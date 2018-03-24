<template>
  <div >
        <img src="../assets/shot_health.png"><p>look at this</p>
        <img class="medshot" src="../assets/shot_meds.png"><p>look at that!</p>
  </div>
</template>

<script>
export default {
  name: 'apppreview',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>

#apppreview {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: left;

}
img.medshot{
  text-align: right;
}

</style>
