<template>
  <div class="surprise_body">
    <div class="swipe-container">
      <div class="swipe-wrapper">
        <div class="swiper-slide" v-for="item in slideList">
          <div>
            <a :href="item.alink">
              <div>
                <img :src="`/static/img/${item.imgUrl}`" alt="">
              </div>
              <div class="price">
                <span>¥</span>
                <span>{{item.price}}</span>
              </div>
              <p class="save">省￥{{item.save}}</p>
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
    props:['slideList'],
    mounted(){
      const wrapper = document.querySelector('.swipe-container')
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
          width  98.5714px
          margin 10px
          display inline-block
          text-align center
          img
            width 100%
          .price
            font-size 14px
            color red
            margin-top 5px
          .save
            font-size 12px
</style>
