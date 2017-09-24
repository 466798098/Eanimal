<template>
  <div class="surprise_body">
    <div class="swipe-container" ref="index">
      <div class="swipe-wrapper">
        <div class="swiper-slide" v-for="item in slideList">
          <div>
            <a :href="item.alink">
              <div class="pr5pt5">
                <div class="mt10mr10ml10pr10">
                  <img :src="`/static/img/${item.imgUrl}`" alt="">
                  <div class="this-label">折扣</div>
                </div>
                <div class="gtoupro-tit">
                  {{item.description}}
                </div>
                <div class="cprice">￥{{item.price}}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  export default {
    props:['slideList','index'],
    mounted(){
      const wrapper = this.$refs.index || document.querySelector('.swipe-container')
      this.scroll =new Bscroll (wrapper,{
        click:true,
        scrollX:true,
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .surprise_body
    padding-left 5px
    margin-bottom 10px
    .swipe-container
      overflow hidden
      width 100%
      height 100%
      .swipe-wrapper
        float left
        white-space nowrap
        .swiper-slide
          width  108.63px
          margin-right 5px
          border-right 1px solid #e7e7e7
          padding-bottom 10px
          display inline-block
          text-align center
          a
            display block
            .pr5pt5
              padding 5px 5px 0 0
              .mt10mr10ml10pr10
                margin 10px 10px 0 10px
                padding-right 10px
                position relative
                img
                  width 100%
                .this-label
                  position absolute
                  top 0
                  left -7px
                  border-radius 10px 10px 10px 0;
                  padding 0 5px
                  color #fff
                  background-color red
                  font-size 12px
              .cprice
                font-size 14px
                color red
                margin-top 5px
              .gtoupro-tit
                font-size 12px
                line-height 16px
                margin-top 5px
                height 32px
                color: #666
                white-space normal
                overflow hidden
</style>
