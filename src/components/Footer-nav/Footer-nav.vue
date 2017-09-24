<template>
  <div class="footer-nav">
    <div class="footer-nav-main footer-nav-all" :class="{'footer-nav-main-on':(footerNavImg.indexOf('/homepage')>=0)}">
      <router-link to="/homepage"></router-link>
    </div>
    <div class="footer-nav-category footer-nav-all" :class="{'footer-nav-category-on':(footerNavImg.indexOf('/category')>=0)}">
      <router-link to="/category"></router-link>
    </div>
    <div class="footer-nav-cart footer-nav-all">
    </div>
    <div class="footer-nav-usercenter footer-nav-all">
      <router-link to="/login"></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    computed:{
      footerNavImg(){
        return this.$route.path
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footer-nav
    position fixed
    left 0
    bottom 0
    display flex
    width 100%
    height 55px
    background: #fff;
    div
      width 25%
      height 100%
      a
        display block
        height 100%
    /*a*/
    /*display block*/
    /*height 100%*/
    .footer-nav-all
      background-repeat no-repeat
      background-size 50%
      background-position center center
    .footer-nav-main-on
      background-image url('/static/img/footerNav/main_tab_1_sel.png')  !important

    .footer-nav-category-on
      background-image url('/static/img/footerNav/main_tab_2_sel.png')  !important
    .footer-nav-main
      background-image  url('/static/img/footerNav/main_tab_1.png')

    .footer-nav-category
      background-image url('/static/img/footerNav/main_tab_2.png')

    .footer-nav-cart
      background-image url('/static/img/footerNav/main_tab_3.png')

    .footer-nav-usercenter
      background-image url('/static/img/footerNav/main_tab_4.png')


</style>
