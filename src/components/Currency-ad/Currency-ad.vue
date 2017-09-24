<template>
  <div class="currency_ad">
    <div class="hot_show">
      <div class="hot_title" v-if="webpage=='homepage'">
        <a href="">
          <img src="/static/img/container/ca98c516add7611e3d0d810d58c087bf.jpg" alt="">
        </a>
      </div>
      <div class="hot_main">
        <div :class="{hotLeft42:webpage=='homepage',hotLeft50:webpage!=='homepage' }">
          <a href="">
            <img :src="`/static/img/${currencyAds[0]}`" alt="">
          </a>
        </div>
        <div :class="{hotRight57:webpage=='homepage',hotRight50:webpage!=='homepage' }">
          <a href="">
            <img :src="`/static/img/${currencyAds[1]}`" alt="">
          </a>
          <a href="">
            <img :src="`/static/img/${currencyAds[2]}`" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    props:['webpage','currencyAds']
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .currency_ad
    margin-top 10px
    .hot_show
      .hot_title
        a
          display block
          img
            width 100%
      .hot_main
        display flex
        .hotLeft42
          width 42.53%
          a
            display block
            img
              width 100%
        .hotLeft50
          width 50%
          a
            display block
            img
              width 100%
        .hotRight57
          width 57.46%
          a
            display block
            img
              width 100%
        .hotRight50
          width 50%
          a
            display block
            img
              width 100%



</style>
