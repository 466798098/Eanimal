<template>
  <div class="fashion_video">
    <div>
      <ul>
        <li>
          <a href="">
            <div class="video_top">
              <img src="/static/img/container/2506a15cf4e969125891d29f869b8572.jpg" alt="">
              <span class="playbtn"></span>
            </div>
            <div class="video_bottom">
              <div class="textover">
                神奇饮水除口臭
              </div>
              <div>
                <span class="eyeview"></span>
                <span class="watch_count">27466</span>
                <span class="y-line">|</span>
                01:13
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .fashion_video
    & .video_top
      position relative
      img
        width 100%
      .playbtn
        position absolute
        width 20px
        height 20px
        left 50%
        top 50%
        margin-top -10px
        margin-left -10px
        background url("/static/img/container/play.png") no-repeat
        background-size contain
    & .video_bottom
      text-align center
      padding 10px
      font-size 12px
      .textover
        color #333
        text-align center
      .y-line
        margin 0 10px
      .eyeview
        display inline-block
        background: url('/static/img/container/view-black.png') no-repeat;
        background-size contain
        width 10px
        height 9px
        margin-right 3px

</style>
