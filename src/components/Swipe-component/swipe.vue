<template>
  <mt-swipe :auto="4000" style="width:100%;height: 160px">
    <mt-swipe-item style="width:100%;height: 160px;" v-for="img in imageList">
      <a :href="img.alink" class="swipe-a">
        <img :src="`/static/img/${img.imgUrl}`" alt=""></a>
    </mt-swipe-item>
    <!--<mt-swipe-item>-->
      <!--<a href="http://sale.epet.com/m/mould/activity/ztMjQ2Mw%3D%3D.html?tid=2465&fw=0" class="swipe-a">-->
        <!--<img src="../../img/f14111185e59a9baf30a3f725cc36126.png" alt="" style="width:100%"></a>-->
    <!--</mt-swipe-item>-->
    <!--<mt-swipe-item>-->
      <!--<a href="http://sale.epet.com/m/mould/activity/ztMjQ2Mw%3D%3D.html?tid=2463&fw=0" class="swipe-a">-->
        <!--<img src="../../img/bb07b4aaa3673a761221e2fa841bc85c.png" alt=""></a>-->
    <!--</mt-swipe-item>-->
  </mt-swipe>
</template>

<script>
  export default {
    props:['imageList']
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .swipe-a
    display block
    img
      width 100%
</style>
