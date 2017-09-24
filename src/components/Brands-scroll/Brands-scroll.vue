<template>
  <div class="ta-brands">
    <div class="brands-name">
      <img src="/static/img/brands/c31f5c121481db47aaf92f04d6be2d6e.png" alt="">
    </div>
    <div class="brands-scroll">
      <div class="brands-content">
        <div class="brand-wrapper" v-for="brand in brandsList">
          <a :href="brand.alink">
            <div>
              <img :src="`/static/img/${brand.imgUrl}`" alt="">
            </div>
            <div class="brand-total">已捐助¥{{brand.brandTotal}}</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'

  export default {
    props:['brandsList'],
    mounted(){
      const brandsScroll =document.querySelector('.brands-scroll')
      this.scroll=new Bscroll(brandsScroll,{
        click:true,
        scrollX:true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .ta-brands
    overflow hidden
    padding-left 10px
    .brands-name
      float left
      padding-top 10px
      width 60px
      img
        margin-top 10px
        width 90%
    .brands-scroll
      overflow hidden
      margin-left 70px
      padding 5px 0 0 5px
      border-left 1px solid #e7e7e7
      .brands-content
        float left
        white-space nowrap
        .brand-wrapper
          display inline-block
          width 109.6px
          margin-right 10px
          border-right 1px solid #e7e7e7
          a
            display block
            color #333
            margin-right 10px
          & img
            height 40px
          & .brand-total
            padding 3px 0
            border-top 1px solid #e7e7e7
            margin-top 5px
            font-size 12px
            white-space nowrap
            overflow hidden
            text-overflow ellipsis

</style>
