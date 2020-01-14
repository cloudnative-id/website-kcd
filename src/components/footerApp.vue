<template>
  <footer class="footer">
  <div class="content has-text-centered">
    <p class="title is-4">
      Organized By 
    </p> 
    <div class="columns is-mobile is-desktop is-fullhd is-centered is-vcentered">
      <div class="column is-one-third-mobile is-2-fullhd is-2-desktop">
          <img class="image is-128x128" src="../assets/img/cloud-native-indonesia.svg">
      </div>
      <div class="column is-one-third-mobile is-2-fullhd is-2-desktop">
          <img class="image is-128x128" src="../assets/img/jakartacn-logo.png">
      </div>
      <div class="column is-one-third-mobile is-2-fullhd is-2-desktop">
          <img class="image is-128x128" src="../assets/img/bandungcn-logo.png">
      </div>
      <div class="column is-one-third-mobile is-2-fullhd is-2-desktop">
          <img class="image is-128x128" src="../assets/img/yogyacn-logo.png">
      </div>
    </div>
      <p class="title is-4" >Contact Us</p>
      <p class="subtitle is-6">
        <a style="text-decoration:none;" class="is-info" href="https://t.me/girikuncoro">Telegram</a>&nbsp;
        <a  style="text-decoration:none;" class="is-info" href="mailto:email@email.com">Email</a>&nbsp;
      </p>
    <p>
      <strong>&copy;{{year}}</strong>  <a href="https://github.com/cloudnative-id">CloudnativeID</a>.
    </p>
  </div>
</footer>
</template>
<script>
export default {
  name:'footerapp',
  data:function() {
  return {
      year:new Date().getFullYear()
    };
}
}
</script>
