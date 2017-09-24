<template>
  <div class="xiazaiApp">
    <div v-show="!flagheader">
      <span class="closebtn" @click="headerFlag">
        <img id="close_down_bar" src="../../img/closebtn_03.png" alt="">
      </span>
      <div class="appdowimg" >
        <a href="http://wap.epet.com/download.html?appname=epetmall" style="display: block">
          <img src="../../img/211547bb51dd23758f74fb86e9d7aae5.png" alt="">
        </a>
      </div>
    </div>
    <div class="indexheader">
      <div class="headerbox" style="height:86px">
        <div class="maintabs">
          <div class="clearfix">
            <div class="main-top">
              <div class="main-top-content">
                <div class="toggle">
                  <a href="https://wap.epet.com/place.html?pet_type=dog&fw=0">
                    <span class="animalweb">狗狗站</span>
                    <span>|</span>
                    <span class="local">北京</span>
                    <i></i>
                  </a>
                </div>
                <p>
                  <a href="https://wap.epet.com/search.html?pet_type=dog&fw=0">
                    <input type="search" placeholder="搜索商品和品牌" disabled/>
                    <span class="search-icon"></span>
                  </a>
                </p>
                <a href="https://wap.epet.com/wappms/pms.html?fw=0" class="epet-category">
                  <img src="../../img/mydope.png" alt="">
                </a>
              </div>
            </div>
          </div>
          <div class="main-tabs">
            <ul class="tabs-list">
              <li>
                <span class="position-relative">
                  <span class="on">
                    <router-link to="/homepage">首页</router-link>
                  </span>
                  <i v-show="web=='首页'"></i>
                </span>
              </li>
              <li>
                <span class="position-relative">
                  <span>
                    <router-link to="/branch/food">主粮</router-link>
                  </span>
                  <i v-show="web=='主粮'"></i>
                </span>
              </li>
              <li>
                <span class="position-relative">
                  <span>
                    <router-link to="/branch/hospital">医疗保健</router-link>
                  </span>
                  <i v-show="web=='医疗保健'"></i>
                </span>
              </li>
              <li>
                <span class="position-relative">
                  <span>
                    <router-link to="/branch/toys">零食玩具</router-link>
                  </span>
                  <i v-show="web=='零食玩具'"></i>
                </span>
              </li>
              <li>
                <span class="position-relative">
                  <span>
                    <router-link to="/branch/daily">日用外用</router-link>
                  </span>
                  <i v-show="web=='日用外用'"></i>
                </span>
              </li>
              <li>
                <span class="position-relative">
                  <span>
                    <router-link to="/branch/beauty">美容香波</router-link>
                  </span>
                  <i v-show="web=='美容香波'"></i>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  props:['headerFlag','flagheader'],
  data(){
    return {
      web:'首页'
    }
  },
  mounted(){
    const wrapper = document.querySelector('.main-tabs')
    this.scroll =new Bscroll (wrapper,{
      click:true,
      scrollX:true,
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  .xiazaiApp
    position fixed
    width 100%
    z-index 101
    .closebtn
      position absolute
      top 12px
      left 8px
    & img
      width 20.6875px
    .appdowimg
      img
        width 100%
      a
        display block
        height 55px
    .indexheader
      background: white;
      height 86px
      .headerbox
        width 100%
        .maintabs
          .clearfix
            &::after
              content ''
              dispaly block
              height 0
              clear both
              visibility hidden
            .main-top
              box-sizing border-box
              width 100%
              height 51px
              padding 5px 10px
              .main-top-content
                height 25px
                padding 8px 0
                line-height 22.4px
                .toggle
                  float left
                  position relative
                  font-size 14px

                  margin-right 20px
                  a
                    i
                      border-color #bdbdbd transparent transparent
                      position absolute
                      right -11px
                      top 10px
                      border-width 4px
                      border-style: solid solid dotted
                & .local
                  font-size 13px

                p
                  position relative
                  float left
                  width 220px
                  height 25px
                  a
                    display block
                    height 19px
                    color #333
                    input
                      width 100%
                      height 25px
                      border-radius 4px
                      color #bcbcbc
                      background: #e9e9e9;
                      border 0
                      text-indent 10px
                      font-size 13px
                    .search-icon
                      width 11px
                      height 11px
                      position absolute
                      right 5px
                      top 7px
                      background-image url(../../img/search.png)
                      background-size 11px auto
                .epet-category
                  float left
                  width 34px
                  height 25px
                  img
                    margin-left 10px
                    width 25px
                    height 25px
          .main-tabs
            width 100%
            height 35px
            .tabs-list
              /*display flex*/
              float left
              white-space nowrap
              font-size 0
              li
                display inline-block
                /*float left*/
                /*flex-shrink 0*/
                width 74.5px
                height 36px
                text-align center
                line-height 36px
                font-size 14px
                font-family: 'Microsoft Yahei',-apple-system-font,Helvetica Neue,sans-serif;
                .position-relative
                  position relative
                  display inline-block
                  span
                    display inline-block
                    color #666
                  .on
                    color #459d36
                  i
                    position absolute
                    bottom 1px
                    left -10%
                    width 120%
                    height 2px
                    background: #459d36

</style>
