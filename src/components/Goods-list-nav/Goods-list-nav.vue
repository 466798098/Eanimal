<template>
  <div class="goods_list_nav">
    <ul class="goods_nav_warpper">
      <li v-for="item in goodsNavName">
        <div class="pro-block">
          <router-link :to="`/branch/food/${item.goodstype}`">{{item.name}}</router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'

  export default {
    props:['goodsNavName'],
    mounted(){
      const wrapper = document.querySelector('.goods_list_nav')
      this.scroll =new Bscroll (wrapper,{
        click:true,
        scrollX:true,
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .goods_list_nav
    border-bottom 1px solid #e7e7e7
    overflow hidden
    .goods_nav_warpper
      float left
      white-space nowrap
      li
        display inline-block
        font-size 0px
        text-align center
        .pro-block
          margin 0 7px
          .active
            color #e35356 !important
            border 1px solid #e35356 !important
          a
            display block
            border-radius: 5px;
            border: 1px solid #f5f5f5;
            background: #f5f5f5;
            padding: 1px 0;
            width 79.19px
            color: #333;
            font-size 12px
</style>
