<template>
  <div class="login">
    <header>
      <div class="login_bg">
        <div class="login_head_top"></div>
        <div class="login_head_body">
          <img src="/static/img/login/logo.png" alt="">
        </div>
        <div class="login_head_bottom"></div>
      </div>
    </header>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .login
    line-height 20px
    color #333
    header
      .login_bg
        background: url(/static/img/login/2ac7b0a4f0ab1e4a63819e0668d1cb39.png) no-repeat;
        background-size: 100% 100%;
        .login_head_top
          height 50px
          line-height: 50px
          position relative
          padding 0 1em
        .login_head_body
          padding: 1em 0 2em 0;
          img
            display: block;
            margin: auto;
            width: 20%;
</style>
