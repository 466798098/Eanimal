<template>
  <div class="footer">
    <div class="footer-top">
      <span >触屏版</span>
      <span>
        <a class="footer-link" href="https://wap.epet.com/app.html">手机客户端</a>
      </span>
      <span>
         <a class="footer-link" href="https://wap.epet.com/AboutEpet.html">关于我们</a>
      </span>
      <span>
         <a class="footer-link" href="https://wap.epet.com/faq.html">联系我们</a>
      </span>
    </div>
    <div class="footer-bottom">
      © wap.epet.com 版权：重庆易宠科技有限公司
    </div>
  </div>
</template>

<script>

  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footer
    margin-top 15px
    border-top 5px solid #f3f4f5
    background: #fff;
    .footer-top
      padding 15px 0 5px
      font-size 14px
      text-align center
      span
        padding-right 10px
        .footer-link
          color #333
      & span:first-of-type
        color red
    .footer-bottom
      text-align center
      margin 0 10px
      padding-bottom 25px
      font-size 12px



</style>
