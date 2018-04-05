<template>
  <div>
    <h2>Our Team Members: </h2>
    <br>
    <ul>
      <li><img src="../assets/seth.png">{{sethPosition}}</li>
      <li style="float: right; margin-right: 100px; position:absolute; right:0px; top:250px;"><img src="../assets/dani.png">{{daniPosition}}</li>
      <li><img src="../assets/mike.png">{{mikePosition}}</li>
      <li style="float: right; margin-right: 100px; position:absolute; right:0px; top:490px;" ><img src="../assets/zach.png">{{zachPosition}}</li>
      <li><img src="../assets/nom.png">{{nomPosition}}</li>
    </ul>



  </div>
</template>

<script>
export default {
  name: 'MeetTheTeam',
  data () {
    return {
      sethPosition: '    Seth Merrit: Chief Executive Officer',
      daniPosition: '    Daniel Ene-Neagu: Chief Information Officer',
      mikePosition: '    Michael Pizzica: Chief Technology Officer',
      zachPosition: '    Zachary Timberlake: Chief Experience Officer',
      nomPosition:  '    Nomthandazo Khanyi: Chief Marketing Officer'
    }
  }
}
</script>

<style scoped>

ul{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 22px;
  
  list-style-type: none;
  float: none;

}
li{
  padding-bottom: 40px;
}
h2{
  text-align: center;

}

img{
    display:inline-block;
    vertical-align:middle;
    height: 200px;
    width: 200px;
    border-radius: 50%;

}


</style>
