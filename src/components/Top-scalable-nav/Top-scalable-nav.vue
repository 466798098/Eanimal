<template>
  <div class="Top_scalable_nav">
    <div class="head_top">
      <div class="top_nav_rela">
        <a href="" class="go_back"></a>
        <span class="topbar-title">狗主粮</span>
        <div class="rt-block" @click="showTopNav"></div>
      </div>
    </div>
    <div class="head_bottom" v-show="topNavShow">
      <router-link to="/homepage">
        <span class="icon1"></span>
        <p>首页</p>
      </router-link>
      <router-link to="/category">
        <span class="icon2"></span>
        <p>商品分类</p>
      </router-link>
      <a href="">
        <span class="icon3"></span>
        <p>购物车</p>
      </a>
      <a href="">
        <span class="icon4"></span>
        <p>我的e宠</p>
      </a>
    </div>
  </div>
</template>

<script>

  export default {
    data (){
      return{
        topNavShow:false
      }
    },
    methods:{
      showTopNav(){
        this.topNavShow=!this.topNavShow
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .Top_scalable_nav
    .head_top
      padding 0 14px
      background: #fff;
      position relative
      .top_nav_rela
        height 50px
        line-height 50px
        padding 0 14px
        border-bottom 1px solid #f3f3f3
        .go_back
          position absolute
          display block
          bg('mainfood/personal-bico1.png')
          width 22px
          height 20px
          margin-top 17px
          left 14px
          background-size contain
        .topbar-title
          display block
          margin 0 auto
          height 100%
          width 90%
          text-align center
          font-size 18px
        .rt-block
          position absolute
          top 15px
          right 14px
          width 20px
          height 20px
          bg('/mainfood/imgtk-new.png')
          background-size contain
    .head_bottom
      width: 100%;
      background: #fff;
      border-bottom: 1px solid #d7d7d7;
      overflow: hidden;
      padding: 10px 0;
      a
        display inline-block
        float left
        width 25%
        span
          display: block;
          height: 30px;
          &.icon1
            bg('mainfood/head_icon1.png')
            background-size contain
            background-position center
          &.icon2
            bg('mainfood/head_icon2.png')
            background-size contain
            background-position center
          &.icon3
            bg('mainfood/head_icon4.png')
            background-size contain
            background-position center
          &.icon4
            bg('mainfood/head_icon5.png')
            background-size contain
            background-position center
        p
          color: #666;
          font-size: 14px;
          text-align: center;



</style>
