<template>
  <div class="cate-box">
    <div class="cate_header">
      <div class="cate_header_lr tar cate_top_left">
        <router-link to="/category/sort">
          <span>分类</span>
        </router-link>
      </div>
      <div class="cate_header_lr tal cate_top_right">
        <router-link to="/category/brand">
          <span>品牌</span>
        </router-link>
      </div>
      <a href=""><img src="" alt=""></a>
    </div>
    <router-view style="padding-top:40px"></router-view>
  </div>
</template>

<script>
  import HeaderApp from './Header/Header.vue'
  import Container from './Container/Container.vue'

  export default {
    components:{
      HeaderApp,
      Container,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cate-box
    .cate_header
      padding: 0 15px;
      border-bottom: 1px solid #cbcbcb;
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      height: 40px;
      z-index: 11;
      background-color #fff
      .cate_header_lr
        width 50%
        height 40px
        line-height 40px
        font-size 13px
        font-weight 700
        float left
        a
          display inline-block
          span
            display inline-block
            height 40px
            padding 0 4px
        .active
          color #ed4044
          border-bottom 2px solid #ed4044
      .cate_top_left
        padding-right 5%
      .cate_top_right
        padding-left 5%


</style>
