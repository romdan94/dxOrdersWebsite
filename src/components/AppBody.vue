<template>
  <div >
    <img src="../assets/jumbotron.jpg">
    <h2>About us</h2>
    <p>DxOrders is a mobile application dedicated to trying to make healthcare management easier and more convenient for the average user. Managing medical conditions and medications is a hassle, so we hope to make this
      exhausting process simpler by introducing features which include: managing your prescriptions, doctors, and of course your health. With the click of a button you can have access to your prescriptions, medical
      conditions amd care providers in a simple and easy to use interface.</p>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'menubar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>

img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 59%;
    border:1px solid;

}
p {
  margin-right: 420px;
  margin-left: 420px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}


</style>
