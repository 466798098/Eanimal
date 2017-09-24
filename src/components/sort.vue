<template>
  <div class="sort">
    <div class="sort_nav" ref="sortUl">
      <ul >
        <li v-for="sort in sortList" @click="requestSort(sort)" :class="{on:nowsort==sort}">{{sort}}</li>
      </ul>
    </div>
    <div class="right_sort_box">
      {{nowsort}}
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  export default {
    data(){
      return {
        sortList: [
          '为您推荐',
          '狗狗主粮',
          '狗狗零食',
          '狗狗日用',
          '狗狗保健',
          '狗狗医疗',
          '狗狗服饰',
          '狗狗牵引',
          '狗狗美容',
          '狗狗香波',
          '狗狗书籍',
          '狗狗周边',
          '狗狗定制'
        ],
        nowsort:'为您推荐'
      }},
    methods:{
        requestSort (sort){
          this.nowsort=sort
          //每次点击不同的sort请求不同的带sort的ajax请求,如果nowsort和右边不同步可以用watch检测nowsort发请求



        }
      },
    mounted(){
      this.$nextTick(()=>{
        const wrapper = this.$refs.sortUl
        this.scroll =new Bscroll (wrapper,{
            click:true,
            scrollY:true

          })
      })

    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .sort
    position relative
    .sort_nav
      position fixed
      width 70px
      left 0
      top 40px
      bottom 55px
      ul
        li
          padding: 15px 0;
          border-bottom: 1px solid #f3f4f5;
          width: 70px;
          height: 50px;
          font-size: 13px;
          background-color #fff
          text-align center
        .on
          background #f3f4f5
          color #ed4044
    .right_sort_box
      padding-left 70px
</style>
