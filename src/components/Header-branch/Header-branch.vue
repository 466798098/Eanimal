<template>
  <div class="xiazaiApp" v-show="!flagheader">
    <span class="closebtn" @click="headerFlag">
      <img id="close_down_bar" src="../../img/closebtn_03.png" alt="">
    </span>
    <div class="appdowimg">
      <a href="http://wap.epet.com/download.html?appname=epetmall" style="display: block">
        <img src="../../img/211547bb51dd23758f74fb86e9d7aae5.png" alt="">
      </a>
    </div>
  </div>
</template>

<script>


  export default {
    props:['headerFlag','flagheader'],
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .xiazaiApp
    position fixed
    width 100%
    z-index 101
    .closebtn
      position absolute
      top 12px
      left 8px
    & img
      width 20.6875px
    .appdowimg
      img
        width 100%
      a
        display block
        height 55px
</style>
