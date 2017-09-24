<template>
  <div class="go-dog">
  </div>
</template>

<script>

  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @keyframes nnh
      0%
        background-position 1px
      100%
        background-position -81px

    .go-dog
      background: url(/static/img/container/godog.png) no-repeat;
      width: 41px;
      height: 46px;
      background-size: 80px auto;
      position: fixed;
      bottom: 15%;
      right: -1px;
      z-index: 2;
      animation: nnh 2.5s steps(2) infinite;

</style>
