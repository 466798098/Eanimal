<template>
  <div class="judgediv">
    <div data-v-ecaca2b0="" class="judge_rela">
      <div data-v-ecaca2b0="">
        <a data-v-ecaca2b0="" href="" class="judge_link">
          <img data-v-ecaca2b0="" src="/static/img/container/a1225213b3d2bc9067676102e629bf1e.png" alt="">
        </a>
      </div>
      <div data-v-ecaca2b0="" class="more_ratings">
        <a data-v-ecaca2b0="" href="" class="good_ratings_link">好评率99.64%</a>
      </div>
    </div>
    <div class="brands-judge">
      <ul>
        <li v-for="judge in judges">
          <a :href="judge.alink">
            <div class="judge-container">
              <div class="judge-rela">
                <div class="judge-image-wrapper">
                  <img :src="`/static/img/${judge.imgUrl}`" alt="" class="image">
                  <div>{{judge.jionTime}}</div>
                </div>
              </div>
              <div class="judge-info">
                <span class="fl-lt">{{judge.nickName}}</span>
                <span class="fl-rt">{{judge.animalType}}</span>
              </div>
              <div class="judge-comments">
                {{judge.comment}}
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props:['judges']
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .judgediv
    .judge_rela
      position relative
      .more_ratings
        position absolute
        font-size 12px
        top 14px
        right -4px
        padding-right 10px
        transform: scale(0.84)
        background: url('/static/img/container/index_icon_comment_sanjiao.png') no-repeat
        background-size 8px 9px
        background-position-x 100%
        background-position-y 46%
        .good_ratings_link
          color #999
          font-size 12px
          vertical-align middle
          img
            width 75px
            margin 10px 5px 0 0
      .judge_link
        display block
        img
          display block
          height 45px
          margin 0 auto
    .brands-judge
      padding 0 10px 10px 0
      ul
        overflow hidden
        li
          float left
          width 50%
          .judge-container
            padding-bottom 10px
            margin 10px 0 0 10px
            .judge-rela
              position relative
              height 150px
              overflow hidden
              .judge-image-wrapper
                .image
                  width 100%
          & .judge-comments
            height 60px
            overflow hidden
            font-size 13px
            color #999
            padding-left 5px
            padding-right 5px
            margin-top 5px
          & .judge-info
            overflow hidden
            .fl-lt
              float left
              font-size 12px
              color #333
            .fl-rt
              float right
              padding 0 5px
              font-size 12px
              background-color: #ddd;
              border-radius 5px
              color #333


</style>
