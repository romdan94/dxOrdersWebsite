<template>
  <div >

      <p style="float: left;">
        <img src="../assets/shot_health.png"> <h3>Manage your prescriptions</h3> look at this
      </p>


    <div class="one">

    </div>
    <p style="float: right;"><img src="../assets/shot_health.png"> <h3>Manage your prescriptions</h3> look at this</p>



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



.one{
  float: right;
  display: inline-block;
}

.rightSide{
  padding: 0 20px 20px 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  float: right;
}


p{

  padding: 0 20px 20px 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;

}

div{
  margin-left: 200px;
  margin-right: 200px;
}
</style>
