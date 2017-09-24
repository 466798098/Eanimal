<template>
  <div class="sell-list">
    <ul>
      <li v-for="item in sellList">
        <div class="sell-description">
          <span class="description-name">{{item.name}}</span>
          <span class="description-discount">{{item.discount}}</span>
        </div>
        <div>
          <a :href="item.alink">
            <img :src="`/static/img/${item.imgUrl}`" alt="">
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props:['sellList']
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .sell-list
    .sell-description
      padding 10px
      .description-name
        font-size 15px
      .description-discount
        font-size 12px
        color #999
        margin-left 5px
    & a
      display block
      img
        width 100%
</style>
