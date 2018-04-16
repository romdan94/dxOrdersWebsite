<template>
  <div >
    <img src="../assets/jumbotron.jpg">
    <h2>About us</h2>
    <link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css">



    <p>DxOrders is a mobile application dedicated to trying to make healthcare management easier and more convenient for the average user. Managing medical conditions and medications is a hassle, so we hope to make this
      exhausting process simpler by introducing features which include: managing your prescriptions, doctors, and of course your health. With the click of a button you can have access to your prescriptions, medical
      conditions amd care providers in a simple and easy to use interface.</p>

      <div id="mc_embed_signup">
        <form action="https://dxorders.us18.list-manage.com/subscribe/post?u=5fe4440971aa2f23922f5a18d&amp;id=85d96f7bad" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <div id="mc_embed_signup_scroll">
        	<label for="mce-EMAIL">Sign up for our mailing list</label>
        	<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_5fe4440971aa2f23922f5a18d_85d96f7bad" tabindex="-1" value=""></div>
            <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
            </div>
        </form>
      </div>
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
  margin-right: 340px;
  margin-left: 355px;
  margin-bottom: 100px;

  color: #2c3e50;
}
h3{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

form{
  text-align: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin: auto;
  width: 50%;
  border: 3px solid black;
  padding: 10px;
}


</style>
