<template>
  <div class="title-block">
    <div class="rela">
      <div>
        <div>
          <img :src="`/static/img/${titleImage.imgUrl}`" alt="" class="title_image">
        </div>
      </div>
      <div class="more_title">
        <a :href="titleImage.alink">
          <img src="/static/img/container/54d9f002646c397b6b19abefbe6c155b.png" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    props:['titleImage']
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .title-block
    margin-top 10px
    border-bottom 1px solid rgb(231, 231, 231)
    .rela
      position: relative
      .more_title
        a
          img
            position absolute
            right 0
            top 0
            width 60px
            margin-left 60px
    & .title_image
        display block
        width 50%
        margin 0 auto
</style>
