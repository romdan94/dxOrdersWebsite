<template>
  <div >

    <ul>
      <li> <img src="../assets/dx_header_logo.png"> </li>
      <li> <router-link to="/"> Home </router-link> </li>
      <li> <router-link to="/app-preview"> View our App </router-link> </li>
    </ul>

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

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #AEADAD;
}

li {
    float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 14px;
    text-decoration: none;
}

li a:hover {
   color: #D962D5;
}
div{
  border-style: groove;
}



</style>
