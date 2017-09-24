<template>
  <div class="Add-goods-list">
    <div>
      <div>
        <a href="">
          <img :src="`/static/img/${slideListItem.titleImgUrl}`" alt="">
        </a>
      </div>
      <div>
        <SwipeGoods :slideList="slideListItem.slideList" :index="index"></SwipeGoods>
      </div>
    </div>

  </div>
</template>

<script>
  import SwipeGoods from '../Swipe-component/Swipe-Goods.vue'

  export default {
    props:[
      'slideListItem',
      'index'
    ],
    components:{
      SwipeGoods
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .Add-goods-list
    a
      display block
      img
        width 100%
</style>
